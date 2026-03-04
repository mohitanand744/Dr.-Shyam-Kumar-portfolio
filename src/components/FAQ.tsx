"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: t("faq.q1"),
      answer: t("faq.a1"),
    },
    {
      question: t("faq.q2"),
      answer: t("faq.a2"),
    },
    {
      question: t("faq.q3"),
      answer: t("faq.a3"),
    },
    {
      question: t("faq.q4"),
      answer: t("faq.a4"),
    },
  ];

  return (
    <section id="faq" className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight flex items-center justify-center gap-3">
            <HelpCircle className="text-primary-600" size={36} /> {t("faq.title")}
          </h2>
          <p className="text-lg text-slate-600">
            {t("faq.description")}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${openIndex === index ? 'border-primary-300 shadow-md' : 'border-slate-100 shadow-sm hover:border-slate-200 hover:shadow'
                }`}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left px-6 py-5 md:px-8 md:py-6 flex justify-between items-center focus:outline-none"
                aria-expanded={openIndex === index}
              >
                <h3 className={`text-lg md:text-xl font-bold transition-colors ${openIndex === index ? 'text-primary-700' : 'text-slate-900'}`}>
                  {faq.question}
                </h3>
                <div className={`shrink-0 ml-4 p-1 rounded-full bg-slate-50 transition-transform duration-300 ${openIndex === index ? 'rotate-180 bg-primary-50 text-primary-600' : 'text-slate-400'}`}>
                  <ChevronDown size={24} />
                </div>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 border-t border-slate-50">
                  <p className="text-slate-600 leading-relaxed text-lg mt-4">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
