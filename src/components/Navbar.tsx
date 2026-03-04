"use client";

import Link from "next/link";
import { useState } from "react";
import { Phone, MapPin, Menu, X, Languages } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language, toggleLanguage } = useLanguage();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const LanguageToggle = ({ className = "" }: { className?: string }) => (
    <div className={`flex items-center gap-2 bg-slate-50 p-1 rounded-full border border-slate-200 shadow-sm transition-all ${className}`}>
      <div className="pl-1.5 text-slate-400">
        <Languages size={15} />
      </div>
      <div className="flex bg-white rounded-full overflow-hidden p-0.5 border border-slate-100">
        <button
          onClick={() => language !== 'en' && toggleLanguage()}
          className={`px-3 py-1 text-[10px] sm:text-xs font-bold transition-all rounded-full ${language === 'en'
            ? 'bg-primary-600 text-white shadow-sm'
            : 'text-slate-400 hover:text-primary-600 hover:bg-slate-50'
            }`}
        >
          EN
        </button>
        <button
          onClick={() => language !== 'hi' && toggleLanguage()}
          className={`px-3 py-1 text-[10px] sm:text-xs font-bold transition-all rounded-full ${language === 'hi'
            ? 'bg-primary-600 text-white shadow-sm'
            : 'text-slate-400 hover:text-primary-600 hover:bg-slate-50'
            }`}
        >
          HI
        </button>
      </div>
    </div>
  );

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm relative">
      {/* Top Bar */}
      <div className="bg-primary-700 text-white text-sm py-2 px-4 shadow-[inset_0_-1px_0_0_rgba(0,0,0,0.1)]">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center max-w-7xl">
          <div className="flex items-center gap-2 mb-1.5 md:mb-0">
            <Phone size={14} className="opacity-80" />
            <span className="font-medium tracking-wide">{t("navbar.callForAppt")}</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity">
              <a href="tel:+919000000000" className="font-semibold">+91 XXXXXXXXXX</a>
            </div>
            <span className="hidden sm:inline-block w-px h-4 bg-white/30"></span>
            <div className="flex items-center gap-1.5 opacity-90">
              <MapPin size={14} />
              <span className="truncate">{t("navbar.address")}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="container mx-auto px-4 py-3.5 max-w-7xl">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex flex-col group" onClick={() => setIsOpen(false)}>
            <span className="text-lg md:text-2xl font-black text-slate-900 tracking-tight group-hover:text-primary-700 transition-colors">
              {t("navbar.title")}
            </span>
            <span className="text-[0.6rem] md:text-[0.8rem] font-bold text-primary-600 uppercase tracking-widest mt-0.3">
              {t("navbar.subtitle")}
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8 font-semibold text-slate-600">
            <Link href="#about" className="hover:text-primary-600 transition-colors py-2">{t("navbar.navAbout")}</Link>
            <Link href="#services" className="hover:text-primary-600 transition-colors py-2">{t("navbar.navServices")}</Link>
            <Link href="#doctors" className="hover:text-primary-600 transition-colors py-2">{t("navbar.navDoctor")}</Link>
            <Link href="#faq" className="hover:text-primary-600 transition-colors py-2">{t("navbar.navFAQ")}</Link>
            <a href="#contact" className="ml-2 bg-slate-900 text-white px-6 py-2.5 rounded-full hover:bg-primary-600 transition-all font-bold shadow-md hover:shadow-lg inline-block hover:-translate-y-0.5">
              {t("navbar.freeConsultation")}
            </a>
            <LanguageToggle className="ml-2" />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <LanguageToggle />
            <button
              type="button"
              className="text-slate-900 hover:text-primary-600 transition-colors pb-1 focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle Navigation"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl overflow-hidden transition-all duration-300 ease-in-out z-40 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
          }`}
      >
        <div className="flex flex-col px-4 py-4 gap-2">
          <Link
            href="#about"
            className="px-4 py-3 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {t("navbar.navAbout")}
          </Link>
          <Link
            href="#services"
            className="px-4 py-3 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {t("navbar.navServices")}
          </Link>
          <Link
            href="#doctors"
            className="px-4 py-3 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {t("navbar.navDoctor")}
          </Link>
          <Link
            href="#faq"
            className="px-4 py-3 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {t("navbar.navFAQ")}
          </Link>
          <div className="pt-2 pb-2 mt-2 border-t border-slate-100 px-4">
            <a
              href="#contact"
              className="flex justify-center w-full bg-primary-600 text-white px-6 py-3 rounded-full font-bold shadow-md"
              onClick={() => setIsOpen(false)}
            >
              {t("navbar.freeConsultation")}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
