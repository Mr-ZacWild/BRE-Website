import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/en";

export function Footer({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const prefix = lang === "en" ? "" : "/es";

  return (
    <footer className="bg-[#16302b] text-crema/70">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="font-heading text-sm text-crema">Buen Rollo LLC</p>
            <p className="mt-2 text-sm italic" style={{ fontFamily: "var(--font-accent)" }}>
              {dict.footer.tagline}
            </p>
            <p className="mt-3 text-xs">{dict.footer.locations}</p>
            <p className="mt-1 text-xs text-crema/40">Registered office: Sheridan, Wyoming</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wide text-crema/50">
              {dict.nav.properties}
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href={`${prefix}/guatemala-city`}>{dict.nav.guatemalaCity}</Link>
              </li>
              <li>
                <Link href={`${prefix}/antigua`}>{dict.nav.antigua}</Link>
              </li>
              <li>
                <Link href={`${prefix}/el-paredon`}>{dict.nav.elParedon}</Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wide text-crema/50">Legal</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href={`${prefix}/terms`}>{dict.footer.legal.terms}</Link>
              </li>
              <li>
                <Link href={`${prefix}/privacy`}>{dict.footer.legal.privacy}</Link>
              </li>
              <li>
                <Link href={`${prefix}/cancellation-policy`}>
                  {dict.footer.legal.cancellation}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-crema/10 pt-6 text-xs text-crema/50 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Buen Rollo LLC</span>
          <span>{dict.footer.payments}</span>
        </div>
      </div>
    </footer>
  );
}
