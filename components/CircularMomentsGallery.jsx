"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "./Reveal";

const moments = [
  {
    src: "/images/moment-4.png",
    title: "Amal Dev in Session",
    subtitle: "Precision Tattoo Crafting",
    credits: "Skull & Sword Tattoos",
  },
  {
    src: "/images/moment-2.png",
    title: "Helix Piercing",
    subtitle: "Double Helix Gold Curation",
    credits: "Sterile & Pain-Free Setup",
  },
  {
    src: "/images/moment-3.png",
    title: "First Lobe Piercing",
    subtitle: "Child-Safe Lobe Piercing",
    credits: "Gentle Care & Mapping",
  },
  {
    src: "/images/moment-1.png",
    title: "Aishwarya's Smile",
    subtitle: "Happy Client Post-Session Portrait",
    credits: "Custom Illustrative Linework",
  },
  {
    src: "/images/moment-5.png",
    title: "Mirror Selfie",
    subtitle: "Anjana & Sneha Posing",
    credits: "Fresh Ear Stylings",
  },
  {
    src: "/images/moment-6.png",
    title: "Serene Ear Piercing",
    subtitle: "Aesthetic Conch Mapping",
    credits: "Implant-Grade Gold Jewelry",
  },
  {
    src: "/images/moment-7.png",
    title: "Gothic Heart Gesture",
    subtitle: "Happy Client Lying Down Portrait",
    credits: "Custom Ink Completed",
  },
  {
    src: "/images/moment-8.png",
    title: "Portrait Tribute",
    subtitle: "Realistic Portrait Tattoo",
    credits: "Amal Dev Realistic Shading",
  },
  {
    src: "/images/moment-9.png",
    title: "Studio Seat Smile",
    subtitle: "Happy Client Posing Post-Ink",
    credits: "Skull & Sword Parlor",
  },
  {
    src: "/images/moment-10.png",
    title: "Piercing Expression",
    subtitle: "Lobe Piercing Procedure",
    credits: "Sterile Cannula Technique",
  },
];

export default function CircularMomentsGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? moments.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === moments.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const cardWidth = isMobile ? 288 : 320;
  const gap = isMobile ? 16 : 24;
  const centerOffset = isMobile ? 144 : 160;
  const translateVal = `calc(50% - ${centerOffset}px - ${activeIndex * (cardWidth + gap)}px)`;

  return (
    <div className="relative w-full bg-charcoal-medium/55 border border-charcoal-light rounded-3xl p-8 sm:p-12 overflow-hidden shadow-2xl">
      {/* Subtle radial backdrop glow */}
      <div className="absolute inset-0 bg-radial-gradient from-gold-primary/5 via-transparent to-transparent pointer-events-none z-0"></div>

      <div className="relative z-10 flex flex-col items-center select-none">
        {/* Gallery Title Indicator */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-[10px] font-brand uppercase tracking-widest text-gold-accent block mb-1">
            Studio Gallery
          </span>
          <h3 className="font-serif text-2xl uppercase tracking-wider font-black text-foreground">
            Happy Moments
          </h3>
          <p className="text-[11px] text-foreground/50 mt-1">
            Auto-sliding moments showing our clients and piercing curations
          </p>
        </div>

        {/* Sliding Viewport Container */}
        <div
          className="relative w-full overflow-hidden py-4 cursor-grab active:cursor-grabbing"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Slider Track */}
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
            style={{
              transform: `translate3d(${translateVal}, 0, 0)`,
              gap: `${gap}px`,
              width: `${moments.length * (cardWidth + gap)}px`,
            }}
          >
            {moments.map((moment, idx) => {
              const isActive = idx === activeIndex;

              return (
                <div
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  style={{
                    width: `${cardWidth}px`,
                    height: isMobile ? "340px" : "400px",
                  }}
                  className={`relative rounded-3xl overflow-hidden border shrink-0 transition-all duration-700 select-none cursor-pointer group ${
                    isActive
                      ? "border-gold-primary/60 scale-100 opacity-100 shadow-2xl shadow-gold-primary/10"
                      : "border-charcoal-light scale-95 opacity-30 hover:border-gold-primary/30 hover:opacity-50"
                  }`}
                >
                  {/* Image */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={moment.src}
                    alt={moment.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-90 transition-opacity duration-300 pointer-events-none" />

                  {/* Info Text overlays */}
                  <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end text-left select-none pointer-events-none">
                    <span className="text-[9px] font-brand uppercase tracking-widest text-gold-accent font-bold mb-1">
                      {moment.subtitle}
                    </span>
                    <h4 className="font-serif text-lg sm:text-xl font-bold text-zinc-100 leading-tight">
                      {moment.title}
                    </h4>
                    <p className="text-[9px] text-foreground/45 tracking-wider mt-1.5 uppercase font-mono">
                      {moment.credits}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline controls indicator below */}
        <div className="flex items-center gap-6 mt-8 relative z-20">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-gold-primary/30 text-gold-primary hover:text-white hover:bg-gold-primary/20 flex items-center justify-center transition-all duration-300 active:scale-90 shadow-lg shadow-black/30 bg-charcoal-dark/50 cursor-pointer"
            aria-label="Previous Moment"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex gap-1.5">
            {moments.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeIndex ? "w-6 bg-gold-primary" : "w-1.5 bg-zinc-700 hover:bg-zinc-500"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-gold-primary/30 text-gold-primary hover:text-white hover:bg-gold-primary/20 flex items-center justify-center transition-all duration-300 active:scale-90 shadow-lg shadow-black/30 bg-charcoal-dark/50 cursor-pointer"
            aria-label="Next Moment"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
