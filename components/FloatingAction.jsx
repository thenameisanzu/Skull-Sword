"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare, Calendar } from "lucide-react";
import Link from "next/link";

export default function FloatingAction() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show buttons after scrolling down a bit
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {/* Desktop Floating Corner Contacts */}
      <div
        className={`hidden md:flex flex-col gap-3 fixed bottom-8 right-8 z-40 transition-all duration-500 transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
        }`}
      >
        <a
          href="https://wa.me/918921865894"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center w-12 h-12 bg-charcoal-medium border border-gold-primary/30 rounded-full text-gold-primary hover:bg-gold-primary hover:text-charcoal-dark hover:border-gold-primary hover:scale-105 transition-all duration-300 shadow-xl shadow-black/80"
          title="Chat on WhatsApp"
        >
          <MessageSquare className="h-5 w-5" />
        </a>
        <a
          href="https://www.instagram.com/skull_and_sword_tattoos/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center w-12 h-12 bg-charcoal-medium border border-gold-primary/30 rounded-full text-gold-primary hover:bg-gold-primary hover:text-charcoal-dark hover:border-gold-primary hover:scale-105 transition-all duration-300 shadow-xl shadow-black/80"
          title="Follow Instagram"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
        <Link
          href="/booking"
          className="group flex items-center justify-center w-12 h-12 bg-crimson-primary border border-crimson-accent rounded-full text-white hover:bg-white hover:text-crimson-primary hover:scale-105 transition-all duration-300 shadow-xl shadow-black/80"
          title="Book Session"
        >
          <Calendar className="h-5 w-5" />
        </Link>
      </div>

      {/* Mobile Sticky Bottom Tab (always visible on small screens for high usability) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-charcoal-medium/95 backdrop-blur-md border-t border-gold-primary/20 px-4 pt-3 pb-5 flex items-center justify-between gap-3 shadow-[0_-10px_30px_rgba(0,0,0,0.8)]">
        <a
          href="https://wa.me/918921865894"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 bg-charcoal-dark border border-gold-primary/30 text-gold-primary flex items-center justify-center rounded-full hover:bg-gold-primary/10 transition-colors shrink-0"
          title="Chat on WhatsApp"
        >
          <MessageSquare className="h-5 w-5" />
        </a>
        <a
          href="https://www.instagram.com/skull_and_sword_tattoos/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 bg-charcoal-dark border border-gold-primary/30 text-gold-primary flex items-center justify-center rounded-full hover:bg-gold-primary/10 transition-colors shrink-0"
          title="Follow Instagram"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
        <Link
          href="/booking"
          className="flex-1 h-11 btn-primary-standout flex items-center justify-center gap-2 rounded-xl font-serif text-xs uppercase tracking-widest font-black"
        >
          <Calendar className="h-4 w-4" />
          <span>Book Session</span>
        </Link>
      </div>
    </>
  );
}
