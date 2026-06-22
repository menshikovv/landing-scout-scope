"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Wraps a block and reveals its meaningful child elements one-by-one as they
 * enter the viewport. Cards and forms are revealed as single units (so their
 * inner content doesn't double-animate), and anything inside a `[data-noreveal]`
 * element is left untouched (e.g. collapsible FAQ answers).
 */
export default function RevealStagger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const selector = "h1,h2,h3,h4,p,li,a,blockquote,img,.card,form";
    const all = Array.from(root.querySelectorAll<HTMLElement>(selector));

    // Keep cards/forms as units; drop their descendants and anything opted out.
    const nodes = all.filter((el) => {
      if (el.closest("[data-noreveal]")) return false;
      const card = el.closest(".card");
      if (card && card !== el) return false; // inside a card -> card is the unit
      const form = el.closest("form");
      if (form && form !== el) return false; // inside a form -> form is the unit
      return true;
    });

    if (nodes.length === 0) return;

    nodes.forEach((el) => el.classList.add("sr"));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const idx = nodes.indexOf(el);
          // Small stagger, capped so long blocks don't lag.
          el.style.transitionDelay = `${Math.min(idx, 6) * 80}ms`;
          el.classList.add("sr-in");
          io.unobserve(el);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
