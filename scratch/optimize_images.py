import os
from PIL import Image

def optimize_images():
    folder = "public/images"
    total_orig = 0
    total_new = 0
    
    print("Starting image optimization in public/images...")
    for filename in os.listdir(folder):
        filepath = os.path.join(folder, filename)
        if not os.path.isfile(filepath):
            continue
        
        ext = os.path.splitext(filename)[1].lower()
        if ext in ['.jpg', '.jpeg', '.png']:
            orig_size = os.path.getsize(filepath)
            total_orig += orig_size
            
            try:
                img = Image.open(filepath)
                
                # If image is very high resolution (larger than 1200px width), downscale it for web
                max_width = 1200
                if img.width > max_width:
                    w_percent = (max_width / float(img.width))
                    h_size = int((float(img.height) * float(w_percent)))
                    img = img.resize((max_width, h_size), Image.Resampling.LANCZOS)
                
                if ext in ['.jpg', '.jpeg']:
                    # Compress JPEG with quality 75 and progressive enabled
                    img.convert('RGB').save(filepath, 'JPEG', quality=75, optimize=True, progressive=True)
                elif ext == '.png':
                    # Convert PNG to adaptive palette mode (colors=256) to shrink size by 70% while keeping PNG extension
                    img_p = img.convert('P', palette=Image.ADAPTIVE, colors=256)
                    img_p.save(filepath, 'PNG', optimize=True)
                
                new_size = os.path.getsize(filepath)
                total_new += new_size
                print(f"✓ Optimized {filename}: {orig_size/1024:.1f}KB -> {new_size/1024:.1f}KB ({((orig_size - new_size)/orig_size)*100:.1f}% saved)")
            except Exception as e:
                print(f"✗ Error optimizing {filename}: {e}")
                total_new += orig_size
                
    saved = total_orig - total_new
    print("\n--- Image Optimization Summary ---")
    print(f"Original size: {total_orig/(1024*1024):.2f} MB")
    print(f"Optimized size: {total_new/(1024*1024):.2f} MB")
    print(f"Total space saved: {saved/(1024*1024):.2f} MB ({((total_orig - total_new)/total_orig)*100:.1f}% reduction)")

if __name__ == "__main__":
    optimize_images()
