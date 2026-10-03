import Link from "next/link";
import { useTranslations } from "next-intl";
import Logo from "./Logo";

export default function Footer() {
  const t = useTranslations("Footer");

  const cols = [
    {
      title: t("product"),
      links: [
        { href: "/#produto", label: t("features") },
        { href: "/#como-funciona", label: t("howItWorks") },
        { href: "/#integracoes", label: t("integrations") },
        { href: "/#precos", label: t("pricing") },
      ],
    },
    {
      title: t("company"),
      links: [
        { href: "/demo", label: t("demo") },
        { href: "/#faq", label: t("faq") },
        { href: "https://www.prismasolutions.pt", label: "Prisma Solutions", external: true },
      ],
    },
    {
      title: t("legal"),
      links: [
        { href: "/privacidade", label: t("privacy") },
        { href: "/termos", label: t("terms") },
      ],
    },
  ];

  return (
    <footer className="footer" aria-label={t("aria")}>
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Logo tone="light" />
            <p>{t("tagline")}</p>
            <a href="mailto:geral@prismasolutions.pt" className="footer-mail">
              geral@prismasolutions.pt
            </a>
          </div>
          {cols.map((c) => (
            <div key={c.title} className="footer-col">
              <span className="mono-label">{c.title}</span>
              <ul>
                {c.links.map((l) => (
                  <li key={l.href}>
                    {"external" in l && l.external ? (
                      <a href={l.href} target="_blank" rel="noopener noreferrer">
                        {l.label}
                      </a>
                    ) : (
                      <Link href={l.href}>{l.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>© {t("copy")}</span>
          <span className="mono-label">prismafleet.pt</span>
          <span>{t("parent")}</span>
        </div>
      </div>
    </footer>
  );
}
