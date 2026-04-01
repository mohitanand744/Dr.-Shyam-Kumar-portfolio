import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";
import { ModalProvider } from "@/context/ModalContext";
import ConsultationModal from "@/components/ConsultationModal";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Dr. Shyam Kumar | Professional Physiotherapist Portfolio",
  description: "Professional portfolio of Dr. Shyam Kumar, a dedicated Physiotherapist with expertise in neuro-rehabilitation, orthopedics, and sports injuries. Actively seeking clinical roles and opportunities.",
  keywords: [
    "Dr. Shyam Kumar",
    "Physiotherapist Portfolio",
    "Physiotherapy Internship",
    "Physiotherapist Candidate",
    "BPT Graduate",
    "Clinical Physiotherapist",
    "Neuro-Rehabilitation",
    "Orthopedic Rehab",
    "Sports Injury Physiotherapy",
    "Hire a Physiotherapist",
    "Physiotherapy Resume"
  ],
  authors: [{ name: "Dr. Shyam Kumar" }],
  creator: "Dr. Shyam Kumar",
  publisher: "Dr. Shyam Kumar Portfolio",
  metadataBase: new URL("https://drshyamkumar.com"), // Update with actual domain
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Dr. Shyam Kumar | Physiotherapist Portfolio & Resume",
    description: "Explore the professional qualifications, clinical skills, and experience of Dr. Shyam Kumar, an aspiring physiotherapist seeking clinical roles.",
    url: "https://drshyamkumar.com",
    siteName: "Dr. Shyam Kumar Portfolio",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "Dr. Shyam Kumar Physiotherapist",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Shyam Kumar | Physiotherapist Professional Profile",
    description: "BPT Graduate specializing in modern physiotherapy treatments, actively seeking clinical opportunities.",
    images: ["/images/hero.png"],
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
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true" className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <LanguageProvider>
          <ModalProvider>
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <ConsultationModal />
            <StructuredData />
          </ModalProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
