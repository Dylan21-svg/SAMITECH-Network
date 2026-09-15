"use client";

import React, { useState } from "react";
import { FAQS } from "@/lib/data";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-12 bg-[#0B0F17]">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#0088FF]" />
            <span className="text-xs font-semibold text-[#0088FF] uppercase tracking-wider">
              Clear Answers
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight max-w-xl mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-lg">
            Everything you need to know about Starlink hardware, installation timelines,
            and shared hostel connectivity.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#111827]/80 border border-white/10 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 text-white hover:text-[#0088FF] transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold tracking-tight">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full bg-white/5 transition-transform duration-200 ${isOpen ? "rotate-180 bg-[#0088FF]/20 text-[#0088FF]" : "text-gray-400"}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-white/5 pt-4">
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
