"use client";

import { useEffect, useRef } from "react";

type Props = {
  /** HLS manifest URL (.m3u8). Replace with your own stream. */
  src: string;
  /** Optional poster shown before the stream loads. */
  poster?: string;
  className?: string;
};

export default function VideoBackground({ src, poster, className }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: import("hls.js").default | null = null;
    let cancelled = false;

    const tryPlay = () => {
      // Autoplay must stay muted to be allowed by browsers.
      video.muted = true;
      video.play().catch(() => {
        /* ignored — some browsers block until interaction */
      });
    };

    // Safari / iOS play HLS natively.
    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
      video.addEventListener("loadedmetadata", tryPlay, { once: true });
    } else {
      // Everywhere else: load hls.js dynamically (client-only).
      import("hls.js").then(({ default: Hls }) => {
        if (cancelled) return;
        if (Hls.isSupported()) {
          hls = new Hls({ enableWorker: true, lowLatencyMode: false });
          hls.loadSource(src);
          hls.attachMedia(video);
          hls.on(Hls.Events.MANIFEST_PARSED, tryPlay);
        } else {
          // Last resort: maybe the browser can play the URL directly.
          video.src = src;
          video.addEventListener("loadedmetadata", tryPlay, { once: true });
        }
      });
    }

    return () => {
      cancelled = true;
      if (hls) hls.destroy();
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      className={className}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden
    />
  );
}
