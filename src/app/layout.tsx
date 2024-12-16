import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ZUNISSE | Luxury Waist Chains",
  description:
    "Elevate your elegance with artisanal waist chains, crafted for the modern goddess.",
  keywords: [
    "luxury jewelry",
    "waist chains",
    "belly chains",
    "premium accessories",
  ],
  openGraph: {
    title: "ZUNISSE - Luxury Waist Chains",
    description: "Artisanal jewelry for the modern goddess",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} antialiased min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
