"use client";

import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";
import ShinyText from "./ShinyText";

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_105406_16f4600d-7a92-4292-b96e-b19156c7830a.mp4";

const scoutLinks = [
  { label: "Проблема", href: "#problem" },
  { label: "Возможности", href: "#solution" },
  { label: "Как работает", href: "#how" },
  { label: "Тарифы", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const playerLinks = [{ label: "Анкета игрока", href: "#players" }];

type Role = "scout" | "player";

function RoleToggle({
  role,
  onRoleChange,
  full = false,
}: {
  role: Role;
  onRoleChange: (role: Role) => void;
  full?: boolean;
}) {
  const base =
    "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 sm:px-5";
  const active =
    "bg-white/15 text-white shadow-[0_4px_16px_-6px_rgba(0,0,0,0.6)] ring-1 ring-white/20";
  const idle = "text-white/70 hover:text-white";

  return (
    <div
      className={`inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/[0.06] p-1 backdrop-blur-xl ${
        full ? "w-full" : ""
      }`}
      role="tablist"
      aria-label="Кого вы ищете"
    >
      <button
        type="button"
        role="tab"
        aria-selected={role === "scout"}
        onClick={() => onRoleChange("scout")}
        className={`${base} ${full ? "flex-1" : ""} ${
          role === "scout" ? active : idle
        }`}
      >
        Ищу игрока
      </button>
      <button
        type="button"
        role="tab"
        aria-selected={role === "player"}
        onClick={() => onRoleChange("player")}
        className={`${base} ${full ? "flex-1" : ""} ${
          role === "player" ? active : idle
        }`}
      >
        Ищу команду
      </button>
    </div>
  );
}

type Props = {
  role: Role;
  onRoleChange: (role: Role) => void;
};

export default function DesignProHero({ role, onRoleChange }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const cta =
    role === "scout"
      ? { label: "Попробовать ScoutScope", href: "#pricing" }
      : { label: "Добавить меня в базу", href: "#players" };

  const navLinks = role === "scout" ? scoutLinks : playerLinks;
  const pillCta =
    role === "scout"
      ? { label: "Попробовать", href: "#pricing" }
      : { label: "Заполнить анкету", href: "#players" };

  return (
    <>
      {/* Fixed (pinned) header — stays on top across the whole page */}
      <header className="fixed inset-x-0 top-0 z-50">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 sm:px-6 sm:py-5 lg:px-8">
          {/* Logo */}
          <a
            href="#"
            className="rise flex items-center gap-2.5 sm:gap-3"
            style={{ animationDelay: "0.05s" }}
            onClick={() => setMenuOpen(false)}
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white">
              <span className="h-2.5 w-2.5 rounded-full bg-white" />
            </span>
            <span className="text-base font-semibold text-white">ScoutScope</span>
          </a>

          {/* Desktop nav pill */}
          <div
            className="rise hidden items-center rounded-full border border-gray-700 bg-black/30 px-2 py-1 backdrop-blur-md lg:flex"
            style={{ animationDelay: "0.15s" }}
          >
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
              href={pillCta.href}
              className="flex items-center gap-1 rounded-full px-3.5 py-1.5 text-sm text-white/80 transition-colors hover:text-white"
            >
              {pillCta.label}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="rise relative z-50 flex h-11 w-11 items-center justify-center rounded-full border border-gray-700 bg-black/40 text-white backdrop-blur-md transition-colors hover:bg-white/10 lg:hidden"
            style={{ animationDelay: "0.15s" }}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      {/* Full-screen mobile menu */}
      {menuOpen && (
        <div className="fade-in fixed inset-0 z-40 flex flex-col bg-black/95 backdrop-blur-xl lg:hidden">
          <div className="flex flex-1 flex-col px-6 pb-10 pt-24">
            <RoleToggle
              role={role}
              onRoleChange={(r) => onRoleChange(r)}
              full
            />

            <nav className="mt-8 flex flex-col">
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rise border-b border-white/10 py-4 text-2xl font-medium text-white/90 transition-colors hover:text-white"
                  style={{ animationDelay: `${0.05 + i * 0.05}s` }}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <a
              href={cta.href}
              onClick={() => setMenuOpen(false)}
              className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-base font-semibold text-black transition-colors hover:bg-white/90"
            >
              {cta.label}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}

      {/* Full-screen hero (uses the site-wide font) */}
      <section className="relative flex min-h-[100svh] w-full flex-col overflow-hidden bg-black">
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
        <div className="pointer-events-none absolute inset-0 bg-black/45" />

        {/* Foreground content (clears the fixed header via pt) */}
        <div className="relative z-10 flex min-h-[100svh] flex-col justify-center pt-20 sm:pt-24 lg:justify-start">
          {/* Top section: two-column intro */}
          <div className="order-2 mx-auto mt-10 grid w-full max-w-7xl gap-3 px-5 pt-4 sm:px-6 sm:pt-6 md:gap-6 lg:order-1 lg:mt-0 lg:grid-cols-2 lg:px-8">
            <p
              className="rise max-w-md text-sm text-white/80 md:text-base"
              style={{ animationDelay: "0.25s" }}
            >
              Инновационная платформа для поиска и оценки киберспортивных
              талантов — автоматизируйте скаутинг, сравнивайте кандидатов и
              формируйте собственную базу за минуты.
            </p>
            <p
              className="rise text-sm text-white/80 md:text-base lg:text-right"
              style={{ animationDelay: "0.32s" }}
            >
              2 500+ скаутов и менеджеров. Скаутинг быстрее в 5 раз !
            </p>
          </div>

          {/* Center hero */}
          <div className="order-1 mx-auto flex w-full max-w-7xl flex-none flex-col items-center justify-center px-5 py-6 text-center sm:px-6 lg:order-2 lg:flex-1 lg:py-10 lg:px-8">
            <div className="rise" style={{ animationDelay: "0.34s" }}>
              <RoleToggle role={role} onRoleChange={onRoleChange} />
            </div>

            <p
              className="rise mt-6 text-[11px] uppercase tracking-tight text-white/80 sm:text-xs md:text-sm"
              style={{ animationDelay: "0.4s" }}
            >
              AI-скаутинг киберспортивных талантов
            </p>

            <h1 className="mt-4 font-medium leading-[0.9] tracking-tighter text-white sm:mt-5 sm:leading-[0.85]">
              <span
                className="rise block text-[1.85rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
                style={{ animationDelay: "0.5s" }}
              >
                Находите будущих
              </span>
              <span
                className="rise mt-1.5 block text-[1.85rem] sm:mt-2 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
                style={{ animationDelay: "0.6s" }}
              >
                <ShinyText
                  text="чемпионов."
                  baseColor="#64CEFB"
                  shineColor="#ffffff"
                  speed={3}
                  spread={100}
                />
              </span>
            </h1>

            {/* CTA (adapts to the selected role) */}
            <a
              href={cta.href}
              className="rise group mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-900 sm:mt-10 md:px-8 md:py-4 md:text-base"
              style={{ animationDelay: "0.72s" }}
            >
              {cta.label}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
