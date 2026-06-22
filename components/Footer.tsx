const columns = [
  {
    title: "Платформа",
    links: [
      { label: "Возможности", href: "#solution" },
      { label: "Как работает", href: "#how" },
      { label: "Тарифы", href: "#pricing" },
      { label: "Игрокам", href: "#players" },
    ],
  },
  {
    title: "Правовая информация",
    links: [
      { label: "Условия использования", href: "#" },
      { label: "Политика конфиденциальности", href: "#" },
      { label: "Обработка данных", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[#04070f] pt-16 pb-10">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.3fr_0.85fr_0.95fr_1.25fr]">
          <div>
            <a href="#" className="flex items-center gap-2 text-lg font-extrabold">
              Scout<span className="text-[var(--color-accent-2)]">Scope</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--color-muted)]">
              AI-платформа для поиска и оценки киберспортивных талантов.
              Скаутинг быстрее в 5 раз.
            </p>
            <a
              href="https://atlanttech.pro"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent-2)] hover:text-white"
            >
              Перейти на основной сайт →
            </a>
          </div>

          {columns.map((c) => (
            <div key={c.title}>
              <h4 className="text-sm font-bold">{c.title}</h4>
              <ul className="mt-4 space-y-3">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-[var(--color-muted)] transition-colors hover:text-white"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Оператор персональных данных */}
          <div>
            <h4 className="text-sm font-bold text-[var(--color-text)]">
              Оператор персональных данных
            </h4>
            <div className="mt-4 rounded-2xl border border-[var(--color-border)] bg-[#0b1322]/50 p-5 text-sm leading-relaxed text-[var(--color-muted)]">
              <p className="font-semibold text-[var(--color-text)]">
                ИП Горбунцов Даниил Олегович
              </p>
              <p className="mt-2">ИНН: 410116292857</p>
              <p className="mt-1">ОГРНИП: 325619600167854</p>
              <p className="mt-1">
                Email:{" "}
                <a
                  href="mailto:atlant.technology@yandex.com"
                  className="text-[var(--color-accent-2)] transition-colors hover:text-white"
                >
                  atlant.technology@yandex.com
                </a>
              </p>
              <p className="mt-1">
                Адрес регистрации: Ростовская область, Октябрьский район, слобода
                Красюковская
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--color-border)] pt-6 text-sm text-[var(--color-muted)] md:flex-row">
          <span>© {new Date().getFullYear()} ScoutScope. Все права защищены.</span>
          <a href="https://scoutscope.ru" className="hover:text-white">
            scoutscope.ru
          </a>
        </div>
      </div>
    </footer>
  );
}
