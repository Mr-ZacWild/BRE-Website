"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { localizePath, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/en";

export function Nav({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const home = lang === "en" ? "/" : "/es";
  const prefix = lang === "en" ? "" : "/es";

  const links = [
    { href: `${prefix}/properties`, label: dict.nav.properties },
    { href: `${prefix}/about`, label: dict.nav.about },
    { href: `${prefix}/faq`, label: dict.nav.faq },
    { href: `${prefix}/contact`, label: dict.nav.contact },
  ];

  const otherLocale: Locale = lang === "en" ? "es" : "en";

  return (
    <header className="sticky top-0 z-40 bg-quetzal">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5"
        aria-label="Primary"
      >
        <Link
          href={home}
          className="flex items-center gap-2 text-crema"
          onClick={() => setOpen(false)}
        >
          <span
            className="flex h-7 w-7 items-center justify-center rounded-full bg-mint text-quetzal text-xs font-semibold"
            aria-hidden="true"
          >
            BR
          </span>
          <span className="font-heading text-sm tracking-wide">buen rollo</span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-crema/90 transition-colors hover:text-crema"
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href={localizePath(pathname, otherLocale)}
            className="rounded-full border border-crema/35 px-3 py-1 text-xs text-crema"
          >
            {dict.common.languageSwitchLabel}
          </Link>
          <Link
            href={`${prefix}/properties`}
            className="rounded-md bg-coral px-4 py-2 text-sm font-medium text-crema transition-opacity hover:opacity-90"
          >
            {dict.nav.checkAvailability}
          </Link>
        </div>

        <button
          type="button"
          className="text-crema md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-crema/10 bg-quetzal px-5 pb-5 md:hidden">
          <div className="flex flex-col gap-4 pt-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-crema/90"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={localizePath(pathname, otherLocale)}
              className="text-sm text-crema/70"
              onClick={() => setOpen(false)}
            >
              {dict.common.languageSwitchLabel}
            </Link>
            <Link
              href={`${prefix}/properties`}
              className="rounded-md bg-coral px-4 py-2 text-center text-sm font-medium text-crema"
              onClick={() => setOpen(false)}
            >
              {dict.nav.checkAvailability}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
