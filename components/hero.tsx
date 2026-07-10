"use client";

import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

// Full-bleed, no copy overlay - headline/CTAs live in the block right
// below (see components/intro.tsx). Sits under the fixed <Nav>, which
// starts transparent here and solidifies once the user scrolls past.
export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Autoplay is on by default in the markup below (works with JS
    // disabled). If the visitor prefers reduced motion, stop it and
    // just show the poster frame instead.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      videoRef.current?.pause();
    }
  }, []);

  return (
    <section className="relative -mt-16 flex h-screen items-end justify-center overflow-hidden bg-quetzal">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/hero.mp4"
        poster="/videos/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-ink/30" />

      <div className="relative pb-10 motion-safe:animate-bounce">
        <ChevronDown className="text-crema/80" size={28} aria-hidden="true" />
      </div>
    </section>
  );
}
