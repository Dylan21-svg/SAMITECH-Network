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
    <section id="services" className="relative z-10 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none select-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover saturate-[1.2] contrast-[1.08] brightness-[1.02]"
        >
          <source src="/videos/Video%20Project%207.mp4" type="video/mp4" />
          <source src="/videos/Video Project 7.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B0F17]/80 backdrop-blur-md border border-[#0088FF]/40 mb-3 shadow-xl">
            <Radio className="w-3.5 h-3.5 text-[#0088FF]" />
            <span className="text-[11px] font-bold text-[#0088FF] uppercase tracking-wider">
              Tailored Deployments
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight max-w-2xl mb-3 drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
            Starlink Internet In Your <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-[#0088FF]">
              Hostel, Room Or Apartment
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-gray-100 max-w-xl leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] bg-[#0B0F17]/70 backdrop-blur-md px-5 py-2 rounded-2xl border border-white/15 shadow-xl">
            Choose the dedicated satellite networking architecture configured for your
            specific residential scale and bandwidth requirements.
          </p>
        </div>

        {/* 3 Solution Cards (Derived directly from Image 2 Flyer) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {SOLUTIONS_DATA.map((item) => (
            <div
              key={item.id}
              className={`relative rounded-2xl overflow-hidden bg-[#111827]/90 border transition-all duration-300 hover:translate-y-[-3px] flex flex-col justify-between group ${
                item.popular
                  ? "border-[#0088FF]/50 shadow-2xl shadow-[#0088FF]/10 ring-1 ring-[#0088FF]/30"
                  : "border-white/10 hover:border-white/20 shadow-xl"
              }`}
            >
              {/* Popular Badge */}
              {item.popular && (
                <div className="absolute top-3 right-3 z-20">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#8b0000] text-white uppercase tracking-wider shadow-md">
                    Recommended
                  </span>
                </div>
              )}

              {/* Card Image Banner */}
              <div className="relative w-full h-44 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/60 to-transparent" />
                
                {/* Category Pill on Image */}
                <div className="absolute bottom-3 left-4 z-10 flex items-center gap-2">
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
              <div className="p-4.5 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-gray-100 mb-1.5 group-hover:text-[#0088FF] transition-colors">
                    {item.headline}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Quick Specs Grid */}
                  <div className="grid grid-cols-2 gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/5 mb-4">
                    <div>
                      <span className="text-[9px] text-gray-400 uppercase tracking-wider block">
                        Speed Capacity
                      </span>
                      <span className="text-xs font-bold text-white">
                        {item.specs.speed}
                      </span>
                    </div>
                    <div>
                      <span className="text-[9px] text-gray-400 uppercase tracking-wider block">
                        Simultaneous Users
                      </span>
                      <span className="text-xs font-bold text-white">
                        {item.specs.users}
                      </span>
                    </div>
                    <div>
                      <span className="text-[9px] text-gray-400 uppercase tracking-wider block">
                        Latency
                      </span>
                      <span className="text-xs font-bold text-[#0088FF]">
                        {item.specs.latency}
                      </span>
                    </div>
                    <div>
                      <span className="text-[9px] text-gray-400 uppercase tracking-wider block">
                        Coverage Area
                      </span>
                      <span className="text-xs font-bold text-white">
                        {item.specs.coverage}
                      </span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-2 mb-5">
                    {item.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2">
                        <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mt-0.5 shrink-0">
                          <Check className="w-2 h-2 text-emerald-400" />
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
                  className={`w-full py-2.5 px-3.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 ${
                    item.popular
                      ? "bg-[#0088FF] hover:bg-[#0070D2] text-white shadow-lg shadow-[#0088FF]/25"
                      : "bg-white/10 hover:bg-white/15 text-white border border-white/10"
                  }`}
                >
                  <span>Select {item.title} Setup</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
