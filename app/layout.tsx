import type { Metadata } from "next";
import { Source_Sans_3, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.prismafleet.pt"),
  title: {
    default:
      "Prisma Fleet | Software de Gestão de Frotas TVDE em Portugal",
    template: "%s | Prisma Fleet",
  },
  description:
    "Prisma Fleet: software de gestão de frotas TVDE em Portugal. Liquidações automáticas, importação Uber e Bolt, portal do motorista. 14 dias grátis.",
  keywords: [
    "Prisma Fleet",
    "PrismaFleet",
    "software TVDE",
    "gestão de frotas TVDE",
    "software gestão frotas TVDE Portugal",
    "liquidações motoristas TVDE",
    "liquidações Uber Bolt",
    "plataforma TVDE",
    "pagamentos motoristas TVDE",
    "operador TVDE software",
    "portal motorista TVDE",
    "importação CSV Uber Bolt",
    "pagamentos SEPA motoristas",
    "gestão frota Uber Bolt Portugal",
  ],
  applicationName: "Prisma Fleet",
  creator: "Prisma Solutions",
  publisher: "Prisma Solutions",
  alternates: {
    canonical: "https://www.prismafleet.pt",
    languages: {
      "pt-PT": "https://www.prismafleet.pt",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Prisma Fleet | Software de Gestão de Frotas TVDE",
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
  twitter: {
    card: "summary_large_image",
    title: "Prisma Fleet | Software de Gestão de Frotas TVDE",
    description:
      "Prisma Fleet: liquidações automáticas, importação Uber e Bolt, portal do motorista. Experimente grátis.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-PT"
      className={`${sourceSans.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link rel="preload" as="image" href="/hero-poster.png" />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Prisma Fleet",
              alternateName: "PrismaFleet",
              url: "https://www.prismafleet.pt",
              logo: "https://www.prismafleet.pt/brand/prisma-mark-black.png",
              description:
                "Prisma Fleet é o software de gestão de frotas TVDE feito para operadores em Portugal.",
              parentOrganization: {
                "@type": "Organization",
                name: "Prisma Solutions",
                url: "https://www.prismasolutions.pt",
              },
              contactPoint: {
                "@type": "ContactPoint",
                email: "geral@prismasolutions.pt",
                contactType: "customer support",
                areaServed: "PT",
                availableLanguage: "Portuguese",
              },
              areaServed: "PT",
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
