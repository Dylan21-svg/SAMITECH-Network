"use client";

import React from "react";
import { Zap, Wifi, Satellite, Sparkles, ShieldCheck, Flame } from "lucide-react";

export default function MarqueeBanner() {
  const items = [
    { text: "STARLINK HIGH-SPEED SATELLITE INTERNET", icon: Satellite },
    { text: "220+ MBPS DOWNLOAD SPEEDS", icon: Zap },
    { text: "ULTRA-LOW LATENCY < 25MS", icon: Flame },
    { text: "ZERO BUFFERING & UNLIMITED DATA", icon: Sparkles },
    { text: "STUDENT HOSTELS & APARTMENTS", icon: Wifi },
    { text: "CERTIFIED STARLINK DEPLOYMENT PARTNER", icon: ShieldCheck },
    { text: "WI-FI 6 WHOLE-FACILITY MESH", icon: Wifi },
    { text: "24/7 TECHNICAL HOTLINE IN CAMEROON", icon: Zap },
  ];

  // Repeat twice for seamless infinite marquee loop
  const displayItems = [...items, ...items];

  return (
    <div className="relative z-20 w-full overflow-hidden bg-[#8b0000] text-white py-2.5 sm:py-3.5 lg:py-4 border-y border-black/20 shadow-[0_4px_25px_rgba(139,0,0,0.4)] select-none">
      <div className="animate-marquee items-center gap-6 sm:gap-8 whitespace-nowrap">
        {displayItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="inline-flex items-center gap-2.5 sm:gap-3">
              <span className="text-[11px] sm:text-xs lg:text-sm font-black tracking-widest uppercase text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                {item.text}
              </span>
              <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-black/15 text-white/90">
                <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </span>
              <span className="text-black/30 font-bold text-[10px] sm:text-xs">✦</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
