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
      "Software de Gestão de Frotas TVDE em Portugal | PrismaFleet",
    template: "%s | PrismaFleet",
  },
  description:
    "Liquidações automáticas para operadores TVDE. Importação Uber e Bolt, renda fixa ou revenue share, portal do motorista e pagamentos SEPA. Experimente grátis durante 14 dias.",
  keywords: [
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
  applicationName: "PrismaFleet",
  creator: "Prisma Solutions",
  publisher: "Prisma Solutions",
  alternates: {
    canonical: "https://www.prismafleet.pt",
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
    title: "PrismaFleet — Software de Gestão de Frotas TVDE",
    description:
      "Liquidações em minutos, não em horas. Importação Uber e Bolt, portal do motorista e pagamentos SEPA. O software feito para operadores TVDE em Portugal.",
    url: "https://www.prismafleet.pt",
    siteName: "PrismaFleet",
    type: "website",
    locale: "pt_PT",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PrismaFleet — Software de Gestão de Frotas TVDE em Portugal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PrismaFleet — Software de Gestão de Frotas TVDE",
    description:
      "Liquidações automáticas, importação Uber e Bolt, portal do motorista. Experimente grátis.",
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
      lang="pt"
      className={`${sourceSans.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
