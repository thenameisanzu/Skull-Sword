"use client";

import React, { useRef, useState, useEffect } from "react";

export default function Reveal({ children, direction = "up", delay = 0, duration = 800, className = "" }) {
  const ref = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(entry.target); // Trigger animation only once
        }
      },
      {
        threshold: 0.0, // Trigger as soon as a single pixel enters the viewport (fixes clip-path 0-size bounds issues)
        rootMargin: "0px 0px -10px 0px", // Minimal margins to ensure immediate triggers for top-of-page elements
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const getStyles = () => {
    switch (direction) {
      case "up":
        return isIntersecting
          ? { opacity: 1, transform: "translate3d(0, 0, 0) scale(1)" }
          : { opacity: 0, transform: "translate3d(0, 40px, 0) scale(0.98)" };
      case "down":
        return isIntersecting
          ? { opacity: 1, transform: "translate3d(0, 0, 0)" }
          : { opacity: 0, transform: "translate3d(0, -40px, 0)" };
      case "left":
        return isIntersecting
          ? { opacity: 1, transform: "translate3d(0, 0, 0)" }
          : { opacity: 0, transform: "translate3d(50px, 0, 0)" };
      case "right":
        return isIntersecting
          ? { opacity: 1, transform: "translate3d(0, 0, 0)" }
          : { opacity: 0, transform: "translate3d(-50px, 0, 0)" };
      case "zoom":
        return isIntersecting
          ? { opacity: 1, transform: "scale(1)" }
          : { opacity: 0, transform: "scale(0.9)" };
      case "spear-left":
        return isIntersecting
          ? { opacity: 1, transform: "translate3d(0, 0, 0) rotate(0deg)" }
          : { opacity: 0, transform: "translate3d(-200px, 0, 0) rotate(-6deg)" };
      case "spear-right":
        return isIntersecting
          ? { opacity: 1, transform: "translate3d(0, 0, 0) rotate(0deg)" }
          : { opacity: 0, transform: "translate3d(200px, 0, 0) rotate(6deg)" };
      case "clip-left": // Mask reveal sliding from left to right
        return isIntersecting
          ? { opacity: 1, clipPath: "inset(0 0 0 0)" }
          : { opacity: 0, clipPath: "inset(0 100% 0 0)" };
      case "clip-right": // Mask reveal sliding from right to left
        return isIntersecting
          ? { opacity: 1, clipPath: "inset(0 0 0 0)" }
          : { opacity: 0, clipPath: "inset(0 0 0 100%)" };
      default:
        return isIntersecting ? { opacity: 1 } : { opacity: 0 };
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all ${className}`}
      style={{
        transitionProperty: "transform, opacity, clip-path", // Explicitly enable clip-path transitions (not in Tailwind's defaults)
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)", // Custom luxury ease-out curve
        willChange: "transform, opacity, clip-path",
        ...getStyles(),
      }}
    >
      {children}
    </div>
  );
}
