import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Shyam Kumar | Physiotherapy Consultant Patna | Home Visits Available",
  description: "Professional physiotherapy services by Dr. Shyam Kumar in Patna. Specialist in Neck Pain, Back Pain, Sports Injuries, Stroke & Neuro Rehabilitation. Book your home visit today for modern, safe, and effective treatment.",
  keywords: ["Physiotherapy Patna", "Dr. Shyam Kumar", "Home Visit Physiotherapy Patna", "Best Physiotherapist Patna", "Neck Pain Treatment Patna", "Back Pain Specialist", "Sports Injury Rehab", "Post-Surgery Rehabilitation"],
  authors: [{ name: "Dr. Shyam Kumar" }],
  creator: "Dr. Shyam Kumar",
  publisher: "Dr. Shyam Kumar Physiotherapy Clinic",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Dr. Shyam Kumar | Physiotherapy Consultant Patna",
    description: "Expert physiotherapy care in Patna. Specialized in pain management, neuro rehab, and home visits.",
    url: "https://drshyamkumar.com", // Replace with actual domain when available
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
    title: "Dr. Shyam Kumar | Physiotherapy Consultant Patna",
    description: "Expert physiotherapy care and home visits in Patna. Safe and effective pain relief.",
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
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
