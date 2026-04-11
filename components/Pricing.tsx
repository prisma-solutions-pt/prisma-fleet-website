import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

function Check() {
  return (
    <span className="pricing-check">
      <svg viewBox="0 0 12 12">
        <path d="M2 6l3 3 5-5" />
      </svg>
    </span>
  );
}

const PLANS = [
  {
    name: "Starter",
    price: "--",
    desc: "Para operadores com frotas até 30 veículos que querem sair do Excel.",
    label: "Plano Starter inclui:",
    features: [
      "Até 30 veículos",
      "Liquidações automáticas",
      "Importação Uber e Bolt",
      "Portal do motorista",
      "Suporte por email",
    ],
    featured: false,
  },
  {
    name: "Pro",
    price: "--",
    desc: "Para operadores em crescimento que precisam de controlo total.",
    label: "Tudo do Starter, mais:",
    features: [
      "Até 150 veículos",
      "Pagamentos SEPA",
      "Dashboard analytics",
      "Via Verde e Prio",
      "Multi-empresa",
      "Suporte prioritário",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "--",
    desc: "Para grandes operadores que precisam de infraestrutura dedicada.",
    label: "Tudo do Pro, mais:",
    features: [
      "Veículos ilimitados",
      "Instância dedicada",
      "Integração Bolt API",
      "Relatórios personalizados",
      "Onboarding dedicado",
      "SLA garantido",
    ],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section className="section" id="precos">
      <div className="wrap">
        <ScrollReveal>
          <div className="section-head">
            <span className="eyebrow">Preços</span>
            <h2>
              Escolhe o plano certo
              <br />
              <span className="accent">para a fase da tua frota</span>
            </h2>
            <p className="lead-center">
              Todos os planos incluem um <strong>trial gratuito de 14 dias</strong>.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="pricing-grid">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`pricing-card${plan.featured ? " featured" : ""}`}
              >
                <div className="pricing-name">{plan.name}</div>
                <p className="pricing-desc">{plan.desc}</p>

                <div className="pricing-amount">
                  <span className="pricing-currency">EUR</span>
                  <span className="pricing-value">{plan.price}</span>
                </div>
                <div className="pricing-period">/ mês</div>

                <Link
                  href="/demo"
                  className={`btn ${plan.featured ? "btn-primary" : "btn-ghost"} btn-arrow`}
                  style={{ justifyContent: "center", width: "100%", marginBottom: "24px" }}
                >
                  Começar trial
                </Link>

                <hr className="pricing-separator" />

                <div className="pricing-plan-label">{plan.label}</div>

                <div className="pricing-features">
                  {plan.features.map((f) => (
                    <div key={f} className="pricing-feature">
                      <Check />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
