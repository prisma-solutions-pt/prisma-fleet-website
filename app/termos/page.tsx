import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Termos de Serviço",
  description:
    "Termos e condições de utilização do Prisma Fleet. Leia os termos que regem a utilização da plataforma de gestão de frotas TVDE.",
  alternates: {
    canonical: "https://www.prismafleet.pt/termos",
  },
};

export default async function TermosPage() {
  const t = await getTranslations("Terms");

  return (
    <>
      <Navbar />
      <main>
        <section className="section" style={{ paddingTop: "160px" }}>
          <div className="wrap" style={{ maxWidth: "760px" }}>
            <h1>{t("title")}</h1>
            <p className="legal-updated">{t("updated")}</p>

            <h2>{t("h1")}</h2>
            <p>{t("p1")}</p>

            <h2>{t("h2")}</h2>
            <p>{t("p2")}</p>

            <h2>{t("h3")}</h2>
            <p>{t("p3")}</p>
            <ul>
              <li>{t("list3a")}</li>
              <li>{t("list3b")}</li>
              <li>{t("list3c")}</li>
              <li>{t("list3d")}</li>
              <li>{t("list3e")}</li>
              <li>{t("list3f")}</li>
            </ul>

            <h2>{t("h4")}</h2>
            <p>{t("p4")}</p>

            <h2>{t("h5")}</h2>
            <p>{t("p5")}</p>

            <h2>{t("h6")}</h2>
            <p>{t("p6")}</p>

            <h2>{t("h7")}</h2>
            <p>{t("p7")}</p>

            <h2>{t("h8")}</h2>
            <p>{t("p8")}</p>

            <h2>{t("h9")}</h2>
            <p>
              {t("p9a")}
              <a href="/privacidade">{t("p9link")}</a>
              {t("p9b")}
            </p>

            <h2>{t("h10")}</h2>
            <p>{t("p10")}</p>

            <h2>{t("h11")}</h2>
            <p>{t("p11")}</p>

            <h2>{t("h12")}</h2>
            <p>{t("p12")}</p>

            <h2>{t("h13")}</h2>
            <p>{t("p13")}</p>

            <h2>{t("h14")}</h2>
            <p>
              {t("p14")}
              <a href="mailto:geral@prismasolutions.pt">
                geral@prismasolutions.pt
              </a>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
