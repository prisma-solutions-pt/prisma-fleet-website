"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
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
            <img src={logoMarkSrc} alt="PrismaFleet" className="nav-logo-mark" />
            PrismaFleet
          </Link>

          <div className="nav-links">
            <Link href="/#funcionalidades" className="nav-link">
              Funcionalidades
            </Link>
            <Link href="/#como-funciona" className="nav-link">
              Como funciona
            </Link>
            <Link href="/#precos" className="nav-link">
              Preços
            </Link>
          </div>

          <div className="nav-actions">
            <Link href="/demo" className="btn btn-primary btn-arrow">
              Pedir Demo
            </Link>
            <button
              type="button"
              className={`nav-burger${mobileOpen ? " open" : ""}`}
              onClick={() => setMobileOpen((open) => !open)}
              aria-label="Abrir menu"
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
            Funcionalidades
          </Link>
          <Link href="/#como-funciona" className="nav-mobile-link">
            Como funciona
          </Link>
          <Link href="/#precos" className="nav-mobile-link">
            Preços
          </Link>
          <Link href="/demo" className="btn btn-primary btn-arrow nav-mobile-cta">
            Pedir Demo
          </Link>
        </div>
      </div>
    </header>
  );
}
