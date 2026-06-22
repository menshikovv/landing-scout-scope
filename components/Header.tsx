"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#problem", label: "Проблема" },
  { href: "#solution", label: "Возможности" },
  { href: "#how", label: "Как работает" },
  { href: "#pricing", label: "Тарифы" },
  { href: "#players", label: "Игрокам" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-xl transition-all duration-300 ${
        scrolled
          ? "border-white/10 bg-[#04070f]/70 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)]"
          : "border-white/[0.07] bg-white/[0.04]"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#" className="font-display flex items-center gap-2 text-lg font-bold tracking-tight">
          <span>
            Scout<span className="text-[var(--color-accent-2)]">Scope</span>
          </span>
        </a>


        <div className="flex items-center gap-3">
          <a
            href="#pricing"
            className="btn-primary rounded-xl px-4 py-2.5 text-sm font-semibold text-white"
          >
            Попробовать
          </a>
          <button
            aria-label="Меню"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-[var(--color-border)] lg:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[var(--color-border)] bg-[#04070f]/95 px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-[var(--color-muted)] hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
