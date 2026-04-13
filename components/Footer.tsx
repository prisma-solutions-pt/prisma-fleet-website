import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer" aria-label="Rodapé do site">
      <div className="footer-top">
        <div className="footer-brand">
          <img src="/brand/prisma-mark-black.png" alt="PrismaFleet" className="footer-brand-mark" />
          <span className="footer-brand-name">PrismaFleet</span>
        </div>
      </div>

      <div className="footer-columns">
        <div>
          <div className="footer-col-title">Produto</div>
          <div className="footer-col-links">
            <a href="#funcionalidades" className="footer-col-link">Funcionalidades</a>
            <a href="#precos" className="footer-col-link">Preços</a>
            <a href="#como-funciona" className="footer-col-link">Como funciona</a>
          </div>
        </div>
        <div>
          <div className="footer-col-title">Recursos</div>
          <div className="footer-col-links">
            <Link href="/demo" className="footer-col-link">Pedir Demo</Link>
          </div>
        </div>
        <div>
          <div className="footer-col-title">Legal</div>
          <div className="footer-col-links">
            <Link href="/privacidade" className="footer-col-link">Política de Privacidade</Link>
            <Link href="/termos" className="footer-col-link">Termos de Serviço</Link>
          </div>
        </div>
        <div>
          <div className="footer-col-title">Contacto</div>
          <div className="footer-col-links">
            <a href="mailto:geral@prismasolutions.pt" className="footer-col-link">geral@prismasolutions.pt</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="footer-copy">2026 PrismaFleet</span>
        <span className="footer-parent">Uma solução Prisma Solutions</span>
      </div>
    </footer>
  );
}
