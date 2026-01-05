import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Blue Stone Custom Homes | Custom Home Builder in Fargo, ND",
    template: "%s | Blue Stone Custom Homes",
  },
  description: "Blue Stone Custom Homes builds luxury custom and semi-custom homes throughout Fargo, ND and Cass County. Exceptional craftsmanship, transparent communication, and clean jobsites.",
  keywords: ["custom home builder", "Fargo ND", "North Dakota", "luxury homes", "custom homes", "home builder", "Cass County", "West Fargo", "new construction"],
  authors: [{ name: "Blue Stone Custom Homes" }],
  creator: "Blue Stone Custom Homes",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bluestonecustomhomesnd.com",
    siteName: "Blue Stone Custom Homes",
    title: "Blue Stone Custom Homes | Custom Home Builder in Fargo, ND",
    description: "Blue Stone Custom Homes builds luxury custom and semi-custom homes throughout Fargo, ND and Cass County. Exceptional craftsmanship, transparent communication, and clean jobsites.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Blue Stone Custom Homes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blue Stone Custom Homes | Custom Home Builder in Fargo, ND",
    description: "Blue Stone Custom Homes builds luxury custom and semi-custom homes throughout Fargo, ND and Cass County.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
