import Link from "next/link";
import { useTranslations } from "next-intl";
import ScrollReveal from "./ScrollReveal";

export default function CTA() {
  const t = useTranslations("CTA");

  return (
    <section className="cta">
      <div className="container">
        <ScrollReveal>
          <div className="cta-inner">
            <h2>
              {t("titleA")} <span className="muted">{t("titleB")}</span>
            </h2>
            <p>{t("lead")}</p>
            <div className="cta-actions">
              <Link href="/demo" className="btn btn-primary btn-lg">
                {t("primary")}
              </Link>
              <a href="mailto:geral@prismasolutions.pt" className="btn btn-ghost-light btn-lg">
                {t("secondary")}
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
