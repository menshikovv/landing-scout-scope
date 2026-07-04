"use client";

import { useState } from "react";
import { Plus } from "./icons";

const scoutItems = [
  {
    q: "Кто может пользоваться ScoutScope?",
    a: "Скауты, менеджеры, академии и профессиональные организации — все, кому нужно быстро находить и оценивать игроков.",
  },
  {
    q: "Как часто обновляется база?",
    a: "В зависимости от тарифа — от нескольких раз в день до автоматического обновления каждые 12 часов.",
  },
  {
    q: "Можно ли добавить своего игрока?",
    a: "Да, через форму регистрации игрока. После модерации профиль может попасть в базу ScoutScope.",
  },
];

const playerItems = [
  {
    q: "Что повышает шансы попасть в базу?",
    a: "Полностью заполненная анкета, актуальные ссылки на игровые аккаунты, достоверная информация и активная игровая статистика.",
  },
  {
    q: "Могут ли команды сами найти мой профиль?",
    a: "Да. После успешной модерации ваш профиль становится доступен скаутам, менеджерам и организациям, использующим ScoutScope.",
  },
  {
    q: "Что дает попадание игроков в ScoutScope?",
    a: "Попадание в ScoutScope повышает заметность вашего профиля для скаутов, менеджеров и профессиональных организаций. Такие игроки получают больше внимания при поиске кандидатов и чаще рассматриваются для приглашений на просмотры, тесты и в составы команд.",
  },
  {
    q: "Как формируется ТОП игроков?",
    a: "Рейтинг игрока вычисляется при помощи специальной формулы, которая учитывает уровень игры и стабильность результатов. Рейтинг регулярно обновляется, поэтому каждый игрок может улучшить свою позицию.",
  },
];

export default function FAQ({ role }: { role: "scout" | "player" }) {
  const items = role === "player" ? playerItems : scoutItems;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <div className="text-center">
          <h2 className="mt-3 font-display text-3xl font-extrabold md:text-5xl">
            Частые вопросы
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className={`overflow-hidden rounded-2xl border transition-colors ${
                  isOpen
                    ? "border-[var(--color-accent)]/50 bg-[#0b1322]/70"
                    : "border-[var(--color-border)] bg-[#0b1322]/40"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base font-semibold md:text-lg">{item.q}</span>
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[var(--color-accent)]/15 text-[var(--color-accent-2)] transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
                <div
                  data-noreveal
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-[15px] leading-relaxed text-[var(--color-muted)]">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
