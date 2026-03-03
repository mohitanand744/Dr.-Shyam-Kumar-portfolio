"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Do you offer home visits?",
      answer: "Yes! We specialize in Home Visit Appointments in Patna for patients who cannot travel to the clinic, ensuring they receive uninterrupted rehabilitation from the comfort of their home.",
    },
    {
      question: "Do treatments have any side effects?",
      answer: "No. Our physiotherapy treatments and the modern machines we use are completely safe and do not cause any adverse side effects. Our focus is on natural healing and movement.",
    },
    {
      question: "What should I expect during a free consultation?",
      answer: "During your free consultation, Dr. Shyam Kumar will assess your condition, listen to your concerns, and outline a customized treatment plan tailored specifically to your pain or injury.",
    },
    {
      question: "How long is a typical physiotherapy session?",
      answer: "A single session usually lasts between 45 to 60 minutes depending on the condition being treated and the therapies required.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight flex items-center justify-center gap-3">
            <HelpCircle className="text-primary-600" size={36} /> Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600">
            Find answers to common questions about our physiotherapy services.
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
