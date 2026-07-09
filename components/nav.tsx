"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { localizePath, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/en";

export function Nav({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const pathname = usePathname();
  const toggleRef = useRef<HTMLInputElement>(null);
  const home = lang === "en" ? "/" : "/es";
  const prefix = lang === "en" ? "" : "/es";
  const isHome = pathname === home;

  // Default false (= solid bar, always visible) so the page is fully
  // navigable with JS disabled. With JS, this becomes transparent while
  // parked at the top of the homepage hero, then solidifies on scroll -
  // see the effect below.
  const [transparent, setTransparent] = useState(false);

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setTransparent(window.scrollY < window.innerHeight * 0.75);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  // Ignore any stale scroll-derived state once we've navigated off the
  // homepage, rather than resetting it inside the effect above.
  const showTransparent = isHome && transparent;

  const links = [
    { href: `${prefix}/properties`, label: dict.nav.properties },
    { href: `${prefix}/blog`, label: dict.nav.blog },
    { href: `${prefix}/about`, label: dict.nav.about },
    { href: `${prefix}/faq`, label: dict.nav.faq },
    { href: `${prefix}/contact`, label: dict.nav.contact },
  ];

  const otherLocale: Locale = lang === "en" ? "es" : "en";
  // Closes the drawer after a client-side navigation. The drawer itself
  // works with zero JS via the checkbox + CSS below - this is just a
  // progressive-enhancement nicety.
  const closeMenu = () => {
    if (toggleRef.current) toggleRef.current.checked = false;
  };

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-colors duration-300 ${
        showTransparent ? "bg-transparent" : "bg-quetzal"
      }`}
    >
      <input
        ref={toggleRef}
        type="checkbox"
        id="mobile-menu-toggle"
        className="peer sr-only"
        aria-label="Toggle menu"
      />

      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between pl-2 pr-5 peer-checked:[&_.icon-menu]:hidden peer-checked:[&_.icon-close]:block">
        <label
          htmlFor="mobile-menu-toggle"
          className="cursor-pointer rounded-full p-2.5 text-crema transition-colors hover:bg-crema/15"
          aria-label="Open menu"
        >
          <Menu size={22} className="icon-menu" aria-hidden="true" />
          <X size={22} className="icon-close hidden" aria-hidden="true" />
        </label>

        <div className="flex items-center gap-3">
          <Link
            href={localizePath(pathname, otherLocale)}
            className="flex overflow-hidden rounded-full border border-crema/35 text-xs font-medium text-crema"
          >
            <span
              className={`px-2.5 py-1 ${lang === "en" ? "bg-crema/25" : ""}`}
            >
              EN
            </span>
            <span
              className={`px-2.5 py-1 ${lang === "es" ? "bg-crema/25" : ""}`}
            >
              ES
            </span>
          </Link>
          <Link
            href={`${prefix}/properties`}
            className="rounded-md bg-coral px-4 py-2 text-sm font-medium text-crema transition-opacity hover:opacity-90"
          >
            {dict.nav.checkAvailability}
          </Link>
        </div>
      </div>

      <div className="hidden border-t border-crema/10 bg-quetzal px-5 pb-5 peer-checked:block">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 pt-4">
          <Link href={home} className="text-sm text-crema/90" onClick={closeMenu}>
            {dict.nav.home}
          </Link>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-crema/90"
              aria-current={pathname === link.href ? "page" : undefined}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
