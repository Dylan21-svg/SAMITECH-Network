"use client";

import React from "react";
import { PRICING_PLANS } from "@/lib/data";
import { Check, ArrowRight, Sparkles } from "lucide-react";

interface PricingSectionProps {
  onSelectPlan: (planName: string) => void;
}

export default function PricingSection({ onSelectPlan }: PricingSectionProps) {
  return (
    <section id="pricing" className="relative z-10 py-8 sm:py-10 lg:py-14 px-3.5 sm:px-6 lg:px-12 scroll-mt-24 bg-black">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-6 sm:mb-8 lg:mb-10">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-[#8b0000]/15 border border-[#8b0000]/30 mb-2 sm:mb-3">
            <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#8b0000]" />
            <span className="text-[10px] sm:text-xs font-semibold text-[#8b0000] uppercase tracking-wider">
              Transparent Deployment Tiers
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight max-w-2xl mb-1.5 sm:mb-2">
            Custom Plans For Every Living Space
          </h2>

          <p className="text-xs sm:text-sm text-gray-400 max-w-xl leading-relaxed">
            Whether you are splitting bills across an entire student hostel, outfitting a
            single studio, or equipping an entire residential flat.
          </p>
        </div>

        {/* Pricing Cards Grid (Swipeable on Mobile, 3-Col Grid on Desktop) */}
        <div className="flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-none pb-4 md:pb-0 -mx-3.5 px-3.5 sm:-mx-6 sm:px-6 md:mx-0 md:px-0 gap-3.5 sm:gap-6 md:gap-8 items-stretch">
          {PRICING_PLANS.map((plan, idx) => (
            <div
              key={idx}
              className={`snap-center shrink-0 w-[78vw] xs:w-[285px] sm:w-[330px] md:w-auto rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6 flex flex-col justify-between transition-all duration-300 relative backdrop-blur-xl shadow-2xl ${
                plan.highlight
                  ? "bg-white/[0.14] hover:bg-white/[0.18] border-2 border-[#0088FF] shadow-[#0088FF]/20 md:scale-[1.02]"
                  : "bg-white/[0.08] hover:bg-white/[0.13] border border-white/20 hover:border-white/35"
              }`}
            >
              {/* Badge */}
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <span className={`text-[10px] sm:text-[11px] font-bold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full uppercase tracking-wider ${
                  plan.highlight
                    ? "bg-[#0088FF] text-white shadow-md shadow-blue-500/25"
                    : "bg-red-500/20 text-red-400 border border-red-500/30"
                }`}>
                  {plan.badge}
                </span>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-red-500 tracking-tight mb-1.5 sm:mb-2">
                  {plan.name}
                </h3>
                <p className="text-[11px] sm:text-xs text-blue-200/90 mb-4 sm:mb-6 leading-relaxed">
                  {plan.tagline}
                </p>

                <div className="mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-white/15">
                  <span className="text-xl sm:text-2xl lg:text-3xl font-black text-[#0088FF]">
                    {plan.price}
                  </span>
                  <span className="text-[11px] sm:text-xs text-red-400 font-medium block mt-0.5 sm:mt-1">
                    {plan.frequency}
                  </span>
                </div>

                {/* Features List */}
                <div className="space-y-2 sm:space-y-2.5 lg:space-y-3 mb-5 sm:mb-6 lg:mb-8">
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 sm:gap-2.5">
                      <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-red-500/15 border border-red-500/30 flex items-center justify-center mt-0.5 shrink-0">
                        <Check className="w-2 sm:w-2.5 h-2 sm:h-2.5 text-red-400" />
                      </div>
                      <span className="text-[11px] sm:text-xs text-blue-100 font-medium leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onSelectPlan(plan.name)}
                className={`w-full py-2.5 sm:py-3.5 px-4 min-h-[42px] sm:min-h-[46px] rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 ${
                  plan.highlight
                    ? "bg-gradient-to-r from-red-600 via-red-500 to-[#0088FF] hover:from-red-700 hover:to-blue-600 text-white shadow-lg shadow-red-600/30"
                    : "bg-[#0088FF] hover:bg-blue-600 text-white shadow-md shadow-blue-500/20"
                }`}
              >
                <span>{plan.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Indicators */}
        <div className="flex md:hidden items-center justify-center gap-1.5 mt-4 text-gray-400 text-[11px]">
          <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
          <span className="w-2 h-2 rounded-full bg-[#0088FF]" />
          <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
          <span className="ml-2">Swipe to compare plans</span>
        </div>

      </div>
    </section>
  );
}
