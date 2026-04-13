import Link from "next/link";
import HeroBackgroundVideo from "./HeroBackgroundVideo";

export default function VideoHero() {
  return (
    <section className="vhero">
      <HeroBackgroundVideo />

      <div className="vhero-overlay" />

      <div className="vhero-content">
        <div className="vhero-text">
          <span className="eyebrow eyebrow-dark vhero-enter vhero-enter-1">
            Gestão de frotas TVDE
          </span>

          <h1 className="vhero-enter vhero-enter-2">
            Liquidações em minutos.
            <br />
            <span className="accent-light">Não em horas.</span>
            <span className="sr-only">
              {" "}Software de gestão de frotas TVDE em Portugal.
            </span>
          </h1>

          <p className="vhero-lead vhero-enter vhero-enter-3">
            Prisma Fleet é o software que substitui as folhas de Excel, elimina
            erros de cálculo e dá aos seus motoristas um portal com o extrato deles.
          </p>

          <div className="vhero-actions vhero-enter vhero-enter-4">
            <a href="#funcionalidades" className="btn btn-ghost-dark">
              Ver funcionalidades
            </a>
            <a href="#precos" className="btn btn-ghost-dark">
              Ver preços
            </a>
            <Link href="/demo" className="btn btn-primary btn-arrow">
              Começar trial gratuito
            </Link>
          </div>
        </div>
      </div>

      <div className="vhero-scroll">
        <div className="vhero-scroll-line" />
      </div>
    </section>
  );
}
