import { useTranslations } from "next-intl";

const CLIENTS = [
  { name: "EVmob", logo: "/clientes/evmob.svg", url: "https://evmob.pt" },
  { name: "Bewegung", logo: "/clientes/bewegung.svg", url: "https://www.facebook.com/BewegungFrotaTVDE" },
];

export default function ClientsStrip() {
  const t = useTranslations("ClientsStrip");

  return (
    <section id="clientes" className="clients" aria-label={t("aria")}>
      <div className="container clients-inner">
        <p className="clients-label">
          {t.rich("label", { b: (chunks) => <strong>{chunks}</strong> })}
        </p>
        <div className="clients-logos">
          {CLIENTS.map((c) => (
            <a
              key={c.name}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("openSite", { name: c.name })}
            >
              <img src={c.logo} alt={c.name} loading="lazy" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
