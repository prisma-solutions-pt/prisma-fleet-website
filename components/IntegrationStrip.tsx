import type { CSSProperties } from "react";
import ScrollReveal from "./ScrollReveal";

const INTEGRATIONS = [
  { name: "Uber", logo: "/integrations/uber.png" },
  { name: "Bolt", logo: "/integrations/bolt.png" },
  { name: "Via Verde", logo: "/integrations/viaverde.png" },
  { name: "Prio", logo: "/integrations/prio.svg" },
  { name: "Galp", logo: "/integrations/galp.png" },
  { name: "BP", logo: "/integrations/bp.png", logoClassName: "integration-logo-bp" },
];
const REPEAT_COUNT = 6;

export default function IntegrationStrip() {
  return (
    <section className="integrations-strip" aria-label="Integrações suportadas">
      <ScrollReveal>
        <p className="integrations-label">
          Integrações com as plataformas que já utiliza
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
              <div key={`${groupIndex}-${item.name}`} className="integrations-logo">
                <img
                  src={item.logo}
                  alt={item.name}
                  loading="lazy"
                  className={item.logoClassName}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
