import { useTranslations } from "next-intl";
import { eur } from "./data";

/* ── Dashboard: Fleet Health Score + KPI tiles ── */

export function HealthMock() {
  const t = useTranslations("Mock.dashboard");
  const score = 82;
  const bars = [
    { label: t("utilisation"), value: 92, pts: 37 },
    { label: t("settlements"), value: 75, pts: 22 },
    { label: t("compliance"), value: 77, pts: 23 },
  ];
  const kpis = [
    { label: t("activeDrivers"), value: "24", sub: t("ofTotal", { n: 27 }) },
    { label: t("carsRented"), value: "22", sub: t("available", { n: 3 }) },
    { label: t("weeklyRevenue"), value: eur(6920, { decimals: 0 }), sub: t("rentalIncome"), accent: true },
    { label: t("toSettle"), value: "3", sub: t("pending") },
  ];
  const r = 34;
  const c = 2 * Math.PI * r;

  return (
    <div className="mock-panel health">
      <div className="health-score">
        <svg viewBox="0 0 80 80" aria-hidden="true">
          <circle cx="40" cy="40" r={r} className="ring-bg" />
          <circle
            cx="40"
            cy="40"
            r={r}
            className="ring-fg"
            strokeDasharray={c}
            strokeDashoffset={c * (1 - score / 100)}
          />
        </svg>
        <b>{score}</b>
        <span className="mono-label">{t("health")}</span>
      </div>
      <div className="health-bars">
        {bars.map((b) => (
          <div key={b.label} className="health-bar">
            <span>{b.label}</span>
            <i>
              <em style={{ width: `${b.value}%` }} />
            </i>
            <small>{b.pts}pt</small>
          </div>
        ))}
      </div>
      <div className="health-kpis">
        {kpis.map((k) => (
          <div key={k.label} className="kpi">
            <span className="mono-label">{k.label}</span>
            <b className={k.accent ? "tone-accent" : undefined}>{k.value}</b>
            <small>{k.sub}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Driver portal on a phone ── */

export function PortalMock() {
  const t = useTranslations("Mock.portal");
  const weeks = [612.4, 688.1, 655.9, 716.5];
  const max = Math.max(...weeks);

  return (
    <div className="phone">
      <div className="phone-notch" />
      <div className="phone-screen">
        <div className="phone-top">
          <img src="/brand/prisma-mark-navy.svg" alt="" />
          <span>{t("hello")}</span>
        </div>
        <span className="mono-label">{t("thisWeek")}</span>
        <div className="portal-net">
          <small>{t("net")}</small>
          <b>{eur(716.5)}</b>
        </div>
        <dl className="portal-lines">
          <div>
            <dt>{t("gross")}</dt>
            <dd>{eur(1152.8)}</dd>
          </div>
          <div>
            <dt>{t("deductions")}</dt>
            <dd className="neg">{eur(-436.3)}</dd>
          </div>
        </dl>
        <span className="mono-label">{t("last4")}</span>
        <div className="portal-bars">
          {weeks.map((w, i) => (
            <div key={i} className={i === weeks.length - 1 ? "now" : undefined}>
              <i style={{ height: `${(w / max) * 100}%` }} />
              <small>S{36 + i}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Vehicles list ── */

const CARS = [
  { plate: "AT-21-PF", model: "BYD Atto 3 · 2025", img: "/cars/byd-atto-3.png", status: "rented", rent: 300 },
  { plate: "BX-47-RN", model: "Fiat Grande Panda · 2025", img: "/cars/fiat-grande-panda.png", status: "rented", rent: 250 },
  { plate: "AV-63-JD", model: "Dacia Jogger · 2024", img: "/cars/dacia-jogger.png", status: "available", rent: 280 },
  { plate: "BR-12-TC", model: "Fiat Panda Hybrid · 2024", img: "/cars/fiat-panda-hybrid.png", status: "repair", rent: 230 },
] as const;

export function VehiclesMock() {
  const t = useTranslations("Mock");

  return (
    <div className="mock-panel vehicles">
      {CARS.map((c) => (
        <div key={c.plate} className="veh-row">
          <img src={c.img} alt="" />
          <span className="veh-id">
            <b>{c.plate}</b>
            <small>{c.model}</small>
          </span>
          <span className={`badge badge-${c.status}`}>{t(`status.${c.status}`)}</span>
          <span className="veh-rent">
            {eur(c.rent, { decimals: 0 })}
            <small>{t("vehicles.perWeek")}</small>
          </span>
        </div>
      ))}
    </div>
  );
}

/* ── Multi-company switcher + CIVA Art. 53 monitor ── */

export function CompaniesMock() {
  const t = useTranslations("Mock.companies");
  const companies = [
    { name: "Frota Norte, Lda.", nif: "5•• ••• 873", cars: 14 },
    { name: "Frota Sul, Lda.", nif: "5•• ••• 302", cars: 9 },
    { name: "Frota Centro, Unip.", nif: "5•• ••• 446", cars: 4 },
  ];
  const civa = 12840;
  const limit = 15500;

  return (
    <div className="mock-panel companies">
      <div className="co-switch">
        <span className="co-current">
          <i />
          {t("all")}
          <svg viewBox="0 0 12 12" aria-hidden="true">
            <path d="M3 4.5l3 3 3-3" />
          </svg>
        </span>
        <ul>
          {companies.map((c, i) => (
            <li key={c.nif} className={i === 0 ? "on" : undefined}>
              <span className="co-dot" data-i={i} />
              <span className="co-name">
                {c.name}
                <small>NIF {c.nif}</small>
              </span>
              <span className="co-cars">{t("cars", { n: c.cars })}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="civa">
        <div className="civa-head">
          <span className="mono-label">{t("civa")}</span>
          <span className="badge badge-warn">{t("approaching")}</span>
        </div>
        <i className="civa-bar">
          <em style={{ width: `${(civa / limit) * 100}%` }} />
        </i>
        <small>
          {eur(civa)} {t("of")} {eur(limit)}
        </small>
      </div>
    </div>
  );
}
