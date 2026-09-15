"use client";

import React from "react";
import { TESTIMONIALS } from "@/lib/data";
import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section id="about" className="relative z-10 py-20 px-4 sm:px-6 lg:px-12 bg-[#0B0F17]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
            <span className="text-xs font-semibold text-[#0088FF] uppercase tracking-wider">
              Verified Social Proof
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-2xl mb-4">
            Trusted By Hostels & Residents
          </h2>

          <p className="text-sm sm:text-base text-gray-400 max-w-xl leading-relaxed">
            See how Samitech Networks Starlink installations transformed daily student
            research, remote tech jobs, and family streaming.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#111827]/90 border border-white/10 hover:border-[#0088FF]/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-6 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed italic mb-8">
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
                  <div className="text-[11px] text-gray-400">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
