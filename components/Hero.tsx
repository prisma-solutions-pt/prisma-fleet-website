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
          Liquidações em minutos.<br />
          Não em horas.
        </h1>

        <p className="lead hero-enter hero-enter-3">
          O software que substitui as folhas de Excel, elimina erros de cálculo
          e dá aos teus motoristas um portal com o extrato deles.
        </p>

        <div className="hero-actions hero-enter hero-enter-4">
          <Link href="/demo" className="btn btn-primary btn-arrow">
            Começar trial gratuito
          </Link>
          <a href="#funcionalidades" className="btn btn-ghost-dark">
            Ver funcionalidades
          </a>
        </div>

        <div className="hero-props hero-enter hero-enter-5">
          <div className="hero-prop">
            <div className="hero-prop-icon">
              <svg viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
            </div>
            <div className="hero-prop-title">Importação automática</div>
            <div className="hero-prop-desc">
              Arrasta ficheiros Uber, Bolt, Via Verde e Prio. O resto é automático.
            </div>
          </div>
          <div className="hero-prop">
            <div className="hero-prop-icon">
              <svg viewBox="0 0 24 24"><path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" /></svg>
            </div>
            <div className="hero-prop-title">Zero erros de cálculo</div>
            <div className="hero-prop-desc">
              Renda fixa ou revenue share. Todos os descontos aplicados sem falhas.
            </div>
          </div>
          <div className="hero-prop">
            <div className="hero-prop-icon">
              <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v-2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>
            </div>
            <div className="hero-prop-title">Portal do motorista</div>
            <div className="hero-prop-desc">
              Cada motorista vê o seu extrato. Sem telefonemas, sem confusão.
            </div>
          </div>
        </div>
      </div>

      <div className="hero-screenshot-wrap hero-enter hero-enter-5">
        <div className="screenshot-frame">
          {/* Replace with: <Image src="/screenshots/dashboard.png" ... /> */}
          Dashboard screenshot
        </div>
      </div>
    </section>
  );
}
