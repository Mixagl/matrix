import {
  ArrowUpRight,
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

const phone = "+79243336001";
const address = "Россия, Владивосток, Горийская улица, 15";

export default function Contacts() {
  return (
    <section id="contacts" className="border-t border-border/60">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-24 sm:py-32">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Контакты
          </p>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Увидимся в MATRIX.
          </h2>

          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
            Выбирай место, собирай команду и приходи играть. Мы работаем
            круглосуточно.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="flex flex-col justify-between rounded-3xl border border-border bg-card p-6 sm:p-8">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-secondary">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Адрес</p>
                  <p className="mt-1 font-medium">Горийская улица, 15</p>
                  <p className="text-sm text-muted-foreground">Владивосток</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-secondary">
                  <Phone className="size-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Телефон</p>
                  <a
                    href={`tel:${phone}`}
                    className="mt-1 block font-medium transition-opacity hover:opacity-60"
                  >
                    +7 (924) 333-60-01
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-secondary">
                  <Clock3 className="size-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Режим работы</p>
                  <p className="mt-1 font-medium">Круглосуточно</p>
                  <p className="text-sm text-muted-foreground">
                    7 дней в неделю
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-3">
              <a
                href={`https://yandex.ru/maps/?text=${encodeURIComponent(address)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-foreground transition-opacity hover:opacity-80"
              >
                Построить маршрут
                <ArrowUpRight className="size-4" />
              </a>

              <a
                href={`https://wa.me/${phone.slice(1)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary"
              >
                <MessageCircle className="size-4" />
                Написать в WhatsApp
              </a>
            </div>
          </div>

          <div className="min-h-87.5 overflow-hidden rounded-3xl border border-border bg-muted sm:min-h-120">
            <iframe
              title="Карта расположения компьютерного клуба MATRIX"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "350px" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
