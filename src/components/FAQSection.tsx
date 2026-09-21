"use client";

import React, { useState } from "react";
import { FAQS } from "@/lib/data";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="relative z-10 py-10 sm:py-14 lg:py-20 px-3.5 sm:px-6 lg:px-12 bg-[#0B0F17]">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-3 sm:mb-4">
            <HelpCircle className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#0088FF]" />
            <span className="text-[10px] sm:text-xs font-semibold text-[#0088FF] uppercase tracking-wider">
              Clear Answers
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight max-w-xl mb-2 sm:mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[11px] sm:text-xs lg:text-sm text-gray-400 max-w-lg leading-relaxed">
            Everything you need to know about Starlink hardware, installation timelines,
            and shared hostel connectivity.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-2.5 sm:space-y-3.5 lg:space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-xl sm:rounded-2xl bg-[#111827]/80 border border-white/10 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-3.5 sm:p-5 lg:p-6 text-left flex items-center justify-between gap-3 text-white hover:text-[#0088FF] transition-colors"
                >
                  <span className="text-xs sm:text-sm lg:text-base font-bold tracking-tight">
                    {faq.question}
                  </span>
                  <div className={`p-1 sm:p-1.5 rounded-full bg-white/5 transition-transform duration-200 shrink-0 ${isOpen ? "rotate-180 bg-[#0088FF]/20 text-[#0088FF]" : "text-gray-400"}`}>
                    <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-3.5 sm:px-5 lg:px-6 pb-4 sm:pb-5 lg:pb-6 text-[11px] sm:text-xs lg:text-sm text-gray-300 leading-relaxed border-t border-white/5 pt-3 sm:pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
