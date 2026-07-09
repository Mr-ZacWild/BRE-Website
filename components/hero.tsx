import { Play, ChevronDown } from "lucide-react";

// Full-bleed, no copy overlay - headline/CTAs live in the block right
// below (see components/intro.tsx). Sits under the fixed <Nav>, which
// starts transparent here and solidifies once the user scrolls past.
export function Hero() {
  return (
    <section className="relative -mt-16 flex h-screen items-end justify-center overflow-hidden bg-quetzal">
      {/*
        TODO: replace with a real muted, looping <video> (volcanoes /
        rooftop pool / El Paredon surf) once Zac supplies footage.
        Keep a static poster image as the no-JS / prefers-reduced-motion
        fallback per the brief's quality floor.
      */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <Play className="text-crema/40" size={32} aria-hidden="true" />
        <p className="max-w-xs px-4 text-center text-xs tracking-wide text-crema/40">
          Hero video placeholder — Guatemala landscapes and property footage
        </p>
      </div>
      <div className="absolute inset-0 bg-ink/30" />

      <div className="relative pb-10 motion-safe:animate-bounce">
        <ChevronDown className="text-crema/80" size={28} aria-hidden="true" />
      </div>
    </section>
  );
}
