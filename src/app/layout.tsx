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
  title: "Dr. Shyam Kumar | Best Physiotherapist in Patna | Home Visit Physiotherapy",
  description: "Advanced physiotherapy by Dr. Shyam Kumar in Patna. Expert in Back Pain, Slip Disc, Sciatica, Nerve Compression, Paralysis, Stroke Rehab & Sports Injuries. Reliable home visits available anywhere in Patna. Modern technology, effective results, zero side effects.",
  keywords: [
    "Physiotherapy Patna",
    "Best Physiotherapist in Patna",
    "Home Visit Physiotherapy Patna",
    "Physiotherapist near me",
    "Back Pain Treatment Patna",
    "Slip Disc Specialist Patna",
    "Sciatica Treatment Patna",
    "Paralysis Rehabilitation Patna",
    "Stroke Treatment Patna",
    "Nerve Pain Doctor Patna",
    "Neck Pain Treatment",
    "Sports Injury Physio Patna",
    "Knee Pain Treatment Patna",
    "Frozen Shoulder treatment",
    "Cerebral Palsy treatment Patna",
    "Post-accidental rehab Patna",
    "Manual Therapy Patna",
    "Neurological Physiotherapy Patna"
  ],
  authors: [{ name: "Dr. Shyam Kumar" }],
  creator: "Dr. Shyam Kumar",
  publisher: "Dr. Shyam Kumar Physiotherapy Clinic",
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
    title: "Dr. Shyam Kumar | Best Physiotherapy Consultant in Patna",
    description: "Expert physiotherapy care and home visits in Patna. Specialized in pain management, neuro rehab, and complex orthopedic conditions.",
    url: "https://drshyamkumar.com",
    siteName: "Dr. Shyam Kumar Physiotherapy",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "Dr. Shyam Kumar Physiotherapy Clinic Patna",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Shyam Kumar | Expert Physiotherapist in Patna",
    description: "Modern physiotherapy treatments and home visits in Patna for Back pain, Neuro rehab, and Sports injuries.",
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
