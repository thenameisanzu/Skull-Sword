"use client";

import React, { useState } from "react";
import TattooPlaceholder from "@/components/TattooPlaceholder";

function HeroPanel({ imageSrc, placeholderType, index }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-xl transition-all duration-500 ease-out cursor-pointer flex-1 hover:flex-[2.5] group h-full border border-charcoal-light hover:border-gold-primary/30 bg-charcoal-medium">
      {!imgFailed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageSrc}
          alt={`Gallery panel ${index + 1}`}
          onError={() => setImgFailed(true)}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : null}
      
      {/* Fallback Placeholder (if image doesn't exist yet) */}
      {imgFailed && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-charcoal-medium/60 text-center select-none">
          <div className="w-12 h-12 sm:w-16 sm:h-16 opacity-35 group-hover:opacity-85 transition-opacity duration-300">
            <TattooPlaceholder type={placeholderType} className="w-full h-full text-gold-primary border-none" />
          </div>
          <span className="text-[9px] font-mono tracking-widest text-foreground/30 mt-4 uppercase group-hover:text-gold-primary/50 transition-colors">
            {placeholderType}
          </span>
        </div>
      )}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/15 transition-colors duration-300 z-10" />

      {/* Indicator overlay bottom */}
      <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2">
        <span className="font-mono text-xs text-gold-primary">0{index + 1}</span>
      </div>
    </div>
  );
}

const heroAccordionPanels = [
  { src: "/images/hero-1.png", type: "skull" },
  { src: "/images/hero-2.png", type: "dagger" },
  { src: "/images/hero-3.png", type: "rose" },
  { src: "/images/hero-4.png", type: "mandala" },
  { src: "/images/hero-5.png", type: "waves" },
];

export default function HeroGallery() {
  return (
    <div className="flex w-full h-full gap-2 sm:gap-3 overflow-hidden">
      {heroAccordionPanels.map((panel, idx) => (
        <HeroPanel
          key={idx}
          index={idx}
          imageSrc={panel.src}
          placeholderType={panel.type}
        />
      ))}
    </div>
  );
}
