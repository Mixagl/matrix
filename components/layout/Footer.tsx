import Link from "next/link";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";

const navLinks = [
  { label: "Зоны", href: "#zones" },
  { label: "Цены", href: "#prices" },
  { label: "Комплектующие", href: "#equipment" },
  { label: "Акции", href: "#promotions" },
  { label: "Контакты", href: "#contacts" },
];

const phone = "+79243336001";
const address = "Горийская улица, 15, Владивосток";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr] lg:gap-16 lg:py-16">
          {/* Brand */}
          <div>
            <Link
              href="/"
              aria-label="MATRIX — на главную"
              className="inline-flex items-center text-2xl font-bold tracking-[-0.06em]"
            >
              MATRIX
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">
              Твоё пространство для игры, общения и новых побед.
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              <span className="size-2 rounded-full bg-foreground" />
              Работаем круглосуточно
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Навигация в подвале">
            <h2 className="text-sm font-semibold">Навигация</h2>

            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contacts */}
          <div>
            <h2 className="text-sm font-semibold">Контакты</h2>

            <a
              href={`tel:${phone}`}
              className="mt-5 flex items-start gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Phone className="mt-0.5 size-4 shrink-0" />
              +7 (924) 333-60-01
            </a>

            <a
              href={`https://yandex.ru/maps/?text=${encodeURIComponent(address)}`}
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex items-start gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <MapPin className="mt-0.5 size-4 shrink-0" />
              <span>
                {address}
                <span className="mt-1 flex items-center gap-1 text-foreground">
                  Построить маршрут
                  <ArrowUpRight className="size-3.5" />
                </span>
              </span>
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-border py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 MATRIX. Все права защищены.</p>

          <a
            href="#top"
            className="w-fit transition-colors hover:text-foreground"
          >
            Наверх ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
