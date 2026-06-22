import { Search, Chart, Target, Check } from "./icons";

const steps = [
  {
    n: "01",
    icon: Search,
    title: "Создайте запрос",
    text: "Опишите, кого ищете, простыми словами.",
    example: "Найди AWP-игроков из СНГ, 16–20 лет, с рейтингом 1.15+ за 3 месяца",
  },
  {
    n: "02",
    icon: Chart,
    title: "ScoutScope анализирует базу",
    text: "AI обрабатывает статистику, форму и историю матчей по всей базе игроков.",
  },
  {
    n: "03",
    icon: Target,
    title: "Система предлагает игроков",
    text: "Вы получаете список релевантных кандидатов, отсортированных по совпадению.",
  },
  {
    n: "04",
    icon: Check,
    title: "Принимайте решение",
    text: "Добавьте кандидатов в воронку, сравните их и принимайте решение.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative overflow-hidden py-20 md:py-28">
      <div className="glow-blue pointer-events-none absolute left-1/2 top-10 h-[420px] w-[620px] -translate-x-1/2 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center">
          <h2 className="mt-5 font-display text-3xl font-extrabold md:text-5xl">
            Четыре шага до <span className="text-grad">нужного игрока</span>
          </h2>
        </div>

        <div className="relative mt-16">
          {/* horizontal connector line (desktop) */}
          <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/40 to-transparent lg:block" />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="relative flex flex-col">
                {/* number node */}
                <div className="relative z-10 mb-5 flex items-center gap-3">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl border border-[var(--color-accent)]/40 bg-[#0b1322] font-display text-lg font-extrabold text-[var(--color-accent-2)] shadow-[0_8px_30px_-10px_rgba(59,110,246,0.7)]">
                    {s.n}
                  </span>
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--color-accent)]/15 text-[var(--color-accent-2)]">
                    <s.icon className="h-5 w-5" />
                  </span>
                </div>

                <div className="card card-glow flex-1 p-6">
                  <h3 className="text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                    {s.text}
                  </p>

                  {s.example && (
                    <div className="mt-4 flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[#070c18] px-3 py-2.5">
                      <Search className="h-4 w-4 shrink-0 text-[var(--color-accent-2)]" />
                      <span className="text-[13px] leading-snug text-[var(--color-text)]/90">
                        {s.example}
                        <span className="caret ml-0.5 inline-block h-3.5 w-0.5 translate-y-0.5 bg-[var(--color-accent-2)]" />
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
