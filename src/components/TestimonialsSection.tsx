"use client";

import React from "react";
import Image from "next/image";
import { TESTIMONIALS } from "@/lib/data";
import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section id="about" className="relative z-10 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Starlink Background (star.png) - 100% Clear to the max */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none select-none">
        <Image
          src="/images/star.png"
          alt="Starlink Network"
          fill
          priority
          className="object-cover object-center contrast-[1.06] brightness-[1.02]"
        />
      </div>

      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 mb-3 backdrop-blur-md shadow-md">
            <span className="text-[11px] font-bold text-[#38BDF8] uppercase tracking-wider">
              Verified Social Proof · About Us
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight max-w-2xl mb-2.5 drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
            Trusted By Hostels & Residents
          </h2>

          <p className="text-xs sm:text-sm text-gray-200 max-w-lg leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] bg-black/45 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
            See how Samitech Networks Starlink installations transformed daily student
            research, remote tech jobs, and family streaming.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-[#0B101D]/90 border border-white/15 backdrop-blur-xl hover:border-[#0088FF]/40 transition-all duration-300 flex flex-col justify-between shadow-2xl"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-6 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed italic mb-8">
                  "{item.quote}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-[#0088FF]/40"
                />
                <div>
                  <div className="text-xs font-bold text-white">{item.author}</div>
                  <div className="text-[11px] text-gray-300">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
