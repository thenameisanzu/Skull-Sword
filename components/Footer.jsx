import React from "react";
import Link from "next/link";
import { MessageSquare, Phone, MapPin, Mail, ShieldAlert } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal-medium border-t border-charcoal-light relative z-10 pt-16 pb-8">
      {/* Decorative dark background overlay pattern */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#c5a880_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Brand & Mission statement */}
        <div className="flex flex-col gap-4">
          <span className="font-brand text-xl font-black tracking-widest text-gold-primary">
            SKULL & SWORD
          </span>
          <p className="text-sm text-foreground/70 leading-relaxed max-w-xs">
            A legendary sanctuary of custom tattoo artistry in Kottayam. Blending bold illustrative traditions with modern execution in a high-end, sterile environment.
          </p>
          <div className="flex gap-4 mt-2">
            <a
              href="https://www.instagram.com/skull_and_sword_tattoos/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-gold-primary/30 flex items-center justify-center text-gold-primary hover:text-charcoal-dark hover:bg-gold-primary hover:border-gold-primary transition-all duration-300"
              aria-label="Instagram Page"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a
              href="https://wa.me/918921865894"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-gold-primary/30 flex items-center justify-center text-gold-primary hover:text-charcoal-dark hover:bg-gold-primary hover:border-gold-primary transition-all duration-300"
              aria-label="WhatsApp Contact"
            >
              <MessageSquare className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Studio Info / Contacts */}
        <div className="flex flex-col gap-4">
          <h4 className="font-serif text-sm uppercase tracking-widest text-gold-accent font-semibold">
            The Studio
          </h4>
          <ul className="flex flex-col gap-3 text-sm text-foreground/80">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 text-gold-primary mt-0.5 shrink-0" />
              <span>Braight Building, PP Jose Road,<br />Changanassery, Kottayam, Kerala - 686101<br /><span className="text-[10px] text-foreground/50 italic">(Near Assumption College)</span></span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-gold-primary shrink-0" />
              <span>+91 89218 65894</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-gold-primary shrink-0" />
              <span>appointments@skullandsword.com</span>
            </li>
          </ul>
        </div>

        {/* Studio Hours */}
        <div className="flex flex-col gap-4">
          <h4 className="font-serif text-sm uppercase tracking-widest text-gold-accent font-semibold">
            Hours
          </h4>
          <ul className="flex flex-col gap-2 text-sm text-foreground/85">
            <li className="flex justify-between border-b border-charcoal-light pb-1">
              <span>Monday – Saturday</span>
              <span className="text-gold-primary">10:00 AM – 8:00 PM</span>
            </li>
            <li className="flex justify-between border-b border-charcoal-light pb-1 text-foreground/50">
              <span>Sunday</span>
              <span>Closed</span>
            </li>
            <li className="text-xs text-foreground/60 italic mt-2">
              * Consultations and sessions by appointment only. Walk-ins subject to artist availability.
            </li>
          </ul>
        </div>

        {/* Site Map & Navigation */}
        <div className="flex flex-col gap-4">
          <h4 className="font-serif text-sm uppercase tracking-widest text-gold-accent font-semibold">
            Navigation
          </h4>
          <nav className="flex flex-col gap-2 text-sm">
            <Link href="/" className="text-foreground/80 hover:text-gold-primary transition-colors">Home</Link>
            <Link href="/portfolio" className="text-foreground/80 hover:text-gold-primary transition-colors">Portfolio</Link>
            <Link href="/studio" className="text-foreground/80 hover:text-gold-primary transition-colors">The Studio</Link>
            <Link href="/aftercare" className="text-foreground/80 hover:text-gold-primary transition-colors">Aftercare</Link>
            <Link href="/booking" className="text-foreground/80 hover:text-gold-primary transition-colors">Book Consult</Link>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 border-t border-charcoal-light pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Compliance details */}
        <div className="flex items-center gap-2 text-xs text-foreground/50">
          <ShieldAlert className="h-4 w-4 text-gold-dark shrink-0" />
          <span>Licensed & Sterile Environment. Strict adherence to healthcare regulations and medical-grade hygiene.</span>
        </div>
        
        {/* Copyright info */}
        <div className="text-xs text-foreground/50 text-center md:text-right">
          <p>© {new Date().getFullYear()} Skull & Sword Tattoos. All Rights Reserved.</p>
          <p className="mt-1 text-[10px] text-gold-dark/65">Historical Legacy Website Project.</p>
        </div>
      </div>
    </footer>
  );
}
