"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import posthog from "posthog-js";

type Prefs = {
  essential: true;
  analytics: boolean;
};

const STORAGE_KEY = "pf_consent";
const DEFAULTS: Prefs = { essential: true, analytics: false };

function readPrefs(): Prefs | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw);
    return { essential: true, analytics: !!parsed.analytics };
  } catch {
    return null;
  }
}

function apply(prefs: Prefs) {
  if (prefs.analytics) posthog.opt_in_capturing();
  else posthog.opt_out_capturing();
}

export default function CookieBanner() {
  const t = useTranslations("CookieBanner");
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<"summary" | "customize">("summary");
  const [prefs, setPrefs] = useState<Prefs>(DEFAULTS);

  useEffect(() => {
    const stored = readPrefs();
    if (!stored) {
      setOpen(true);
    } else {
      setPrefs(stored);
    }
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") save(prefs);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, prefs]);

  function save(next: Prefs) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    apply(next);
    setPrefs(next);
    setOpen(false);
  }

  function acceptAll() {
    save({ essential: true, analytics: true });
  }
  function rejectAll() {
    save({ essential: true, analytics: false });
  }
  function savePrefs() {
    save(prefs);
  }

  if (!open) return null;

  return (
    <div className="cc-backdrop" role="dialog" aria-modal="true" aria-labelledby="cc-title">
      <div className="cc-modal">
        {view === "summary" ? (
          <>
            <div className="cc-head">
              <div className="cc-icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5z"/>
                  <circle cx="8.5" cy="8.5" r="0.6" fill="currentColor"/>
                  <circle cx="15.5" cy="12.5" r="0.6" fill="currentColor"/>
                  <circle cx="10" cy="15.5" r="0.6" fill="currentColor"/>
                </svg>
              </div>
              <h2 id="cc-title" className="cc-title">{t("title")}</h2>
            </div>

            <p className="cc-body">{t("body")}</p>

            <div className="cc-actions cc-actions-summary">
              <button type="button" className="cc-btn cc-btn-ghost" onClick={() => setView("customize")}>
                {t("customize")}
              </button>
              <button type="button" className="cc-btn cc-btn-outline" onClick={rejectAll}>
                {t("rejectAll")}
              </button>
              <button type="button" className="cc-btn cc-btn-primary" onClick={acceptAll}>
                {t("acceptAll")}
              </button>
            </div>

            <p className="cc-footnote">
              {t("footnoteStart")}
              <a href="/privacidade" className="cc-link">
                {t("footnoteLink")}
              </a>
              {t("footnoteEnd")}
            </p>
          </>
        ) : (
          <>
            <div className="cc-head">
              <button type="button" className="cc-back" onClick={() => setView("summary")} aria-label={t("back")}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </button>
              <h2 id="cc-title" className="cc-title">{t("preferences")}</h2>
            </div>

            <ul className="cc-categories">
              <li className="cc-category">
                <div className="cc-cat-head">
                  <div>
                    <div className="cc-cat-name">{t("essential")}</div>
                    <div className="cc-cat-tag">{t("alwaysOn")}</div>
                  </div>
                  <Toggle checked disabled onChange={() => {}} label={t("essential")} />
                </div>
                <p className="cc-cat-desc">{t("essentialDesc")}</p>
              </li>

              <li className="cc-category">
                <div className="cc-cat-head">
                  <div>
                    <div className="cc-cat-name">{t("analytics")}</div>
                    <div className="cc-cat-tag cc-cat-tag-optional">{t("optional")}</div>
                  </div>
                  <Toggle
                    checked={prefs.analytics}
                    onChange={(v) => setPrefs({ ...prefs, analytics: v })}
                    label={t("analytics")}
                  />
                </div>
                <p className="cc-cat-desc">{t("analyticsDesc")}</p>
              </li>
            </ul>

            <div className="cc-actions cc-actions-customize">
              <button type="button" className="cc-btn cc-btn-outline" onClick={rejectAll}>
                {t("rejectAll")}
              </button>
              <div className="cc-actions-right">
                <button type="button" className="cc-btn cc-btn-ghost" onClick={savePrefs}>
                  {t("savePrefs")}
                </button>
                <button type="button" className="cc-btn cc-btn-primary" onClick={acceptAll}>
                  {t("acceptAll")}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function Toggle({
  checked,
  disabled,
  onChange,
  label,
}: {
  checked: boolean;
  disabled?: boolean;
  onChange: (v: boolean) => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => !disabled && onChange(!checked)}
      className={`cc-toggle${checked ? " cc-toggle-on" : ""}${disabled ? " cc-toggle-disabled" : ""}`}
    >
      <span className="cc-toggle-dot" />
    </button>
  );
}
