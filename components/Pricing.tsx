import { Check, ArrowRight } from "./icons";

const plans = [
  {
    name: "Basic",
    tagline: "Для небольших организаций и начинающих скаутов.",
    priceRub: "19 990 ₽",
    priceUsd: "$250",
    features: [
      "Воронка скаутинга",
      "Карточки кандидатов",
      "Сравнение до 3 игроков",
      "До 10 поисковых запросов в день",
      "До 45 игроков в выдаче по запросу",
    ],
    cta: "Выбрать Basic",
    featured: false,
  },
  {
    name: "Pro",
    tagline: "Для профессиональных команд и академий.",
    priceRub: "31 990 ₽",
    priceUsd: "$399",
    features: [
      "Воронка скаутинга",
      "Карточки кандидатов",
      "Сравнение без ограничений",
      "Обновление базы каждые 12 часов",
      "До 12 запросов каждые 8 часов",
    ],
    cta: "Выбрать Pro",
    featured: true,
  },
  {
    name: "Manager",
    tagline: "Для спортивных директоров и руководителей.",
    priceRub: "По запросу",
    priceUsd: "Индивидуально",
    features: [
      "Управление базой кандидатов",
      "Поиск игроков",
      "До 5 запросов в день",
      "До 30 игроков в выдаче по запросу",
      "Расширенные инструменты управления",
    ],
    cta: "Выбрать Manager",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center">
          <h2 className="mt-3 font-display text-3xl font-extrabold md:text-5xl">
            Выберите свой <span className="text-grad">пакет</span>
          </h2>
        </div>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`card card-glow relative flex flex-col p-7 ${
                p.featured
                  ? "border-[var(--color-accent)]/60 bg-gradient-to-b from-[var(--color-accent)]/12 to-transparent lg:-mt-4 lg:mb-[-1rem]"
                  : ""
              }`}
            >
              {p.featured && (
                <span className="pointer-events-none absolute inset-x-0 top-0 h-1 rounded-t-[20px] bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent" />
              )}
              <div className="flex items-center gap-2">
                <h3 className="font-display text-xl font-bold">ScoutScope {p.name}</h3>
                {p.featured && (
                  <span className="text-[var(--color-accent-2)]" aria-hidden>
                    ★
                  </span>
                )}
              </div>
              <p className="mt-2 min-h-[44px] text-sm text-[var(--color-muted)]">
                {p.tagline}
              </p>

              <div className="mt-5">
                <div className="text-3xl font-black">
                  {p.priceRub}
                  {p.priceRub !== "По запросу" && (
                    <span className="text-base font-medium text-[var(--color-muted)]"> / мес</span>
                  )}
                </div>
                <div className="mt-1 text-sm text-[var(--color-muted)]">{p.priceUsd}</div>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md bg-[var(--color-accent)]/15 text-[var(--color-accent-2)]">
                      <Check className="h-3 w-3" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="https://scoutscope.ru/register"
                className={`mt-7 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold ${
                  p.featured
                    ? "btn-primary text-white"
                    : "btn-ghost text-white"
                }`}
              >
                {p.cta}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-[var(--color-muted)]">
          Кнопки ведут на регистрацию на основном сайте и оплату через Робокассу.
        </p>
      </div>
    </section>
  );
}
