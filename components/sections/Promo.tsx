import Link from "next/link";
import { ArrowUpRight, Gift, Users, MessageSquareText } from "lucide-react";

const promotions = [
  {
    title: "Приведи друга",
    value: "150 ₽",
    valueLabel: "на баланс",
    description:
      "Пригласи друга, который ещё не зарегистрирован в системе клуба, и получи бонус.",
    conditions: [
      "Можно пригласить только одного друга на аккаунт",
      "Друг должен быть новым пользователем",
    ],
    icon: Users,
    featured: false,
  },
  {
    title: "День рождения в MATRIX",
    value: "100%",
    valueLabel: "кэшбэк на депозит",
    description:
      "Пополняй депозит и получай кэшбэк в честь своего дня рождения.",
    conditions: [
      "Акция действует за 2 дня до дня рождения",
      "И ещё 2 дня после него",
    ],
    icon: Gift,
    featured: true,
  },
  {
    title: "Оставь отзыв",
    value: "100 ₽",
    valueLabel: "на баланс",
    description:
      "Расскажи о своём опыте игры в MATRIX и поделись мнением на 2ГИС.",
    conditions: ["Оставь отзыв о клубе", "Помоги нам становиться лучше"],
    icon: MessageSquareText,
    featured: false,
  },
];

export default function Promo() {
  return (
    <section
      id="promotions"
      className="border-t border-border/60 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-medium tracking-wide text-muted-foreground">
              БОНУСЫ И ПРЕДЛОЖЕНИЯ
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Играй. Получай больше.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
              Больше поводов заглянуть в MATRIX — и приятные бонусы за
              активность.
            </p>
          </div>

          <p className="text-sm text-muted-foreground">
            3 предложения для наших гостей
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {promotions.map((promo) => {
            const Icon = promo.icon;

            return (
              <article
                key={promo.title}
                className={`flex flex-col rounded-3xl border p-6 sm:p-7 ${
                  promo.featured
                    ? "border-foreground/15 bg-secondary/60"
                    : "border-border bg-card"
                }`}
              >
                <div className="flex size-11 items-center justify-center rounded-2xl bg-background">
                  <Icon className="size-5" strokeWidth={1.6} />
                </div>

                <h3 className="mt-6 text-xl font-semibold tracking-tight">
                  {promo.title}
                </h3>

                <div className="mt-5">
                  <p className="text-4xl font-semibold tracking-tight sm:text-5xl">
                    {promo.value}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {promo.valueLabel}
                  </p>
                </div>

                <p className="mt-5 text-sm leading-6 text-muted-foreground">
                  {promo.description}
                </p>

                <div className="mt-6 flex-1 border-t border-border/80 pt-5">
                  <p className="mb-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Условия
                  </p>

                  <ul className="space-y-3">
                    {promo.conditions.map((condition) => (
                      <li
                        key={condition}
                        className="flex gap-3 text-sm leading-5"
                      >
                        <span
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground/60"
                          aria-hidden="true"
                        />
                        <span>{condition}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {promo.title === "Оставь отзыв" && (
                  <Link
                    href="https://go.2gis.com/qFApQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex h-11 items-center justify-center gap-2 rounded-full border border-border text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Оставить отзыв в 2ГИС
                    <ArrowUpRight className="size-4" />
                  </Link>
                )}
              </article>
            );
          })}
        </div>

        <p className="mt-6 text-xs leading-5 text-muted-foreground">
          Подробности начисления бонусов и дополнительные ограничения уточняйте
          у администратора клуба.
        </p>
      </div>
    </section>
  );
}
