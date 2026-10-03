import { useTranslations } from "next-intl";
import ScrollReveal from "./ScrollReveal";

type Row = { time?: string; label: string; value: string };

export default function BeforeAfter() {
  const t = useTranslations("BeforeAfter");
  const before = t.raw("beforeRows") as Row[];
  const after = t.raw("afterRows") as Row[];

  return (
    <section className="section section-subtle">
      <div className="container">
        <ScrollReveal>
          <div className="section-head">
            <span className="eyebrow">{t("eyebrow")}</span>
            <h2>
              {t("titleA")} <span className="muted">{t("titleB")}</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="ba">
            <div className="ba-card ba-before">
              <div className="ba-head">
                <span className="mono-label">{t("beforeLabel")}</span>
                <b>{t("beforeTitle")}</b>
              </div>
              <ol className="ba-rows">
                {before.map((r) => (
                  <li key={r.label}>
                    <span className="ba-time">{r.time}</span>
                    <span className="ba-label">{r.label}</span>
                    <span className="ba-value">{r.value}</span>
                  </li>
                ))}
              </ol>
              <div className="ba-total">
                <span>{t("total")}</span>
                <b>4h 00min</b>
              </div>
              <p className="ba-note">{t("beforeNote")}</p>
            </div>

            <div className="ba-card ba-after">
              <div className="ba-head">
                <span className="mono-label">{t("afterLabel")}</span>
                <b>{t("afterTitle")}</b>
              </div>
              <ol className="ba-rows">
                {after.map((r) => (
                  <li key={r.label}>
                    <span className="ba-check" aria-hidden="true">
                      <svg viewBox="0 0 16 16">
                        <path d="M3.5 8.5l3 3 6-7" />
                      </svg>
                    </span>
                    <span className="ba-label">{r.label}</span>
                    <span className="ba-value">{r.value}</span>
                  </li>
                ))}
              </ol>
              <div className="ba-total">
                <span>{t("total")}</span>
                <b>{t("afterTotal")}</b>
              </div>
              <p className="ba-note">{t("afterNote")}</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
