import { useTranslations } from "next-intl";
import ScrollReveal from "./ScrollReveal";

type Item = { q: string; a: string };

export default function FAQ() {
  const t = useTranslations("FAQ");
  const items = t.raw("items") as Item[];

  return (
    <section className="section" id="faq">
      <div className="wrap">
        <ScrollReveal>
          <div className="section-head">
            <span className="eyebrow">{t("eyebrow")}</span>
            <h2>{t("title")}</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="faq-grid">
            {items.map((item, i) => (
              <details key={i} className="faq-item">
                <summary className="faq-question">
                  {item.q}
                  <svg className="faq-chevron" viewBox="0 0 24 24">
                    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </summary>
                <div className="faq-answer">
                  <div className="faq-answer-inner">{item.a}</div>
                </div>
              </details>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
