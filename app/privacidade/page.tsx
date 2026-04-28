import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de privacidade do Prisma Fleet. Saiba como recolhemos, utilizamos e protegemos os seus dados pessoais.",
  alternates: {
    canonical: "https://www.prismafleet.pt/privacidade",
  },
};

export default async function PrivacidadePage() {
  const t = await getTranslations("Privacy");

  return (
    <>
      <Navbar />
      <main>
        <section className="section" style={{ paddingTop: "160px" }}>
          <div className="wrap" style={{ maxWidth: "760px" }}>
            <h1>{t("title")}</h1>
            <p className="legal-updated">{t("updated")}</p>

            <h2>{t("h1")}</h2>
            <p>{t("p1a")}</p>
            <p>
              {t("contactLabel")}
              <a href="mailto:geral@prismasolutions.pt">
                geral@prismasolutions.pt
              </a>
            </p>

            <h2>{t("h2")}</h2>
            <p>{t("p2")}</p>
            <ul>
              <li>
                <strong>{t("list2a")}</strong>
                {t("list2aDesc")}
              </li>
              <li>
                <strong>{t("list2b")}</strong>
                {t("list2bDesc")}
              </li>
              <li>
                <strong>{t("list2c")}</strong>
                {t("list2cDesc")}
              </li>
            </ul>

            <h2>{t("h3")}</h2>
            <p>{t("p3")}</p>
            <ul>
              <li>{t("list3a")}</li>
              <li>{t("list3b")}</li>
              <li>{t("list3c")}</li>
              <li>{t("list3d")}</li>
              <li>{t("list3e")}</li>
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
            <ul>
              <li>{t("list8a")}</li>
              <li>{t("list8b")}</li>
              <li>{t("list8c")}</li>
              <li>{t("list8d")}</li>
              <li>{t("list8e")}</li>
              <li>{t("list8f")}</li>
            </ul>
            <p>
              {t("p8b")}
              <a href="mailto:geral@prismasolutions.pt">
                geral@prismasolutions.pt
              </a>
              .
            </p>

            <h2>{t("h9")}</h2>
            <p>{t("p9")}</p>

            <h2>{t("h10")}</h2>
            <p>{t("p10")}</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
