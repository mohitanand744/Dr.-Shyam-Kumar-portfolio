"use client";

import Image from "next/image";
import { Stethoscope, Award, HeartPulse, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Image Side */}
          <div className="lg:w-1/2 w-full relative">
            <div className="relative h-[400px] sm:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/modern_equipment.jpg"
                alt="Modern Physiotherapy Equipment"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-8 -right-8 sm:-bottom-12 sm:-right-12 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                  <Award size={32} />
                </div>
                <div>
                  <p className="text-3xl font-bold text-slate-900">{t("about.badgeYears")}</p>
                  <p className="text-primary-600 font-medium">{t("about.badgeText")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:w-1/2 w-full">
            <h2 className="text-primary-600 font-bold uppercase tracking-wider text-sm mb-3">{t("about.subtitle")}</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
              {t("about.title")}
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              {t("about.description")}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <ShieldCheck size={16} />
                </div>
                <span className="font-semibold text-slate-800">{t("about.cond1")}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <ShieldCheck size={16} />
                </div>
                <span className="font-semibold text-slate-800">{t("about.cond2")}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <ShieldCheck size={16} />
                </div>
                <span className="font-semibold text-slate-800">{t("about.cond3")}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <ShieldCheck size={16} />
                </div>
                <span className="font-semibold text-slate-800">{t("about.cond4")}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <ShieldCheck size={16} />
                </div>
                <span className="font-semibold text-slate-800">{t("about.cond5")}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <ShieldCheck size={16} />
                </div>
                <span className="font-semibold text-slate-800">{t("about.cond6")}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <ShieldCheck size={16} />
                </div>
                <span className="font-semibold text-slate-800">{t("about.cond7")}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <ShieldCheck size={16} />
                </div>
                <span className="font-semibold text-slate-800">{t("about.cond8")}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <ShieldCheck size={16} />
                </div>
                <span className="font-semibold text-slate-800">{t("about.cond9")}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
