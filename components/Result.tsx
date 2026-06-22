import { X, Check, ArrowRight, Clock, Bolt, Target } from "./icons";

const before = [
  "Часы ручного поиска",
  "Таблицы и документы",
  "Разрозненные данные",
];

const after = [
  "Готовая база кандидатов",
  "Автоматический поиск",
  "Централизованная система оценки",
];

const metrics = [
  { icon: Bolt, value: "5×", label: "быстрее скаутинг" },
  { icon: Clock, value: "−90%", label: "ручной работы" },
  { icon: Target, value: "1", label: "система вместо таблиц" },
];

export default function Result() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="glow-blue pointer-events-none absolute bottom-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 opacity-50" />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="text-center">
          <h2 className="mt-5 font-display text-3xl font-extrabold md:text-5xl">
            Скаутинг быстрее в <span className="text-grad">5 раз</span>
          </h2>
        </div>

        <div className="mt-14 grid items-stretch gap-5 md:grid-cols-[1fr_auto_1fr]">
          {/* Before */}
          <div className="relative rounded-2xl border border-red-500/20 bg-[#0b1322]/50 p-7">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-[var(--color-muted)]">
                До ScoutScope
              </h3>
              <span className="rounded-full border border-red-500/25 bg-red-500/10 px-2.5 py-1 text-[11px] font-semibold text-red-300">
                медленно
              </span>
            </div>
            <div className="mt-4 flex items-end gap-2">
              <span className="font-display text-4xl font-extrabold text-white">~8 ч</span>
              <span className="pb-1.5 text-xs text-[var(--color-muted)]">на один поиск</span>
            </div>
            <ul className="mt-6 space-y-3.5">
              {before.map((b) => (
                <li key={b} className="flex items-center gap-3 text-[15px] text-[var(--color-muted)]">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-red-500/10 text-red-400">
                    <X className="h-4 w-4" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Arrow / multiplier */}
          <div className="flex items-center justify-center py-2 md:py-0">
            <div className="flex items-center gap-2 md:flex-col">
              <div className="pulse-glow grid h-20 w-20 place-items-center rounded-2xl bg-gradient-to-br from-[#4f7dff] to-[#2c5be0] font-display text-xl font-black text-white">
                ×5
              </div>
              <ArrowRight className="h-6 w-6 rotate-90 text-[var(--color-accent-2)] md:rotate-0" />
            </div>
          </div>

          {/* After */}
          <div className="card relative border-[var(--color-accent)]/45 bg-gradient-to-br from-[var(--color-accent)]/14 to-transparent p-7">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-grad">После ScoutScope</h3>
              <span className="rounded-full border border-[#34d399]/30 bg-[#34d399]/10 px-2.5 py-1 text-[11px] font-semibold text-[#34d399]">
                быстро
              </span>
            </div>
            <div className="mt-4 flex items-end gap-2">
              <span className="font-display text-4xl font-extrabold text-white">~30 мин</span>
              <span className="pb-1.5 text-xs text-[var(--color-muted)]">на один поиск</span>
            </div>
            <ul className="mt-6 space-y-3.5">
              {after.map((a) => (
                <li key={a} className="flex items-center gap-3 text-[15px]">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-[#34d399]/15 text-[#34d399]">
                    <Check className="h-4 w-4" />
                  </span>
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Metrics row */}
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {metrics.map((m) => (
            <div key={m.label} className="card card-glow flex items-center gap-4 p-5">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[var(--color-accent)]/15 text-[var(--color-accent-2)]">
                <m.icon className="h-6 w-6" />
              </span>
              <div>
                <div className="font-display text-2xl font-extrabold text-white">
                  {m.value}
                </div>
                <div className="text-sm text-[var(--color-muted)]">{m.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
