"use client";

import Image from "next/image";
import { Award, CheckCircle, ArrowRight, ShieldCheck, HeartPulse, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useModal } from "@/context/ModalContext";

export default function Doctors() {
  const { t } = useLanguage();
  const { openConsultation } = useModal();
  return (
    <section id="doctors" className="py-24 relative overflow-hidden">
      {/* 50px Grid Background Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(to right, #002331ff 1px, transparent 1px), linear-gradient(to bottom, #00244dff 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      ></div>

      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-primary-100/50 rounded-full blur-3xl opacity-50 z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl opacity-50 z-0 pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 font-bold uppercase tracking-wider text-sm mb-3 block">{t("doctors.subtitle")}</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">{t("doctors.title")}</h2>
          <p className="text-lg text-slate-600">
            {t("doctors.description")}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Stunning Profile Card */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-100 flex flex-col md:flex-row gap-10 md:gap-16 items-center md:items-start group transition-all relative overflow-hidden">

            {/* Soft background gradient inside card */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-blue-50/40 z-0"></div>

            {/* Profile Image with rings */}
            <div className="relative z-10 shrink-0 mt-2">
              <div className="absolute inset-0 bg-primary-200 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
              <div className="relative w-48 h-48 md:w-56 md:h-[350px] bg-gradient-to-br from-primary-100 to-blue-50 rounded-full p-2.5 shadow-xl">
                <div className="w-full h-full relative rounded-full overflow-hidden border-4 border-white shadow-inner bg-white">
                  <Image
                    src="/images/DrShyamKumarv.png"
                    alt="Dr. Shyam Kumar Profile"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-2 -right-2 bg-white text-primary-600 p-3 rounded-full shadow-lg border border-slate-100">
                  <Award size={24} className="animate-pulse" />
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="text-center md:text-left flex-1 relative z-10 pt-2 md:pt-4">
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-5 shadow-sm border border-blue-100/50">
                {t("doctors.badge")}
              </div>

              <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-2 tracking-tight">{t("doctors.name")}</h3>
              <p className="text-primary-600 font-semibold mb-6 text-lg md:text-xl">{t("doctors.role")}</p>

              <div className="h-px w-full bg-gradient-to-r from-slate-100 via-slate-200 to-transparent mb-6"></div>

              <ul className="space-y-4 text-slate-700 text-base md:text-lg mb-8">
                <li className="flex items-start gap-3 md:gap-4 justify-start">
                  <div className="bg-green-50 text-green-600 p-1.5 rounded-full shrink-0 mt-0.5">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-start text-slate-800">{t("doctors.point1")}</span>
                </li>
                <li className="flex items-start gap-3 md:gap-4 justify-start">
                  <div className="bg-primary-50 text-primary-600 p-1.5 rounded-full shrink-0 mt-0.5">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <span className="text-start">{t("doctors.point2")}</span>
                </li>
                <li className="flex items-start gap-3 md:gap-4 justify-start">
                  <div className="bg-rose-50 text-rose-500 p-1.5 rounded-full shrink-0 mt-0.5">
                    <HeartPulse className="w-5 h-5" />
                  </div>
                  <span className="text-start">{t("doctors.point3")}</span>
                </li>
              </ul>

              <div className="flex flex-col md:flex-row items-center gap-4">
                <button
                  onClick={openConsultation}
                  className="inline-flex items-center justify-center gap-2 w-full md:w-auto px-8 py-3.5 bg-slate-900 text-white rounded-xl font-semibold hover:bg-primary-600 transition-colors shadow-md hover:shadow-lg group/btn"
                >
                  {t("doctors.button")}
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
                <a
                  href={`tel:${t("common.phoneNumberRaw")}`}
                  className="inline-flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3.5 bg-primary-50 text-primary-700 rounded-xl font-bold hover:bg-primary-100 transition-colors group/call"
                >
                  <Phone size={18} className="fill-primary-600 group-hover/call:animate-bounce" />
                  {t("common.phoneNumber")}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            {/* Note about home visits below the card to draw attention */}
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-emerald-50 border border-emerald-100 rounded-2xl shadow-sm text-emerald-800">
              <ShieldCheck className="text-emerald-500 shrink-0" size={24} />
              <span className="font-semibold text-sm sm:text-base">{t("doctors.homeVisitNote")}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
