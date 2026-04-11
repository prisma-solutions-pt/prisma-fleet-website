import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import DemoForm from "@/components/DemoForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pedir Demo | PrismaFleet",
  description: "Pede uma demonstração do PrismaFleet e vê como podemos simplificar a gestão da tua frota TVDE.",
};

export default function DemoPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="demo-page">
          <div className="demo-grid">
            <div>
              <span className="eyebrow">Pedir demonstração</span>
              <h1 style={{ marginBottom: "16px" }}>Vê o PrismaFleet<br />em ação</h1>
              <p className="lead">
                Preenche o formulário e agendamos uma demonstração personalizada
                para a tua operação. Sem compromisso, sem cartão de crédito.
              </p>

              <div style={{ marginTop: "40px", display: "flex", flexDirection: "column", gap: "16px" }}>
                <div className="demo-benefit">
                  <div style={{ fontWeight: 600, marginBottom: "4px", color: "var(--ink)" }}>
                    Resposta em menos de 24 horas
                  </div>
                  <div style={{ color: "var(--ink2)", fontSize: "0.88rem" }}>
                    A equipa entra em contacto contigo no dia útil seguinte.
                  </div>
                </div>
                <div className="demo-benefit">
                  <div style={{ fontWeight: 600, marginBottom: "4px", color: "var(--ink)" }}>
                    Demo personalizada
                  </div>
                  <div style={{ color: "var(--ink2)", fontSize: "0.88rem" }}>
                    Mostramos a plataforma com dados adaptados ao tamanho da tua frota.
                  </div>
                </div>
                <div className="demo-benefit">
                  <div style={{ fontWeight: 600, marginBottom: "4px", color: "var(--ink)" }}>
                    14 dias de trial gratuito
                  </div>
                  <div style={{ color: "var(--ink2)", fontSize: "0.88rem" }}>
                    Depois da demo, experimentas com os teus dados reais durante 2 semanas.
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
