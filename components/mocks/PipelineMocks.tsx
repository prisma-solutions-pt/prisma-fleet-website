import { useTranslations } from "next-intl";
import { SETTLEMENTS, WEEK, eur, gross, deductions, net } from "./data";

function Check() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="ico-check">
      <path d="M3.5 8.5l3 3 6-7" />
    </svg>
  );
}

/* ── Step 1: import cards (Uber, Bolt, Via Verde, Prio) ── */

const SOURCES = [
  { name: "Uber", logo: "/integrations/uber.png", rows: 264, mode: "auto" },
  { name: "Bolt", logo: "/integrations/bolt.png", rows: 243, mode: "api" },
  { name: "Via Verde", logo: "/integrations/viaverde.png", rows: 180, mode: "file" },
  { name: "Prio", logo: "/integrations/prio.svg", rows: 96, mode: "file" },
] as const;

export function ImportMock() {
  const t = useTranslations("Mock.import");

  return (
    <div className="mock-panel">
      <div className="imp-grid">
        {SOURCES.map((s) => (
          <div key={s.name} className="imp-card">
            <div className="imp-head">
              <b>{s.name}</b>
              <span className="imp-count">
                <Check />
                {t("imported", { n: s.rows })}
              </span>
            </div>
            <div className="imp-drop">
              <img src={s.logo} alt="" className="imp-logo" />
              <span className="imp-ok">
                <Check />
              </span>
              <b>{t("rows", { n: s.rows })}</b>
              <small>{s.mode === "file" ? t("file") : s.mode === "api" ? t("api") : t("auto")}</small>
            </div>
          </div>
        ))}
      </div>
      <div className="imp-roadmap">
        <span className="mono-label">{t("building")}</span>
        <span>Galp</span>
        <span>BP</span>
        <span>Repsol</span>
      </div>
    </div>
  );
}

/* ── Step 2: weekly settlement receipt for one driver ── */

export function ReceiptMock({ compact = false }: { compact?: boolean }) {
  const t = useTranslations("Mock.receipt");
  const r = SETTLEMENTS[1];

  const lines = [
    { label: t("uber"), value: eur(r.uber) },
    { label: t("bolt"), value: eur(r.bolt) },
    { label: t("gross"), value: eur(gross(r)), strong: true },
    { label: t("rent"), value: eur(-r.rent), neg: true },
    { label: t("fuel"), value: eur(-r.fuel), neg: true },
    { label: "Via Verde", value: eur(-r.viaVerde), neg: true },
    { label: "WiFi", value: eur(-r.wifi), neg: true },
    { label: t("totalDed"), value: eur(-deductions(r)), strong: true, neg: true },
  ];

  return (
    <div className={`receipt${compact ? " receipt-compact" : ""}`}>
      <div className="receipt-head">
        <div>
          <span className="mono-label">{t("title")}</span>
          <b>{r.name}</b>
          <small>
            {r.plate} · {t("week")}
          </small>
        </div>
        {!compact && (
          <div className="seg" aria-hidden="true">
            <span className="seg-on">{t("fixed")}</span>
            <span>{t("share")}</span>
          </div>
        )}
      </div>
      <dl className="receipt-lines">
        {(compact ? lines.filter((l) => l.strong) : lines).map((l) => (
          <div key={l.label} className={l.strong ? "strong" : undefined}>
            <dt>{l.label}</dt>
            <dd className={l.neg ? "neg" : undefined}>{l.value}</dd>
          </div>
        ))}
      </dl>
      <div className="receipt-total">
        <span>{t("net")}</span>
        <b>{eur(net(r))}</b>
      </div>
    </div>
  );
}

/* ── Step 3: SEPA payment ── */

/** Index of the sample driver with no IBAN on file (excluded from the SEPA batch). */
const NO_IBAN = 3;
const IBANS = ["PT50 0035 •••• 4821", "PT50 0033 •••• 1907", "PT50 0010 •••• 6634", null, "PT50 0036 •••• 2258"];

export function SepaMock() {
  const t = useTranslations("Mock.sepa");
  const rows = SETTLEMENTS.slice(0, 5);
  const ibans = IBANS;

  return (
    <div className="mock-panel sepa">
      <div className="sepa-head">
        <span className="mono-label">{t("ready")}</span>
        <span className="sepa-selected">{t("selected", { n: WEEK.drivers - 1 })}</span>
      </div>
      <table className="tbl">
        <thead>
          <tr>
            <th aria-hidden="true" />
            <th>{t("colDriver")}</th>
            <th>IBAN</th>
            <th className="num">{t("colTransfer")}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={r.plate} className={ibans[i] ? undefined : "muted"}>
              <td>
                <span className={`cbx${ibans[i] ? " on" : ""}`}>{ibans[i] && <Check />}</span>
              </td>
              <td>{r.name}</td>
              <td className="mono">
                {ibans[i] ?? <span className="badge badge-blocked">{t("noIban")}</span>}
              </td>
              <td className="num strong">{eur(net(r))}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="sepa-actions">
        <span className="btn-mock btn-mock-primary">{t("download", { n: WEEK.drivers - 1 })}</span>
        <span className="btn-mock">{t("markPaid", { n: WEEK.drivers - 1 })}</span>
      </div>
    </div>
  );
}

/** Small floating confirmation used over the hero mock. */
export function SepaToast() {
  const t = useTranslations("Mock.sepa");
  return (
    <div className="toast">
      <span className="toast-ico">
        <Check />
      </span>
      <div>
        <b>{t("generated")}</b>
        <small>
          {t("transfers", { n: WEEK.drivers - 1 })} · {eur(WEEK.net - net(SETTLEMENTS[NO_IBAN]))}
        </small>
      </div>
      <span className="toast-file">pain.001.xml</span>
    </div>
  );
}
