import Link from "next/link";
import { Waves } from "@/components/ui/wave-background";

export default function Hero() {
  return (
    <section className="hero">
      <Waves
        strokeColor="rgba(37, 99, 235, 0.07)"
        backgroundColor="transparent"
        pointerSize={0.4}
      />

      <div className="hero-content">
        <div className="hero-enter hero-enter-1">
          <span className="eyebrow eyebrow-dark">Gestão de frotas TVDE</span>
        </div>

        <h1 className="hero-enter hero-enter-2">
          Liquidações em minutos.
          <br />
          <span className="accent-light">Não em horas.</span>
        </h1>

        <p className="lead hero-enter hero-enter-3">
          O software que substitui as folhas de Excel, elimina erros de cálculo
          e dá aos teus motoristas um portal com o extrato deles.
        </p>

        <div className="hero-facts hero-enter hero-enter-4">
          <span>Feito para operadores TVDE em Portugal</span>
          <span>Renda fixa ou revenue share</span>
          <span>Importação Uber, Bolt, Via Verde e Prio</span>
        </div>

        <div className="hero-actions hero-enter hero-enter-5">
          <Link href="/demo" className="btn btn-primary btn-arrow">
            Começar trial gratuito
          </Link>
          <a href="#funcionalidades" className="btn btn-ghost-dark">
            Ver funcionalidades
          </a>
        </div>

        <div className="hero-props hero-enter hero-enter-6">
          <a href="#funcionalidades" className="hero-prop">
            <div className="hero-prop-icon">
              <svg viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
            </div>
            <div className="hero-prop-title">
              <span>Importação automática</span>
              <span className="hero-prop-arrow">{"\u2192"}</span>
            </div>
            <div className="hero-prop-desc">
              Arrasta ficheiros Uber, Bolt, Via Verde e Prio. O resto é automático.
            </div>
          </a>
          <a href="#como-funciona" className="hero-prop">
            <div className="hero-prop-icon">
              <svg viewBox="0 0 24 24"><path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" /></svg>
            </div>
            <div className="hero-prop-title">
              <span>Zero erros de cálculo</span>
              <span className="hero-prop-arrow">{"\u2192"}</span>
            </div>
            <div className="hero-prop-desc">
              Renda fixa ou revenue share. Todos os descontos aplicados sem falhas.
            </div>
          </a>
          <a href="#funcionalidades" className="hero-prop">
            <div className="hero-prop-icon">
              <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v-2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>
            </div>
            <div className="hero-prop-title">
              <span>Portal do motorista</span>
              <span className="hero-prop-arrow">{"\u2192"}</span>
            </div>
            <div className="hero-prop-desc">
              Cada motorista vê o seu extrato. Sem telefonemas, sem confusão.
            </div>
          </a>
        </div>
      </div>

      <div className="hero-screenshot-wrap hero-enter hero-enter-6">
        <div className="screenshot-frame">
          <div className="screenshot-toolbar">
            <div className="screenshot-dots">
              <span />
              <span />
              <span />
            </div>
            <div className="screenshot-toolbar-pill">Dashboard semanal</div>
          </div>
          <div className="screenshot-canvas">
            {/* Replace with: <Image src="/screenshots/dashboard.png" ... /> */}
            Dashboard screenshot
          </div>
        </div>
      </div>
    </section>
  );
}
