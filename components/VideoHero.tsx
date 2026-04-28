import Link from "next/link";
import { useTranslations } from "next-intl";
import HeroBackgroundVideo from "./HeroBackgroundVideo";

export default function VideoHero() {
  const t = useTranslations("VideoHero");

  return (
    <section className="vhero">
      <HeroBackgroundVideo />

      <div className="vhero-overlay" />

      <div className="vhero-content">
        <div className="vhero-text">
          <span className="eyebrow eyebrow-dark vhero-enter vhero-enter-1">
            {t("eyebrow")}
          </span>

          <h1 className="vhero-enter vhero-enter-2">
            {t("titleA")}
            <br />
            <span className="accent-light">{t("titleB")}</span>
            <span className="sr-only"> {t("srSuffix")}</span>
          </h1>

          <p className="vhero-lead vhero-enter vhero-enter-3">
            {t("lead")}
          </p>

          <div className="vhero-actions vhero-enter vhero-enter-4">
            <a href="#funcionalidades" className="btn btn-ghost-dark">
              {t("viewFeatures")}
            </a>
            <a href="#precos" className="btn btn-ghost-dark">
              {t("viewPricing")}
            </a>
            <Link href="/demo" className="btn btn-primary btn-arrow">
              {t("startTrial")}
            </Link>
          </div>
        </div>
      </div>

      <div className="vhero-scroll">
        <div className="vhero-scroll-line" />
      </div>
    </section>
  );
}
