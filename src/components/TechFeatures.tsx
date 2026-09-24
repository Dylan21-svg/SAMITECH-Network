"use client";

import React from "react";
import { Satellite, CloudRain, Cpu, ShieldCheck, Gauge, Layers, Sparkles, Check } from "lucide-react";

export default function TechFeatures() {
  const features = [
    {
      icon: Satellite,
      title: "Low Earth Orbit (LEO) Constellation",
      description:
        "Positioned at ~550 km altitude (over 60× closer than traditional geostationary satellites), drastically reducing latency to under 25ms.",
      badge: "Most Advanced",
      highlight: true,
      spec: "< 25ms Latency",
    },
    {
      icon: CloudRain,
      title: "All-Weather Phased Array Antenna",
      description:
        "Electronic beam steering without mechanical gears. Integrated heating elements melt precipitation and pierce through dense rain squalls.",
      badge: "Weatherproof",
      highlight: false,
      spec: "IP54 Ruggedized",
    },
    {
      icon: Cpu,
      title: "Wi-Fi 6 High-Density Mesh",
      description:
        "Ultra-fast dual-band routing with beamforming technology. Easily connect 100+ laptops, smartphones, and smart TVs without packet loss.",
      badge: "High Density",
      highlight: true,
      spec: "100+ Concurrent Devices",
    },
    {
      icon: Gauge,
      title: "Unthrottled Gigabit Transit",
      description:
        "Zero artificial throttling or restrictive FUP caps. Stream 4K/8K, upload heavy project repositories, and game online without throttling.",
      badge: "Zero Throttling",
      highlight: false,
      spec: "Uncapped Bandwidth",
    },
    {
      icon: Layers,
      title: "Seamless Multi-Floor Coverage",
      description:
        "Extendable node architecture custom-installed by Samitech certified technicians to penetrate concrete hostel and apartment walls.",
      badge: "Hostel Mesh",
      highlight: false,
      spec: "Multi-Floor Nodes",
    },
    {
      icon: ShieldCheck,
      title: "24/7 Local Support & Maintenance",
      description:
        "Samitech Networks provides direct on-site assistance in Cameroon with fast technician dispatch and instant WhatsApp resolution.",
      badge: "Cameroon Support",
      highlight: false,
      spec: "Local Tech Dispatch",
    },
  ];

  return (
    <section id="features" className="relative z-10 py-8 sm:py-10 lg:py-14 px-3.5 sm:px-6 lg:px-12 scroll-mt-24 bg-black">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-6 sm:mb-8 lg:mb-10">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-[#8b0000]/15 border border-[#8b0000]/30 mb-2 sm:mb-3">
            <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#8b0000]" />
            <span className="text-[10px] sm:text-xs font-semibold text-[#8b0000] uppercase tracking-wider">
              Space-Age Architecture
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight max-w-2xl mb-1.5 sm:mb-2">
            Next-Generation Connectivity
          </h2>

          <p className="text-xs sm:text-sm text-gray-400 max-w-xl leading-relaxed">
            Engineered by SpaceX, localized and deployed flawlessly across Cameroon by Samitech Networks.
          </p>
        </div>

        {/* Feature Cards Grid (Same White Glassmorphism, Red & Blue Styling as PricingSection) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6 md:gap-8 items-stretch">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 flex flex-col justify-between transition-all duration-300 relative backdrop-blur-xl shadow-2xl ${
                  item.highlight
                    ? "bg-white/[0.14] hover:bg-white/[0.18] border-2 border-[#0088FF] shadow-[#0088FF]/20 md:scale-[1.02]"
                    : "bg-white/[0.08] hover:bg-white/[0.13] border border-white/20 hover:border-white/35"
                }`}
              >
                {/* Badge & Icon Row */}
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <span
                    className={`text-[10px] sm:text-[11px] font-bold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full uppercase tracking-wider ${
                      item.highlight
                        ? "bg-[#0088FF] text-white shadow-md shadow-blue-500/25"
                        : "bg-red-500/20 text-red-400 border border-red-500/30"
                    }`}
                  >
                    {item.badge}
                  </span>

                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-red-500/15 border border-red-500/30 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-red-400" />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-red-500 tracking-tight mb-1.5 sm:mb-2">
                    {item.title}
                  </h3>

                  <p className="text-[11px] sm:text-xs text-blue-200/90 mb-4 sm:mb-6 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Key Spec Line */}
                <div className="pt-3 sm:pt-4 border-t border-white/15 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-red-500/15 border border-red-500/30 flex items-center justify-center shrink-0">
                      <Check className="w-2 sm:w-2.5 h-2 sm:h-2.5 text-red-400" />
                    </div>
                    <span className="text-[11px] sm:text-xs text-red-400 font-medium">Standard Spec</span>
                  </div>

                  <span className="text-xs sm:text-sm font-black text-[#0088FF]">
                    {item.spec}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
