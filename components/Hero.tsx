import Link from "next/link";
import { useTranslations } from "next-intl";
import SettlementsMock from "./mocks/SettlementsMock";
import { ReceiptMock, SepaToast } from "./mocks/PipelineMocks";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-texture" aria-hidden="true" />
      <div className="container hero-copy">
        <Link href="/#como-funciona" className="chip hero-in hero-in-1">
          <span className="chip-dot" />
          {t("chip")}
          <svg viewBox="0 0 12 12" aria-hidden="true">
            <path d="M4.5 3l3 3-3 3" />
          </svg>
        </Link>

        <h1 id="hero-title" className="hero-title hero-in hero-in-2">
          {t("titleA")} <span className="strike">{t("titleStrike")}</span>
          {t("titleEnd")}
        </h1>

        <p className="hero-lead hero-in hero-in-3">
          <strong>{t("leadStrong")}</strong> {t("lead")}
        </p>

        <div className="hero-actions hero-in hero-in-4">
          <Link href="/demo" className="btn btn-primary btn-lg">
            {t("ctaPrimary")}
          </Link>
          <Link href="/#como-funciona" className="btn btn-outline btn-lg">
            {t("ctaSecondary")}
          </Link>
        </div>

        <p className="hero-sources hero-in hero-in-5">
          Uber <i /> Bolt <i /> Via Verde <i /> Prio
        </p>
      </div>

      <div className="container hero-stage" aria-hidden="true">
        <div className="hero-mock hero-rise">
          <SettlementsMock />
        </div>
        <div className="hero-float hero-float-receipt">
          <ReceiptMock compact />
        </div>
        <div className="hero-float hero-float-toast">
          <SepaToast />
        </div>
      </div>
      <p className="sr-only">{t("mockAlt")}</p>
    </section>
  );
}
