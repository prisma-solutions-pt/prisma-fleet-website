import Link from "next/link";
import { useTranslations } from "next-intl";
import ScrollReveal from "./ScrollReveal";

export default function CTA() {
  const t = useTranslations("CTA");

  return (
    <section className="section">
      <ScrollReveal>
        <div className="cta-dark">
          <div className="cta-dark-inner">
            <span className="eyebrow eyebrow-dark">{t("eyebrow")}</span>
            <h2>
              {t("titleA")}
              <br />
              <span className="accent-light">{t("titleB")}</span>
            </h2>
            <p className="lead-center">{t("lead")}</p>
            <div className="cta-actions">
              <Link href="/demo" className="btn btn-primary btn-arrow">
                {t("demo")}
              </Link>
              <a href="#precos" className="btn btn-ghost-dark">
                {t("viewPricing")}
              </a>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
