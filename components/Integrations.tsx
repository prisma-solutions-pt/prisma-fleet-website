import { useTranslations } from "next-intl";
import ScrollReveal from "./ScrollReveal";

const LIVE = [
  { key: "uber", name: "Uber", logo: "/integrations/uber.png" },
  { key: "bolt", name: "Bolt", logo: "/integrations/bolt.png" },
  { key: "viaverde", name: "Via Verde", logo: "/integrations/viaverde.png" },
  { key: "prio", name: "Prio", logo: "/integrations/prio.svg" },
] as const;

const ROADMAP = ["Galp", "BP", "Repsol"];

export default function Integrations() {
  const t = useTranslations("Integrations");

  return (
    <section id="integracoes" className="section">
      <div className="container">
        <ScrollReveal>
          <div className="section-head section-head-split">
            <div>
              <span className="eyebrow">{t("eyebrow")}</span>
              <h2>
                {t("titleA")} <span className="muted">{t("titleB")}</span>
              </h2>
            </div>
            <p className="section-lead">{t("lead")}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="int-grid">
            {LIVE.map((i) => (
              <article key={i.key} className="int-card">
                <div className="int-top">
                  <img src={i.logo} alt={i.name} className={`int-logo int-logo-${i.key}`} />
                  <span className="int-status">
                    <i />
                    {t("live")}
                  </span>
                </div>
                <span className="mono-label">{t(`${i.key}Method`)}</span>
                <p>{t(`${i.key}Desc`)}</p>
              </article>
            ))}
          </div>
          <div className="int-roadmap">
            <span className="mono-label">{t("roadmap")}</span>
            <div className="int-roadmap-logos">
              {ROADMAP.map((name) => (
                <span key={name}>{name}</span>
              ))}
            </div>
            <span className="int-roadmap-note">{t("roadmapNote")}</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
