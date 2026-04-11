"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link href="/" className="nav-logo">
          <img src="/brand/prisma-mark-black.png" alt="" className="nav-logo-mark" />
          PrismaFleet
        </Link>

        <div className="nav-links">
          <a href="#funcionalidades" className="nav-link">
            Funcionalidades
          </a>
          <a href="#como-funciona" className="nav-link">
            Como funciona
          </a>
          <a href="#precos" className="nav-link">
            Preços
          </a>
        </div>

        <div className="nav-actions">
          <Link href="/demo" className="btn btn-primary btn-arrow">
            Pedir Demo
          </Link>
        </div>
      </div>
    </nav>
  );
}
