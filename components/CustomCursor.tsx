"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Enable everywhere except touch-only devices (no hover capability).
    if (window.matchMedia("(hover: none)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.body.classList.add("has-custom-cursor");

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ringPos = { ...mouse };
    let raf = 0;
    let visible = false;

    const hoverSelector = 'a, button, input, textarea, label, [role="button"], .checkbox';

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      dot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      if (!visible) {
        visible = true;
        dot.classList.remove("cursor-hidden");
        ring.classList.remove("cursor-hidden");
      }
      const target = e.target as HTMLElement | null;
      const isInteractive = !!target?.closest(hoverSelector);
      ring.classList.toggle("is-hover", isInteractive);
    };

    const onLeave = () => {
      dot.classList.add("cursor-hidden");
      ring.classList.add("cursor-hidden");
      visible = false;
    };

    const onDown = () => ring.classList.add("is-down");
    const onUp = () => ring.classList.remove("is-down");

    const tick = () => {
      // smooth trailing for the ring
      ringPos.x += (mouse.x - ringPos.x) * 0.18;
      ringPos.y += (mouse.y - ringPos.y) * 0.18;
      ring.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.body.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring cursor-hidden" aria-hidden />
      <div ref={dotRef} className="cursor-dot cursor-hidden" aria-hidden />
    </>
  );
}
