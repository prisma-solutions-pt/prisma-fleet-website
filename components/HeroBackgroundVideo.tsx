"use client";

import { useEffect, useRef } from "react";

export default function HeroBackgroundVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const configureAndPlay = () => {
      video.muted = true;
      video.defaultMuted = true;
      video.autoplay = true;
      video.loop = true;
      video.playsInline = true;
      video.setAttribute("muted", "");
      video.setAttribute("playsinline", "");
      video.setAttribute("webkit-playsinline", "true");

      const playPromise = video.play();
      if (playPromise) {
        playPromise.catch(() => {});
      }
    };

    const onVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        configureAndPlay();
      }
    };

    const rafId = window.requestAnimationFrame(configureAndPlay);

    video.addEventListener("loadedmetadata", configureAndPlay);
    video.addEventListener("canplay", configureAndPlay);
    document.addEventListener("visibilitychange", onVisibilityChange);
    window.addEventListener("pageshow", configureAndPlay);

    return () => {
      window.cancelAnimationFrame(rafId);
      video.removeEventListener("loadedmetadata", configureAndPlay);
      video.removeEventListener("canplay", configureAndPlay);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("pageshow", configureAndPlay);
    };
  }, []);

  return (
    <video
      ref={ref}
      className="vhero-video"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
    >
      <source src="/hero-video.mp4" type="video/mp4" />
    </video>
  );
}
