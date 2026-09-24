"use client";

import React from "react";
import { Zap, ShieldCheck, Activity, Building2, Radio, CheckCircle2 } from "lucide-react";

export default function StatsStrip() {
  const stats = [
    {
      icon: <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0088FF]" />,
      value: "220+ Mbps",
      label: "Average Download Speed",
      sublabel: "Tested under peak load",
    },
    {
      icon: <Activity className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8b0000]" />,
      value: "< 25 ms",
      label: "Ultra-Low Latency",
      sublabel: "LEO satellite proximity",
    },
    {
      icon: <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0088FF]" />,
      value: "99.9%",
      label: "Reliable Uptime",
      sublabel: "Weather-hardened signal",
    },
    {
      icon: <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8b0000]" />,
      value: "350+",
      label: "Connected Facilities & Rooms",
      sublabel: "Across student campuses",
    },
  ];

  // Quadruple for infinite, seamless marquee carousel loop
  const carouselStats = [...stats, ...stats, ...stats, ...stats];

  return (
    <section className="relative z-10 px-3 sm:px-6 lg:px-12 py-3 sm:py-5 lg:py-8 border-y border-white/[0.06] bg-[#0E141F]/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto">
        {/* Live Constellation Telemetry Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4 p-2 sm:p-3 lg:p-3.5 mb-2.5 sm:mb-4 lg:mb-5 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-lg">
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-emerald-500"></span>
            </span>
            <div className="text-[10px] sm:text-xs lg:text-sm font-bold text-white tracking-wide flex items-center gap-1.5 sm:gap-2">
              <Radio className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#0088FF]" />
              Live Starlink Constellation Link
            </div>
            <span className="inline-flex items-center gap-1 text-[8px] sm:text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded-full border border-emerald-500/20">
              <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> Active
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-6 text-[10px] sm:text-xs pt-1 sm:pt-0 border-t sm:border-t-0 border-white/10 w-full sm:w-auto justify-between sm:justify-start">
            <div className="flex items-center gap-1 sm:gap-1.5">
              <span className="text-gray-400">Speed:</span>
              <span className="font-extrabold text-white">
                240+ <span className="text-[#0088FF]">Mbps</span>
              </span>
            </div>
            <div className="h-3 w-[1px] bg-white/15" />
            <div className="flex items-center gap-1 sm:gap-1.5">
              <span className="text-gray-400">Latency:</span>
              <span className="font-extrabold text-white">
                24 <span className="text-gray-300">ms</span>
              </span>
            </div>
          </div>
        </div>

        {/* Marquee Carousel for Stats */}
        <div className="relative overflow-hidden w-full select-none">
          <style>{`
            @keyframes statsMarquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .stats-track {
              display: flex;
              width: max-content;
              animation: statsMarquee 22s linear infinite;
            }
            .stats-track:hover {
              animation-play-state: paused;
            }
          `}</style>

          {/* Edge fade gradients for smooth carousel entrance and exit */}
          <div className="pointer-events-none absolute left-0 inset-y-0 w-8 sm:w-16 bg-gradient-to-r from-[#0E141F] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 inset-y-0 w-8 sm:w-16 bg-gradient-to-l from-[#0E141F] to-transparent z-10" />

          <div className="stats-track items-center gap-2.5 sm:gap-3.5 whitespace-nowrap py-0.5">
            {carouselStats.map((item, idx) => (
              <div
                key={idx}
                className="w-[160px] sm:w-[200px] lg:w-[230px] shrink-0 flex flex-col items-start p-2 sm:p-2.5 lg:p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#0088FF]/30 transition-colors backdrop-blur-sm shadow-sm"
              >
                <div className="flex items-center gap-1.5 sm:gap-2 mb-1">
                  <div className="p-1 rounded-md bg-white/5 border border-white/10 shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-xs sm:text-sm lg:text-base font-extrabold text-white tracking-tight">
                    {item.value}
                  </span>
                </div>
                <div className="text-[10px] sm:text-xs font-semibold text-gray-200 leading-snug truncate w-full">
                  {item.label}
                </div>
                <div className="text-[8px] sm:text-[10px] text-gray-400 mt-0.5 truncate w-full">
                  {item.sublabel}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
