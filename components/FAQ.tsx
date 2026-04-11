"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const QUESTIONS = [
  {
    q: "O PrismaFleet é para mim?",
    a: "Se és operador TVDE em Portugal e alugas carros a motoristas Uber ou Bolt, sim. O PrismaFleet foi feito especificamente para ti, quer tenhas 5 ou 300 veículos.",
  },
  {
    q: "Posso experimentar sem pagar?",
    a: "Sim. Todos os planos incluem 14 dias de trial gratuito, sem cartão de crédito. Importas os teus dados reais e testas tudo antes de decidir.",
  },
  {
    q: "Como funciona a importação de dados?",
    a: "Exportas os ficheiros CSV do Uber e Bolt e os XLSX da Via Verde e Prio. Arrastas para a plataforma e o parser mapeia tudo automaticamente aos motoristas certos.",
  },
  {
    q: "Suportam renda fixa e revenue share?",
    a: "Sim. Cada atribuição motorista-veículo pode ter o seu próprio modelo de compensação. Podes misturar renda fixa e percentagem na mesma frota.",
  },
  {
    q: "Os meus motoristas podem ver as liquidações?",
    a: "Sim. Cada motorista recebe acesso ao portal onde vê os ganhos, deduções e valor final de cada semana. Funciona em qualquer telemóvel.",
  },
  {
    q: "E se tiver várias empresas?",
    a: "O PrismaFleet suporta multi-empresa. Geres até 5 entidades legais dentro da mesma conta, com troca rápida entre elas.",
  },
  {
    q: "Os meus dados estão seguros?",
    a: "Cada operador tem a sua própria instância isolada com base de dados dedicada. Os dados de um cliente nunca se misturam com os de outro.",
  },
  {
    q: "Posso cancelar a qualquer momento?",
    a: "Sim. Sem contratos de fidelização. Cancelas quando quiseres e manténs acesso até ao fim do período pago.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

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
              <div
                key={i}
                className={`faq-item${openIndex === i ? " open" : ""}`}
              >
                <button
                  className="faq-question"
                  onClick={() => toggle(i)}
                  type="button"
                >
                  {item.q}
                  <svg className="faq-chevron" viewBox="0 0 24 24">
                    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div className="faq-answer">
                  <div className="faq-answer-inner">{item.a}</div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
