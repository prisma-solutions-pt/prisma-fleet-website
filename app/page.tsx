import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import VideoHero from "@/components/VideoHero";
import Hero from "@/components/Hero";
import ProofStrip from "@/components/ProofStrip";
import Pain from "@/components/Pain";
import Features from "@/components/Features";
import Workflow from "@/components/Workflow";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Prisma Fleet | Software de Gestão de Frotas TVDE em Portugal",
  description:
    "Prisma Fleet é o software de gestão de frotas TVDE feito para operadores em Portugal. Liquidações automáticas, importação Uber e Bolt, portal do motorista e pagamentos SEPA. Experimente grátis durante 14 dias.",
  alternates: {
    canonical: "https://www.prismafleet.pt",
  },
  openGraph: {
    title: "Prisma Fleet | Software de Gestão de Frotas TVDE em Portugal",
    description:
      "Prisma Fleet: liquidações em minutos, não em horas. Importação Uber e Bolt, portal do motorista e pagamentos SEPA. O software feito para operadores TVDE em Portugal.",
    url: "https://www.prismafleet.pt",
  },
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Prisma Fleet",
  alternateName: "PrismaFleet",
  description:
    "Software de gestão de frotas TVDE em Portugal. Liquidações automáticas, importação de ficheiros Uber e Bolt, portal do motorista, pagamentos SEPA e dashboard de analytics.",
  url: "https://www.prismafleet.pt",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  availableOnDevice: "Desktop, Mobile",
  inLanguage: "pt-PT",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    offerCount: 3,
  },
  featureList: [
    "Liquidações automáticas",
    "Importação Uber e Bolt",
    "Portal do motorista",
    "Renda fixa e revenue share",
    "Pagamentos SEPA XML",
    "Dashboard com KPIs",
    "Multi-empresa",
    "Exportação PDF",
    "CRM integrado",
    "Gestão de manutenção",
  ],
  publisher: {
    "@type": "Organization",
    name: "Prisma Solutions",
    url: "https://www.prismasolutions.pt",
    logo: {
      "@type": "ImageObject",
      url: "https://www.prismafleet.pt/brand/prisma-mark-black.png",
    },
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "O Prisma Fleet é para mim?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Se é operador TVDE em Portugal e aluga carros a motoristas Uber ou Bolt, sim. O Prisma Fleet foi feito especificamente para si, quer tenha 5 ou 300 veículos.",
      },
    },
    {
      "@type": "Question",
      name: "Posso experimentar sem pagar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Todos os planos incluem 14 dias de trial gratuito, sem cartão de crédito. Importa os seus dados reais e testa tudo antes de decidir.",
      },
    },
    {
      "@type": "Question",
      name: "Como funciona a importação de dados?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Exporte os ficheiros CSV do Uber e Bolt e os XLSX da Via Verde e Prio. Arraste para a plataforma e o parser mapeia tudo automaticamente aos motoristas certos.",
      },
    },
    {
      "@type": "Question",
      name: "Suportam renda fixa e revenue share?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Cada atribuição motorista-veículo pode ter o seu próprio modelo de compensação. Pode misturar renda fixa e percentagem na mesma frota.",
      },
    },
    {
      "@type": "Question",
      name: "Os meus motoristas podem ver as liquidações?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Cada motorista recebe acesso ao portal onde vê os ganhos, deduções e valor final de cada semana. Funciona em qualquer telemóvel.",
      },
    },
    {
      "@type": "Question",
      name: "E se tiver várias empresas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O Prisma Fleet suporta multi-empresa. Gira até 5 entidades legais dentro da mesma conta, com troca rápida entre elas.",
      },
    },
    {
      "@type": "Question",
      name: "Os meus dados estão seguros?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cada operador tem a sua própria instância isolada com base de dados dedicada. Os dados de um cliente nunca se misturam com os de outro.",
      },
    },
    {
      "@type": "Question",
      name: "Posso cancelar a qualquer momento?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Sem contratos de fidelização. Cancele quando quiser e mantém acesso até ao fim do período pago.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <main>
        <VideoHero />
        <Hero />
        <ProofStrip />
        <Pain />
        <Features />
        <Workflow />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
