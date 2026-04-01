"use client";

import { GraduationCap, Award, Briefcase, Calendar, CheckCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Resume() {
  const { t } = useLanguage();

  return (
    <section id="resume" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative background vectors */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary-100 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 font-bold uppercase tracking-wider text-sm mb-3 block">
            {t("resume.subtitle")}
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            {t("resume.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column - Education */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-primary-100 text-primary-600 rounded-xl">
                <GraduationCap size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">{t("resume.educationTitle")}</h3>
            </div>

            <div className="space-y-6">
              {/* BPT */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary-500"></div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <h4 className="text-xl font-bold text-slate-900">{t("resume.edu1Degree")}</h4>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-semibold">
                    <Calendar size={14} />
                    {t("resume.edu1Year")}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-slate-600 font-medium">
                  <p>{t("resume.edu1Inst")}</p>
                  <p className="text-primary-600">{t("resume.edu1Score")}</p>
                </div>
              </div>

              {/* 12th */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-blue-400"></div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <h4 className="text-xl font-bold text-slate-900">{t("resume.edu2Degree")}</h4>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-semibold">
                    <Calendar size={14} />
                    {t("resume.edu2Year")}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-slate-600 font-medium">
                  <p>{t("resume.edu2Inst")}</p>
                  <p className="text-blue-600">{t("resume.edu2Score")}</p>
                </div>
              </div>

              {/* 10th */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-slate-400"></div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <h4 className="text-xl font-bold text-slate-900">{t("resume.edu3Degree")}</h4>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-semibold">
                    <Calendar size={14} />
                    {t("resume.edu3Year")}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-slate-600 font-medium">
                  <p>{t("resume.edu3Inst")}</p>
                  <p className="text-slate-500">{t("resume.edu3Score")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Work & Certs */}
          <div className="lg:col-span-5 space-y-12">
            
            {/* Work Experience */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-emerald-100 text-emerald-600 rounded-xl">
                  <Briefcase size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{t("resume.expTitle")}</h3>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
                 <h4 className="text-xl font-bold text-slate-900 mb-2">{t("resume.exp1Role")}</h4>
                 <div className="flex items-center gap-2 text-emerald-600 font-semibold mb-4">
                    <CheckCircle size={18} />
                    <span>{t("resume.exp1Duration")}</span>
                 </div>
                 <p className="text-slate-600">
                    Applying clinical knowledge and modern physiotherapy techniques to aid patient recovery and enhance mobility.
                 </p>
              </div>
            </div>

            {/* Other Qualifications */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-amber-100 text-amber-600 rounded-xl">
                  <Award size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{t("resume.certTitle")}</h3>
              </div>
              
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-3xl shadow-xl text-white relative overflow-hidden">
                <div className="absolute -right-10 -top-10 text-slate-700 opacity-30">
                  <Award size={120} />
                </div>
                <div className="relative z-10">
                  <h4 className="text-xl font-bold text-amber-400 mb-3">{t("resume.cert1Name")}</h4>
                  <p className="text-slate-300 font-medium leading-relaxed">
                    Organized by:<br />
                    <span className="text-white font-semibold">{t("resume.cert1Org")}</span>
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
