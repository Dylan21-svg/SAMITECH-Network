"use client";

import React from "react";
import Image from "next/image";
import { SOLUTIONS_DATA, SolutionItem } from "@/lib/data";
import { Check, ArrowUpRight, Wifi, Radio } from "lucide-react";

interface SolutionsSectionProps {
  onSelectSolution: (solution: SolutionItem) => void;
}

export default function SolutionsSection({ onSelectSolution }: SolutionsSectionProps) {
  return (
    <section id="services" className="relative z-10 py-8 sm:py-10 lg:py-14 px-3.5 sm:px-6 lg:px-12 scroll-mt-24 overflow-hidden isolate">
      {/* Background Video: Video Project 7 - Full Brightness */}
      <div className="absolute inset-0 pointer-events-none -z-20 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
        >
          <source src="/videos/video-project-7.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-5 sm:mb-7 lg:mb-9">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-[#0B0F17]/90 border border-white/20 shadow-lg mb-2 sm:mb-3">
            <Radio className="w-3 h-3 text-[#0088FF]" />
            <span className="text-[10px] sm:text-xs font-semibold text-[#0088FF] uppercase tracking-wider">
              Tailored Deployments
            </span>
          </div>

          <div className="px-3.5 py-2.5 sm:py-3.5 rounded-xl bg-[#0B0F17]/90 border border-white/15 shadow-2xl max-w-2xl mb-2">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-1.5 sm:mb-2">
              Starlink Internet In Your <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-[#0088FF]">
                Hostel, Room Or Apartment
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto leading-relaxed">
              Choose the dedicated satellite networking architecture configured for your
              specific residential scale and bandwidth requirements.
            </p>
          </div>
        </div>

        {/* Solution Cards (Swipeable Carousel on Mobile, 3-Col Grid on Desktop) */}
        <div className="flex lg:grid lg:grid-cols-3 overflow-x-auto lg:overflow-visible snap-x snap-mandatory scrollbar-none pb-4 lg:pb-0 -mx-3.5 px-3.5 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 gap-3.5 sm:gap-6 lg:gap-8 items-stretch">
          {SOLUTIONS_DATA.map((item) => (
            <div
              key={item.id}
              className={`snap-center shrink-0 w-[78vw] xs:w-[285px] sm:w-[340px] lg:w-auto relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#111827]/90 border transition-all duration-300 hover:translate-y-[-4px] flex flex-col justify-between group ${
                item.popular
                  ? "border-[#0088FF]/50 shadow-2xl shadow-[#0088FF]/10 ring-1 ring-[#0088FF]/30"
                  : "border-white/10 hover:border-white/20 shadow-xl"
              }`}
            >
              {/* Popular Badge */}
              {item.popular && (
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20">
                  <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-bold bg-[#8b0000] text-white uppercase tracking-wider shadow-md">
                    Recommended
                  </span>
                </div>
              )}

              {/* Card Image Banner */}
              <div className="relative w-full h-36 sm:h-44 lg:h-56 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/60 to-transparent" />
                
                {/* Category Pill on Image */}
                <div className="absolute bottom-3 left-4 sm:bottom-4 sm:left-5 z-10 flex items-center gap-2">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0088FF] flex items-center justify-center text-white shadow-md">
                    <Wifi className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-semibold text-[#0088FF] uppercase tracking-wider block">
                      {item.badge}
                    </span>
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-5 lg:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-xs sm:text-sm lg:text-base font-bold text-gray-100 mb-1.5 sm:mb-2 group-hover:text-[#0088FF] transition-colors">
                    {item.headline}
                  </h4>
                  <p className="text-[11px] sm:text-xs lg:text-sm text-gray-400 leading-relaxed mb-3 sm:mb-5 lg:mb-6">
                    {item.description}
                  </p>

                  {/* Quick Specs Grid */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-2.5 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/5 mb-3.5 sm:mb-5 lg:mb-6">
                    <div>
                      <span className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-wider block">
                        Speed Capacity
                      </span>
                      <span className="text-[11px] sm:text-xs font-bold text-white">
                        {item.specs.speed}
                      </span>
                    </div>
                    <div>
                      <span className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-wider block">
                        Simultaneous Users
                      </span>
                      <span className="text-[11px] sm:text-xs font-bold text-white">
                        {item.specs.users}
                      </span>
                    </div>
                    <div>
                      <span className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-wider block">
                        Latency
                      </span>
                      <span className="text-[11px] sm:text-xs font-bold text-[#0088FF]">
                        {item.specs.latency}
                      </span>
                    </div>
                    <div>
                      <span className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-wider block">
                        Coverage Area
                      </span>
                      <span className="text-[11px] sm:text-xs font-bold text-white">
                        {item.specs.coverage}
                      </span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-1.5 sm:space-y-2 lg:space-y-2.5 mb-4 sm:mb-6 lg:mb-8">
                    {item.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2">
                        <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mt-0.5 shrink-0">
                          <Check className="w-2 sm:w-2.5 h-2 sm:h-2.5 text-emerald-400" />
                        </div>
                        <span className="text-[11px] sm:text-xs text-gray-300 leading-tight">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <button
                  onClick={() => onSelectSolution(item)}
                  className={`w-full py-2.5 sm:py-3 px-4 min-h-[42px] sm:min-h-[46px] rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 ${
                    item.popular
                      ? "bg-[#0088FF] hover:bg-[#0070D2] text-white shadow-lg shadow-[#0088FF]/25"
                      : "bg-white/10 hover:bg-white/15 text-white border border-white/10"
                  }`}
                >
                  <span>Select {item.title} Setup</span>
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Indicators */}
        <div className="flex lg:hidden items-center justify-center gap-1.5 mt-4 text-gray-400 text-[11px]">
          <span className="w-2 h-2 rounded-full bg-[#0088FF]" />
          <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
          <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
          <span className="ml-2">Swipe horizontally to compare</span>
        </div>

      </div>
    </section>
  );
}
