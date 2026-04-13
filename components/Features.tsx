import ScrollReveal from "./ScrollReveal";

const CARDS = [
  {
    title: "Liquidações automáticas",
    desc: "Importe os ganhos, aplique renda, combustível, Via Verde e deduções. O cálculo é instantâneo. Renda fixa ou revenue share.",
    screenshot: "settlements",
  },
  {
    title: "Importação inteligente",
    desc: "Arraste ficheiros CSV ou XLSX. O parser reconhece as colunas automaticamente e mapeia tudo ao motorista certo.",
    screenshot: "imports",
  },
  {
    title: "Portal do motorista",
    desc: "Cada motorista tem acesso ao seu próprio portal. Vê ganhos, deduções e valor final. Sem telefonemas.",
    screenshot: "driver-portal",
  },
  {
    title: "Dashboard com KPIs",
    desc: "Receita total, veículos ativos, taxa de ocupação e performance por motorista. Tudo num só lugar.",
    screenshot: "analytics",
  },
];

const EXTRA_FEATURES = [
  {
    icon: <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" /></svg>,
    title: "Pagamentos SEPA.",
    desc: "Gere ficheiros SEPA XML prontos para o banco.",
  },
  {
    icon: <svg viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" /></svg>,
    title: "Exportação PDF.",
    desc: "Relatórios semanais para cada motorista.",
  },
  {
    icon: <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
    title: "Multi-empresa.",
    desc: "Gira até 5 empresas com uma só conta.",
  },
  {
    icon: <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><path d="M22 6l-10 7L2 6" /></svg>,
    title: "CRM integrado.",
    desc: "Gira leads e acompanhe potenciais motoristas.",
  },
  {
    icon: <svg viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" /></svg>,
    title: "Manutenção.",
    desc: "Registe revisões, seguros e inspeções.",
  },
  {
    icon: <svg viewBox="0 0 24 24"><path d="M18 20V10M12 20V4M6 20v-6" /></svg>,
    title: "Analytics avançado.",
    desc: "Fleet Score e tendências semanais.",
  },
];

export default function Features() {
  return (
    <section className="section" id="funcionalidades">
      <div className="wrap">
        <ScrollReveal>
          <div className="section-head">
            <span className="eyebrow">Funcionalidades</span>
            <h2>
              Uma plataforma para
              <br />
              <span className="accent">operar a sua frota ponta a ponta</span>
            </h2>
            <p className="lead-center">
              Do import ao pagamento, uma plataforma completa para operadores
              TVDE. Sem Excel, sem erros, sem stress.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="features-grid">
            {CARDS.map((c) => (
              <div key={c.screenshot} className="feature-card">
                <div className="feature-card-visual">
                  {/* Replace with: <Image src={`/screenshots/${c.screenshot}.png`} ... /> */}
                  <div className="placeholder-soon">
                    <div className="placeholder-soon-icon">
                      <svg viewBox="0 0 24 24"><path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    </div>
                    <span className="placeholder-soon-label">Em breve</span>
                  </div>
                </div>
                <div className="feature-card-body">
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="feature-card-full">
            <div className="screenshot-frame-light" style={{ aspectRatio: '16/7' }}>
              {/* Replace with full-width dashboard screenshot */}
              <div className="placeholder-soon">
                <div className="placeholder-soon-icon">
                  <svg viewBox="0 0 24 24"><path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <span className="placeholder-soon-label">Em breve</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="feature-list">
            {EXTRA_FEATURES.map((f) => (
              <div key={f.title} className="feature-list-item">
                <div className="feature-list-icon">{f.icon}</div>
                <div className="feature-list-text">
                  <strong>{f.title}</strong>
                  <span>{f.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
