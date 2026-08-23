"use client";

import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorOuterRef = useRef(null);
  const cursorInnerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(true);

  // Use mutable refs to track positions and scale instead of React state to prevent re-renders
  const mouseRef = useRef({ x: 0, y: 0 });
  const trailRef = useRef({ x: 0, y: 0 });
  const scaleRef = useRef(1);
  const isHoveredRef = useRef(false);
  const isHiddenRef = useRef(true);

  useEffect(() => {
    // Check if device is mobile or touch-enabled
    const checkDevice = () => {
      const mobile = 
        window.matchMedia("(max-width: 768px)").matches || 
        ("ontouchstart" in window) || 
        (navigator.maxTouchPoints > 0);
      setIsMobile(mobile);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    // If it's a mobile/touch device, don't run cursor events
    const isTouch = 
      window.matchMedia("(max-width: 768px)").matches || 
      ("ontouchstart" in window) || 
      (navigator.maxTouchPoints > 0);
    if (isTouch) return;

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      if (isHiddenRef.current) {
        isHiddenRef.current = false;
        if (cursorOuterRef.current) cursorOuterRef.current.style.opacity = "1";
        if (cursorInnerRef.current) cursorInnerRef.current.style.opacity = "1";
      }
    };

    const handleMouseLeave = () => {
      isHiddenRef.current = true;
      if (cursorOuterRef.current) cursorOuterRef.current.style.opacity = "0";
      if (cursorInnerRef.current) cursorInnerRef.current.style.opacity = "0";
    };

    // Event delegation for interactive hover states (100% leak free)
    const handleMouseOver = (e) => {
      const interactive = e.target.closest(
        "a, button, [role='button'], input, select, textarea, .group\\/tilt, .cursor-pointer, img"
      );
      
      if (interactive) {
        isHoveredRef.current = true;
        if (cursorOuterRef.current) {
          cursorOuterRef.current.style.borderColor = "var(--gold-accent)";
          cursorOuterRef.current.style.backgroundColor = "rgba(242, 97, 63, 0.08)";
        }
        if (cursorInnerRef.current) {
          cursorInnerRef.current.style.opacity = "0";
        }
      } else {
        isHoveredRef.current = false;
        if (cursorOuterRef.current) {
          cursorOuterRef.current.style.borderColor = "var(--gold-primary)";
          cursorOuterRef.current.style.backgroundColor = "transparent";
        }
        if (cursorInnerRef.current) {
          cursorInnerRef.current.style.opacity = isHiddenRef.current ? "0" : "1";
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseover", handleMouseOver);

    // Smooth animation loop using requestAnimationFrame
    let animFrame;
    const tick = () => {
      if (isHiddenRef.current) {
        animFrame = requestAnimationFrame(tick);
        return;
      }

      // Calculate inertia for outer ring position
      const dx = mouseRef.current.x - trailRef.current.x;
      const dy = mouseRef.current.y - trailRef.current.y;
      
      trailRef.current.x += dx * 0.16;
      trailRef.current.y += dy * 0.16;

      // Calculate springy scale interpolation
      const targetScale = isHoveredRef.current ? 1.5 : 1;
      scaleRef.current += (targetScale - scaleRef.current) * 0.2;

      // Update styles directly on the DOM element to bypass React render cycles
      if (cursorInnerRef.current) {
        cursorInnerRef.current.style.transform = `translate3d(${mouseRef.current.x}px, ${mouseRef.current.y}px, 0)`;
      }
      if (cursorOuterRef.current) {
        cursorOuterRef.current.style.transform = `translate3d(${trailRef.current.x}px, ${trailRef.current.y}px, 0) scale(${scaleRef.current})`;
      }

      animFrame = requestAnimationFrame(tick);
    };
    animFrame = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", checkDevice);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animFrame);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Outer tracking ring */}
      <div
        ref={cursorOuterRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-gold-primary pointer-events-none z-[99999] -ml-4 -mt-4 opacity-0 transition-opacity duration-300 will-change-transform"
        style={{
          transform: "translate3d(0, 0, 0) scale(1)",
          transition: "border-color 0.25s, background-color 0.25s, opacity 0.3s",
        }}
      />
      {/* Inner precise dot */}
      <div
        ref={cursorInnerRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-gold-accent pointer-events-none z-[99999] -ml-[3px] -mt-[3px] opacity-0 transition-opacity duration-300 will-change-transform"
        style={{
          transform: "translate3d(0, 0, 0)",
          transition: "opacity 0.2s",
        }}
      />
    </>
  );
}
