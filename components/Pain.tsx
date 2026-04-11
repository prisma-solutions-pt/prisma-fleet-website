import ScrollReveal from "./ScrollReveal";

const PAINS = [
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    stat: "4h+",
    title: "Perdidas em Excel por semana",
    desc: "Copiar dados, calcular descontos, verificar valores. Todas as semanas, a mesma rotina manual.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M15 9l-6 6M9 9l6 6" />
      </svg>
    ),
    stat: "23%",
    title: "Liquidações com erros",
    desc: "Fórmulas partidas, linhas trocadas, combustível esquecido. Erros que custam dinheiro.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
        <path d="M1 1l22 22" />
      </svg>
    ),
    stat: "0",
    title: "Visibilidade para motoristas",
    desc: "Os motoristas ligam a perguntar quanto vão receber. Sem portal, sem transparência.",
  },
];

export default function Pain() {
  return (
    <section className="section">
      <div className="wrap">
        <ScrollReveal>
          <div className="section-head">
            <span className="eyebrow">O problema</span>
            <h2>
              Gerir uma frota TVDE não
              <br />
              <span className="accent">devia depender de Excel</span>
            </h2>
            <p className="lead-center">
              Operadores perdem horas todas as semanas em tarefas que deviam ser
              automáticas. E os erros saem caros.
            </p>
          </div>
        </ScrollReveal>

        <div className="pain-grid">
          {PAINS.map((p, i) => (
            <ScrollReveal key={i} delay={i + 1}>
              <div className="pain-card">
                <div className="pain-icon">{p.icon}</div>
                <div className="pain-stat">{p.stat}</div>
                <div className="pain-title">{p.title}</div>
                <p className="pain-desc">{p.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
