"use client";

import { useLocale } from "next-intl";
import { useRef, useState, useTransition } from "react";
import { setLocale } from "@/lib/locale-actions";

type Anim = "toRight" | "toLeft" | "";

export default function LanguageSwitcher() {
  const currentLocale = useLocale();
  const [, startTransition] = useTransition();
  const [anim, setAnim] = useState<Anim>("");
  const [optimisticLocale, setOptimisticLocale] = useState<string | null>(null);
  const animTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const displayLocale = optimisticLocale ?? currentLocale;

  function handleSwitch(locale: "en" | "pt") {
    if (locale === displayLocale) return;

    const direction: Anim = locale === "pt" ? "toRight" : "toLeft";
    setOptimisticLocale(locale);
    setAnim(direction);

    if (animTimer.current) clearTimeout(animTimer.current);
    animTimer.current = setTimeout(() => setAnim(""), 400);

    startTransition(async () => {
      await setLocale(locale);
    });
  }

  const sliderClass = [
    "lang-slider",
    anim === "toRight" ? "lang-slide-to-right" : "",
    anim === "toLeft" ? "lang-slide-to-left" : "",
    anim === "" && displayLocale === "pt" ? "lang-at-pt" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="lang-switcher" role="group" aria-label="Language selector">
      <span className={sliderClass} aria-hidden="true" />
      <button
        type="button"
        className={`lang-option${displayLocale === "en" ? " active" : ""}`}
        onClick={() => handleSwitch("en")}
        aria-pressed={displayLocale === "en"}
      >
        EN
      </button>
      <button
        type="button"
        className={`lang-option${displayLocale === "pt" ? " active" : ""}`}
        onClick={() => handleSwitch("pt")}
        aria-pressed={displayLocale === "pt"}
      >
        PT
      </button>
    </div>
  );
}
