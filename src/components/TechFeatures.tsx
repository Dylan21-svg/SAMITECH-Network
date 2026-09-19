"use client";

import React from "react";
import { Satellite, CloudRain, Cpu, ShieldCheck, Gauge, Layers } from "lucide-react";
import DesignerCarousel from "@/components/DesignerCarousel";

export default function TechFeatures() {
  const features = [
    {
      icon: <Satellite className="w-6 h-6 text-[#0088FF]" />,
      title: "Low Earth Orbit (LEO) Constellation",
      description:
        "Positioned at ~550 km altitude (over 60× closer than traditional geostationary satellites), drastically reducing latency to under 25ms.",
      image: "/images/leo.png",
    },
    {
      icon: <CloudRain className="w-6 h-6 text-[#8b0000]" />,
      title: "All-Weather Phased Array Antenna",
      description:
        "Electronic beam steering without mechanical gears. Integrated heating elements melt precipitation and pierce through dense rain squalls.",
      image: "/images/antenna.png",
    },
    {
      icon: <Cpu className="w-6 h-6 text-[#0088FF]" />,
      title: "Wi-Fi 6 High-Density Mesh",
      description:
        "Ultra-fast dual-band routing with beamforming technology. Easily connect 100+ laptops, smartphones, and smart TVs without packet loss.",
      image: "/images/wifi-6.png",
    },
    {
      icon: <Gauge className="w-6 h-6 text-[#8b0000]" />,
      title: "Unthrottled Gigabit Transit",
      description:
        "Zero artificial throttling or restrictive FUP caps. Stream 4K/8K, upload heavy project repositories, and game online without throttling.",
      image: "/images/tp-link.png",
    },
    {
      icon: <Layers className="w-6 h-6 text-[#0088FF]" />,
      title: "Seamless Multi-Floor Coverage",
      description:
        "Extendable node architecture custom-installed by Samitech certified technicians to penetrate concrete hostel and apartment walls.",
      image: "/images/multi-floor.png",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#8b0000]" />,
      title: "24/7 Local Support & Maintenance",
      description:
        "Samitech Networks provides direct on-site assistance in Cameroon with fast technician dispatch and instant WhatsApp resolution.",
      image: "/images/support.png",
    },
  ];

  return (
    <section id="features" className="relative z-10 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-3">
            <Cpu className="w-3.5 h-3.5 text-[#0088FF]" />
            <span className="text-[11px] font-semibold text-[#0088FF] uppercase tracking-wider">
              Space-Age Architecture
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight max-w-2xl mb-2.5">
            Next-Generation Connectivity
          </h2>

          <p className="text-xs sm:text-sm text-gray-400 max-w-lg leading-relaxed">
            Engineered by SpaceX, localized and deployed flawlessly by Samitech Networks.
          </p>
        </div>

        {/* Designer Carousel */}
        <DesignerCarousel items={features} />

      </div>
    </section>
  );
}
