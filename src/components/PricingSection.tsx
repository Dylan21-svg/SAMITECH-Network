"use client";

import React from "react";
import { PRICING_PLANS } from "@/lib/data";
import { Check, ArrowRight, Sparkles, MessageSquare } from "lucide-react";

interface PricingSectionProps {
  onSelectPlan: (planName: string) => void;
}

export default function PricingSection({ onSelectPlan }: PricingSectionProps) {
  return (
    <section id="pricing" className="relative z-10 py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8b0000]/15 border border-[#8b0000]/30 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#8b0000]" />
            <span className="text-xs font-semibold text-[#8b0000] uppercase tracking-wider">
              Transparent Deployment Tiers
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-2xl mb-4">
            Custom Plans For Every Living Space
          </h2>

          <p className="text-sm sm:text-base text-gray-400 max-w-xl leading-relaxed">
            Whether you are splitting bills across an entire student hostel, outfitting a
            single studio, or equipping an entire residential flat.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.highlight
                  ? "bg-[#111827] border-2 border-[#0088FF] shadow-2xl shadow-[#0088FF]/15 scale-[1.02]"
                  : "bg-[#0E141F] border border-white/10 hover:border-white/20"
              }`}
            >
              {/* Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className={`text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                  plan.highlight
                    ? "bg-[#0088FF] text-white"
                    : "bg-white/10 text-gray-300"
                }`}>
                  {plan.badge}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                  {plan.name}
                </h3>
                <p className="text-xs text-gray-400 mb-6 leading-relaxed">
                  {plan.tagline}
                </p>

                <div className="mb-6 pb-6 border-b border-white/10">
                  <span className="text-2xl sm:text-3xl font-extrabold text-white">
                    {plan.price}
                  </span>
                  <span className="text-xs text-gray-400 block mt-1">
                    {plan.frequency}
                  </span>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mt-0.5 shrink-0">
                        <Check className="w-2.5 h-2.5 text-[#0088FF]" />
                      </div>
                      <span className="text-xs text-gray-300">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onSelectPlan(plan.name)}
                className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 ${
                  plan.highlight
                    ? "bg-[#8b0000] hover:bg-[#700000] text-white shadow-lg shadow-[#8b0000]/25"
                    : "bg-white/10 hover:bg-white/15 text-white"
                }`}
              >
                <span>{plan.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
