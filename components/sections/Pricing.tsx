"use client";

import { useState } from "react";
import { ArrowUpRight, Clock3 } from "lucide-react";

const zones = [
  {
    name: "Comfort",
    description: "Всё необходимое для комфортной игры",
    prices: {
      weekday: [120, 320, 500, 650],
      weekend: [140, 360, 600, 700],
    },
  },
  {
    name: "VIP",
    description: "Больше пространства и приватности",
    prices: {
      weekday: [150, 430, 600, 800],
      weekend: [180, 500, 700, 1000],
    },
  },
  {
    name: "Duo / Trio",
    description: "Играй вместе с друзьями",
    prices: {
      weekday: [230, 650, 1100, 1650],
      weekend: [270, 700, 1200, 1800],
    },
  },
];

const periods = ["1 час", "3 часа", "5 часов", "Ночь"];

export default function Pricing() {
  const [day, setDay] = useState<"weekday" | "weekend">("weekday");

  return (
    <section id="prices" className="border-t border-border/60">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-24 sm:py-32">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Тарифы MATRIX
            </p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Твоё время. Твои правила.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
              Выбирай игровую зону и планируй время для игры.
            </p>
          </div>

          <div className="inline-flex w-fit rounded-full border border-border bg-muted/40 p-1">
            <button
              type="button"
              onClick={() => setDay("weekday")}
              aria-pressed={day === "weekday"}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                day === "weekday"
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Будни
            </button>
            <button
              type="button"
              onClick={() => setDay("weekend")}
              aria-pressed={day === "weekend"}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                day === "weekend"
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Выходные
            </button>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {zones.map((zone) => (
            <article
              key={zone.name}
              className="rounded-3xl border border-border bg-card p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {zone.name}
                  </h3>
                  <p className="mt-2 min-h-10 text-sm leading-6 text-muted-foreground">
                    {zone.description}
                  </p>
                </div>
                <Clock3
                  aria-hidden="true"
                  className="mt-1 size-5 shrink-0 text-muted-foreground"
                />
              </div>

              <div className="my-6 h-px bg-border" />

              <div className="space-y-5">
                {periods.map((period, index) => (
                  <div
                    key={period}
                    className="flex items-center justify-between gap-4"
                  >
                    <span className="text-sm text-muted-foreground">
                      {period}
                    </span>
                    <span className="text-2xl font-semibold tracking-tight tabular-nums">
                      {zone.prices[day][index]}{" "}
                      <span className="text-sm font-normal text-muted-foreground">
                        ₽
                      </span>
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="#contacts"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-65"
              >
                Уточнить детали
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </a>
              <p className="mt-4 text-xs text-muted-foreground">
                Стоимость за одно игровое место
              </p>
            </article>
          ))}
        </div>

        <p className="mt-6 text-xs leading-5 text-muted-foreground">
          Тариф выходного дня действует в пятницу и субботу с 22:00 до 10:00.
          Условия ночного тарифа могут отличаться — уточняйте у администратора.
        </p>
      </div>
    </section>
  );
}
