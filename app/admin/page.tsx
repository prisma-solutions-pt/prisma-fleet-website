import { getSupabaseAdmin, type Lead } from "@/lib/supabase";
import { hogQL, listRecentRecordings, recordingUrl } from "@/lib/posthog";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

type Counter = { label: string; value: string | number; sub?: string; accent?: boolean };
type DailyPoint = { day: string; views: number };
type TopRow = { label: string; value: number };

export default async function AdminDashboard() {
  const supabase = getSupabaseAdmin();

  const [
    leadsTotalRes,
    leads7dRes,
    leads24hRes,
    leadsRecentRes,
    pageviewsTotal,
    pageviews7d,
    pageviews24h,
    uniques7d,
    daily,
    topPages,
    topReferrers,
    topCountries,
    demoClicks7d,
    recordings,
  ] = await Promise.all([
    supabase.from("leads").select("id", { count: "exact", head: true }),
    supabase
      .from("leads")
      .select("id", { count: "exact", head: true })
      .gte("created_at", new Date(Date.now() - 7 * 864e5).toISOString()),
    supabase
      .from("leads")
      .select("id", { count: "exact", head: true })
      .gte("created_at", new Date(Date.now() - 864e5).toISOString()),
    supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(25)
      .returns<Lead[]>(),
    hogQL<[number]>(
      "SELECT count() FROM events WHERE event = '$pageview'",
    ),
    hogQL<[number]>(
      "SELECT count() FROM events WHERE event = '$pageview' AND timestamp > now() - INTERVAL 7 DAY",
    ),
    hogQL<[number]>(
      "SELECT count() FROM events WHERE event = '$pageview' AND timestamp > now() - INTERVAL 1 DAY",
    ),
    hogQL<[number]>(
      "SELECT count(DISTINCT distinct_id) FROM events WHERE event = '$pageview' AND timestamp > now() - INTERVAL 7 DAY",
    ),
    hogQL<[string, number]>(
      "SELECT toString(toDate(timestamp)) AS d, count() FROM events WHERE event = '$pageview' AND timestamp > now() - INTERVAL 14 DAY GROUP BY d ORDER BY d ASC",
    ),
    hogQL<[string, number]>(
      "SELECT properties.$pathname AS path, count() AS c FROM events WHERE event = '$pageview' AND timestamp > now() - INTERVAL 30 DAY GROUP BY path ORDER BY c DESC LIMIT 8",
    ),
    hogQL<[string, number]>(
      "SELECT coalesce(nullIf(properties.$referring_domain, ''), 'direto') AS ref, count() AS c FROM events WHERE event = '$pageview' AND timestamp > now() - INTERVAL 30 DAY GROUP BY ref ORDER BY c DESC LIMIT 8",
    ),
    hogQL<[string, number]>(
      "SELECT coalesce(properties.$geoip_country_name, 'Desconhecido') AS country, count() AS c FROM events WHERE event = '$pageview' AND timestamp > now() - INTERVAL 30 DAY GROUP BY country ORDER BY c DESC LIMIT 8",
    ),
    hogQL<[number]>(
      "SELECT count() FROM events WHERE event = '$autocapture' AND properties.$el_text IN ('Pedir Demo', 'Pedir demonstração', 'Agendar demonstração') AND timestamp > now() - INTERVAL 7 DAY",
    ),
    listRecentRecordings(12),
  ]);

  const leadsTotal = leadsTotalRes.count ?? 0;
  const leads7d = leads7dRes.count ?? 0;
  const leads24h = leads24hRes.count ?? 0;
  const leadsRecent = leadsRecentRes.data ?? [];

  const pv7d = n(pageviews7d?.[0]?.[0]);
  const pv24h = n(pageviews24h?.[0]?.[0]);
  const pvTotal = n(pageviewsTotal?.[0]?.[0]);
  const uniq7d = n(uniques7d?.[0]?.[0]);
  const demoClicks = n(demoClicks7d?.[0]?.[0]);
  const conversion = demoClicks > 0 ? ((leads7d / demoClicks) * 100).toFixed(1) + "%" : "—";

  const counters: Counter[] = [
    { label: "Leads (total)", value: leadsTotal, sub: `${leads7d} nos últimos 7 dias`, accent: true },
    { label: "Leads 24h", value: leads24h, sub: "pedidos de demo" },
    { label: "Visitas 7d", value: pv7d, sub: `${pv24h} nas últimas 24h` },
    { label: "Visitantes únicos 7d", value: uniq7d, sub: `${pvTotal} visitas totais` },
    { label: "Cliques em CTA Demo 7d", value: demoClicks, sub: "botões 'Pedir Demo'" },
    { label: "Taxa conversão 7d", value: conversion, sub: "cliques CTA → leads" },
  ];

  const dailySeries: DailyPoint[] = daily.map((r) => ({ day: String(r[0]), views: n(r[1]) }));
  const topPagesRows: TopRow[] = topPages.map((r) => ({ label: String(r[0] || "/"), value: n(r[1]) }));
  const topReferrersRows: TopRow[] = topReferrers.map((r) => ({ label: String(r[0]), value: n(r[1]) }));
  const topCountriesRows: TopRow[] = topCountries.map((r) => ({ label: String(r[0]), value: n(r[1]) }));

  return (
    <div className="admin-shell">
      <header className="admin-header">
        <div className="admin-header-left">
          <div className="admin-logo">
            <span className="admin-logo-mark" aria-hidden="true">PF</span>
            <span className="admin-logo-text">Prisma Fleet · Admin</span>
          </div>
          <span className="admin-live">
            <span className="admin-live-dot" />
            ligado
          </span>
        </div>
        <div className="admin-header-right">
          <a href="/" className="admin-link">Ver site</a>
          <a
            href={`https://eu.posthog.com/project/${process.env.POSTHOG_PROJECT_ID}`}
            target="_blank"
            rel="noreferrer"
            className="admin-link"
          >
            PostHog
          </a>
          <form action="/api/admin/logout" method="POST">
            <button className="admin-logout" type="submit">Sair</button>
          </form>
        </div>
      </header>

      <main className="admin-main">
        <section className="admin-counters">
          {counters.map((c) => (
            <div key={c.label} className={`admin-counter${c.accent ? " admin-counter-accent" : ""}`}>
              <div className="admin-counter-label">{c.label}</div>
              <div className="admin-counter-value">{c.value}</div>
              {c.sub && <div className="admin-counter-sub">{c.sub}</div>}
            </div>
          ))}
        </section>

        <section className="admin-grid">
          <div className="admin-card admin-card-wide">
            <div className="admin-card-head">
              <h2>Visitas por dia</h2>
              <span className="admin-card-meta">últimos 14 dias</span>
            </div>
            <DailyChart data={dailySeries} />
          </div>

          <div className="admin-card">
            <div className="admin-card-head">
              <h2>Páginas mais vistas</h2>
              <span className="admin-card-meta">30 dias</span>
            </div>
            <TopList rows={topPagesRows} empty="Ainda sem dados." />
          </div>

          <div className="admin-card">
            <div className="admin-card-head">
              <h2>Origens de tráfego</h2>
              <span className="admin-card-meta">30 dias</span>
            </div>
            <TopList rows={topReferrersRows} empty="Ainda sem dados." />
          </div>

          <div className="admin-card">
            <div className="admin-card-head">
              <h2>Países</h2>
              <span className="admin-card-meta">30 dias</span>
            </div>
            <TopList rows={topCountriesRows} empty="Ainda sem dados." />
          </div>

          <div className="admin-card admin-card-wide">
            <div className="admin-card-head">
              <h2>Sessões gravadas</h2>
              <span className="admin-card-meta">últimas 12</span>
            </div>
            {recordings.length === 0 ? (
              <p className="admin-empty">Ativa o session replay na PostHog para ver sessões aqui.</p>
            ) : (
              <div className="admin-table-wrap">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Início</th>
                      <th>Duração</th>
                      <th>País</th>
                      <th>Cliques</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {recordings.map((r) => (
                      <tr key={r.id}>
                        <td>{new Date(r.start_time).toLocaleString("pt-PT")}</td>
                        <td>{formatDuration(r.recording_duration)}</td>
                        <td>{r.person?.properties?.$geoip_country_name ?? "—"}</td>
                        <td>{r.click_count ?? 0}</td>
                        <td>
                          <a href={recordingUrl(r.id)} target="_blank" rel="noreferrer" className="admin-link-sm">
                            Ver
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          <div className="admin-card admin-card-full">
            <div className="admin-card-head">
              <h2>Pedidos de demo</h2>
              <span className="admin-card-meta">{leadsRecent.length} mais recentes</span>
            </div>
            {leadsRecent.length === 0 ? (
              <p className="admin-empty">Ainda sem pedidos. Os próximos aparecerão aqui.</p>
            ) : (
              <div className="admin-table-wrap">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Data</th>
                      <th>Nome</th>
                      <th>Empresa</th>
                      <th>Email</th>
                      <th>Telefone</th>
                      <th>Frota</th>
                      <th>Mensagem</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leadsRecent.map((l) => (
                      <tr key={l.id}>
                        <td>{new Date(l.created_at).toLocaleString("pt-PT")}</td>
                        <td>{l.name}</td>
                        <td>{(l as Lead & { company?: string }).company ?? "—"}</td>
                        <td>
                          <a href={`mailto:${l.email}`} className="admin-link-sm">{l.email}</a>
                        </td>
                        <td>{l.phone ?? "—"}</td>
                        <td>{l.fleet_size ?? "—"}</td>
                        <td className="admin-cell-msg">{l.message ?? "—"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

function DailyChart({ data }: { data: DailyPoint[] }) {
  if (data.length === 0) return <p className="admin-empty">Ainda sem dados. Aguarde as primeiras visitas.</p>;
  const max = Math.max(...data.map((d) => d.views), 1);
  return (
    <div className="admin-chart">
      {data.map((d) => {
        const pct = (d.views / max) * 100;
        return (
          <div key={d.day} className="admin-bar-col" title={`${d.day}: ${d.views} visitas`}>
            <div className="admin-bar-track">
              <div className="admin-bar-fill" style={{ height: `${pct}%` }} />
              <span className="admin-bar-value">{d.views}</span>
            </div>
            <span className="admin-bar-label">{d.day.slice(5)}</span>
          </div>
        );
      })}
    </div>
  );
}

function TopList({ rows, empty }: { rows: TopRow[]; empty: string }) {
  if (rows.length === 0) return <p className="admin-empty">{empty}</p>;
  const max = Math.max(...rows.map((r) => r.value), 1);
  return (
    <ul className="admin-toplist">
      {rows.map((r) => (
        <li key={r.label} className="admin-toplist-row">
          <div className="admin-toplist-bar" style={{ width: `${(r.value / max) * 100}%` }} />
          <span className="admin-toplist-label">{r.label}</span>
          <span className="admin-toplist-value">{r.value}</span>
        </li>
      ))}
    </ul>
  );
}

function formatDuration(seconds: number): string {
  if (!seconds || seconds < 0) return "—";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}m ${s.toString().padStart(2, "0")}s`;
}

function n(v: unknown): number {
  if (typeof v === "number") return v;
  if (typeof v === "string") return Number(v) || 0;
  return 0;
}
