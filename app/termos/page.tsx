import type { Metadata } from "next";
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

export default function TermosPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="section" style={{ paddingTop: "160px" }}>
          <div className="wrap" style={{ maxWidth: "760px" }}>
            <h1>Termos de Serviço</h1>
            <p className="legal-updated">
              Última atualização: 13 de abril de 2026
            </p>

            <h2>1. Objeto</h2>
            <p>
              Os presentes termos regulam o acesso e a utilização da
              plataforma Prisma Fleet, disponibilizada por Prisma Solutions,
              destinada a operadores TVDE em Portugal para gestão de frotas,
              liquidações e motoristas.
            </p>

            <h2>2. Aceitação</h2>
            <p>
              Ao aceder ao website prismafleet.pt ou ao utilizar a
              plataforma Prisma Fleet, o utilizador aceita integralmente os
              presentes termos. Se não concordar, deverá cessar a utilização.
            </p>

            <h2>3. Descrição do serviço</h2>
            <p>O Prisma Fleet disponibiliza as seguintes funcionalidades:</p>
            <ul>
              <li>Importação de ficheiros de plataformas de mobilidade (Uber, Bolt).</li>
              <li>Cálculo automático de liquidações semanais.</li>
              <li>Gestão de modelos de compensação (renda fixa e revenue share).</li>
              <li>Portal de acesso para motoristas.</li>
              <li>Geração de ficheiros SEPA para pagamentos.</li>
              <li>Dashboard de analytics e KPIs.</li>
            </ul>

            <h2>4. Registo e conta</h2>
            <p>
              O acesso à plataforma requer o registo de uma conta. O
              utilizador é responsável por manter a confidencialidade das
              suas credenciais e por todas as atividades realizadas na sua
              conta.
            </p>

            <h2>5. Planos e preços</h2>
            <p>
              A plataforma está disponível em diferentes planos de
              subscrição. Todos os planos incluem um período de
              experimentação gratuita de 14 dias, sem necessidade de cartão
              de crédito. Os preços e condições de cada plano estão
              disponíveis na página de preços.
            </p>

            <h2>6. Pagamento e faturação</h2>
            <p>
              Após o período de experimentação, o utilizador deverá
              subscrever um plano pago para continuar a utilizar a
              plataforma. A faturação é mensal e processada automaticamente.
            </p>

            <h2>7. Cancelamento</h2>
            <p>
              O utilizador pode cancelar a sua subscrição a qualquer
              momento, sem penalizações. O acesso à plataforma mantém-se
              até ao final do período de faturação em curso.
            </p>

            <h2>8. Propriedade intelectual</h2>
            <p>
              Todos os conteúdos, marcas, logótipos e software do
              Prisma Fleet são propriedade de Prisma Solutions e estão
              protegidos pela legislação aplicável. O utilizador não
              adquire quaisquer direitos de propriedade intelectual pelo
              uso da plataforma.
            </p>

            <h2>9. Dados e privacidade</h2>
            <p>
              O tratamento de dados pessoais é regido pela nossa{" "}
              <a href="/privacidade">Política de Privacidade</a>. Cada
              operador dispõe de uma instância isolada, garantindo a
              separação total dos dados entre clientes.
            </p>

            <h2>10. Disponibilidade do serviço</h2>
            <p>
              Esforçamo-nos por garantir a disponibilidade contínua da
              plataforma, mas não garantimos que o serviço estará
              disponível de forma ininterrupta ou isento de erros. Podemos
              efetuar manutenções programadas com aviso prévio.
            </p>

            <h2>11. Limitação de responsabilidade</h2>
            <p>
              O Prisma Fleet é disponibilizado no estado em que se
              encontra. Prisma Solutions não se responsabiliza por danos
              indiretos, incluindo perda de receitas, dados ou lucros,
              decorrentes da utilização ou impossibilidade de utilização
              da plataforma.
            </p>

            <h2>12. Alterações aos termos</h2>
            <p>
              Reservamo-nos o direito de alterar os presentes termos.
              Quaisquer alterações serão comunicadas aos utilizadores
              registados e entrarão em vigor na data da sua publicação.
            </p>

            <h2>13. Lei aplicável</h2>
            <p>
              Os presentes termos são regidos pela lei portuguesa. Para
              resolução de qualquer litígio será competente o foro da
              comarca da sede de Prisma Solutions.
            </p>

            <h2>14. Contacto</h2>
            <p>
              Para quaisquer questões sobre estes termos, contacte-nos
              através de{" "}
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
