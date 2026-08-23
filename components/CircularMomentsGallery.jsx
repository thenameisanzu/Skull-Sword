"use client";

import React, { useState } from "react";
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
  const [activeIndex, setActiveIndex] = useState(4); // Start near the center of 10 cards

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? moments.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === moments.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full bg-charcoal-medium/55 border border-charcoal-light rounded-3xl p-8 sm:p-12 overflow-hidden shadow-2xl">
      {/* Subtle radial backdrop glow */}
      <div className="absolute inset-0 bg-radial-gradient from-gold-primary/5 via-transparent to-transparent pointer-events-none z-0"></div>

      <div className="relative z-10 flex flex-col items-center select-none">
        {/* Gallery Title Indicator */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-[10px] font-brand uppercase tracking-widest text-gold-accent block mb-1">
            Interactive Showcase
          </span>
          <h3 className="font-serif text-2xl uppercase tracking-wider font-black text-foreground">
            Moments Gallery
          </h3>
          <p className="text-[11px] text-foreground/50 mt-1">
            Click side cards or drag to rotate through the studio moments
          </p>
        </div>

        {/* 3D Curved Cylindrical Slider Space */}
        <div className="relative w-full h-[400px] sm:h-[480px] flex items-center justify-center overflow-visible">
          {moments.map((moment, idx) => {
            const offset = idx - activeIndex;
            const absOffset = Math.abs(offset);
            
            // Layout transformation parameters to create a circular cylindrical depth
            const rotationY = offset * -22; // Cylindrical Y-rotation
            const scale = 1 - absOffset * 0.12; // Farther cards are scaled down
            const translateX = offset * 140; // Horizontal offset positioning
            const translateZ = absOffset * -120; // Depth push back
            
            // Dynamic card inline styling variables
            const transformStyle = `perspective(1200px) translate3d(${translateX}px, 0, ${translateZ}px) rotateY(${rotationY}deg) scale(${scale})`;
            const isActive = idx === activeIndex;

            return (
              <div
                key={idx}
                onClick={() => setActiveIndex(idx)}
                style={{
                  transform: transformStyle,
                  zIndex: 20 - absOffset,
                  opacity: absOffset > 2 ? 0 : 1,
                  transition: "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.6s, z-index 0.6s",
                }}
                className={`absolute w-64 sm:w-72 h-[340px] sm:h-[400px] rounded-3xl overflow-hidden border transition-colors duration-300 shadow-2xl cursor-pointer group select-none ${
                  isActive
                    ? "border-gold-primary/60 shadow-gold-primary/10 shadow-xl"
                    : "border-charcoal-light hover:border-gold-primary/30"
                }`}
              >
                {/* Image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={moment.src}
                  alt={moment.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    isActive ? "group-hover:scale-105" : "brightness-[0.45]"
                  }`}
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

        {/* 3D Controls Arrows bar */}
        <div className="flex items-center gap-4 mt-6 sm:mt-10 relative z-20">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-gold-primary/30 text-gold-primary hover:text-white hover:bg-gold-primary/20 flex items-center justify-center transition-all duration-300 active:scale-90"
            aria-label="Previous Moment"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <div className="flex gap-1.5">
            {moments.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === activeIndex ? "w-6 bg-gold-primary" : "w-1.5 bg-zinc-700 hover:bg-zinc-500"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-gold-primary/30 text-gold-primary hover:text-white hover:bg-gold-primary/20 flex items-center justify-center transition-all duration-300 active:scale-90"
            aria-label="Next Moment"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
