"use client";

import { useEffect, useState } from "react";
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

type Prospect = {
  rank: number;
  player: string;
  role: string;
  elo: number;
  faceitUrl: string;
  steamUrl: string;
  age: number | null;
  description: string;
};

const API_URL = "http://195.133.50.65:8080/api/v1/top-talents";

type ApiTalent = {
  user_id?: number;
  faceit_elo?: number;
  faceit_url?: string;
  role?: string;
  game_nickname?: string;
  age?: number | null;
  description?: string;
  steam_url?: string;
  moderation_status?: string;
};

type ApiResponse = {
  talents?: ApiTalent[];
};

const eloStyles: { min: number; label: string; cls: string }[] = [
  { min: 5000, label: "Elite", cls: "bg-[#f59e0b]/15 text-[#fbbf24] ring-1 ring-[#f59e0b]/30" },
  { min: 4000, label: "High", cls: "bg-[#34d399]/15 text-[#34d399] ring-1 ring-[#34d399]/30" },
  { min: 3000, label: "Mid", cls: "bg-[#3b6ef6]/15 text-[#6b9bff] ring-1 ring-[#3b6ef6]/30" },
  { min: 0, label: "Low", cls: "bg-white/8 text-[var(--color-muted)] ring-1 ring-white/10" },
];

function getEloStyle(elo: number) {
  for (const s of eloStyles) if (elo >= s.min) return s;
  return eloStyles[eloStyles.length - 1];
}

function mapProspect(item: ApiTalent, index: number): Prospect {
  return {
    rank: index + 1,
    player: item.game_nickname ?? "—",
    role: item.role ?? "—",
    elo: item.faceit_elo ?? 0,
    faceitUrl: item.faceit_url ?? "#",
    steamUrl: item.steam_url ?? "",
    age: item.age ?? null,
    description: item.description ?? "",
  };
}

function ProspectsTable() {
  const [prospects, setProspects] = useState<Prospect[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function fetchTop() {
      try {
        setLoading(true);
        setError(false);
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json: ApiResponse = await res.json();
        if (cancelled) return;
        if (Array.isArray(json.talents)) {
          setProspects(json.talents.map(mapProspect));
        }
      } catch {
        if (!cancelled) setError(true);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchTop();
    return () => { cancelled = true; };
  }, []);

  return (
    <section className="relative overflow-hidden pt-20 md:pt-28">
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent-2)]">
            Топ перспективных игроков
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold md:text-5xl">
            Рейтинг талантов <span className="text-grad">ScoutScope</span>
          </h2>
          <p className="mt-4 text-[var(--color-muted)]">
            Так скауты видят базу: игроки, отранжированные по ELO и оценке
            потенциала. Попади в базу — и окажешься в этом списке.
          </p>
        </div>

        <div className="card mt-8 overflow-hidden p-0">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-left">
              <thead>
                <tr className="border-b border-[var(--color-border)] text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">
                  <th className="px-5 py-4 md:px-6">Ранг</th>
                  <th className="px-5 py-4 md:px-6">Игрок</th>
                  <th className="px-5 py-4 md:px-6">Роль</th>
                  <th className="px-5 py-4 text-right md:px-6">ELO</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={4} className="px-5 py-12 text-center text-sm text-[var(--color-muted)]">
                      Загрузка данных...
                    </td>
                  </tr>
                ) : error || prospects.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-5 py-12 text-center text-sm text-[var(--color-muted)]">
                      {error
                        ? "Не удалось загрузить рейтинг. Попробуйте позже."
                        : "Пока нет данных."}
                    </td>
                  </tr>
                ) : (
                  prospects.map((p) => (
                    <tr
                      key={p.rank}
                      className="border-b border-[var(--color-border)]/60 transition-colors last:border-0 hover:bg-white/[0.03]"
                    >
                      <td className="px-5 py-4 md:px-6">
                        <span
                          className={`grid h-8 w-8 place-items-center rounded-lg text-sm font-bold ${
                            p.rank <= 3
                              ? "bg-[var(--color-accent)]/15 text-[var(--color-accent-2)]"
                              : "text-[var(--color-muted)]"
                          }`}
                        >
                          {p.rank}
                        </span>
                      </td>
                      <td className="px-5 py-4 md:px-6">
                        <div className="flex items-center gap-3">
                          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-glow)] text-xs font-bold text-white">
                            {p.player.slice(0, 2).toUpperCase()}
                          </span>
                          <div>
                            <a
                              href={p.faceitUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-semibold text-[var(--color-text)] hover:underline"
                            >
                              {p.player}
                            </a>
                            <div className="text-xs text-[var(--color-muted)]">
                              {p.age ? `${p.age} лет` : ""}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-4 md:px-6">
                        <span className="text-sm text-[var(--color-text)]/80">
                          {p.role}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-right md:px-6">
                        <div className="flex items-center justify-end gap-2">
                          <span
                            className={`inline-flex items-center justify-center rounded-md px-2 py-0.5 text-xs font-bold ${getEloStyle(p.elo).cls}`}
                          >
                            {getEloStyle(p.elo).label}
                          </span>
                          <span className="font-mono text-sm font-semibold text-[var(--color-text)]">
                            {p.elo.toLocaleString("ru-RU")}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

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
    <>
      <ProspectsTable />
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
    </>
  );
}
