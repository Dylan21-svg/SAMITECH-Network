"use client";

import React from "react";
import { TESTIMONIALS } from "@/lib/data";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section id="about" className="relative z-10 py-10 sm:py-14 lg:py-20 px-3.5 sm:px-6 lg:px-12 bg-[#0B0F17]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-3 sm:mb-4">
            <span className="text-[10px] sm:text-xs font-semibold text-[#0088FF] uppercase tracking-wider">
              Verified Social Proof
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight max-w-2xl mb-2 sm:mb-4">
            Trusted By Hostels & Residents
          </h2>

          <p className="text-xs sm:text-sm lg:text-base text-gray-400 max-w-xl leading-relaxed">
            See how Samitech Networks Starlink installations transformed daily student
            research, remote tech jobs, and family streaming.
          </p>
        </div>

        {/* Testimonials (Swipeable Carousel on Mobile, 3-Col Grid on Desktop) */}
        <div className="flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-none pb-4 md:pb-0 -mx-3.5 px-3.5 sm:-mx-6 sm:px-6 md:mx-0 md:px-0 gap-3.5 sm:gap-6 md:gap-8 items-stretch">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="snap-center shrink-0 w-[78vw] xs:w-[285px] sm:w-[330px] md:w-auto p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-[#111827]/90 border border-white/10 hover:border-[#0088FF]/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-3 sm:mb-5 lg:mb-6 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-[11px] sm:text-xs lg:text-sm text-gray-300 leading-relaxed italic mb-4 sm:mb-6 lg:mb-8">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-2.5 sm:gap-3 pt-3 sm:pt-4 border-t border-white/10">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover ring-2 ring-[#0088FF]/40"
                />
                <div>
                  <div className="text-[11px] sm:text-xs font-bold text-white">{item.author}</div>
                  <div className="text-[10px] sm:text-[11px] text-gray-400">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Indicators */}
        <div className="flex md:hidden items-center justify-center gap-1.5 mt-4 text-gray-400 text-[11px]">
          <span className="w-2 h-2 rounded-full bg-[#0088FF]" />
          <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
          <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
          <span className="ml-2">Swipe for more reviews</span>
        </div>

      </div>
    </section>
  );
}
