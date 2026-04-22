import type { CSSProperties } from "react";
import ScrollReveal from "./ScrollReveal";

const CLIENTS = [
  { name: "Bewegung", logo: "/clientes/bewegung.svg" },
  { name: "EVmob", logo: "/clientes/evmob.svg" },
];
const REPEAT_COUNT = 8;

export default function ClientsStrip() {
  return (
    <section id="clientes" className="clients-strip" aria-label="Os nossos clientes">
      <ScrollReveal>
        <p className="clients-label">
          MAIS DE <span className="clients-highlight">300 CARROS</span> EM PORTUGAL JÁ SÃO GERIDOS ATRAVÉS DA PRISMA FLEET
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
              <div key={`${groupIndex}-${item.name}`} className="clients-logo">
                <img
                  src={item.logo}
                  alt={item.name}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
