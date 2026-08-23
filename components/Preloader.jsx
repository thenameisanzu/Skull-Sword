"use client";

import React, { useState, useEffect } from "react";
import { Skull } from "lucide-react";

export default function Preloader() {
  const [loadingStep, setLoadingStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  const steps = [
    "Preparing Canvas...",
    "Drawing Outlines...",
    "Injecting Pigments...",
    "Sterilizing Station...",
    "Ready"
  ];

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("skull-sword-visited");
    if (hasVisited === "true") {
      setIsVisible(false);
      setShouldRender(false);
      return;
    }

    // Incremental step change
    const stepInterval = setInterval(() => {
      setLoadingStep((prev) => {
        if (prev < steps.length - 1) return prev + 1;
        clearInterval(stepInterval);
        return prev;
      });
    }, 450);

    // Smooth percentage loading increments
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setIsVisible(false);
            sessionStorage.setItem("skull-sword-visited", "true");
            setTimeout(() => setShouldRender(false), 800);
          }, 600);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => {
      clearInterval(stepInterval);
      clearInterval(progressInterval);
    };
  }, []);

  const formatPercent = (p) => {
    const val = Math.round(p);
    if (val < 10) return `00${val}`;
    if (val < 100) return `0${val}`;
    return `${val}`;
  };

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] bg-black flex flex-col items-center justify-center transition-all duration-[800ms] cubic-bezier(0.16, 1, 0.3, 1) ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
      }`}
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-radial-gradient from-gold-primary/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center select-none text-center">
        {/* Pulsing Logo Circle */}
        <div className="relative w-32 h-32 mb-8 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-gold-primary/5 blur-2xl animate-pulse"></div>
          <div className="w-20 h-20 rounded-full border border-gold-primary/20 bg-charcoal-medium flex items-center justify-center shadow-2xl shadow-black">
            <Skull className="h-10 w-10 text-gold-primary animate-pulse" />
          </div>
        </div>

        {/* Studio Subtitle */}
        <h2 className="font-brand text-xs tracking-[0.4em] text-foreground/50 font-bold uppercase mb-12">
          SKULL & SWORD STUDIO
        </h2>

        {/* Tabular Percentage Counter */}
        <div className="relative flex flex-col items-center">
          <span className="font-mono text-5xl font-light tracking-wider text-zinc-100 tabular-nums">
            {formatPercent(progress)}
            <span className="text-zinc-500 text-lg ml-1">%</span>
          </span>

          {/* Thin Progress bar */}
          <div className="w-48 h-[1px] bg-zinc-800 mt-4 overflow-hidden rounded-full">
            <div
              className="h-full bg-gradient-to-r from-crimson-primary via-gold-primary to-white transition-all duration-100 ease-out"
              style={{
                width: `${progress}%`,
                boxShadow: "0 0 8px rgba(197, 168, 128, 0.5)",
              }}
            ></div>
          </div>
          
          {/* Action Step */}
          <span className="text-[9px] font-brand uppercase tracking-widest text-gold-accent mt-4 animate-pulse">
            {steps[loadingStep]}
          </span>
        </div>

        {/* Geographic location details bottom */}
        <div className="mt-24 text-[9px] tracking-[0.5em] text-zinc-500 uppercase">
          CHANGANASSERY • KERALA
        </div>
      </div>
    </div>
  );
}
