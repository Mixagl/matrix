import {
  Cpu,
  MemoryStick,
  Monitor,
  Headphones,
  Mouse,
  Keyboard,
  CircuitBoard,
} from "lucide-react";

const pcSpecs = [
  {
    icon: CircuitBoard,
    value: "RTX 4060",
    label: "Видеокарта",
  },
  {
    icon: Cpu,
    value: "i5-13400F",
    label: "Процессор",
  },
  {
    icon: MemoryStick,
    value: "32 GB DDR5",
    label: "Оперативная память",
  },
];

const zones = [
  {
    name: "Comfort",
    description: "Всё необходимое для комфортной игры.",
    refreshRate: "180",
    monitor: "Ardor 27″",
    devices: [
      { icon: Headphones, label: "Наушники", model: "Arena Dark PR" },
      { icon: Mouse, label: "Мышь", model: "Logitech G102" },
      { icon: Keyboard, label: "Клавиатура", model: "Red Square 10" },
    ],
  },
  {
    name: "VIP",
    description: "Повышенная частота обновления и другая периферия.",
    refreshRate: "240",
    monitor: "Ardor 27″",
    devices: [
      { icon: Headphones, label: "Наушники", model: "Hyper Cloud 2" },
      { icon: Mouse, label: "Мышь", model: "Logitech G403" },
      { icon: Keyboard, label: "Клавиатура", model: "Arena Dark PR" },
    ],
  },
];

export default function Equipment() {
  return (
    <section
      id="equipment"
      className="border-t border-border/60 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-wide text-muted-foreground">
            ОБОРУДОВАНИЕ MATRIX
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Техника для твоей игры.
          </h2>

          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
            Мощные ПК и проверенная игровая периферия — для комфортной игры и
            соревновательных матчей.
          </p>
        </div>

        {/* Общая конфигурация ПК */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-card">
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:p-10">
            <div>
              <div className="flex size-12 items-center justify-center rounded-2xl bg-secondary">
                <Cpu className="size-6" strokeWidth={1.6} />
              </div>

              <p className="mt-6 text-sm text-muted-foreground">
                ВО ВСЕХ ЗОНАХ
              </p>

              <h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                Единая мощная база.
              </h3>

              <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
                Одна конфигурация ПК для всех игровых зон. Выбирай место под
                свой стиль игры.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {pcSpecs.map((spec) => {
                const Icon = spec.icon;

                return (
                  <div
                    key={spec.label}
                    className="rounded-2xl bg-secondary/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <Icon
                      className="size-5 text-muted-foreground"
                      strokeWidth={1.6}
                    />

                    <p className="mt-8 text-lg font-semibold tracking-tight sm:text-xl">
                      {spec.value}
                    </p>

                    <p className="mt-1 text-sm text-muted-foreground">
                      {spec.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Периферия по зонам */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {zones.map((zone) => (
            <article
              key={zone.name}
              className="rounded-3xl border border-border bg-card p-6 sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {zone.name}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {zone.description}
                  </p>
                </div>

                <div className="shrink-0 text-right">
                  <p className="text-3xl font-semibold tracking-tight tabular-nums">
                    {zone.refreshRate}
                  </p>
                  <p className="text-xs text-muted-foreground">Гц</p>
                </div>
              </div>

              <div className="mt-7 flex items-center gap-3 rounded-2xl bg-secondary/60 p-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-background">
                  <Monitor className="size-5" strokeWidth={1.6} />
                </div>

                <div>
                  <p className="text-sm font-medium">{zone.monitor}</p>
                  <p className="text-xs text-muted-foreground">
                    Игровой монитор · {zone.refreshRate} Гц
                  </p>
                </div>
              </div>

              <div className="mt-5 divide-y divide-border">
                {zone.devices.map((device) => {
                  const Icon = device.icon;

                  return (
                    <div
                      key={device.label}
                      className="flex items-center gap-4 py-4"
                    >
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary">
                        <Icon
                          className="size-5 text-muted-foreground"
                          strokeWidth={1.6}
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-xs text-muted-foreground">
                          {device.label}
                        </p>
                        <p className="mt-1 text-sm font-medium">
                          {device.model}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 text-xs leading-5 text-muted-foreground">
          Характеристики указаны по конфигурации клуба. Наличие конкретной
          периферии в отдельных местах уточняйте у администратора.
        </p>
      </div>
    </section>
  );
}
