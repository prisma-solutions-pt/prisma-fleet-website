import type { ReactNode } from "react";
import { useTranslations } from "next-intl";
import ScrollReveal from "./ScrollReveal";
import { Icon } from "./mocks/AppFrame";
import type { AppIcon } from "./mocks/app-icons";
import { CompaniesMock, HealthMock, PortalMock, VehiclesMock } from "./mocks/ModuleMocks";

const EXTRAS: { key: string; icon: AppIcon }[] = [
  { key: "checkin", icon: "checkin" },
  { key: "cards", icon: "cards" },
  { key: "maintenance", icon: "maintenance" },
  { key: "insurance", icon: "insurance" },
  { key: "reports", icon: "reports" },
  { key: "crm", icon: "crm" },
];

export default function Modules() {
  const t = useTranslations("Modules");

  const cards: { key: string; visual: ReactNode; wide?: boolean }[] = [
    { key: "dashboard", visual: <HealthMock /> },
    { key: "portal", visual: <PortalMock /> },
    { key: "vehicles", visual: <VehiclesMock /> },
    { key: "companies", visual: <CompaniesMock /> },
  ];

  return (
    <section id="produto" className="section section-navy">
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

        <div className="mod-grid">
          {cards.map((c, i) => (
            <ScrollReveal key={c.key} delay={(i % 2) + 1} className="mod-cell">
              <article className="mod-card">
                <div className="mod-copy">
                  <h3>{t(`${c.key}Title`)}</h3>
                  <p>{t(`${c.key}Desc`)}</p>
                </div>
                <div className={`mod-visual mod-visual-${c.key}`} aria-hidden="true">
                  {c.visual}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <ul className="mod-extras">
            {EXTRAS.map((e) => (
              <li key={e.key}>
                <Icon name={e.icon} className="mod-extra-ico" />
                <div>
                  <b>{t(`${e.key}Title`)}</b>
                  <span>{t(`${e.key}Desc`)}</span>
                </div>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}
