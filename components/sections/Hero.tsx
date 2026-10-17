import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, ArrowDown } from "lucide-react";
import Reveal from "../ui/reveal";

export default function Hero() {
  return (
    <section id="top" className="overflow-hidden bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-5 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-24 lg:px-12 lg:pb-28 lg:pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-14 xl:gap-20">
          {/* Левая колонка — текст */}
          <Reveal direction="left" delay={0.1}>
            <div className="flex flex-col items-start">
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground sm:text-sm">
                Компьютерный клуб · Владивосток
              </p>

              <h1 className="text-[clamp(3.5rem,8vw,6.75rem)] font-semibold leading-[0.9] tracking-[-0.075em]">
                Играй.
                <br />
                <span className="text-muted-foreground">Выходи за рамки.</span>
              </h1>

              <p className="mt-7 max-w-lg text-base leading-7 text-muted-foreground sm:mt-8 sm:text-lg sm:leading-8">
                Твоё пространство для больших побед. Мощные компьютеры,
                комфортные игровые зоны и любимые игры — в любое время суток.
              </p>

              <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <Link
                  href="#prices"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-85"
                >
                  Выбрать тариф
                  <ArrowUpRight className="size-4" />
                </Link>

                <Link
                  href="#contacts"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border px-7 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <MapPin className="size-4" />
                  Как добраться
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Правая колонка — изображение */}
          <Reveal direction="right" delay={0.2}>
            <div className="relative">
              <div className="relative aspect-4/5 overflow-hidden rounded-2xl border border-border bg-muted sm:aspect-5/4 lg:aspect-4/5 xl:aspect-5/4">
                <Image
                  src="/hero.webp"
                  alt="Игровые компьютеры и оборудование в компьютерном клубе MATRIX"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover object-center"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/65 via-transparent to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-7 lg:p-8">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/70">
                    Твоя игра. Твои правила.
                  </p>

                  <p className="mt-2 text-2xl font-medium tracking-tight sm:text-3xl">
                    Встречаемся в MATRIX.
                  </p>

                  <Link
                    href="#zones"
                    className="mt-5 inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
                  >
                    Исследовать клуб
                    <ArrowDown className="size-4" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
