"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { localizePath, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/en";
import { getWhatsAppUrl } from "@/lib/whatsapp";

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
    { href: `${prefix}/trust`, label: dict.nav.trust },
    { href: `${prefix}/faq`, label: dict.nav.faq },
    { href: `${prefix}/contact`, label: dict.nav.contact },
  ];

  const whatsappUrl = getWhatsAppUrl(lang);
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

      <div
        className={`relative mx-auto flex max-w-6xl items-center justify-between pl-2 pr-5 peer-checked:[&_.icon-menu]:hidden peer-checked:[&_.icon-close]:block ${
          isHome ? "h-16 sm:h-28 lg:h-32" : "h-16"
        }`}
      >
        <label
          htmlFor="mobile-menu-toggle"
          className={`relative z-50 cursor-pointer rounded-full text-crema transition-colors ${
            showTransparent ? "p-0" : "p-2.5 hover:bg-crema/15"
          }`}
          aria-label="Open menu"
        >
          <Menu size={22} className="icon-menu" aria-hidden="true" />
          <X size={22} className="icon-close hidden" aria-hidden="true" />
        </label>

        {isHome && (
          <Link
            href={home}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            aria-label="Buen Rollo Escapes home"
          >
            <Image
              src="/images/brand/logo-full.png"
              alt="Buen Rollo Escapes"
              width={1005}
              height={472}
              className="h-9 w-auto sm:h-[90px] lg:h-[110px]"
              priority
            />
          </Link>
        )}

        <div className="flex items-center gap-3">
          {showTransparent ? (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-xs font-medium uppercase tracking-widest text-crema/90 underline-offset-4 transition-colors hover:text-crema hover:underline ${
                isHome ? "hidden sm:inline-block" : ""
              }`}
            >
              {dict.nav.checkAvailability}
            </a>
          ) : (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-md bg-coral px-4 py-2 text-sm font-medium text-crema transition-opacity hover:opacity-90 ${
                isHome ? "hidden sm:inline-block" : ""
              }`}
            >
              {dict.nav.checkAvailability}
            </a>
          )}
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
        </div>
      </div>

      <div
        className="fixed inset-y-0 left-0 z-40 w-full max-w-sm -translate-x-full bg-quetzal/55 backdrop-blur-sm transition-transform duration-300 ease-out peer-checked:translate-x-0"
      >
        <div className="flex h-full flex-col justify-center gap-5 px-10 sm:px-12">
          <Link
            href={home}
            className="font-heading text-2xl text-crema/95 transition-colors hover:text-crema sm:text-3xl"
            onClick={closeMenu}
          >
            {dict.nav.home}
          </Link>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-heading text-2xl text-crema/95 transition-colors hover:text-crema sm:text-3xl"
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
