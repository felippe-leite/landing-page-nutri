import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Fraunces, Manrope } from "next/font/google";
import { ClickTracker } from "@/components/landing/ClickTracker/ClickTracker";
import { FloatingWhatsapp } from "@/components/landing/FloatingWhatsapp/FloatingWhatsapp";
import { siteConfig } from "@/data/site";
import "./globals.css";

const serif = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap", style: ["normal", "italic"] });
const sans = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

// Domínio próprio (NEXT_PUBLIC_SITE_URL) > domínio de produção da Vercel > local
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000");

const title ="Luana Leite de Souza | Nutricionista em Brasília e online";
const description =
  "Nutrição Clínica Funcional Integrativa com Luana Leite de Souza. Atendimento online e presencial em Brasília, com cuidado individualizado para sua saúde e seus objetivos.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: ["nutricionista Brasília", "nutricionista online", "nutrição funcional", "emagrecimento", "hipertrofia", "endometriose", "SOP"],
  openGraph: {
    title,
    description,
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/images/foto-principal.jpeg", alt: `${siteConfig.name}, nutricionista` }],
  },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = {
  themeColor: "#064e3b",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dietitian",
  name: siteConfig.name,
  url: siteUrl,
  image: `${siteUrl}/images/foto-principal.jpeg`,
  description,
  telephone: `+${siteConfig.whatsapp}`,
  areaServed: [siteConfig.city, "Online"],
  address: { "@type": "PostalAddress", addressLocality: siteConfig.city, addressRegion: "DF", addressCountry: "BR" },
  sameAs: [`https://instagram.com/${siteConfig.instagram.replace("@", "")}`, siteConfig.youtube.url],
  priceRange: "R$ 130 - R$ 250",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${serif.variable} ${sans.variable}`}>
      <body>
        {children}
        <FloatingWhatsapp />
        <ClickTracker />
        <Analytics />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
