import ScrollReveal from "./ScrollReveal";

const STEPS = [
  {
    num: "01",
    title: "Importa",
    desc: "Arrasta os ficheiros do Uber, Bolt, Via Verde e Prio para a plataforma.",
  },
  {
    num: "02",
    title: "Calcula",
    desc: "O sistema gera as liquidações automaticamente com todos os descontos.",
  },
  {
    num: "03",
    title: "Aprova",
    desc: "Revisa os valores, ajusta o que for preciso e aprova cada liquidação.",
  },
  {
    num: "04",
    title: "Paga",
    desc: "Gera o ficheiro SEPA, envia para o banco e marca como pago.",
  },
];

export default function Workflow() {
  return (
    <section className="section" id="como-funciona">
      <div className="wrap">
        <ScrollReveal>
          <div className="section-head">
            <span className="eyebrow">Como funciona</span>
            <h2>De ficheiro a pagamento<br />em 4 passos</h2>
            <p className="lead-center">
              Um fluxo simples que substitui horas de trabalho manual.
              Todas as semanas, sem falhas.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="workflow-grid">
            {STEPS.map((s) => (
              <div key={s.num} className="workflow-step">
                <div className="workflow-number">{s.num}</div>
                <div className="workflow-step-title">{s.title}</div>
                <p className="workflow-step-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
