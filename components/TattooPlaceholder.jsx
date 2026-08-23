import React from "react";

export default function TattooPlaceholder({ type = "skull", className = "", width = "100%", height = "100%" }) {
  // Renders detailed gothic vector lineart depending on the type
  const renderSVG = () => {
    switch (type) {
      case "dagger":
        return (
          <svg className="w-full h-full text-gold-primary" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
            {/* Dagger Handle & Pommel */}
            <circle cx="50" cy="15" r="4" className="text-gold-accent" fill="currentColor" />
            <rect x="47" y="19" width="6" height="15" rx="2" fill="none" />
            <line x1="47" x2="53" y1="24" y2="24" strokeWidth="1.5" />
            <line x1="47" x2="53" y1="29" y2="29" strokeWidth="1.5" />
            {/* Guard */}
            <path d="M30 34 C 40 37, 60 37, 70 34" strokeWidth="1.5" />
            <circle cx="30" cy="34" r="2" fill="currentColor" />
            <circle cx="70" cy="34" r="2" fill="currentColor" />
            {/* Blade */}
            <path d="M44 36 L44 75 L50 90 L56 75 L56 36 Z" fill="currentColor" fillOpacity="0.05" strokeWidth="1.5" />
            <line x1="50" y1="36" x2="50" y2="88" strokeDasharray="2,2" />
            {/* Blood drops / sparkles */}
            <circle cx="35" cy="55" r="1.5" className="text-crimson-accent animate-pulse" fill="currentColor" />
            <circle cx="65" cy="62" r="1" className="text-crimson-accent animate-pulse" fill="currentColor" />
            <path d="M49 92 L50 90 L51 92 Z" className="text-crimson-accent" fill="currentColor" />
          </svg>
        );

      case "rose":
        return (
          <svg className="w-full h-full text-crimson-primary" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
            {/* Rose Petals (Abstract Gothic representation) */}
            <circle cx="50" cy="45" r="18" fill="currentColor" fillOpacity="0.05" strokeWidth="1.5" />
            <path d="M40 38 C 45 30, 55 30, 60 38 C 68 45, 55 60, 50 63 C 45 60, 32 45, 40 38 Z" strokeWidth="1.5" />
            <path d="M45 42 C 48 36, 52 36, 55 42" strokeWidth="1.5" />
            <path d="M36 48 C 32 52, 42 62, 50 63" strokeWidth="1.5" />
            <path d="M64 48 C 68 52, 58 62, 50 63" strokeWidth="1.5" />
            {/* Stem & Leaves */}
            <path d="M50 63 Q 48 78, 52 90" strokeWidth="1.2" stroke="currentColor" />
            <path d="M49 72 Q 40 70, 44 65 Q 48 68, 49 72 Z" fill="none" strokeWidth="1" />
            <path d="M51 78 Q 60 80, 56 85 Q 52 82, 51 78 Z" fill="none" strokeWidth="1" />
            {/* Thorns */}
            <path d="M49 75 L46 76 L49 77 Z" fill="currentColor" />
            <path d="M51 81 L54 82 L51 83 Z" fill="currentColor" />
          </svg>
        );

      case "mandala": // Japanese / Geometric
        return (
          <svg className="w-full h-full text-gold-primary" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
            <circle cx="50" cy="50" r="45" strokeDasharray="3,3" />
            <circle cx="50" cy="50" r="35" strokeWidth="1.2" />
            <circle cx="50" cy="50" r="20" />
            <circle cx="50" cy="50" r="5" fill="currentColor" />
            {/* Ray lines */}
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = (i * 30 * Math.PI) / 180;
              const x1 = (50 + Math.cos(angle) * 5).toFixed(4);
              const y1 = (50 + Math.sin(angle) * 5).toFixed(4);
              const x2 = (50 + Math.cos(angle) * 45).toFixed(4);
              const y2 = (50 + Math.sin(angle) * 45).toFixed(4);
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
            })}
            {/* Overlay nodes */}
            {Array.from({ length: 8 }).map((_, i) => {
              const angle = (i * 45 * Math.PI) / 180;
              const x = (50 + Math.cos(angle) * 35).toFixed(4);
              const y = (50 + Math.sin(angle) * 35).toFixed(4);
              return <circle key={i} cx={x} cy={y} r="2" className="text-crimson-accent" fill="currentColor" />;
            })}
          </svg>
        );

      case "waves": // Traditional Japanese wind/waves
        return (
          <svg className="w-full h-full text-gold-primary" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M10 30 Q 30 10, 50 30 T 90 30" strokeDasharray="1,2" />
            <path d="M10 40 Q 30 20, 50 40 T 90 40" />
            <path d="M10 50 Q 30 30, 50 50 T 90 50" strokeWidth="1.5" />
            <path d="M15 65 C 30 50, 40 80, 55 65 C 70 50, 80 80, 95 65" />
            <path d="M5 80 Q 25 60, 45 80 T 85 80" strokeDasharray="2,2" />
            {/* Sun/Moon Circle */}
            <circle cx="75" cy="25" r="10" className="text-crimson-primary" fill="currentColor" fillOpacity="0.1" strokeWidth="1.5" />
          </svg>
        );

      case "ambience": // Studio outline / abstract space
        return (
          <svg className="w-full h-full text-gold-primary" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
            {/* Geometric layout of a gothic mirror frame or shop window */}
            <rect x="15" y="10" width="70" height="80" rx="4" />
            <path d="M15 30 L85 30" />
            <path d="M50 10 L50 90" strokeDasharray="4,4" />
            <path d="M15 10 C 30 30, 70 30, 85 10" strokeWidth="1.2" />
            {/* Candle/Inkwell outline */}
            <path d="M45 70 H55 V82 H45 Z" fill="currentColor" fillOpacity="0.05" />
            <line x1="50" y1="70" x2="50" y2="60" className="text-crimson-accent animate-pulse" strokeWidth="1.5" />
            <circle cx="50" cy="57" r="1.5" className="text-gold-accent animate-ping" fill="currentColor" />
          </svg>
        );

      case "skull":
      default:
        return (
          <svg className="w-full h-full text-gold-primary" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
            {/* Skull Dome */}
            <path d="M30 45 C 30 20, 70 20, 70 45 C 70 55, 65 60, 62 65 L 62 75 C 62 78, 58 80, 50 80 C 42 80, 38 78, 38 75 L 38 65 C 35 60, 30 55, 30 45 Z" fill="currentColor" fillOpacity="0.05" strokeWidth="1.5" />
            {/* Eye Sockets */}
            <path d="M38 48 C 38 43, 46 43, 46 48 C 46 53, 38 53, 38 48 Z" fill="currentColor" className="text-charcoal-medium" />
            <path d="M54 48 C 54 43, 62 43, 62 48 C 62 53, 54 53, 54 48 Z" fill="currentColor" className="text-charcoal-medium" />
            {/* Nose cavity */}
            <path d="M48 58 L50 54 L52 58 Z" fill="currentColor" />
            {/* Teeth lines */}
            <line x1="43" y1="70" x2="57" y2="70" />
            <line x1="45" y1="67" x2="45" y2="73" />
            <line x1="49" y1="67" x2="49" y2="73" />
            <line x1="51" y1="67" x2="51" y2="73" />
            <line x1="55" y1="67" x2="55" y2="73" />
            {/* Cheekbone details */}
            <path d="M32 55 Q 38 58, 38 62" />
            <path d="M68 55 Q 62 58, 62 62" />
            {/* Accent halo circle */}
            <circle cx="50" cy="48" r="38" strokeDasharray="4,4" className="text-gold-dark" />
          </svg>
        );
    }
  };

  return (
    <div className={`relative flex items-center justify-center bg-charcoal-medium border border-charcoal-light rounded-xl overflow-hidden group/canvas ${className}`} style={{ width, height }}>
      {/* Background canvas grid texture */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      {/* Inner subtle vintage vignette gradient */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/30 to-black/80 pointer-events-none"></div>

      {/* SVG Container */}
      <div className="w-1/2 h-1/2 max-w-[150px] max-h-[150px] relative z-10 transition-transform duration-700 group-hover/canvas:scale-110">
        {renderSVG()}
      </div>

      {/* Ornate corner brackets (Gothic Style) */}
      <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-gold-dark/40 group-hover/canvas:border-gold-accent transition-colors duration-300"></div>
      <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-gold-dark/40 group-hover/canvas:border-gold-accent transition-colors duration-300"></div>
      <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-gold-dark/40 group-hover/canvas:border-gold-accent transition-colors duration-300"></div>
      <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-gold-dark/40 group-hover/canvas:border-gold-accent transition-colors duration-300"></div>
    </div>
  );
}
