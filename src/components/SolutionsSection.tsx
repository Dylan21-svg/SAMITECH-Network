"use client";

import React from "react";
import Image from "next/image";
import { SOLUTIONS_DATA, SolutionItem } from "@/lib/data";
import { Check, ArrowUpRight, Wifi, Shield, Users, Radio, Sparkles } from "lucide-react";

interface SolutionsSectionProps {
  onSelectSolution: (solution: SolutionItem) => void;
}

export default function SolutionsSection({ onSelectSolution }: SolutionsSectionProps) {
  return (
    <section id="services" className="relative z-10 py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
            <Radio className="w-3.5 h-3.5 text-[#0088FF]" />
            <span className="text-xs font-semibold text-[#0088FF] uppercase tracking-wider">
              Tailored Deployments
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-3xl mb-4">
            Starlink Internet In Your <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-[#0088FF]">
              Hostel, Room Or Apartment
            </span>
          </h2>

          <p className="text-sm sm:text-base text-gray-400 max-w-2xl leading-relaxed">
            Choose the dedicated satellite networking architecture configured for your
            specific residential scale and bandwidth requirements.
          </p>
        </div>

        {/* 3 Solution Cards (Derived directly from Image 2 Flyer) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {SOLUTIONS_DATA.map((item) => (
            <div
              key={item.id}
              className={`relative rounded-3xl overflow-hidden bg-[#111827]/90 border transition-all duration-300 hover:translate-y-[-4px] flex flex-col justify-between group ${
                item.popular
                  ? "border-[#0088FF]/50 shadow-2xl shadow-[#0088FF]/10 ring-1 ring-[#0088FF]/30"
                  : "border-white/10 hover:border-white/20 shadow-xl"
              }`}
            >
              {/* Popular Badge */}
              {item.popular && (
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#E63946] text-white uppercase tracking-wider shadow-md">
                    Recommended
                  </span>
                </div>
              )}

              {/* Card Image Banner */}
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/60 to-transparent" />
                
                {/* Category Pill on Image */}
                <div className="absolute bottom-4 left-5 z-10 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#0088FF] flex items-center justify-center text-white shadow-md">
                    <Wifi className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-[#0088FF] uppercase tracking-wider block">
                      {item.badge}
                    </span>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-base font-bold text-gray-100 mb-2 group-hover:text-[#0088FF] transition-colors">
                    {item.headline}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Quick Specs Grid */}
                  <div className="grid grid-cols-2 gap-2.5 p-3 rounded-2xl bg-white/[0.03] border border-white/5 mb-6">
                    <div>
                      <span className="text-[10px] text-gray-400 uppercase tracking-wider block">
                        Speed Capacity
                      </span>
                      <span className="text-xs font-bold text-white">
                        {item.specs.speed}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-400 uppercase tracking-wider block">
                        Simultaneous Users
                      </span>
                      <span className="text-xs font-bold text-white">
                        {item.specs.users}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-400 uppercase tracking-wider block">
                        Latency
                      </span>
                      <span className="text-xs font-bold text-[#0088FF]">
                        {item.specs.latency}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-400 uppercase tracking-wider block">
                        Coverage Area
                      </span>
                      <span className="text-xs font-bold text-white">
                        {item.specs.coverage}
                      </span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 mb-8">
                    {item.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mt-0.5 shrink-0">
                          <Check className="w-2.5 h-2.5 text-emerald-400" />
                        </div>
                        <span className="text-xs text-gray-300 leading-tight">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <button
                  onClick={() => onSelectSolution(item)}
                  className={`w-full py-3 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 ${
                    item.popular
                      ? "bg-[#0088FF] hover:bg-[#0070D2] text-white shadow-lg shadow-[#0088FF]/25"
                      : "bg-white/10 hover:bg-white/15 text-white border border-white/10"
                  }`}
                >
                  <span>Select {item.title} Setup</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
