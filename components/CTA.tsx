import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function CTA() {
  return (
    <section className="section">
      <ScrollReveal>
        <div className="cta-dark">
          <div className="cta-dark-inner">
            <span className="eyebrow eyebrow-dark">Começar agora</span>
            <h2>Deixa o Excel para trás</h2>
            <p className="lead-center">
              Experimenta o PrismaFleet durante 14 dias sem compromisso.
              Sem cartão de crédito, sem complicações.
            </p>
            <div className="cta-actions">
              <Link href="/demo" className="btn btn-primary btn-arrow">
                Pedir Demo
              </Link>
              <a href="#precos" className="btn btn-ghost-dark">
                Ver preços
              </a>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
