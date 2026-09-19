"use client";

import React from "react";
import { Zap, ShieldCheck, Activity, Building2, Radio, CheckCircle2 } from "lucide-react";

export default function StatsStrip() {
  const stats = [
    {
      icon: <Zap className="w-5 h-5 text-[#0088FF]" />,
      value: "220+ Mbps",
      label: "Average Download Speed",
      sublabel: "Tested under peak load",
    },
    {
      icon: <Activity className="w-5 h-5 text-[#8b0000]" />,
      value: "< 25 ms",
      label: "Ultra-Low Latency",
      sublabel: "LEO satellite proximity",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#0088FF]" />,
      value: "99.9%",
      label: "Reliable Uptime",
      sublabel: "Weather-hardened signal",
    },
    {
      icon: <Building2 className="w-5 h-5 text-[#8b0000]" />,
      value: "350+",
      label: "Connected Facilities & Rooms",
      sublabel: "Across student campuses",
    },
  ];

  return (
    <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-6 border-y border-white/[0.06] bg-[#0E141F]/60 backdrop-blur-md">
      <div className="max-w-6xl mx-auto">
        {/* Live Constellation Telemetry Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-3 mb-5 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-lg">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <div className="text-xs sm:text-sm font-bold text-white tracking-wide flex items-center gap-2">
              <Radio className="w-3.5 h-3.5 text-[#0088FF]" />
              Live Starlink Constellation Link
            </div>
            <span className="inline-flex items-center gap-1 text-[9px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
              <CheckCircle2 className="w-2.5 h-2.5" /> Active
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <span className="text-gray-400 text-xs">Download Speed:</span>
              <span className="font-extrabold text-white text-xs sm:text-sm">
                240+ <span className="text-[#0088FF]">Mbps</span>
              </span>
            </div>
            <div className="h-3.5 w-[1px] bg-white/15 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-gray-400 text-xs">Average Latency:</span>
              <span className="font-extrabold text-white text-xs sm:text-sm">
                24 <span className="text-gray-300">ms</span>
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center sm:items-start p-3 rounded-xl hover:bg-white/[0.02] transition-colors border border-transparent hover:border-white/5"
            >
              <div className="flex items-center gap-2 mb-1.5">
                <div className="p-1.5 rounded-lg bg-white/5 border border-white/10">
                  {item.icon}
                </div>
                <span className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                  {item.value}
                </span>
              </div>
              <div className="text-xs sm:text-sm font-semibold text-gray-200 text-center sm:text-left">
                {item.label}
              </div>
              <div className="text-[11px] text-gray-400 text-center sm:text-left">
                {item.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
