"use client";

import React from "react";
import { Satellite, CloudRain, Cpu, ShieldCheck, Gauge, Layers } from "lucide-react";

export default function TechFeatures() {
  const features = [
    {
      icon: <Satellite className="w-6 h-6 text-[#0088FF]" />,
      title: "Low Earth Orbit (LEO) Constellation",
      description:
        "Positioned at ~550 km altitude (over 60× closer than traditional geostationary satellites), drastically reducing latency to under 25ms.",
    },
    {
      icon: <CloudRain className="w-6 h-6 text-[#E63946]" />,
      title: "All-Weather Phased Array Antenna",
      description:
        "Electronic beam steering without mechanical gears. Integrated heating elements melt precipitation and pierce through dense rain squalls.",
    },
    {
      icon: <Cpu className="w-6 h-6 text-[#0088FF]" />,
      title: "Wi-Fi 6 High-Density Mesh",
      description:
        "Ultra-fast dual-band routing with beamforming technology. Easily connect 100+ laptops, smartphones, and smart TVs without packet loss.",
    },
    {
      icon: <Gauge className="w-6 h-6 text-[#E63946]" />,
      title: "Unthrottled Gigabit Transit",
      description:
        "Zero artificial throttling or restrictive FUP caps. Stream 4K/8K, upload heavy project repositories, and game online without throttling.",
    },
    {
      icon: <Layers className="w-6 h-6 text-[#0088FF]" />,
      title: "Seamless Multi-Floor Coverage",
      description:
        "Extendable node architecture custom-installed by Samitech certified technicians to penetrate concrete hostel and apartment walls.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#E63946]" />,
      title: "24/7 Local Support & Maintenance",
      description:
        "Samitech Networks provides direct on-site assistance in Cameroon with fast technician dispatch and instant WhatsApp resolution.",
    },
  ];

  return (
    <section id="features" className="relative z-10 py-20 px-4 sm:px-6 lg:px-12 bg-[#0B0F17]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
            <Cpu className="w-3.5 h-3.5 text-[#0088FF]" />
            <span className="text-xs font-semibold text-[#0088FF] uppercase tracking-wider">
              Space-Age Architecture
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-2xl mb-4">
            Next-Generation Connectivity
          </h2>

          <p className="text-sm sm:text-base text-gray-400 max-w-xl leading-relaxed">
            Engineered by SpaceX, localized and deployed flawlessly by Samitech Networks.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-[#111827]/80 border border-white/10 hover:border-[#0088FF]/30 transition-all duration-300 hover:translate-y-[-2px] group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#0088FF] transition-colors">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
