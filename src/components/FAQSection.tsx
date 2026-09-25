"use client";

import React, { useState } from "react";
import { FAQS } from "@/lib/data";
import { ChevronDown, HelpCircle, MessageSquare, PhoneCall, CheckCircle2 } from "lucide-react";

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  // Four theme styles tailored for maximum contrast and elegance on black background
  const colorThemes = [
    {
      name: "Blue",
      borderLeft: "border-l-4 border-l-[#0088FF]",
      borderHover: "hover:border-blue-500/60 hover:bg-blue-950/20",
      badge: "bg-blue-500/15 text-[#38BDF8] border border-blue-500/30",
      chevronOpen: "bg-[#0088FF] text-white rotate-180 shadow-lg shadow-blue-500/30",
      hoverQuestion: "group-hover:text-[#38BDF8]",
      activeBg: "bg-blue-950/25 border-blue-500/40",
      divider: "border-blue-500/20",
      accentText: "text-[#38BDF8]",
    },
    {
      name: "Red",
      borderLeft: "border-l-4 border-l-red-500",
      borderHover: "hover:border-red-500/60 hover:bg-red-950/20",
      badge: "bg-red-500/15 text-red-400 border border-red-500/30",
      chevronOpen: "bg-red-600 text-white rotate-180 shadow-lg shadow-red-500/30",
      hoverQuestion: "group-hover:text-red-400",
      activeBg: "bg-red-950/25 border-red-500/40",
      divider: "border-red-500/20",
      accentText: "text-red-400",
    },
    {
      name: "Green",
      borderLeft: "border-l-4 border-l-emerald-500",
      borderHover: "hover:border-emerald-500/60 hover:bg-emerald-950/20",
      badge: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",
      chevronOpen: "bg-emerald-600 text-white rotate-180 shadow-lg shadow-emerald-500/30",
      hoverQuestion: "group-hover:text-emerald-400",
      activeBg: "bg-emerald-950/25 border-emerald-500/40",
      divider: "border-emerald-500/20",
      accentText: "text-emerald-400",
    },
    {
      name: "Platinum",
      borderLeft: "border-l-4 border-l-white",
      borderHover: "hover:border-white/50 hover:bg-white/[0.07]",
      badge: "bg-white/15 text-white border border-white/30",
      chevronOpen: "bg-white text-black rotate-180 shadow-lg shadow-white/25",
      hoverQuestion: "group-hover:text-white",
      activeBg: "bg-white/[0.07] border-white/30",
      divider: "border-white/20",
      accentText: "text-white",
    },
  ];

  return (
    <section id="faq" className="relative z-10 py-8 sm:py-10 lg:py-14 px-3.5 sm:px-6 lg:px-12 bg-black text-white border-y border-white/10 scroll-mt-24">
      {/* Subtle ambient lighting for depth */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/15 backdrop-blur-md shadow-inner mb-2 sm:mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span className="text-[11px] sm:text-xs font-bold text-emerald-400 uppercase tracking-wider">
              Clear & Transparent Answers
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white tracking-tight max-w-xl mb-2">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0088FF] to-[#38BDF8]">
              Questions
            </span>
            <span className="text-red-500">.</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 max-w-lg leading-relaxed font-normal">
            Everything you need to know about <strong className="text-white">Starlink hardware</strong>, installation timelines, and shared student hostel connectivity in Cameroon.
          </p>
        </div>

        {/* Accordion List with High-Contrast Themed Cards on Black */}
        <div className="space-y-3.5 sm:space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            const theme = colorThemes[idx % colorThemes.length];

            return (
              <div
                key={idx}
                className={`rounded-2xl bg-[#0F141F]/80 backdrop-blur-md border border-white/10 shadow-lg shadow-black/40 transition-all duration-200 overflow-hidden ${
                  theme.borderLeft
                } ${theme.borderHover} ${isOpen ? theme.activeBg : ""}`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 lg:p-6 text-left flex items-center justify-between gap-3 group cursor-pointer"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    {/* Number Badge with assigned theme color */}
                    <span
                      className={`text-[10px] sm:text-xs font-black px-2 sm:px-2.5 py-1 rounded-md shrink-0 uppercase tracking-wider ${theme.badge}`}
                    >
                      0{idx + 1}
                    </span>
                    <span
                      className={`text-xs sm:text-sm lg:text-base font-bold text-white transition-colors leading-snug ${theme.hoverQuestion}`}
                    >
                      {faq.question}
                    </span>
                  </div>

                  {/* Toggle Chevron */}
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                      isOpen
                        ? theme.chevronOpen
                        : "bg-white/10 text-gray-300 group-hover:bg-white/20 group-hover:text-white"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    className={`px-4 sm:px-5 lg:px-6 pb-5 sm:pb-6 text-xs sm:text-sm lg:text-[15px] text-gray-200 leading-relaxed border-t pt-3.5 sm:pt-4 ${theme.divider}`}
                  >
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${theme.accentText}`} />
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions? Banner Optimized for Black Background */}
        <div className="mt-10 sm:mt-14 rounded-2xl bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-white/[0.05] border border-white/15 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-xl shadow-xl shadow-black/50">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              Direct Support Available
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-white">
              Still have specific questions about your building?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300">
              Speak directly with our certified field engineers in Buea, Douala, or Yaounde.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            {/* WhatsApp - Vibrant Green */}
            <a
              href="https://wa.me/237674137259?text=Hello%20Samitech%20Networks,%20I%20have%20a%20question%20about%20Starlink%20Internet."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-[#22C55E] hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-500/25 transition-all hover:scale-105 active:scale-95"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Chat</span>
            </a>

            {/* Direct Call - Vibrant Crimson Red */}
            <a
              href="tel:+237674137259"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-red-600 hover:bg-red-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-red-500/25 transition-all hover:scale-105 active:scale-95"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call Technician</span>
            </a>

            {/* Inquire - Vibrant Electric Blue */}
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-[#0088FF] hover:bg-blue-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-500/25 transition-all hover:scale-105 active:scale-95"
            >
              <span>Explore Plans</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
