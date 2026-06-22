"use client";

import { useState } from "react";
import { ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";
import ShinyText from "./ShinyText";

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_105406_16f4600d-7a92-4292-b96e-b19156c7830a.mp4";

const navLinks = [
  { label: "Проблема", href: "#problem" },
  { label: "Возможности", href: "#solution" },
  { label: "Как работает", href: "#how" },
  { label: "Тарифы", href: "#pricing" },
  { label: "Игрокам", href: "#players" },
  { label: "FAQ", href: "#faq" },
];

export default function DesignProHero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Fixed (pinned) header — stays on top across the whole page */}
      <header className="fixed inset-x-0 top-0 z-50">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          {/* Logo */}
          <a href="#" className="rise flex items-center gap-3" style={{ animationDelay: "0.05s" }}>
            <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white">
              <span className="h-2.5 w-2.5 rounded-full bg-white" />
            </span>
            <span className="text-base font-semibold text-white">ScoutScope</span>
          </a>

          {/* Desktop nav pill */}
          <div className="rise hidden items-center rounded-full border border-gray-700 bg-black/30 px-2 py-1 backdrop-blur-md lg:flex" style={{ animationDelay: "0.15s" }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3.5 py-1.5 text-sm text-white/80 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#pricing"
              className="flex items-center gap-1 rounded-full px-3.5 py-1.5 text-sm text-white/80 transition-colors hover:text-white"
            >
              Попробовать
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label="Меню"
            onClick={() => setMenuOpen((v) => !v)}
            className="rise flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 bg-black/30 text-white backdrop-blur-md lg:hidden"
            style={{ animationDelay: "0.15s" }}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="mx-auto w-full max-w-7xl px-6 lg:hidden">
            <div className="flex flex-col gap-1 rounded-2xl border border-gray-700 bg-black/80 p-3 backdrop-blur-md">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Full-screen hero (uses the site-wide font, no forced Inter) */}
      <section className="relative h-screen w-full overflow-hidden bg-black">
        {/* Looping video background */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={VIDEO_SRC}
          autoPlay
          loop
          muted
          playsInline
          aria-hidden
        />

        {/* Darken for legibility */}
        <div className="pointer-events-none absolute inset-0 bg-black/40" />

        {/* Foreground content (clears the fixed header via pt) */}
        <div className="relative z-10 flex h-full flex-col pt-24">
          {/* Top section: two-column intro */}
          <div className="mx-auto grid w-full max-w-7xl gap-6 px-6 pt-6 lg:grid-cols-2 lg:px-8">
            <p className="rise max-w-md text-sm text-white/80 md:text-base" style={{ animationDelay: "0.25s" }}>
              AI-платформа для поиска и оценки киберспортивных талантов —
              автоматизируйте скаутинг, сравнивайте кандидатов и формируйте
              собственную базу за минуты.
            </p>
            <p className="rise text-sm text-white/80 md:text-base lg:text-right" style={{ animationDelay: "0.32s" }}>
              2 500+ скаутов и менеджеров. Скаутинг быстрее в 5 раз !
            </p>
          </div>

          {/* Center hero */}
          <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-6 text-center lg:px-8">
            <p className="rise text-xs uppercase tracking-tight text-white/80 md:text-sm" style={{ animationDelay: "0.4s" }}>
              AI-скаутинг киберспортивных талантов
            </p>

            <h1 className="mt-5 font-medium leading-[0.85] tracking-tighter text-white">
              <span className="rise block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl" style={{ animationDelay: "0.5s" }}>
                Находите будущих
              </span>
              <span className="rise mt-2 block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl" style={{ animationDelay: "0.6s" }}>
                <ShinyText
                  text="чемпионов."
                  baseColor="#64CEFB"
                  shineColor="#ffffff"
                  speed={3}
                  spread={100}
                />
              </span>
            </h1>

            {/* CTA */}
            <a
              href="#pricing"
              className="rise group mt-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-900 md:px-8 md:py-4 md:text-base"
              style={{ animationDelay: "0.72s" }}
            >
              Попробовать ScoutScope
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
