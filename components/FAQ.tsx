import Link from "next/link";
import { useTranslations } from "next-intl";
import ScrollReveal from "./ScrollReveal";

type Item = { q: string; a: string };

export default function FAQ() {
  const t = useTranslations("FAQ");
  const items = t.raw("items") as Item[];

  return (
    <section className="section" id="faq">
      <div className="container faq">
        <ScrollReveal className="faq-aside">
          <span className="eyebrow">{t("eyebrow")}</span>
          <h2>{t("title")}</h2>
          <p className="section-lead">{t("lead")}</p>
          <Link href="/demo" className="link-arrow">
            {t("contact")}
          </Link>
        </ScrollReveal>

        <ScrollReveal className="faq-list">
          {items.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>
                {item.q}
                <span className="faq-plus" aria-hidden="true" />
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
