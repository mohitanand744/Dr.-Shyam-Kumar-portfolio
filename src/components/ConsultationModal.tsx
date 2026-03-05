"use client";

import { useState, useEffect } from "react";
import { X, User, Hash, MessageSquare, Send, CheckCircle2, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useModal } from "@/context/ModalContext";

export default function ConsultationModal() {
  const { t } = useLanguage();
  const { isConsultationOpen, closeConsultation } = useModal();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    issue: "",
  });

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeConsultation();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [closeConsultation]);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isConsultationOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isConsultationOpen]);

  if (!isConsultationOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset after success
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ name: "", age: "", issue: "" });
      closeConsultation();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm transition-all duration-300">
      <div
        className="relative w-full max-w-lg bg-white rounded-[2rem] shadow-2xl border border-slate-100 overflow-hidden animate-in fade-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Decoration */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-600 to-blue-600"></div>

        {/* Close Button */}
        <button
          onClick={closeConsultation}
          className="absolute top-6 right-6 p-2 rounded-full bg-slate-50 text-slate-400 hover:text-primary-600 hover:bg-primary-50 transition-all z-10"
        >
          <X size={20} />
        </button>

        <div className="p-8 sm:p-10">
          <div className="mb-8">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-2">
              {t("modal.title")}
            </h2>
            <p className="text-slate-500 font-medium">
              {t("modal.subtitle")}
            </p>
          </div>

          {isSuccess ? (
            <div className="py-12 flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-inner">
                <CheckCircle2 size={40} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h3>
              <p className="text-slate-600 max-w-xs mx-auto font-medium">
                {t("modal.success")}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-700 ml-1">
                  {t("modal.nameLabel")}
                </label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary-600 transition-colors">
                    <User size={18} />
                  </div>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t("modal.namePlaceholder")}
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-primary-100 focus:border-primary-500 focus:bg-white outline-none transition-all font-medium text-slate-900"
                  />
                </div>
              </div>

              {/* Age Field */}
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-700 ml-1">
                  {t("modal.ageLabel")}
                </label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary-600 transition-colors">
                    <Hash size={18} />
                  </div>
                  <input
                    required
                    type="number"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    placeholder={t("modal.agePlaceholder")}
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-primary-100 focus:border-primary-500 focus:bg-white outline-none transition-all font-medium text-slate-900"
                  />
                </div>
              </div>

              {/* Issue Field */}
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-700 ml-1">
                  {t("modal.issueLabel")}
                </label>
                <div className="relative group">
                  <div className="absolute left-4 top-5 text-slate-400 group-focus-within:text-primary-600 transition-colors">
                    <MessageSquare size={18} />
                  </div>
                  <textarea
                    required
                    rows={4}
                    value={formData.issue}
                    onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
                    placeholder={t("modal.issuePlaceholder")}
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-primary-100 focus:border-primary-500 focus:bg-white outline-none transition-all font-medium text-slate-900 resize-none"
                  ></textarea>
                </div>
              </div>

              <button
                disabled={isSubmitting}
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-primary-600 text-white py-5 rounded-2xl font-bold text-lg shadow-lg hover:shadow-primary-200 transition-all disabled:opacity-70 active:scale-95"
              >
                {isSubmitting ? (
                  <>{t("modal.sending")}</>
                ) : (
                  <>
                    {t("modal.submit")}
                    <Send size={20} className="ml-1" />
                  </>
                )}
              </button>

              {/* Contact Call-to-Action */}
              <div className="pt-6 border-t border-slate-100 text-center">
                <p className="text-slate-500 text-sm font-semibold mb-3 uppercase tracking-wider">
                  {t("modal.orCallUs")}
                </p>
                <a
                  href={`tel:${t("common.phoneNumberRaw")}`}
                  className="inline-flex items-center gap-3 text-primary-600 hover:text-primary-700 transition-colors group/phone"
                >
                  <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center group-hover/phone:bg-primary-100 transition-colors shadow-sm">
                    <Phone size={18} className="fill-primary-600" />
                  </div>
                  <span className="text-xl md:text-2xl font-black tracking-tight">{t("common.phoneNumber")}</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
