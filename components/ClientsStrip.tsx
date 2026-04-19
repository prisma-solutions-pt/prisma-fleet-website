import ScrollReveal from "./ScrollReveal";

const CLIENTS = [
  { name: "Bewegung", logo: "/clientes/bewegung.svg" },
  { name: "EVmob", logo: "/clientes/evmob.svg" },
];

export default function ClientsStrip() {
  // Repeat enough times to make a seamless scrolling loop
  const duplicated = [...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS];

  return (
    <section id="clientes" className="integrations-strip" aria-label="Os nossos clientes">
      <ScrollReveal>
        <p className="integrations-label">
          A CONFIANÇA DOS NOSSOS CLIENTES
        </p>
      </ScrollReveal>

      <div className="integrations-track">
        {duplicated.map((item, index) => (
          <div key={`${item.name}-${index}`} className="integrations-logo">
            <img
              src={item.logo}
              alt={item.name}
              loading="lazy"
              style={{ padding: "0 2rem", height: "auto", maxHeight: "60px", opacity: 0.8 }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
