import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="footer" aria-label={t("aria")}>
      <div className="footer-top">
        <div className="footer-brand">
          <img src="/brand/prisma-mark-black.png" alt="Prisma Fleet" className="footer-brand-mark" />
          <span className="footer-brand-name">Prisma Fleet</span>
        </div>
      </div>

      <div className="footer-columns">
        <div>
          <div className="footer-col-title">{t("product")}</div>
          <div className="footer-col-links">
            <a href="#funcionalidades" className="footer-col-link">{t("features")}</a>
            <a href="#precos" className="footer-col-link">{t("pricing")}</a>
            <a href="#como-funciona" className="footer-col-link">{t("howItWorks")}</a>
          </div>
        </div>
        <div>
          <div className="footer-col-title">{t("resources")}</div>
          <div className="footer-col-links">
            <Link href="/demo" className="footer-col-link">{t("demo")}</Link>
          </div>
        </div>
        <div>
          <div className="footer-col-title">{t("legal")}</div>
          <div className="footer-col-links">
            <Link href="/privacidade" className="footer-col-link">{t("privacy")}</Link>
            <Link href="/termos" className="footer-col-link">{t("terms")}</Link>
          </div>
        </div>
        <div>
          <div className="footer-col-title">{t("contact")}</div>
          <div className="footer-col-links">
            <a href="mailto:geral@prismasolutions.pt" className="footer-col-link">geral@prismasolutions.pt</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="footer-copy">{t("copy")}</span>
        <span className="footer-parent">{t("parent")}</span>
      </div>
    </footer>
  );
}
