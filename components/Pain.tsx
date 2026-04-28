import { useTranslations } from "next-intl";
import ScrollReveal from "./ScrollReveal";

export default function Pain() {
  const t = useTranslations("Pain");

  const pains = [
    {
      icon: (
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      stat: t("card1Stat"),
      title: t("card1Title"),
      desc: t("card1Desc"),
    },
    {
      icon: (
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <path d="M15 9l-6 6M9 9l6 6" />
        </svg>
      ),
      stat: t("card2Stat"),
      title: t("card2Title"),
      desc: t("card2Desc"),
    },
    {
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
          <path d="M1 1l22 22" />
        </svg>
      ),
      stat: t("card3Stat"),
      title: t("card3Title"),
      desc: t("card3Desc"),
    },
  ];

  return (
    <section className="section" id="problema">
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

        <div className="pain-grid">
          {pains.map((p, i) => (
            <ScrollReveal key={i} delay={i + 1}>
              <div className="pain-card">
                <div className="pain-icon">{p.icon}</div>
                <div className="pain-stat">{p.stat}</div>
                <div className="pain-title">{p.title}</div>
                <p className="pain-desc">{p.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
