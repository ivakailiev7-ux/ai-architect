import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI Architect | AI Video Ads for Fitness Brands",
  description:
    "Premium AI-powered video ads that sell. We create high-converting UGC and product videos for fitness & supplement Shopify brands. 4x higher CTR. 80% cost savings. 48h delivery.",
  keywords: [
    "AI video ads",
    "fitness brand video",
    "supplement marketing",
    "UGC video ads",
    "Shopify video ads",
    "AI advertising",
    "ecommerce video content",
    "product video ads",
    "AI UGC",
    "fitness marketing agency",
  ],
  openGraph: {
    title: "AI Architect | AI Video Ads for Fitness Brands",
    description:
      "Premium AI-powered video ads that convert browsers into buyers. Built exclusively for fitness & supplement brands.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Architect | Video Ads That Sell",
    description:
      "Premium AI video ads for fitness & supplement brands. 4x higher CTR. 80% cost savings.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
