"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, MessageCircle, X } from "lucide-react";

import { Button } from "@/components/ui/button";

const navigation = [
  { label: "Зоны", href: "#zones" },
  { label: "Цены", href: "#prices" },
  { label: "Комплектующие", href: "#equipment" },
  { label: "Акции", href: "#promotions" },
  { label: "Контакты", href: "#contacts" },
];

const telegramUrl = "https://t.me/+79243336001"; // Замени на ссылку клуба
const whatsappUrl = "https://wa.me/79243336001"; // Замени на актуальный номер

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M21.8 4.2 18.5 20c-.25 1.12-.9 1.4-1.83.87l-5.05-3.72-2.44 2.35c-.27.27-.5.5-1.02.5l.36-5.14 9.36-8.45c.41-.36-.09-.56-.63-.2L5.68 13.48.7 11.92c-1.08-.34-1.1-1.08.23-1.6L20.4 2.76c.9-.33 1.69.22 1.4 1.44Z" />
    </svg>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl">
      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          aria-label="MATRIX — на главную"
          className="inline-flex items-center text-2xl font-bold tracking-[-0.06em]"
        >
          MATRIX
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Основная навигация"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Social links */}
        <div className="hidden items-center gap-1 md:flex">
          <a
            href={telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="inline-flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <TelegramIcon className="size-4.5" />
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="inline-flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <MessageCircle className="size-4.5" strokeWidth={1.8} />
          </a>
        </div>

        {/* Mobile menu button */}
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="border-t bg-background md:hidden">
          <nav
            aria-label="Мобильная навигация"
            className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="border-b py-3.5 text-sm text-muted-foreground transition-colors last:border-0 hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}

            <div className="flex gap-2 pt-4">
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={() =>
                  window.open(telegramUrl, "_blank", "noopener,noreferrer")
                }
              >
                <TelegramIcon className="size-4" />
                Telegram
              </Button>

              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={() =>
                  window.open(whatsappUrl, "_blank", "noopener,noreferrer")
                }
              >
                <MessageCircle className="size-4" />
                WhatsApp
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
