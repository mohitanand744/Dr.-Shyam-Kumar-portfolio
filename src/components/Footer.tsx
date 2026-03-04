"use client";

import Link from "next/link";
import { Phone, MapPin, Mail, Clock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Brand & Intro */}
          <div>
            <h3 className="text-2xl font-bold text-white tracking-tight mb-4">
              {t("footer.title")}
            </h3>
            <p className="mb-4 text-slate-400">
              {t("footer.description")}
            </p>
            <div className="inline-flex items-center gap-2 bg-primary-900/50 text-primary-300 px-4 py-2 rounded-lg text-sm font-semibold border border-primary-800/50">
              {t("footer.badge")}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">{t("footer.quickLinks")}</h4>
            <ul className="space-y-2">
              <li><Link href="#about" className="hover:text-primary-400 transition-colors">{t("footer.linkAbout")}</Link></li>
              <li><Link href="#services" className="hover:text-primary-400 transition-colors">{t("footer.linkServices")}</Link></li>
              <li><Link href="#doctors" className="hover:text-primary-400 transition-colors">{t("footer.linkDoctors")}</Link></li>
              <li><Link href="#faq" className="hover:text-primary-400 transition-colors">{t("footer.linkFAQ")}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">{t("footer.contactTitle")}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary-500 mt-1 shrink-0" size={20} />
                <span>{t("footer.address")}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary-500 shrink-0" size={20} />
                <span>{t("footer.call")}</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="text-primary-500 shrink-0" size={20} />
                <span className="font-semibold text-white">{t("footer.freeConsultation")}</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-sm text-center text-slate-500">
          <p>{t("footer.copyright").replace("{year}", new Date().getFullYear().toString())}</p>
        </div>
      </div>
    </footer>
  );
}
