"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

interface TechFeatureItem {
  badge: string;
  title: string;
  description: string;
  tags: string[];
  spec: string;
  image: string;
}

const features: TechFeatureItem[] = [
  {
    badge: "Space-Age Architecture",
    title: "Low Earth Orbit (LEO) Constellation",
    description:
      "Positioned at ~550 km altitude (over 60× closer than traditional geostationary satellites), drastically slashing latency to under 25ms for real-time video calls, cloud computing, and gaming.",
    tags: ["< 25ms Latency", "550km LEO Orbit", "SpaceX Constellation", "Sub-Millisecond Transit"],
    spec: "< 25ms Latency",
    image: "/images/leo.png",
  },
  {
    badge: "Electronic Beam Steering",
    title: "All-Weather Phased Array Antenna",
    description:
      "Electronic beam steering without mechanical gears. Integrated heating elements melt precipitation and pierce through dense tropical rain squalls across Cameroon with unwavering signal stability.",
    tags: ["IP54 Ruggedized", "Thermal Rain Melt", "Zero Moving Parts", "Tropical Weatherproof"],
    spec: "IP54 Weatherproof",
    image: "/images/antenna.png",
  },
  {
    badge: "High-Density Routing",
    title: "Wi-Fi 6 High-Density Mesh",
    description:
      "Ultra-fast dual-band routing with advanced beamforming and OFDMA. Easily connects 100+ laptops, smartphones, and workstations concurrently without bandwidth degradation or dropped connections.",
    tags: ["100+ Concurrent Devices", "Beamforming Wi-Fi 6", "Dual-Band Mesh", "Zero Packet Loss"],
    spec: "100+ Devices Mesh",
    image: "/images/wifi-6.png",
  },
  {
    badge: "Direct Satellite Beam",
    title: "Unthrottled Gigabit Transit",
    description:
      "Zero artificial throttling or restrictive Fair Usage Policy (FUP) caps. Stream 4K/8K, upload heavy project repositories, and enjoy uncompromised high-speed throughput 24 hours a day.",
    tags: ["Uncapped Bandwidth", "Zero FUP Caps", "250+ Mbps Peak", "100% Unthrottled"],
    spec: "Uncapped Bandwidth",
    image: "/images/dish.png",
  },
  {
    badge: "Enterprise Infrastructure",
    title: "Seamless Multi-Floor Coverage",
    description:
      "Extendable node architecture custom-engineered by Samitech certified technicians to penetrate reinforced concrete hostel walls, stairwells, and multi-story compounds with zero dead zones.",
    tags: ["Multi-Floor Nodes", "Wall-Penetrating Beams", "Certified Deployment", "Whole-Building Roaming"],
    spec: "Multi-Floor Nodes",
    image: "/images/multi-floor.png",
  },
  {
    badge: "Cameroon Dedicated Team",
    title: "24/7 Local Support & Maintenance",
    description:
      "Samitech Networks provides direct on-site assistance across Cameroon with rapid technician dispatch, proactive satellite beam health monitoring, and instant WhatsApp support resolution.",
    tags: ["Local Tech Dispatch", "Instant WhatsApp SLA", "24/7 Live Monitoring", "Cameroon Native Support"],
    spec: "Local Fast Dispatch",
    image: "/images/support.png",
  },
];

// 8-Point Asterisk Icon matching reference design
function LuminousAsterisk({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a1.25 1.25 0 0 1 1.25 1.25v5.48l3.87-3.87a1.25 1.25 0 1 1 1.77 1.77L15.02 10.5h5.48a1.25 1.25 0 1 1 0 2.5h-5.48l3.87 3.87a1.25 1.25 0 1 1-1.77 1.77L13.25 14.77v5.48a1.25 1.25 0 1 1-2.5 0v-5.48l-3.87 3.87a1.25 1.25 0 1 1-1.77-1.77l3.87-3.87H3.5a1.25 1.25 0 1 1 0-2.5h5.48L5.11 6.63a1.25 1.25 0 0 1 1.77-1.77l3.87 3.87V3.25A1.25 1.25 0 0 1 12 2z" />
    </svg>
  );
}

export default function TechFeatures() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % features.length);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + features.length) % features.length);
  }, []);

  // 10-second automatic carousel transition
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, 10000);

    return () => clearInterval(timer);
  }, [isPaused, handleNext, activeIndex]);

  const current = features[activeIndex];

  return (
    <section id="features" className="relative z-10 py-12 sm:py-16 lg:py-24 px-3.5 sm:px-6 lg:px-12 scroll-mt-24 bg-black overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-12 lg:mb-14">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 rounded-full bg-[#8b0000]/15 border border-[#8b0000]/30 mb-3 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#ff4444]" />
            <span className="text-[10px] sm:text-xs font-semibold text-red-400 uppercase tracking-wider">
              Space-Age Architecture
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight max-w-2xl mb-2 sm:mb-3">
            Next-Generation Connectivity
          </h2>

          <p className="text-xs sm:text-sm lg:text-base text-gray-400 max-w-xl leading-relaxed">
            Engineered by SpaceX, localized and deployed flawlessly across Cameroon by Samitech Networks.
          </p>
        </div>

        {/* Luminous Glassmorphic Carousel Card */}
        <div
          className="luminous-glass-card rounded-[28px] sm:rounded-[36px] p-6 sm:p-9 lg:p-12 relative overflow-hidden transition-all duration-500 group shadow-2xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Vertical flutes and luminous light streaks from reference image */}
          <div className="luminous-flutes" />
          <div className="luminous-aurora" />

          {/* Top Row: Oval outline pill badge on left & 8-point Asterisk on right */}
          <div className="relative z-10 flex items-center justify-between mb-6 sm:mb-8">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/35 bg-white/[0.04] text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-white/95 uppercase backdrop-blur-md shadow-sm">
              {current.badge}
            </div>

            <div className="text-white drop-shadow-[0_0_14px_rgba(255,255,255,0.7)] hover:rotate-45 transition-transform duration-500">
              <LuminousAsterisk className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
          </div>

          {/* Animated Carousel Slide Content */}
          <div className="relative z-10 min-h-[380px] sm:min-h-[420px] lg:min-h-[440px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 28 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -28 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Left Side: Text description */}
                <div className="lg:col-span-7 flex flex-col justify-center space-y-4 sm:space-y-6">
                  {/* Pills row (like FULLY EDITABLE / CREATIVE PACK / ULTRA HD in reference) */}
                  <div className="flex flex-wrap gap-2">
                    {current.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full border border-white/25 bg-white/[0.05] text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-white/90 backdrop-blur-md shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bold Punchy Title (like LUMINOUS GRADIENT in reference image) */}
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-black text-white tracking-tight uppercase leading-[1.08] drop-shadow-md">
                    {current.title}
                  </h3>

                  {/* High clarity description */}
                  <p className="text-xs sm:text-sm lg:text-base text-blue-100/85 leading-relaxed max-w-xl font-normal">
                    {current.description}
                  </p>

                  {/* Key Standard Spec Badge */}
                  <div className="pt-2 flex items-center gap-3">
                    <span className="text-[11px] sm:text-xs text-blue-200/70 uppercase tracking-widest font-mono">
                      Standard Spec:
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-blue-500/20 border border-blue-400/40 text-xs sm:text-sm font-black text-cyan-300 shadow-sm">
                      {current.spec}
                    </span>
                  </div>
                </div>

                {/* Right Side: Image representation */}
                <div className="lg:col-span-5 flex items-center justify-center">
                  <div className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-none h-[240px] sm:h-[300px] lg:h-[360px] rounded-2xl sm:rounded-3xl border border-white/15 bg-white/[0.03] backdrop-blur-xl p-4 sm:p-6 flex items-center justify-center shadow-inner overflow-hidden group/img">
                    {/* Glowing backlight behind image */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-cyan-400/15 to-transparent opacity-80" />
                    <div className="absolute w-44 h-44 bg-cyan-400/25 rounded-full blur-[60px] pointer-events-none" />

                    <div className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden flex items-center justify-center">
                      <Image
                        src={current.image}
                        alt={current.title}
                        fill
                        unoptimized
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 450px"
                        className="object-contain drop-shadow-[0_15px_30px_rgba(0,140,255,0.45)] transition-transform duration-700 ease-out group-hover/img:scale-105 rounded-xl sm:rounded-2xl"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Minimal Controls (Left & Right arrows for manual switching, NO count or card indicators) */}
          <div className="relative z-10 flex items-center justify-end gap-3 mt-6 sm:mt-8 pt-4 border-t border-white/10">
            <button
              onClick={handlePrev}
              aria-label="Previous slide"
              className="w-10 h-10 rounded-full border border-white/20 bg-white/[0.05] hover:bg-white/[0.15] hover:border-white/40 backdrop-blur-md flex items-center justify-center text-white/80 hover:text-white transition-all active:scale-90 cursor-pointer shadow-md"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={handleNext}
              aria-label="Next slide"
              className="w-10 h-10 rounded-full border border-white/20 bg-white/[0.05] hover:bg-white/[0.15] hover:border-white/40 backdrop-blur-md flex items-center justify-center text-white/80 hover:text-white transition-all active:scale-90 cursor-pointer shadow-md"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
