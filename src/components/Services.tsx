"use client";

import Image from "next/image";
import { Activity, Bone, Brain, Zap, Baby, Hand } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Services() {
  const { t } = useLanguage();

  const treatments = [
    { name: t("services.cond1"), icon: <Bone className="w-6 h-6" />, category: "pain" },
    { name: t("services.cond2"), icon: <Activity className="w-6 h-6" />, category: "pain" },
    { name: t("services.cond3"), icon: <Hand className="w-6 h-6" />, category: "pain" },
    { name: t("services.cond4"), icon: <Zap className="w-6 h-6" />, category: "spine" },
    { name: t("services.cond5"), icon: <Brain className="w-6 h-6" />, category: "neuro" },
    { name: t("services.cond6"), icon: <Bone className="w-6 h-6" />, category: "joints" },
    { name: t("services.cond7"), icon: <Baby className="w-6 h-6" />, category: "pediatric" },
    { name: t("services.cond8"), icon: <Activity className="w-6 h-6" />, category: "rehab" },
    { name: t("services.cond9"), icon: <Activity className="w-6 h-6" />, category: "rehab" },
    { name: t("services.cond10"), icon: <Zap className="w-6 h-6" />, category: "neuro" },
  ];

  const specializedTherapies = [
    t("services.proc1"),
    t("services.proc2"),
    t("services.proc3"),
    t("services.proc4"),
    t("services.proc5"),
    t("services.proc6"),
    t("services.proc7"),
    t("services.proc8"),
  ];

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">{t("services.title")}</h2>
          <p className="text-lg text-slate-600">
            {t("services.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Images Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/images/therapy_session.png"
                alt="Therapy Session"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-md mt-8">
              <Image
                src="/images/rehabilitation.png"
                alt="Rehabilitation Exercises"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Treatments List */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
              <Zap className="text-primary-600" />
              {t("services.conditionsTitle")}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {treatments.map((t, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-primary-200 hover:bg-primary-50 transition-colors group">
                  <div className="p-2 rounded-lg bg-white text-primary-600 shadow-sm group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    {t.icon}
                  </div>
                  <span className="font-medium text-slate-700">{t.name}</span>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
              <Activity className="text-primary-600" />
              {t("services.proceduresTitle")}
            </h3>
            <div className="flex flex-wrap gap-2">
              {specializedTherapies.map((therapy, i) => (
                <span key={i} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg-primary-100 hover:text-primary-700 transition-colors cursor-default border border-slate-200">
                  {therapy}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
