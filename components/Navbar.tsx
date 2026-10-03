"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
import Logo from "./Logo";

const LINKS = [
  { href: "/#produto", key: "product" },
  { href: "/#como-funciona", key: "howItWorks" },
  { href: "/#integracoes", key: "integrations" },
  { href: "/#precos", key: "pricing" },
  { href: "/#faq", key: "faq" },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const t = useTranslations("Navbar");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`nav${scrolled ? " nav-scrolled" : ""}${mobileOpen ? " nav-open" : ""}`}
    >
      <div className="nav-inner container">
        <Link href="/" className="nav-logo">
          <Logo />
        </Link>

        <nav className="nav-links" aria-label={t("aria")}>
          {LINKS.map((l) => (
            <Link key={l.key} href={l.href} className="nav-link">
              {t(l.key)}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <LanguageSwitcher />
          <Link href="/demo" className="btn btn-primary btn-sm nav-cta">
            {t("demo")}
          </Link>
          <button
            type="button"
            className="nav-burger"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={t("openMenu")}
            aria-expanded={mobileOpen}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className="nav-mobile">
        <div className="container">
          {LINKS.map((l) => (
            <Link key={l.key} href={l.href} className="nav-mobile-link">
              {t(l.key)}
            </Link>
          ))}
          <div className="nav-mobile-foot">
            <LanguageSwitcher />
            <Link href="/demo" className="btn btn-primary">
              {t("demo")}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
