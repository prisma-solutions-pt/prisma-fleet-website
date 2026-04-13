import ScrollReveal from "./ScrollReveal";

const INTEGRATIONS = [
  { name: "Uber", logo: "/integrations/uber.svg" },
  { name: "Bolt", logo: "/integrations/bolt.svg" },
  { name: "Via Verde", logo: "/integrations/viaverde.svg" },
  { name: "Prio", logo: "/integrations/prio.svg" },
  { name: "Galp", logo: "/integrations/galp.svg" },
  { name: "BP", logo: "/integrations/bp.svg" },
];

export default function IntegrationStrip() {
  const doubled = INTEGRATIONS.concat(INTEGRATIONS);

  return (
    <section className="integrations-strip" aria-label="Integrações suportadas">
      <ScrollReveal>
        <p className="integrations-label">
          Integrações com as plataformas que já utiliza
        </p>
      </ScrollReveal>

      <div className="integrations-track">
        {doubled.map((item, index) => (
          <div key={`${item.name}-${index}`} className="integrations-logo">
            <img
              src={item.logo}
              alt={item.name}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
