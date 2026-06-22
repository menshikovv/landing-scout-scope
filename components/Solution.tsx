import { Funnel, Card, Search, Compare, Refresh, Play, ArrowRight } from "./icons";

export default function Solution() {
  return (
    <section id="solution" className="relative overflow-hidden py-20 md:py-28">
      <div className="glow-blue pointer-events-none absolute top-0 right-0 h-[520px] w-[520px] opacity-50" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center">
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-3xl font-extrabold md:text-5xl">
            ScoutScope берёт <span className="text-grad">рутину</span> на себя
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[var(--color-muted)]">
            Единая платформа, которая закрывает весь цикл скаутинга — от поиска
            до решения по кандидату.
          </p>
        </div>

        {/* Interface video inside a browser window frame */}
        <div className="relative mx-auto mt-14 max-w-4xl">
          <div className="absolute -inset-3 rounded-[28px] bg-gradient-to-tr from-[var(--color-accent)]/25 to-transparent blur-2xl" />
          <div className="card relative overflow-hidden p-0">
            {/* window chrome */}
            <div className="flex items-center gap-3 border-b border-[var(--color-border)] bg-[#070c18]/80 px-4 py-3">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="mx-auto flex items-center gap-2 rounded-md border border-[var(--color-border)] bg-[#0b1322] px-3 py-1 text-[11px] text-[var(--color-muted)]">
                <Search className="h-3 w-3" />
                app.scoutscope.ru/scouting
              </div>
            </div>
            <div className="relative aspect-video">
              <video className="h-full w-full object-cover" autoPlay muted loop playsInline poster="">
                {/* Подставьте сюда ссылку на видео интерфейса платформы */}
                <source src="/demo.mp4" type="video/mp4" />
              </video>
              <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-b from-[#070c18]/30 to-[#04070f]/85">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-[var(--color-accent)]/90 text-white shadow-[0_10px_40px_-8px_rgba(59,110,246,0.9)]">
                  <Play className="ml-1 h-7 w-7" />
                </span>
                <span className="text-sm font-medium text-[var(--color-muted)]">
                  Видео интерфейса платформы
                </span>
              </div>
            </div>
          </div>
          {/* floating stat chips */}
          <div className="absolute -left-4 top-20 hidden rounded-xl border border-[var(--color-border)] bg-[#0b1322]/90 px-4 py-3 shadow-xl backdrop-blur md:block">
            <div className="text-[11px] text-[var(--color-muted)]">Найдено игроков</div>
            <div className="font-display text-xl font-bold text-[var(--color-accent-2)]">142</div>
          </div>
          <div className="absolute -right-4 bottom-20 hidden rounded-xl border border-[var(--color-border)] bg-[#0b1322]/90 px-4 py-3 shadow-xl backdrop-blur md:block">
            <div className="text-[11px] text-[var(--color-muted)]">Совпадение</div>
            <div className="font-display text-xl font-bold text-[#34d399]">94%</div>
          </div>
        </div>

        {/* Bento feature grid */}
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {/* Воронка — wide with mini kanban */}
          <div className="card card-glow flex flex-col justify-between p-6 md:col-span-2">
            <div>
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--color-accent)]/15 text-[var(--color-accent-2)]">
                <Funnel className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold">Воронка скаутинга</h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-[var(--color-muted)]">
                Управляйте кандидатами по этапам отбора — от первого просмотра до
                решения.
              </p>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { s: "Найдено", n: 142, c: "#4f7dff" },
                { s: "Просмотр", n: 38, c: "#7aa6ff" },
                { s: "В команду", n: 6, c: "#34d399" },
              ].map((col) => (
                <div key={col.s} className="rounded-xl border border-[var(--color-border)] bg-[#070c18] p-3">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-[var(--color-muted)]">{col.s}</span>
                    <span className="font-bold" style={{ color: col.c }}>{col.n}</span>
                  </div>
                  <div className="mt-2 space-y-1.5">
                    {[0, 1].map((k) => (
                      <div key={k} className="rounded-md border border-[var(--color-border)] bg-[#0b1322] p-1.5">
                        <div className="h-1 w-3/4 rounded-full bg-white/10" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Карточки игроков */}
          <div className="card card-glow p-6">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--color-accent)]/15 text-[var(--color-accent-2)]">
              <Card className="h-6 w-6" />
            </span>
            <h3 className="mt-5 text-lg font-bold">Карточки игроков</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
              Вся информация о кандидате собрана в одном месте: статистика, роль,
              ссылки.
            </p>
            <div className="mt-5 flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[#070c18] p-3">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[#4f7dff] to-[#2c5be0] text-xs font-bold text-white">
                AC
              </span>
              <div className="flex-1">
                <div className="text-xs font-semibold">aceShot</div>
                <div className="text-[10px] text-[var(--color-muted)]">RU · AWP</div>
              </div>
              <span className="font-display text-sm font-bold text-[var(--color-accent-2)]">1.31</span>
            </div>
          </div>

          {/* Поиск по параметрам */}
          <div className="card card-glow p-6">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--color-accent)]/15 text-[var(--color-accent-2)]">
              <Search className="h-6 w-6" />
            </span>
            <h3 className="mt-5 text-lg font-bold">Поиск по параметрам</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
              Находите игроков по заданным критериям: роль, регион, рейтинг и
              форма.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["AWP", "СНГ", "16–20 лет", "1.15+"].map((t) => (
                <span key={t} className="rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 px-2.5 py-1 text-[11px] text-[var(--color-accent-2)]">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Сравнение */}
          <div className="card card-glow p-6">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--color-accent)]/15 text-[var(--color-accent-2)]">
              <Compare className="h-6 w-6" />
            </span>
            <h3 className="mt-5 text-lg font-bold">Сравнение кандидатов</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
              Сравнивайте сильные и слабые стороны игроков бок о бок.
            </p>
            <div className="mt-5 space-y-2">
              {[{ w: "82%", c: "#4f7dff" }, { w: "64%", c: "#7aa6ff" }].map((b, i) => (
                <div key={i} className="h-2 w-full overflow-hidden rounded-full bg-white/[0.06]">
                  <div className="h-full rounded-full" style={{ width: b.w, background: b.c }} />
                </div>
              ))}
            </div>
          </div>

          {/* Автообновление */}
          <div className="card card-glow p-6">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--color-accent)]/15 text-[var(--color-accent-2)]">
              <Refresh className="h-6 w-6" />
            </span>
            <h3 className="mt-5 text-lg font-bold">Автообновление базы</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
              Данные обновляются автоматически — без ручной работы и таблиц.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#34d399]/30 bg-[#34d399]/10 px-3 py-1.5 text-xs font-semibold text-[#34d399]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#34d399]" />
              Обновлено • каждые 12 ч
            </div>
          </div>

          {/* CTA banner */}
          <div className="card relative flex flex-col items-start justify-center overflow-hidden bg-gradient-to-br from-[var(--color-accent)]/20 to-transparent p-6 md:col-span-3 md:flex-row md:items-center md:justify-between">
            <div className="glow-blue pointer-events-none absolute -right-10 -top-10 h-48 w-48" />
            <div className="relative">
              <h3 className="font-display text-xl font-bold">Готовы ускорить отбор?</h3>
              <p className="mt-1 text-sm text-[var(--color-muted)]">
                Запустите первый поиск уже сегодня.
              </p>
            </div>
            <a
              href="#pricing"
              className="btn-primary relative mt-5 inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white md:mt-0"
            >
              Выбрать тариф
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
