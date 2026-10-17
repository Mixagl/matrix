import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const zones = [
  {
    number: "01",
    name: "Comfort",
    title: "Всё для твоей игры.",
    description:
      "Комфортное место для соло-каток, рейтинговых матчей и долгих игровых сессий.",
    image: "/comfort.webp",
    imageAlt: "Игровые компьютеры в компьютерном клубе",
    className: "md:col-span-2",
  },
  {
    number: "02",
    name: "VIP",
    title: "Больше личного пространства.",
    description:
      "Для тех, кто ценит отдельную атмосферу и хочет сосредоточиться на игре.",
    image: "/VIP.webp",
    imageAlt: "Современное компьютерное оборудование",
    className: "",
  },
  {
    number: "03",
    name: "Duo / Trio",
    title: "Вместе интереснее.",
    description:
      "Играй с другом или собирай небольшую команду для совместных побед.",
    image: "/duos-trios.webp",
    imageAlt: "Игровое пространство для совместных матчей",
    className: "md:col-span-2",
  },
];

export default function Zones() {
  return (
    <section
      id="zones"
      className="bg-background text-foreground border-t border-border/60"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-20 sm:py-28 lg:py-36">
        {/* Section heading */}
        <div className="mb-10 flex flex-col gap-5 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Пространство MATRIX
            </p>

            <h2 className="max-w-2xl text-4xl font-semibold leading-[1.05] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
              Найди свой
              <br />
              <span className="text-muted-foreground">игровой формат.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
            Для одиночной игры, личного пространства или катки вместе с
            друзьями. Выбирай то, что подходит именно тебе.
          </p>
        </div>

        {/* Zone cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {zones.map((zone) => (
            <article
              key={zone.number}
              className={`group min-w-0 ${zone.className} transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
            >
              <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-muted sm:rounded-3xl">
                {/* Replace these temporary images with real club photos */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={zone.image}
                  alt={zone.imageAlt}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/65 via-transparent to-black/10" />

                <div className="absolute left-5 top-5 text-xs font-medium tracking-[0.15em] text-white/75 sm:left-6 sm:top-6">
                  {zone.number}
                </div>

                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
                  <h3 className="text-2xl font-medium tracking-[-0.04em] text-white sm:text-3xl">
                    {zone.name}
                  </h3>

                  <Link
                    href="#prices"
                    aria-label={`Посмотреть цены на зону ${zone.name}`}
                    className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white hover:text-black"
                  >
                    <ArrowUpRight className="size-5" />
                  </Link>
                </div>
              </div>

              <div className="flex flex-col gap-2 px-1 pb-2 pt-5 sm:pt-6">
                <h4 className="text-lg font-medium tracking-tight sm:text-xl">
                  {zone.title}
                </h4>

                <p className="max-w-lg text-sm leading-6 text-muted-foreground sm:text-[15px]">
                  {zone.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom link */}
        <div className="mt-10 flex justify-center sm:mt-14">
          <Link
            href="#prices"
            className="inline-flex h-11 items-center gap-2 rounded-full border border-border px-6 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Все тарифы
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
