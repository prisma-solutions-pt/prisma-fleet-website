import Link from "next/link";
import { useTranslations } from "next-intl";
import ScrollReveal from "./ScrollReveal";

function Check() {
  return (
    <span className="pricing-check">
      <svg viewBox="0 0 12 12">
        <path d="M2 6l3 3 5-5" />
      </svg>
    </span>
  );
}

export default function Pricing() {
  const t = useTranslations("Pricing");

  const plans = [
    {
      name: t("starterName"),
      price: null as string | null,
      desc: t("starterDesc"),
      label: t("starterLabel"),
      features: t.raw("starterFeatures") as string[],
      featured: false,
    },
    {
      name: t("proName"),
      price: null as string | null,
      desc: t("proDesc"),
      label: t("proLabel"),
      features: t.raw("proFeatures") as string[],
      featured: true,
    },
    {
      name: t("enterpriseName"),
      price: null as string | null,
      desc: t("enterpriseDesc"),
      label: t("enterpriseLabel"),
      features: t.raw("enterpriseFeatures") as string[],
      featured: false,
    },
  ];

  return (
    <section className="section" id="precos">
      <div className="wrap">
        <ScrollReveal>
          <div className="section-head">
            <span className="eyebrow">{t("eyebrow")}</span>
            <h2>
              {t("titleA")}
              <br />
              <span className="accent">{t("titleB")}</span>
            </h2>
            <p className="lead-center">
              {t("leadStart")}<strong>{t("leadHighlight")}</strong>{t("leadEnd")}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="pricing-grid">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`pricing-card${plan.featured ? " featured" : ""}`}
              >
                <div className="pricing-name">{plan.name}</div>
                <p className="pricing-desc">{plan.desc}</p>

                {plan.price ? (
                  <>
                    <div className="pricing-amount">
                      <span className="pricing-currency">{t("currency")}</span>
                      <span className="pricing-value">{plan.price}</span>
                    </div>
                    <div className="pricing-period">{t("perMonth")}</div>
                  </>
                ) : (
                  <div className="pricing-soon">
                    <span className="pricing-soon-badge">
                      <span className="pricing-soon-shimmer" />
                      {t("soon")}
                    </span>
                  </div>
                )}

                <Link
                  href="/demo"
                  className={`btn ${plan.featured ? "btn-primary" : "btn-ghost"} btn-arrow`}
                  style={{ justifyContent: "center", width: "100%", marginBottom: "24px" }}
                >
                  {t("startTrial")}
                </Link>

                <hr className="pricing-separator" />

                <div className="pricing-plan-label">{plan.label}</div>

                <div className="pricing-features">
                  {plan.features.map((f) => (
                    <div key={f} className="pricing-feature">
                      <Check />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
