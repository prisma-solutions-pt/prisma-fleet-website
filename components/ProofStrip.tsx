import { useTranslations } from "next-intl";

export default function ProofStrip() {
  const t = useTranslations("ProofStrip");
  const items = t.raw("items") as string[];

  return (
    <section className="proof-strip" aria-label={t("aria")}>
      <p className="proof-strip-label">{t("label")}</p>

      <div className="proof-strip-track">
        {items.concat(items).map((item, index) => (
          <div key={`${item}-${index}`} className="proof-pill">
            <span className="proof-pill-dot" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
