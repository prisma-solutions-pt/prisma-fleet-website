import ScrollReveal from "./ScrollReveal";

const QUESTIONS = [
  {
    q: "O Prisma Fleet é para mim?",
    a: "Se é operador TVDE em Portugal e aluga carros a motoristas Uber ou Bolt, sim. O Prisma Fleet foi feito especificamente para si, quer tenha 5 ou 300 veículos.",
  },
  {
    q: "Posso experimentar sem pagar?",
    a: "Sim. Todos os planos incluem 14 dias de trial gratuito, sem cartão de crédito. Importa os seus dados reais e testa tudo antes de decidir.",
  },
  {
    q: "Como funciona a importação de dados?",
    a: "Exporte os ficheiros CSV do Uber e Bolt e os XLSX da Via Verde e Prio. Arraste para a plataforma e o parser mapeia tudo automaticamente aos motoristas certos.",
  },
  {
    q: "Suportam renda fixa e revenue share?",
    a: "Sim. Cada atribuição motorista-veículo pode ter o seu próprio modelo de compensação. Pode misturar renda fixa e percentagem na mesma frota.",
  },
  {
    q: "Os meus motoristas podem ver as liquidações?",
    a: "Sim. Cada motorista recebe acesso ao portal onde vê os ganhos, deduções e valor final de cada semana. Funciona em qualquer telemóvel.",
  },
  {
    q: "E se tiver várias empresas?",
    a: "O Prisma Fleet suporta multi-empresa. Gira até 5 entidades legais dentro da mesma conta, com troca rápida entre elas.",
  },
  {
    q: "Os meus dados estão seguros?",
    a: "Cada operador tem a sua própria instância isolada com base de dados dedicada. Os dados de um cliente nunca se misturam com os de outro.",
  },
  {
    q: "Posso cancelar a qualquer momento?",
    a: "Sim. Sem contratos de fidelização. Cancele quando quiser e mantém acesso até ao fim do período pago.",
  },
];

export default function FAQ() {
  return (
    <section className="section" id="faq">
      <div className="wrap">
        <ScrollReveal>
          <div className="section-head">
            <span className="eyebrow">F.A.Q</span>
            <h2>Perguntas e respostas</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="faq-grid">
            {QUESTIONS.map((item, i) => (
              <details key={i} className="faq-item">
                <summary className="faq-question">
                  {item.q}
                  <svg className="faq-chevron" viewBox="0 0 24 24">
                    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </summary>
                <div className="faq-answer">
                  <div className="faq-answer-inner">{item.a}</div>
                </div>
              </details>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
