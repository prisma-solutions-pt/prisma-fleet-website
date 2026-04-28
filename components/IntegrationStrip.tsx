import type { CSSProperties } from "react";
import { useTranslations } from "next-intl";
import ScrollReveal from "./ScrollReveal";

const INTEGRATIONS = [
  { name: "Uber", logo: "/integrations/uber.png", url: "https://www.uber.com/pt/pt/" },
  { name: "Bolt", logo: "/integrations/bolt.png", url: "https://bolt.eu/pt-pt/" },
  { name: "Via Verde", logo: "/integrations/viaverde.png", url: "https://www.viaverde.pt" },
  { name: "Prio", logo: "/integrations/prio.svg", url: "https://www.prio.pt" },
  { name: "Galp", logo: "/integrations/galp.png", url: "https://galp.com/pt/pt" },
  { name: "BP", logo: "/integrations/bp.png", logoClassName: "integration-logo-bp", url: "https://www.bp.com/pt_pt/portugal/home.html" },
];
const REPEAT_COUNT = 6;

export default function IntegrationStrip() {
  const t = useTranslations("IntegrationStrip");

  return (
    <section className="integrations-strip" aria-label={t("aria")}>
      <ScrollReveal>
        <p className="integrations-label">
          {t("label")}
        </p>
      </ScrollReveal>

      <div
        className="integrations-track"
        style={
          {
            "--integration-repeat-count": REPEAT_COUNT,
          } as CSSProperties
        }
      >
        {Array.from({ length: REPEAT_COUNT }, (_, groupIndex) => (
          <div
            key={`integration-group-${groupIndex}`}
            className="integrations-group"
            aria-hidden={groupIndex > 0}
          >
            {INTEGRATIONS.map((item) => (
              <a
                key={`${groupIndex}-${item.name}`}
                className="integrations-logo"
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("openSite", { name: item.name })}
                tabIndex={groupIndex > 0 ? -1 : 0}
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  loading="lazy"
                  className={item.logoClassName}
                />
              </a>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
