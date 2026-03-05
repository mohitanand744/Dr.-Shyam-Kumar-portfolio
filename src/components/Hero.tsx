"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useModal } from "@/context/ModalContext";

export default function Hero() {
  const { t } = useLanguage();
  const { openConsultation } = useModal();
  return (
    <section

      style={{
        backgroundImage: "url('/images/hero_background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-slate-50"
      id="hero"
    >
      {/* Decorative background blurs */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-100/40 rounded-full blur-3xl opacity-50 z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-3xl opacity-50 z-0 pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="flex flex-col items-center text-center gap-12">

          {/* Text Content */}
          <div className="w-full max-w-4xl">
            <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs sm:text-sm font-semibold mb-6 shadow-sm border border-blue-100 mx-auto">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              {t("hero.badge")}
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
              {t("hero.heading1")} <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-500">
                {t("hero.heading2")}
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              {t("hero.description")}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <button
                onClick={openConsultation}
                className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-primary-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 group"
              >
                {t("hero.bookVisit")}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={openConsultation}
                className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-white text-slate-800 border border-slate-200 px-8 py-4 rounded-full text-base font-semibold hover:bg-slate-50 transition-all shadow-sm hover:border-slate-300"
              >
                {t("hero.freeConsultation")}
              </button>
            </div>

            {/* Quick Call Link in Hero */}
            <div className="mb-10 flex items-center justify-center">
              <a
                href={`tel:${t("common.phoneNumberRaw")}`}
                className="inline-flex items-center gap-2 text-primary-700 bg-primary-50/50 hover:bg-primary-50 px-5 py-2.5 rounded-full transition-all border border-primary-100 group/hero-phone"
              >
                <Phone size={16} className="fill-primary-600 group-hover/hero-phone:scale-110 transition-transform" />
                <span className="font-bold text-lg">{t("common.phoneNumber")}</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-sm font-medium text-slate-700">
              <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl shadow-sm border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                {t("hero.noSideEffects")}
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl shadow-sm border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-primary-500" />
                {t("hero.modernEquipment")}
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl shadow-sm border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-blue-500" />
                {t("hero.homeVisits")}
              </div>
            </div>
          </div>

          {/* Wide Rectangular Image Content */}
          <div className="w-full relative mt-4">
            {/* Decorative bounding box behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[80%] bg-gradient-to-tr from-primary-100/40 to-transparent rounded-[3rem] blur-2xl z-0"></div>

            <div className="relative z-10 w-full h-[300px] md:h-[450px] lg:h-[550px] mx-auto">
              <div className="absolute inset-0 bg-white rounded-[2rem] md:rounded-[3rem] shadow-xl rotate-1 scale-100 border border-slate-100"></div>

              <div className="relative w-full h-full rounded-[2rem] md:rounded-[3rem] overflow-hidden border-[6px] md:border-8 border-white shadow-2xl bg-slate-100">
                <Image
                  src="/images/hero.png"
                  alt="Modern Physiotherapy Treatment"
                  fill
                  priority
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating review/stat badge */}
              <div className="absolute -top-6 left-6 md:-top-8 md:left-12 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 z-20 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="flex items-center gap-3">
                  <div className="bg-orange-100 p-2.5 rounded-full">
                    <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  </div>
                  <div>
                    <p className="text-sm md:text-base font-bold text-slate-900">{t("hero.experienceYears")}</p>
                    <p className="text-xs md:text-sm text-slate-500 font-medium">{t("hero.experienceText")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
