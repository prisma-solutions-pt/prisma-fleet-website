import { useTranslations } from "next-intl";
import ScrollReveal from "./ScrollReveal";

type Stat = { value: string; label: string; source?: string };

export default function Stats() {
  const t = useTranslations("Stats");
  const items = t.raw("items") as Stat[];

  return (
    <section className="stats" aria-label={t("aria")}>
      <div className="container">
        <ScrollReveal>
          <dl className="stats-grid">
            {items.map((s) => (
              <div key={s.label} className="stat">
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
                {s.source && <small>{s.source}</small>}
              </div>
            ))}
          </dl>
        </ScrollReveal>
      </div>
    </section>
  );
}
