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

  const benefits = [1, 2, 3].map((n) => ({
    title: t(`benefit${n}Title`),
    desc: t(`benefit${n}Desc`),
  }));

  return (
    <>
      <Navbar />
      <main>
        <section className="demo">
          <div className="container demo-grid">
            <div className="demo-copy">
              <span className="eyebrow">{t("eyebrow")}</span>
              <h1>
                {t("titleA")} <span className="muted">{t("titleB")}</span>
              </h1>
              <p className="section-lead">{t("lead")}</p>

              <ol className="demo-benefits">
                {benefits.map((b, i) => (
                  <li key={b.title}>
                    <span className="demo-n">0{i + 1}</span>
                    <div>
                      <b>{b.title}</b>
                      <span>{b.desc}</span>
                    </div>
                  </li>
                ))}
              </ol>

              <p className="demo-sources">
                Uber <i /> Bolt <i /> Via Verde <i /> Prio
              </p>
            </div>

            <DemoForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
