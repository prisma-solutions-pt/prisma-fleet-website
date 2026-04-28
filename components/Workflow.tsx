import { useTranslations } from "next-intl";
import ScrollReveal from "./ScrollReveal";

export default function Workflow() {
  const t = useTranslations("Workflow");

  const steps = [
    { num: "01", title: t("step1Title"), desc: t("step1Desc") },
    { num: "02", title: t("step2Title"), desc: t("step2Desc") },
    { num: "03", title: t("step3Title"), desc: t("step3Desc") },
    { num: "04", title: t("step4Title"), desc: t("step4Desc") },
  ];

  return (
    <section className="section" id="como-funciona">
      <div className="wrap">
        <ScrollReveal>
          <div className="section-head">
            <span className="eyebrow">{t("eyebrow")}</span>
            <h2>
              {t("titleA")}
              <br />
              <span className="accent">{t("titleB")}</span>
            </h2>
            <p className="lead-center">{t("lead")}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="workflow-grid">
            {steps.map((s) => (
              <div key={s.num} className="workflow-step">
                <div className="workflow-number">{s.num}</div>
                <div className="workflow-step-title">{s.title}</div>
                <p className="workflow-step-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
