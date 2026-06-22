import { ArrowRight, Bolt, Refresh, Search, Compare } from "./icons";
import VideoBackground from "./VideoBackground";

// Replace with your own HLS (.m3u8) stream URL.
const HLS_SRC = "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";

const advantages = [
  { icon: Bolt, text: "Скаутинг в 5 раз быстрее" },
  { icon: Refresh, text: "Автообновление базы" },
  { icon: Search, text: "Умный поиск по критериям" },
  { icon: Compare, text: "Сравнение кандидатов" },
];

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      {/* Full-screen HLS video background */}
      <VideoBackground
        src={HLS_SRC}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Readability overlays */}
      <div className="pointer-events-none absolute inset-0 bg-[#04070f]/40" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#04070f] via-[#04070f]/35 to-[#04070f]/70" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#04070f]/85 via-transparent to-transparent" />

      {/* Bottom-left hero content */}
      <div className="absolute inset-x-0 bottom-0">
        <div className="mx-auto max-w-7xl px-5 pb-14 md:px-8 md:pb-20">
          <div className="max-w-2xl">
            <div className="rise flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-2)]" style={{ animationDelay: "0.05s" }}>
              <span className="h-px w-8 bg-gradient-to-r from-[var(--color-accent)] to-transparent" />
              AI-скаутинг киберспортивных талантов
            </div>

            <h1
              className="rise font-display mt-5 text-[2rem] font-extrabold leading-[1.08] text-white sm:text-5xl md:text-6xl md:leading-[1.04]"
              style={{ animationDelay: "0.15s" }}
            >
              Находите будущих
              <br />
              чемпионов с <span className="text-grad">ScoutScope</span>
            </h1>

            <p
              className="rise mt-5 max-w-xl text-base leading-relaxed text-[var(--color-text)]/80 md:text-lg"
              style={{ animationDelay: "0.28s" }}
            >
              AI-платформа для поиска и оценки киберспортивных талантов —
              автоматизируйте скаутинг и формируйте базу за минуты.
            </p>

            <div
              className="rise mt-7 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "0.4s" }}
            >
              <a
                href="#pricing"
                className="btn-primary inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white md:text-base"
              >
                Попробовать ScoutScope
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#how"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/20 md:text-base"
              >
                Как это работает
              </a>
            </div>

            {/* Glassmorphic advantage bar */}
            <div
              className="rise mt-8 flex flex-wrap gap-x-6 gap-y-3 rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 backdrop-blur-xl"
              style={{ animationDelay: "0.52s" }}
            >
              {advantages.map((a) => (
                <div key={a.text} className="flex items-center gap-2.5">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-[var(--color-accent)]/25 text-[var(--color-accent-2)]">
                    <a.icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm text-white/90">{a.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="pointer-events-none absolute bottom-5 left-1/2 hidden -translate-x-1/2 lg:block">
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/25 p-1">
          <span className="h-2 w-1 animate-bounce rounded-full bg-white/70" />
        </div>
      </div>
    </section>
  );
}
