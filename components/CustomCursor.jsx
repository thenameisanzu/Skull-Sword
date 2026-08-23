"use client";

import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorOuterRef = useRef(null);
  const cursorInnerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(true);

  // Use mutable refs to track positions instead of React state to prevent re-renders
  const mouseRef = useRef({ x: 0, y: 0 });
  const trailRef = useRef({ x: 0, y: 0 });
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

    if (isMobile) return;

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

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Setup hover listeners for interactive elements
    const setupHovers = () => {
      const interactives = document.querySelectorAll(
        "a, button, [role='button'], input, select, textarea, .group\\/tilt, .cursor-pointer"
      );
      
      const onEnter = () => {
        isHoveredRef.current = true;
        if (cursorOuterRef.current) {
          cursorOuterRef.current.classList.add("scale-125", "border-crimson-primary", "bg-crimson-primary/5");
          cursorOuterRef.current.classList.remove("border-gold-primary");
        }
        if (cursorInnerRef.current) {
          cursorInnerRef.current.classList.add("scale-0", "opacity-0");
        }
      };

      const onLeave = () => {
        isHoveredRef.current = false;
        if (cursorOuterRef.current) {
          cursorOuterRef.current.classList.remove("scale-125", "border-crimson-primary", "bg-crimson-primary/5");
          cursorOuterRef.current.classList.add("border-gold-primary");
        }
        if (cursorInnerRef.current) {
          cursorInnerRef.current.classList.remove("scale-0", "opacity-0");
        }
      };

      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };

    setupHovers();
    const observer = new MutationObserver(setupHovers);
    observer.observe(document.body, { childList: true, subtree: true });

    // Smooth animation loop using requestAnimationFrame
    let animFrame;
    const tick = () => {
      if (isHiddenRef.current) {
        animFrame = requestAnimationFrame(tick);
        return;
      }

      // Calculate inertia for outer ring
      const dx = mouseRef.current.x - trailRef.current.x;
      const dy = mouseRef.current.y - trailRef.current.y;
      
      trailRef.current.x += dx * 0.16;
      trailRef.current.y += dy * 0.16;

      // Update styles directly on the DOM element to bypass React render cycles
      if (cursorInnerRef.current) {
        cursorInnerRef.current.style.transform = `translate3d(${mouseRef.current.x}px, ${mouseRef.current.y}px, 0)`;
      }
      if (cursorOuterRef.current) {
        cursorOuterRef.current.style.transform = `translate3d(${trailRef.current.x}px, ${trailRef.current.y}px, 0)`;
      }

      animFrame = requestAnimationFrame(tick);
    };
    animFrame = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", checkDevice);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animFrame);
      observer.disconnect();
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
          transform: "translate3d(0, 0, 0)",
          transition: "width 0.3s, height 0.3s, border-color 0.3s, background-color 0.3s, opacity 0.3s",
        }}
      />
      {/* Inner precise dot */}
      <div
        ref={cursorInnerRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-crimson-primary pointer-events-none z-[99999] -ml-[3px] -mt-[3px] opacity-0 transition-opacity duration-300 will-change-transform"
        style={{
          transform: "translate3d(0, 0, 0)",
          transition: "opacity 0.3s",
        }}
      />
    </>
  );
}
