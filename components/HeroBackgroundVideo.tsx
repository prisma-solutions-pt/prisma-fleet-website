"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroBackgroundVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPoster, setShowPoster] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const gestureEvents: Array<keyof DocumentEventMap> = [
      "touchstart",
      "pointerdown",
      "click",
    ];

    const configureVideo = () => {
      video.muted = true;
      video.defaultMuted = true;
      video.autoplay = true;
      video.loop = true;
      video.playsInline = true;
      video.setAttribute("muted", "");
      video.setAttribute("playsinline", "");
      video.setAttribute("webkit-playsinline", "true");
    };

    const attemptPlay = () => {
      configureVideo();

      const playPromise = video.play();
      if (playPromise) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setShowPoster(false);
          })
          .catch(() => {
            setIsPlaying(false);
            setShowPoster(true);
          });
      }
    };

    const onPlaying = () => {
      setIsPlaying(true);
      setShowPoster(false);
    };

    const onPause = () => {
      setIsPlaying(false);
    };

    const onVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        attemptPlay();
      }
    };

    const onFirstGesture = () => {
      attemptPlay();
    };

    const rafId = window.requestAnimationFrame(attemptPlay);

    video.addEventListener("loadedmetadata", attemptPlay);
    video.addEventListener("canplay", attemptPlay);
    video.addEventListener("playing", onPlaying);
    video.addEventListener("pause", onPause);
    document.addEventListener("visibilitychange", onVisibilityChange);
    window.addEventListener("pageshow", attemptPlay);
    gestureEvents.forEach((eventName) => {
      document.addEventListener(eventName, onFirstGesture, {
        passive: true,
      });
    });

    return () => {
      window.cancelAnimationFrame(rafId);
      video.removeEventListener("loadedmetadata", attemptPlay);
      video.removeEventListener("canplay", attemptPlay);
      video.removeEventListener("playing", onPlaying);
      video.removeEventListener("pause", onPause);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("pageshow", attemptPlay);
      gestureEvents.forEach((eventName) => {
        document.removeEventListener(eventName, onFirstGesture);
      });
    };
  }, []);

  return (
    <>
      <div
        className={`vhero-poster${showPoster && !isPlaying ? " is-visible" : ""}`}
        aria-hidden="true"
      />
      <video
        ref={ref}
        className={`vhero-video${isPlaying ? " is-visible" : ""}`}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
    </>
  );
}
