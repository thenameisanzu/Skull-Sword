"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Skull } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "The Studio", href: "/studio" },
    { label: "Aftercare", href: "/aftercare" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-charcoal-dark/95 backdrop-blur-md border-b border-gold-primary/20 py-4 shadow-lg shadow-black/50"
          : "bg-transparent py-6 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Skull className="h-7 w-7 text-gold-primary group-hover:text-gold-accent transition-colors duration-300 group-hover:rotate-12 transform" />
          <span className="font-brand text-xl md:text-2xl font-extrabold tracking-widest text-gold-primary group-hover:text-white transition-colors duration-300">
            SKULL & SWORD
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-serif text-sm tracking-widest transition-all duration-300 relative py-1 hover:text-white ${
                  isActive ? "text-gold-accent font-semibold" : "text-foreground/80"
                }`}
              >
                {item.label}
                {/* Active Indicator Line */}
                <span
                  className={`absolute bottom-0 left-0 right-0 h-[1.5px] bg-gold-accent transition-transform duration-300 origin-left ${
                    isActive ? "scale-x-100" : "scale-x-0 hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
          
          {/* Booking CTA Button */}
          <Link
            href="/booking"
            className="border border-gold-primary hover:border-gold-accent text-gold-primary hover:text-charcoal-dark bg-transparent hover:bg-gold-primary px-5 py-2 font-serif text-xs uppercase tracking-widest transition-all duration-300 rounded-xl font-bold shadow-md shadow-gold-primary/5 hover:shadow-gold-primary/20"
          >
            Book Session
          </Link>
        </nav>

        {/* Mobile Hamburger Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gold-primary focus:outline-none hover:text-gold-accent transition-colors p-2"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer (Slide Down) */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-charcoal-medium/98 backdrop-blur-lg border-b border-gold-primary/25 transition-all duration-500 overflow-hidden shadow-2xl ${
          isOpen ? "max-h-[350px] opacity-100 py-6" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-6 px-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`font-serif text-base tracking-widest transition-colors ${
                  isActive ? "text-gold-accent font-semibold" : "text-foreground/90"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/booking"
            onClick={() => setIsOpen(false)}
            className="w-full text-center border border-gold-primary bg-gold-primary/10 text-gold-primary py-3 rounded-xl font-serif uppercase tracking-widest font-bold hover:bg-gold-primary hover:text-charcoal-dark transition-all duration-300"
          >
            Book Session
          </Link>
        </div>
      </div>
    </header>
  );
}
