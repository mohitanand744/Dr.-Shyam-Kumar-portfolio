"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Star, Quote, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Testimonials() {
  const { t } = useLanguage();

  const reviews = [
    {
      name: t("testimonials.rev1.name"),
      condition: t("testimonials.rev1.condition"),
      comment: t("testimonials.rev1.comment"),
      rating: t("testimonials.rev1.rating"),
    },
    {
      name: t("testimonials.rev2.name"),
      condition: t("testimonials.rev2.condition"),
      comment: t("testimonials.rev2.comment"),
      rating: t("testimonials.rev2.rating"),
    },
    {
      name: t("testimonials.rev3.name"),
      condition: t("testimonials.rev3.condition"),
      comment: t("testimonials.rev3.comment"),
      rating: t("testimonials.rev3.rating"),
    },
    {
      name: t("testimonials.rev4.name"),
      condition: t("testimonials.rev4.condition"),
      comment: t("testimonials.rev4.comment"),
      rating: t("testimonials.rev4.rating"),
    },
  ];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-slate-50">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-700 text-sm font-bold uppercase tracking-wider mb-4 border border-primary-100 shadow-sm">
            {t("testimonials.title")}
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Patient Stories
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {t("testimonials.description")}
          </p>
        </div>

        <div className="relative px-4 sm:px-12">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              el: '.swiper-pagination-custom',
            }}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            className="pb-16"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="group bg-white/70 m-4 backdrop-blur-md p-8 rounded-3xl border border-white shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full relative">
                  {/* Star Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={`${i < Math.floor(parseFloat(review.rating)) ? 'fill-amber-400 text-amber-400' : 'text-slate-300'} transition-colors group-hover:scale-110`}
                      />
                    ))}
                    <span className="ml-2 text-sm font-bold text-slate-900">{review.rating}</span>
                  </div>

                  {/* Quote Icon */}
                  <div className="absolute top-8 right-8 text-primary-100 group-hover:text-primary-200 transition-colors">
                    <Quote size={40} />
                  </div>

                  <div className="flex-grow mb-8">
                    <p className="text-slate-700 text-lg leading-relaxed italic relative z-10">
                      "{review.comment}"
                    </p>
                  </div>

                  <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-600 to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-105 transition-transform">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-bold text-slate-900">{review.name}</h4>
                        <CheckCircle2 size={16} className="text-emerald-500" />
                      </div>
                      <p className="text-sm font-medium text-primary-600">{review.condition}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons - Hidden on Mobile */}
          <button className="swiper-button-prev-custom hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg border border-slate-100 items-center justify-center text-primary-600 hover:bg-primary-600 hover:text-white transition-all z-20 disabled:opacity-50 disabled:cursor-not-allowed">
            <ChevronLeft size={20} />
          </button>
          <button className="swiper-button-next-custom hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg border border-slate-100 items-center justify-center text-primary-600 hover:bg-primary-600 hover:text-white transition-all z-20 disabled:opacity-50 disabled:cursor-not-allowed">
            <ChevronRight size={20} />
          </button>

          {/* Custom Pagination Container */}
          <div className="swiper-pagination-custom flex justify-center gap-2 mt-8"></div>
        </div>

        {/* Floating Google Review Badge Style */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-4 bg-white px-8 py-4 rounded-full shadow-lg border border-slate-100 hover:shadow-xl transition-all">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black text-slate-900">4.9</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-amber-400 text-amber-400" />)}
              </div>
            </div>
            <div className="w-px h-8 bg-slate-200"></div>
            <p className="text-sm font-bold text-slate-600">Based on 150+ Patient Success Stories</p>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .swiper-pagination-custom .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #cbd5e1;
          opacity: 1;
          transition: all 0.3s ease;
        }
        .swiper-pagination-custom .swiper-pagination-bullet-active {
          background: #2563eb !important;
          width: 20px;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
}
