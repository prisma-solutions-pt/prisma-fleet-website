import { useTranslations } from "next-intl";
import { Waves } from "@/components/ui/wave-background";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="hero" id="hero">
      <Waves
        strokeColor="rgba(37, 99, 235, 0.07)"
        backgroundColor="transparent"
        pointerSize={0.4}
      />

      <div className="hero-content">
        <div className="hero-facts hero-enter hero-enter-1">
          <span>{t("factA")}</span>
          <span>{t("factB")}</span>
          <span>{t("factC")}</span>
        </div>

        <div className="hero-props hero-enter hero-enter-2">
          <a href="#funcionalidades" className="hero-prop">
            <div className="hero-prop-icon">
              <svg viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
            </div>
            <div className="hero-prop-title">
              <span>{t("propImportTitle")}</span>
              <span className="hero-prop-arrow">{"→"}</span>
            </div>
            <div className="hero-prop-desc">
              {t("propImportDesc")}
            </div>
          </a>
          <a href="#como-funciona" className="hero-prop">
            <div className="hero-prop-icon">
              <svg viewBox="0 0 24 24"><path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" /></svg>
            </div>
            <div className="hero-prop-title">
              <span>{t("propZeroErrTitle")}</span>
              <span className="hero-prop-arrow">{"→"}</span>
            </div>
            <div className="hero-prop-desc">
              {t("propZeroErrDesc")}
            </div>
          </a>
          <a href="#funcionalidades" className="hero-prop">
            <div className="hero-prop-icon">
              <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v-2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>
            </div>
            <div className="hero-prop-title">
              <span>{t("propPortalTitle")}</span>
              <span className="hero-prop-arrow">{"→"}</span>
            </div>
            <div className="hero-prop-desc">
              {t("propPortalDesc")}
            </div>
          </a>
        </div>

        <div className="hero-screenshot-wrap hero-enter hero-enter-3">
          <div className="screenshot-frame">
            <div className="screenshot-toolbar">
              <div className="screenshot-dots">
                <span />
                <span />
                <span />
              </div>
              <div className="screenshot-toolbar-pill">{t("screenshotPill")}</div>
            </div>
            <div className="screenshot-canvas">
              {/* Replace with: <Image src="/screenshots/dashboard.png" ... /> */}
              <div className="placeholder-soon">
                <div className="placeholder-soon-icon">
                  <svg viewBox="0 0 24 24"><path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                </div>
                <span className="placeholder-soon-label">{t("soonLabel")}</span>
                <span className="placeholder-soon-sub">{t("soonSub")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
