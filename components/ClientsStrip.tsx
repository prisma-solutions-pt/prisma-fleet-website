import type { CSSProperties } from "react";
import { useTranslations } from "next-intl";
import ScrollReveal from "./ScrollReveal";

const CLIENTS = [
  { name: "Bewegung", logo: "/clientes/bewegung.svg", url: "https://www.facebook.com/BewegungFrotaTVDE" },
  { name: "EVmob", logo: "/clientes/evmob.svg", url: "https://evmob.pt" },
];
const REPEAT_COUNT = 8;

export default function ClientsStrip() {
  const t = useTranslations("ClientsStrip");

  return (
    <section id="clientes" className="clients-strip" aria-label={t("aria")}>
      <ScrollReveal>
        <p className="clients-label">
          {t("labelPrefix")} <span className="clients-highlight">{t("labelHighlight")}</span> {t("labelSuffix")}
        </p>
      </ScrollReveal>

      <div
        className="clients-track"
        style={
          {
            "--clients-repeat-count": REPEAT_COUNT,
          } as CSSProperties
        }
      >
        {Array.from({ length: REPEAT_COUNT }, (_, groupIndex) => (
          <div
            key={`client-group-${groupIndex}`}
            className="clients-group"
            aria-hidden={groupIndex > 0}
          >
            {CLIENTS.map((item) => (
              <a
                key={`${groupIndex}-${item.name}`}
                className="clients-logo"
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
                />
              </a>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
