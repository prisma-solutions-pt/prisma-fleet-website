"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const pathname = usePathname();
  const t = useTranslations("Navbar");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isHome = pathname === "/";
  const logoMarkSrc = "/brand/prisma-mark-white.png";

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }

    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isHome]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`navbar${scrolled || !isHome ? " navbar-scrolled" : ""}${
        mobileOpen ? " navbar-open" : ""
      }`}
    >
      <div className="navbar-shell">
        <div className="navbar-inner">
          <Link href="/" className="nav-logo">
            <img src={logoMarkSrc} alt="Prisma Fleet" className="nav-logo-mark" />
            Prisma Fleet
          </Link>

          <div className="nav-links">
            <Link href="/#funcionalidades" className="nav-link">
              {t("features")}
            </Link>
            <Link href="/#como-funciona" className="nav-link">
              {t("howItWorks")}
            </Link>
            <Link href="/#clientes" className="nav-link">
              {t("clients")}
            </Link>
            <Link href="/#precos" className="nav-link">
              {t("pricing")}
            </Link>
          </div>

          <div className="nav-actions">
            <LanguageSwitcher />
            <Link href="/demo" className="btn btn-primary btn-arrow">
              {t("demo")}
            </Link>
            <button
              type="button"
              className={`nav-burger${mobileOpen ? " open" : ""}`}
              onClick={() => setMobileOpen((open) => !open)}
              aria-label={t("openMenu")}
              aria-expanded={mobileOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        <div className={`nav-mobile${mobileOpen ? " open" : ""}`}>
          <Link href="/#funcionalidades" className="nav-mobile-link">
            {t("features")}
          </Link>
          <Link href="/#como-funciona" className="nav-mobile-link">
            {t("howItWorks")}
          </Link>
          <Link href="/#clientes" className="nav-mobile-link">
            {t("clients")}
          </Link>
          <Link href="/#precos" className="nav-mobile-link">
            {t("pricing")}
          </Link>
          <div className="nav-mobile-lang">
            <LanguageSwitcher />
          </div>
          <Link href="/demo" className="btn btn-primary btn-arrow nav-mobile-cta">
            {t("demo")}
          </Link>
        </div>
      </div>
    </header>
  );
}
