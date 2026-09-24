"use client";

import React from "react";
import Image from "next/image";
import { TESTIMONIALS } from "@/lib/data";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section
      id="about"
      className="relative z-10 py-12 sm:py-16 lg:py-24 px-3.5 sm:px-6 lg:px-12 scroll-mt-24 overflow-hidden isolate"
    >
      {/* Background Image: Starlink Dish & Retail Packaging - Full Brightness */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <Image
          src="/images/star.png"
          alt="Starlink satellite dish terminal setup in grass"
          fill
          className="object-cover object-center brightness-100 contrast-105 scale-100 transition-transform duration-700"
          sizes="100vw"
          priority
        />
        {/* Soft edge gradients to seamlessly blend into neighboring sections */}
        <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-black via-black/40 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-black/60 border border-white/20 backdrop-blur-xl shadow-lg mb-3 sm:mb-4">
            <span className="text-[10px] sm:text-xs font-bold text-[#0088FF] uppercase tracking-wider">
              Verified Social Proof
            </span>
          </div>

          <div className="px-5 py-3 sm:py-4 rounded-2xl sm:rounded-3xl bg-black/60 backdrop-blur-2xl border border-white/20 shadow-2xl max-w-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-2 sm:mb-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              Trusted By Hostels &amp; Residents
            </h2>

            <p className="text-xs sm:text-sm lg:text-base text-gray-100 max-w-xl mx-auto leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
              See how Samitech Networks Starlink installations transformed daily student
              research, remote tech jobs, and family streaming.
            </p>
          </div>
        </div>

        {/* Testimonials (Swipeable Carousel on Mobile, 3-Col Grid on Desktop) */}
        <div className="flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-none pb-4 md:pb-0 -mx-3.5 px-3.5 sm:-mx-6 sm:px-6 md:mx-0 md:px-0 gap-3.5 sm:gap-6 md:gap-8 items-stretch">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="snap-center shrink-0 w-[78vw] xs:w-[285px] sm:w-[330px] md:w-auto p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-black/55 hover:bg-black/65 backdrop-blur-2xl border border-white/25 hover:border-[#0088FF]/60 shadow-[0_8px_32px_0_rgba(0,0,0,0.6)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-3 sm:mb-4 text-amber-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm lg:text-base text-white font-medium leading-relaxed italic mb-5 sm:mb-7 drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-3.5 sm:pt-4 border-t border-white/20">
                <img
                  src={item.avatar}
                  alt={item.author}
                  referrerPolicy="no-referrer"
                  className="w-9 h-9 sm:w-11 sm:h-11 rounded-full object-cover ring-2 ring-[#0088FF] shadow-lg"
                />
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                    {item.author}
                  </div>
                  <div className="text-[11px] sm:text-xs font-medium text-blue-300 drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                    {item.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Indicators */}
        <div className="flex md:hidden items-center justify-center gap-1.5 mt-4 text-white text-[11px] drop-shadow">
          <span className="w-2 h-2 rounded-full bg-[#0088FF]" />
          <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
          <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
          <span className="ml-2 font-medium">Swipe for more reviews</span>
        </div>

      </div>
    </section>
  );
}
