import { Play, Search, Card, Compare, Refresh, Clock, ArrowRight } from "./icons";

const pains = [
  { icon: Play, text: "Просмотр матчей вручную", hours: 12 },
  { icon: Search, text: "Поиск статистики на разных площадках", hours: 8 },
  { icon: Refresh, text: "Постоянная актуализация базы игроков", hours: 7 },
  { icon: Card, text: "Ведение таблиц и заметок", hours: 6 },
  { icon: Compare, text: "Сравнение кандидатов между собой", hours: 5 },
];

const maxHours = Math.max(...pains.map((p) => p.hours));

export default function Problem() {
  return (
    <section id="problem" className="relative overflow-hidden py-20 md:py-28">
      <div className="glow-blue pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] opacity-60" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-start gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12">
          {/* Left: heading + big stat */}
          <div className="lg:sticky lg:top-28">
            <h2 className="font-display text-2xl font-extrabold leading-[1.12] sm:text-3xl md:text-4xl lg:text-[2.9rem]">
              Почему традиционный скаутинг больше не работает
            </h2>
            <p className="mt-4 max-w-md text-sm text-[var(--color-muted)] sm:text-base">
              Скауты и менеджеры тонут в ручной работе, которую давно можно
              автоматизировать.
            </p>

            <div className="mt-6 overflow-hidden rounded-2xl border border-[var(--color-accent)]/30 bg-gradient-to-br from-[var(--color-accent)]/12 to-transparent p-5 sm:mt-8 sm:p-6">
              <div className="flex items-center gap-3 text-sm text-[var(--color-accent-2)]">
                <Clock className="h-5 w-5 shrink-0" />
                В среднем уходит на рутину
              </div>
              <div className="mt-2 flex items-end gap-3">
                <span className="font-display text-[2.75rem] font-extrabold leading-none text-white sm:text-5xl md:text-6xl">
                  38<span className="text-[var(--color-accent-2)]">ч</span>
                </span>
                <span className="pb-2 text-sm text-[var(--color-muted)]">/ в неделю</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                Это почти полная рабочая неделя — и перспективные игроки всё
                равно остаются{" "}
                <span className="font-semibold text-white">незамеченными</span>.
              </p>
            </div>
          </div>

          {/* Right: pain rows with time bars */}
          <div className="space-y-3">
            {pains.map((p, i) => (
              <div
                key={p.text}
                className="card card-glow group flex items-center gap-4 p-4 md:p-5"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[var(--color-accent)]/12 text-[var(--color-accent-2)] transition-colors group-hover:bg-[var(--color-accent)]/20">
                  <p.icon className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-sm font-medium leading-snug sm:text-[15px]">
                      {p.text}
                    </span>
                    <span className="shrink-0 text-sm font-bold text-[var(--color-accent-2)]">
                      ~{p.hours}ч
                    </span>
                  </div>
                  <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
                    <div
                      className="growx h-full rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-2)]"
                      style={{
                        width: `${(p.hours / maxHours) * 100}%`,
                        animationDelay: `${i * 90}ms`,
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}

            <a
              href="#solution"
              className="group mt-2 flex items-center justify-center gap-2 rounded-2xl border border-[var(--color-border)] bg-white/[0.02] p-4 text-sm font-semibold text-[var(--color-accent-2)] transition-colors hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-accent)]/8"
            >
              Посмотреть, как это решает ScoutScope
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
