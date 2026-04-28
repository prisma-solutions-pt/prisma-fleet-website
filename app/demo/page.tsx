import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Navbar from "@/components/Navbar";
import DemoForm from "@/components/DemoForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pedir Demonstração Gratuita",
  description:
    "Agende uma demonstração personalizada do Prisma Fleet. Veja como automatizar liquidações, importar ficheiros Uber e Bolt e gerir a sua frota TVDE sem Excel. 14 dias grátis, sem cartão de crédito.",
  alternates: {
    canonical: "https://www.prismafleet.pt/demo",
  },
  openGraph: {
    title: "Pedir Demonstração Gratuita | Prisma Fleet",
    description:
      "Agende uma demonstração do software de gestão de frotas TVDE. 14 dias grátis, sem compromisso.",
    url: "https://www.prismafleet.pt/demo",
  },
};

export default async function DemoPage() {
  const t = await getTranslations("DemoPage");

  return (
    <>
      <Navbar />
      <main>
        <section className="demo-page">
          <div className="demo-grid">
            <div>
              <span className="eyebrow">{t("eyebrow")}</span>
              <h1 style={{ marginBottom: "16px" }}>{t("titleA")}<br />{t("titleB")}</h1>
              <p className="lead">{t("lead")}</p>

              <div style={{ marginTop: "40px", display: "flex", flexDirection: "column", gap: "16px" }}>
                <div className="demo-benefit">
                  <div style={{ fontWeight: 600, marginBottom: "4px", color: "var(--ink)" }}>
                    {t("benefit1Title")}
                  </div>
                  <div style={{ color: "var(--ink2)", fontSize: "0.88rem" }}>
                    {t("benefit1Desc")}
                  </div>
                </div>
                <div className="demo-benefit">
                  <div style={{ fontWeight: 600, marginBottom: "4px", color: "var(--ink)" }}>
                    {t("benefit2Title")}
                  </div>
                  <div style={{ color: "var(--ink2)", fontSize: "0.88rem" }}>
                    {t("benefit2Desc")}
                  </div>
                </div>
                <div className="demo-benefit">
                  <div style={{ fontWeight: 600, marginBottom: "4px", color: "var(--ink)" }}>
                    {t("benefit3Title")}
                  </div>
                  <div style={{ color: "var(--ink2)", fontSize: "0.88rem" }}>
                    {t("benefit3Desc")}
                  </div>
                </div>
              </div>
            </div>

            <DemoForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
