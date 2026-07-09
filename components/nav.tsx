"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { Menu, X } from "lucide-react";
import { localizePath, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/en";

export function Nav({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const pathname = usePathname();
  const toggleRef = useRef<HTMLInputElement>(null);
  const home = lang === "en" ? "/" : "/es";
  const prefix = lang === "en" ? "" : "/es";

  const links = [
    { href: `${prefix}/properties`, label: dict.nav.properties },
    { href: `${prefix}/about`, label: dict.nav.about },
    { href: `${prefix}/faq`, label: dict.nav.faq },
    { href: `${prefix}/contact`, label: dict.nav.contact },
  ];

  const otherLocale: Locale = lang === "en" ? "es" : "en";
  // Closes the mobile panel after a client-side navigation. The panel
  // itself works with zero JS via the checkbox + CSS below - this is
  // just a progressive-enhancement nicety.
  const closeMenu = () => {
    if (toggleRef.current) toggleRef.current.checked = false;
  };

  return (
    <header className="sticky top-0 z-40 bg-quetzal">
      <input
        ref={toggleRef}
        type="checkbox"
        id="mobile-menu-toggle"
        className="peer sr-only"
        aria-label="Toggle menu"
      />

      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 peer-checked:[&_.icon-menu]:hidden peer-checked:[&_.icon-close]:block"
        aria-label="Primary"
      >
        <Link href={home} className="flex items-center gap-2 text-crema" onClick={closeMenu}>
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

        <label
          htmlFor="mobile-menu-toggle"
          className="cursor-pointer text-crema md:hidden"
          aria-label="Open menu"
        >
          <Menu size={22} className="icon-menu" />
          <X size={22} className="icon-close hidden" />
        </label>
      </nav>

      <div className="hidden border-t border-crema/10 bg-quetzal px-5 pb-5 peer-checked:block md:hidden">
        <div className="flex flex-col gap-4 pt-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-crema/90"
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={localizePath(pathname, otherLocale)}
            className="text-sm text-crema/70"
            onClick={closeMenu}
          >
            {dict.common.languageSwitchLabel}
          </Link>
          <Link
            href={`${prefix}/properties`}
            className="rounded-md bg-coral px-4 py-2 text-center text-sm font-medium text-crema"
            onClick={closeMenu}
          >
            {dict.nav.checkAvailability}
          </Link>
        </div>
      </div>
    </header>
  );
}
