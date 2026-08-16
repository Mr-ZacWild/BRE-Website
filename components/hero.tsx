"use client";

import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

// Full-bleed, no copy overlay - headline/CTAs live in the block right
// below (see components/intro.tsx). Sits under the fixed <Nav>, which
// starts transparent here and solidifies once the user scrolls past.
export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
      return;
    }

    // React never renders the `muted` HTML attribute on <video> during
    // SSR (only sets it as a JS property after hydration) - see
    // https://github.com/facebook/react/issues/10389. Mobile browsers
    // check for the `muted` attribute at parse time before hydration
    // runs, so the native autoplay attempt gets silently rejected and
    // the video just sits on its poster frame. Setting .muted here and
    // calling .play() explicitly is the standard fix.
    video.muted = true;
    video.play().catch(() => {
      // Autoplay still blocked (e.g. data saver mode) - poster frame
      // stays visible, which is a fine fallback.
    });
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
