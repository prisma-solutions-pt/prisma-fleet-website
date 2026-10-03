import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClientsStrip from "@/components/ClientsStrip";
import HowItWorks from "@/components/HowItWorks";
import BeforeAfter from "@/components/BeforeAfter";
import Modules from "@/components/Modules";
import Stats from "@/components/Stats";
import Integrations from "@/components/Integrations";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import pt from "@/messages/pt.json";

export const metadata: Metadata = {
  title: "Prisma Fleet | Software de Gestão de Frotas TVDE em Portugal",
  description:
    "Prisma Fleet: software de gestão de frotas TVDE em Portugal. Liquidações automáticas, importação Uber e Bolt, portal do motorista. 14 dias grátis.",
  alternates: {
    canonical: "https://www.prismafleet.pt",
  },
  openGraph: {
    title: "Prisma Fleet | Software de Gestão de Frotas TVDE em Portugal",
    description:
      "Prisma Fleet: liquidações em minutos, não em horas. Importação Uber e Bolt, portal do motorista e pagamentos SEPA. O software feito para operadores TVDE em Portugal.",
    url: "https://www.prismafleet.pt",
    siteName: "Prisma Fleet",
    type: "website",
    locale: "pt_PT",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Prisma Fleet | Software de Gestão de Frotas TVDE em Portugal",
      },
    ],
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

// Built from the PT strings (the default locale) so the structured data matches the visible FAQ.
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: pt.FAQ.items.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
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
        <Hero />
        <ClientsStrip />
        <HowItWorks />
        <BeforeAfter />
        <Modules />
        <Stats />
        <Integrations />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
