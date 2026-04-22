const ITEMS = [
  "Liquidações automáticas",
  "Importação CSV e XLSX",
  "SEPA XML",
  "Portal do motorista",
  "Analytics da frota",
  "Renda fixa ou revenue share",
  "Exportação PDF",
  "Manutenção e inspeções",
];

export default function ProofStrip() {
  return (
    <section className="proof-strip" aria-label="Integrações e fluxos suportados">
      <p className="proof-strip-label">
        Feito para a rotina real de operadores TVDE em Portugal
      </p>

      <div className="proof-strip-track">
        {ITEMS.concat(ITEMS).map((item, index) => (
          <div key={`${item}-${index}`} className="proof-pill">
            <span className="proof-pill-dot" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
