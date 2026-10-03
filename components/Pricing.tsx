import Link from "next/link";
import { useTranslations } from "next-intl";
import ScrollReveal from "./ScrollReveal";

const PLANS = ["starter", "pro", "enterprise"] as const;

export default function Pricing() {
  const t = useTranslations("Pricing");

  return (
    <section className="section section-subtle" id="precos">
      <div className="container">
        <ScrollReveal>
          <div className="section-head">
            <span className="eyebrow">{t("eyebrow")}</span>
            <h2>
              {t("titleA")} <span className="muted">{t("titleB")}</span>
            </h2>
            <p className="section-lead">{t("lead")}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="price-grid">
            {PLANS.map((plan) => {
              const featured = plan === "pro";
              return (
                <article key={plan} className={`price-card${featured ? " price-featured" : ""}`}>
                  <div className="price-top">
                    <h3>{t(`${plan}Name`)}</h3>
                    {featured && <span className="price-tag">{t("popular")}</span>}
                  </div>
                  <p className="price-desc">{t(`${plan}Desc`)}</p>
                  <div className="price-amount">
                    <b>{t(`${plan}Fleet`)}</b>
                    <span>{t("onRequest")}</span>
                  </div>
                  <Link
                    href="/demo"
                    className={`btn ${featured ? "btn-primary" : "btn-outline"} btn-block`}
                  >
                    {t("cta")}
                  </Link>
                  <span className="price-label">{t(`${plan}Label`)}</span>
                  <ul className="price-features">
                    {(t.raw(`${plan}Features`) as string[]).map((f) => (
                      <li key={f}>
                        <svg viewBox="0 0 16 16" aria-hidden="true">
                          <path d="M3.5 8.5l3 3 6-7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
          <p className="price-foot">
            <span className="mono-label">{t("allPlans")}</span>
            {t("allPlansList")}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
