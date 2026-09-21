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
      icon: <CloudRain className="w-6 h-6 text-[#8b0000]" />,
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
      icon: <Gauge className="w-6 h-6 text-[#8b0000]" />,
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
      icon: <ShieldCheck className="w-6 h-6 text-[#8b0000]" />,
      title: "24/7 Local Support & Maintenance",
      description:
        "Samitech Networks provides direct on-site assistance in Cameroon with fast technician dispatch and instant WhatsApp resolution.",
    },
  ];

  return (
    <section id="features" className="relative z-10 py-6 sm:py-10 lg:py-16 px-3 sm:px-6 lg:px-12 bg-[#0B0F17] overflow-hidden isolate">
      {/* Background Video */}
      <div className="absolute inset-0 pointer-events-none -z-20 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center opacity-35"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        {/* Soft dark gradient overlays to guarantee crisp text readability and seamless transitions */}
        <div className="absolute inset-0 bg-[#0B0F17]/80" />
        <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-[#0B0F17] to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#0B0F17] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-5 sm:mb-8 lg:mb-12">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-2 sm:mb-3">
            <Cpu className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#0088FF]" />
            <span className="text-[9px] sm:text-xs font-semibold text-[#0088FF] uppercase tracking-wider">
              Space-Age Architecture
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight max-w-2xl mb-1.5 sm:mb-3">
            Next-Generation Connectivity
          </h2>

          <p className="text-[10px] sm:text-xs lg:text-sm text-gray-300 max-w-xl leading-relaxed">
            Engineered by SpaceX, localized and deployed flawlessly by Samitech Networks.
          </p>
        </div>

        {/* Feature Grid - Drastically reduced compact boxes */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3.5 lg:gap-5">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="p-2.5 sm:p-3.5 lg:p-5 rounded-xl sm:rounded-2xl bg-[#111827]/85 border border-white/10 backdrop-blur-md hover:border-[#0088FF]/40 transition-all duration-300 hover:translate-y-[-2px] group flex flex-col justify-start"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 rounded-lg sm:rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center mb-1.5 sm:mb-2.5 group-hover:scale-105 transition-transform shrink-0 [&>svg]:w-3.5 [&>svg]:h-3.5 sm:[&>svg]:w-4 sm:[&>svg]:h-4 lg:[&>svg]:w-5 lg:[&>svg]:h-5">
                {item.icon}
              </div>
              <h3 className="text-xs sm:text-sm lg:text-base font-bold text-white mb-1 leading-snug group-hover:text-[#0088FF] transition-colors line-clamp-2">
                {item.title}
              </h3>
              <p className="text-[9px] sm:text-[11px] lg:text-xs text-gray-300/90 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
