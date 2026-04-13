import type { Metadata } from "next";
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

export default function PrivacidadePage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="section" style={{ paddingTop: "160px" }}>
          <div className="wrap" style={{ maxWidth: "760px" }}>
            <h1>Política de Privacidade</h1>
            <p className="legal-updated">
              Última atualização: 13 de abril de 2026
            </p>

            <h2>1. Responsável pelo tratamento</h2>
            <p>
              Prisma Solutions, pessoa coletiva com sede em Portugal, é a
              entidade responsável pelo tratamento dos dados pessoais
              recolhidos através do website prismafleet.pt e da plataforma
              Prisma Fleet.
            </p>
            <p>
              Contacto:{" "}
              <a href="mailto:geral@prismasolutions.pt">
                geral@prismasolutions.pt
              </a>
            </p>

            <h2>2. Dados pessoais recolhidos</h2>
            <p>Recolhemos os seguintes dados pessoais:</p>
            <ul>
              <li>
                <strong>Dados de identificação:</strong> nome, email e
                número de telefone fornecidos no formulário de contacto ou
                demonstração.
              </li>
              <li>
                <strong>Dados de utilização:</strong> informações técnicas
                sobre a sua visita ao website, incluindo endereço IP, tipo
                de browser e páginas visitadas.
              </li>
              <li>
                <strong>Dados operacionais:</strong> dados de frotas,
                motoristas e liquidações introduzidos na plataforma pelos
                utilizadores registados.
              </li>
            </ul>

            <h2>3. Finalidade do tratamento</h2>
            <p>Os dados pessoais são tratados para as seguintes finalidades:</p>
            <ul>
              <li>Responder a pedidos de contacto e demonstração.</li>
              <li>Prestar os serviços contratados na plataforma Prisma Fleet.</li>
              <li>Enviar comunicações relacionadas com o serviço.</li>
              <li>Melhorar a experiência de utilização do website e da plataforma.</li>
              <li>Cumprir obrigações legais aplicáveis.</li>
            </ul>

            <h2>4. Base legal</h2>
            <p>
              O tratamento dos dados pessoais baseia-se no consentimento do
              titular, na execução de contrato ou pré-contrato, e no
              cumprimento de obrigações legais, conforme aplicável.
            </p>

            <h2>5. Partilha de dados</h2>
            <p>
              Os dados pessoais não são vendidos nem partilhados com
              terceiros para fins de marketing. Podemos partilhar dados com
              prestadores de serviços necessários à operação da plataforma
              (alojamento, processamento de pagamentos), sujeitos a
              obrigações de confidencialidade.
            </p>

            <h2>6. Segurança</h2>
            <p>
              Implementamos medidas técnicas e organizativas adequadas para
              proteger os dados pessoais contra acesso não autorizado,
              perda ou destruição. Cada operador dispõe de uma instância
              isolada com base de dados dedicada.
            </p>

            <h2>7. Conservação dos dados</h2>
            <p>
              Os dados pessoais são conservados apenas pelo período
              necessário às finalidades para as quais foram recolhidos ou
              conforme exigido por lei.
            </p>

            <h2>8. Direitos dos titulares</h2>
            <p>
              Nos termos do Regulamento Geral sobre a Proteção de Dados
              (RGPD), tem direito a:
            </p>
            <ul>
              <li>Aceder aos seus dados pessoais.</li>
              <li>Solicitar a retificação de dados incorretos.</li>
              <li>Solicitar a eliminação dos seus dados.</li>
              <li>Opor-se ao tratamento dos seus dados.</li>
              <li>Solicitar a portabilidade dos seus dados.</li>
              <li>
                Apresentar reclamação junto da Comissão Nacional de Proteção
                de Dados (CNPD).
              </li>
            </ul>
            <p>
              Para exercer os seus direitos, contacte-nos através de{" "}
              <a href="mailto:geral@prismasolutions.pt">
                geral@prismasolutions.pt
              </a>
              .
            </p>

            <h2>9. Cookies</h2>
            <p>
              Este website não utiliza cookies de rastreamento ou
              publicidade. Podem ser utilizados cookies estritamente
              necessários ao funcionamento do website.
            </p>

            <h2>10. Alterações</h2>
            <p>
              Reservamo-nos o direito de atualizar esta política a qualquer
              momento. As alterações entram em vigor na data da sua
              publicação nesta página.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
