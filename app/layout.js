import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Skull & Sword Tattoos | Premium Custom Studio Kottayam, Kerala",
  description: "Experience premium, custom tattoo artistry in Changanassery, Kottayam, Kerala. Specializing in custom tattoo designs, realism, fine line work, and sterile body piercing.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-charcoal-dark text-foreground font-sans selection:bg-gold-primary selection:text-charcoal-dark">
        <div className="film-grain" />
        <CustomCursor />
        <Preloader />
        {children}
      </body>
    </html>
  );
}
