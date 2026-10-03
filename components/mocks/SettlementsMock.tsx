import { useTranslations } from "next-intl";
import AppFrame from "./AppFrame";
import { SETTLEMENTS, WEEK, eur, gross, net, type SettlementStatus } from "./data";

const STATUS_CLASS: Record<SettlementStatus, string> = {
  paid: "badge-paid",
  approved: "badge-approved",
  awaiting: "badge-awaiting",
  calculated: "badge-calculated",
};

export function StatusBadge({ status }: { status: SettlementStatus }) {
  const t = useTranslations("Mock.status");
  return <span className={`badge ${STATUS_CLASS[status]}`}>{t(status)}</span>;
}

/** The weekly settlement pipeline, step 2 ("Rever e Confirmar"), as rendered in the app. */
export default function SettlementsMock() {
  const t = useTranslations("Mock.pipeline");

  const steps = [
    { n: 1, title: t("step1"), sub: t("step1Sub"), state: "done" },
    { n: 2, title: t("step2"), sub: t("step2Sub"), state: "current" },
    { n: 3, title: t("step3"), sub: t("step3Sub"), state: "todo" },
  ];

  const summary = [
    { label: t("gross"), value: eur(WEEK.gross) },
    { label: t("deductions"), value: eur(-WEEK.deductions), tone: "neg" },
    { label: t("net"), value: eur(WEEK.net), tone: "accent" },
    { label: t("average"), value: eur(WEEK.average) },
  ];

  return (
    <AppFrame active="pipeline" title={t("title")} subtitle={t("subtitle")}>
      <div className="pl-period">
        <span className="mono-label">{t("period")}</span>
        <span className="pl-date">21/09/2026</span>
        <span className="pl-arrow">→</span>
        <span className="pl-date">27/09/2026</span>
      </div>

      <ol className="pl-steps">
        {steps.map((s) => (
          <li key={s.n} className={`pl-step pl-step-${s.state}`}>
            <span className="pl-step-n">
              {s.state === "done" ? (
                <svg viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M3.5 8.5l3 3 6-7" />
                </svg>
              ) : (
                s.n
              )}
            </span>
            <span className="pl-step-text">
              <b>{s.title}</b>
              <small>{s.sub}</small>
            </span>
          </li>
        ))}
      </ol>

      <div className="pl-summary">
        {summary.map((s) => (
          <div key={s.label} className="pl-kpi">
            <span className="mono-label">{s.label}</span>
            <b className={s.tone ? `tone-${s.tone}` : undefined}>{s.value}</b>
          </div>
        ))}
      </div>

      <div className="pl-table-card">
        <div className="pl-table-head">
          <span className="pl-tab active">{t("weekly", { n: WEEK.drivers })}</span>
          <span className="pl-tab">{t("finals", { n: 2 })}</span>
          <span className="pl-approve">{t("approveSend")}</span>
        </div>
        <table className="tbl">
          <thead>
            <tr>
              <th>{t("colDriver")}</th>
              <th className="num">Uber</th>
              <th className="num">Bolt</th>
              <th className="num">{t("colGross")}</th>
              <th className="num hide-sm">{t("colRent")}</th>
              <th className="num hide-sm">{t("colFuel")}</th>
              <th className="num hide-md">Via Verde</th>
              <th className="num">{t("colNet")}</th>
              <th>{t("colStatus")}</th>
            </tr>
          </thead>
          <tbody>
            {SETTLEMENTS.map((r) => (
              <tr key={r.plate}>
                <td>
                  <span className="tbl-driver">
                    <i>{r.initials}</i>
                    <span>
                      {r.name}
                      <small>{r.plate}</small>
                    </span>
                  </span>
                </td>
                <td className="num">{eur(r.uber)}</td>
                <td className="num">{eur(r.bolt)}</td>
                <td className="num strong">{eur(gross(r))}</td>
                <td className="num neg hide-sm">
                  {eur(-r.rent)}
                  {r.rentModel === "share" && <small className="tbl-share">{t("share")}</small>}
                </td>
                <td className="num neg hide-sm">{eur(-r.fuel)}</td>
                <td className="num neg hide-md">{eur(-r.viaVerde)}</td>
                <td className="num strong">{eur(net(r))}</td>
                <td>
                  <StatusBadge status={r.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AppFrame>
  );
}
