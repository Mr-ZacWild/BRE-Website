"use client";

import { useRef, useState } from "react";
import { Music, VolumeX } from "lucide-react";
import { AMBIENT_MUSIC_URL } from "@/lib/site";

// Off by default - the visitor has to click to start it. This is
// deliberate: browsers block unmuted autoplay anyway, and a click-to-play
// toggle is the only version of "ambient music" that reliably works and
// doesn't surprise anyone (public transport, screen readers, etc).
export function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  if (!AMBIENT_MUSIC_URL) return null;

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <>
      <audio ref={audioRef} src={AMBIENT_MUSIC_URL} loop />
      <button
        type="button"
        onClick={toggle}
        className="fixed bottom-5 left-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-quetzal text-crema shadow-lg transition-transform hover:scale-105"
        aria-label={playing ? "Mute background music" : "Play background music"}
        aria-pressed={playing}
      >
        {playing ? (
          <Music size={20} aria-hidden="true" />
        ) : (
          <VolumeX size={20} aria-hidden="true" />
        )}
      </button>
    </>
  );
}
