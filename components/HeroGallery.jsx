"use client";

import React, { useState } from "react";
import TattooPlaceholder from "@/components/TattooPlaceholder";

function HeroPanel({ imageSrc, placeholderType, index, isActive, onActivate }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div
      onMouseEnter={onActivate}
      onClick={onActivate}
      className={`relative overflow-hidden rounded-xl transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer group h-full border bg-charcoal-medium ${
        isActive
          ? "border-gold-primary/50 shadow-lg shadow-gold-primary/5"
          : "border-charcoal-light hover:border-gold-primary/20"
      }`}
      style={{
        flex: isActive ? 2.5 : 1,
      }}
    >
      {!imgFailed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageSrc}
          alt={`Gallery panel ${index + 1}`}
          onError={() => setImgFailed(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            isActive ? "scale-105 brightness-100" : "scale-100 brightness-[0.45] group-hover:brightness-[0.6]"
          }`}
          loading="lazy"
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
      <div className={`absolute inset-0 transition-colors duration-300 z-10 ${
        isActive ? "bg-black/20" : "bg-black/55 group-hover:bg-black/40"
      }`} />

      {/* Indicator overlay bottom */}
      <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2">
        <span className={`font-mono text-xs transition-colors duration-300 ${
          isActive ? "text-gold-primary" : "text-foreground/40 group-hover:text-foreground/70"
        }`}>0{index + 1}</span>
      </div>
    </div>
  );
}

const heroAccordionPanels = [
  { src: "/images/hero-2.png", type: "dagger" },
  { src: "/images/hero-3.png", type: "rose" },
  { src: "/images/hero-4.png", type: "mandala" },
  { src: "/images/hero-5.png", type: "waves" },
];

export default function HeroGallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex w-full h-full gap-2 sm:gap-3 overflow-hidden">
      {heroAccordionPanels.map((panel, idx) => (
        <HeroPanel
          key={idx}
          index={idx}
          imageSrc={panel.src}
          placeholderType={panel.type}
          isActive={idx === activeIndex}
          onActivate={() => setActiveIndex(idx)}
        />
      ))}
    </div>
  );
}
