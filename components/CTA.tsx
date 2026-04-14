import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function CTA() {
  return (
    <section className="section">
      <ScrollReveal>
        <div className="cta-dark">
          <div className="cta-dark-inner">
            <span className="eyebrow eyebrow-dark">Começar agora</span>
            <h2>
              Deixe o Excel para trás
              <br />
              <span className="accent-light">e feche cada semana com controlo</span>
            </h2>
            <p className="lead-center">
              Experimente o Prisma Fleet durante 14 dias sem compromisso.
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
