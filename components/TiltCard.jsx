"use client";

import React, { useRef, useState } from "react";

export default function TiltCard({ children, className = "" }) {
  const cardRef = useRef(null);
  const [tiltStyles, setTiltStyles] = useState({});

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Get mouse coordinates relative to the card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate normalized position (-0.5 to 0.5)
    const normalizedX = (x / rect.width) - 0.5;
    const normalizedY = (y / rect.height) - 0.5;
    
    // Tilt settings (maximum 12 degrees tilt)
    const maxTilt = 12;
    const tiltX = -normalizedY * maxTilt;
    const tiltY = normalizedX * maxTilt;
    
    // Calculate light reflection coordinates
    const shineX = (x / rect.width) * 100;
    const shineY = (y / rect.height) * 100;

    setTiltStyles({
      transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`,
      "--shine-x": `${shineX}%`,
      "--shine-y": `${shineY}%`,
      transition: "transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)",
    });
  };

  const handleMouseLeave = () => {
    setTiltStyles({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={tiltStyles}
      className={`relative overflow-hidden transition-shadow duration-300 group/tilt ${className}`}
    >
      {/* 3D Gold Gloss Overlay Effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover/tilt:opacity-15 pointer-events-none z-20 transition-opacity duration-300 bg-[radial-gradient(circle_at_var(--shine-x,50%)_var(--shine-y,50%),rgba(255,255,255,0.8),transparent_50%)]"
      />
      {children}
    </div>
  );
}
