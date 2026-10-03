import { useTranslations } from "next-intl";
import PipelineTabs from "./PipelineTabs";
import ScrollReveal from "./ScrollReveal";
import { ImportMock, ReceiptMock, SepaMock } from "./mocks/PipelineMocks";

export default function HowItWorks() {
  const t = useTranslations("HowItWorks");

  const steps = [1, 2, 3].map((n) => ({
    kicker: t(`step${n}Kicker`),
    title: t(`step${n}Title`),
    desc: t(`step${n}Desc`),
  }));

  return (
    <section id="como-funciona" className="section">
      <div className="container">
        <ScrollReveal>
          <div className="section-head">
            <span className="eyebrow">{t("eyebrow")}</span>
            <h2>
              {t("titleA")} <span className="muted">{t("titleB")}</span>
            </h2>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <PipelineTabs
            steps={steps}
            panels={[
              <ImportMock key="import" />,
              <div key="review" className="mock-panel review-panel">
                <ReceiptMock />
              </div>,
              <SepaMock key="pay" />,
            ]}
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
