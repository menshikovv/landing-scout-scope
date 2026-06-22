"use client";

import { useState } from "react";
import { Check, Plus } from "./icons";

function Checkbox({
  checked,
  onChange,
  children,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  children: React.ReactNode;
}) {
  return (
    <label className="flex cursor-pointer select-none items-start gap-3 text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)]/90">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only"
      />
      <span className="checkbox mt-px" data-checked={checked} aria-hidden>
        <svg viewBox="0 0 24 24">
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </span>
      <span className="pt-0.5">{children}</span>
    </label>
  );
}

type Field = {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
};

const groups: { title: string; fields: Field[] }[] = [
  {
    title: "Личные данные",
    fields: [
      { name: "name", label: "Имя", placeholder: "Иван Иванов", required: true },
      { name: "nickname", label: "Никнейм", placeholder: "aceShot", required: true },
      { name: "age", label: "Возраст", type: "number", placeholder: "18", required: true },
      { name: "country", label: "Страна", placeholder: "Россия", required: true },
    ],
  },
  {
    title: "Игровая информация",
    fields: [
      { name: "faceit", label: "Ссылка Faceit", placeholder: "https://faceit.com/...", required: true },
    ],
  },
  {
    title: "Контакты",
    fields: [
      { name: "email", label: "Email", type: "email", placeholder: "you@email.com", required: true },
      { name: "telegram", label: "Telegram", placeholder: "@username", required: true },
    ],
  },
];

export default function PlayerForm() {
  const [agreeData, setAgreeData] = useState(false);
  const [agreePolicy, setAgreePolicy] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreeData || !agreePolicy) return;
    setSubmitted(true);
  };

  return (
    <section id="players" className="relative overflow-hidden py-20 md:py-28">
      <div className="glow-blue pointer-events-none absolute -top-20 right-0 h-[460px] w-[460px] opacity-50" />
      <div className="relative mx-auto grid max-w-6xl items-start gap-12 px-5 md:px-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="lg:sticky lg:top-28">
          <h2 className="mt-3 font-display text-3xl font-extrabold md:text-5xl">
            Попади в базу <span className="text-grad">ScoutScope</span>
          </h2>
          <p className="mt-5 text-[var(--color-muted)]">
            Если вы игрок и хотите, чтобы вас заметили команды и скауты, заполните
            анкету. После модерации ваш профиль может попасть в базу ScoutScope.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-[var(--color-text)]/90">
            {["Бесплатное добавление", "Профиль видят скауты и менеджеры", "Модерация перед публикацией"].map(
              (t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="grid h-6 w-6 place-items-center rounded-md bg-[#34d399]/15 text-[#34d399]">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {t}
                </li>
              )
            )}
          </ul>
        </div>

        <div className="card p-6 md:p-8">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <span className="grid h-16 w-16 place-items-center rounded-full bg-[#34d399]/15 text-[#34d399]">
                <Check className="h-8 w-8" />
              </span>
              <h3 className="mt-5 text-2xl font-bold">Заявка отправлена!</h3>
              <p className="mt-2 max-w-sm text-[var(--color-muted)]">
                Спасибо. Ваш профиль отправлен на модерацию — мы свяжемся с вами
                в Telegram.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-7">
              {groups.map((g) => (
                <div key={g.title}>
                  <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-[var(--color-accent-2)]">
                    {g.title}
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {g.fields.map((f) => (
                      <div
                        key={f.name}
                        className={g.fields.length === 1 ? "sm:col-span-2" : ""}
                      >
                        <label className="mb-1.5 block text-xs font-medium text-[var(--color-muted)]">
                          {f.label}
                        </label>
                        <input
                          name={f.name}
                          type={f.type ?? "text"}
                          placeholder={f.placeholder}
                          required={f.required}
                          className="field w-full px-4 py-3 text-sm text-white placeholder:text-[var(--color-muted)]/60"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="space-y-3 pt-2">
                <Checkbox checked={agreeData} onChange={setAgreeData}>
                  Согласен на обработку персональных данных
                </Checkbox>
                <Checkbox checked={agreePolicy} onChange={setAgreePolicy}>
                  Согласен с политикой конфиденциальности
                </Checkbox>
              </div>

              <button
                type="submit"
                disabled={!agreeData || !agreePolicy}
                className="btn-primary inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Plus className="h-4 w-4" />
                Добавить меня в ScoutScope
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
