import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import JSONLDSchema from "./components/JSONLdschema";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ZUNISSE | Luxury Belly Chains & Traditional Waist Jewelry India",
  description:
    "Discover premium belly chains & kamarband jewelry online in India. Shop our collection of modern & traditional waist chains, bridal kamarbands & authentic Indian belly chains. Handcrafted luxury jewelry for every occasion.",
  keywords: [
    // Primary Keywords
    "belly chain online india",
    "waist chain for women",
    "modern belly chain",
    "traditional waist chain",
    "kamarband jewelry",
    "belly chain gold",
    "silver belly chain",

    // Location & Style
    "belly chain shops in mumbai",
    "handmade belly chains india",
    "modern belly chain designs 2025",
    "traditional indian waist chain designs",

    // Occasion & Material
    "bridal waist chain india",
    "belly chain for saree",
    "authentic indian belly chains",
    "antique finish kamarband",

    // Shopping Intent
    "belly chain price in india",
    "luxury kamarband jewelry",
    "custom belly chain order",
  ],
  alternates: {
    canonical: "https://zunisse.com",
  },
  openGraph: {
    title: "ZUNISSE - Luxury Belly Chains & Traditional Waist Jewelry",
    description:
      "Elevate your style with handcrafted belly chains & kamarband jewelry. Premium Indian waist chains for modern goddesses.",
    url: "https://zunisse.com",
    siteName: "ZUNISSE",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ZUNISSE Luxury Belly Chains Collection",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZUNISSE - Premium Belly Chains & Kamarband Jewelry",
    description:
      "Discover luxury waist chains & traditional kamarbands. Handcrafted in India.",
    images: ["/twitter-image.jpg"],
  },
  viewport: "width=device-width, initial-scale=1",
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
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#000000" />
        <JSONLDSchema />
      </head>
      <body
        className={`${geistSans.variable} antialiased min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
