import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Montserrat, Urbanist } from "next/font/google";

// Load fonts
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const urbanist = Urbanist({ subsets: ["latin"], variable: "--font-urbanist" });

// SEO Metadata
export const metadata = {
  title: "Zaacoal -  Sustainable Charcoal Redefined",
  description:
    "Eco-friendly charcoal made from coconut waste for a cleaner, longer-lasting burn.",
  canonical: "https://www.zaacoal.com/",
  openGraph: {
    type: "website",
    url: "https://www.zaacoal.com/",
    title: "Zaacoal - Sustainable Charcoal Redefined",
    description:
      "Eco-friendly charcoal made from coconut waste for a cleaner, longer-lasting burn.",
    images: [
      {
        url: "https://www.zaacoal.com/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Zaacoal Eco-friendly Charcoal"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@Zaacoaenergy",
    title: "Zaacoal — Sustainable Charcoal Redefined",
    description:
      "Eco-friendly charcoal made from coconut waste for a cleaner, longer-lasting burn.",
    images: ["https://www.zaacoal.com/og-image.jpeg"]
  }
};

// Structured Data (JSON-LD)
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Zaacoal",
  url: "https://www.zaacoal.com/",
  logo: "https://www.zaacoal.com/logo.png",
  sameAs: [
    "https://www.facebook.com/zaacoal",
    "https://www.instagram.com/zaacoal",
    "https://www.twitter.com/zaacoalenergy",
    "https://wa.me/233507005551"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${urbanist.variable}`}
    >
      <head>
        {/* Canonical Link */}
        <link rel="canonical" href={metadata.canonical} />

        {/* Open Graph */}
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />

        {/* Twitter Card */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-white dark:bg-[#121212] text-black dark:text-white transition-colors duration-300">
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
