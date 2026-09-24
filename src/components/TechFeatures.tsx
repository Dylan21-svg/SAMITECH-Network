"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import {
  Satellite,
  CloudRain,
  Cpu,
  ShieldCheck,
  Gauge,
  Layers,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface FeatureItem {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  badge: string; // Top-left oval pill (e.g. "SPACEX ARCHITECTURE")
  bigTitle: [string, string]; // Large stacked all-caps typography (e.g. ["LOW EARTH", "ORBIT MESH"])
  tags: [string, string, string]; // Stacked micro-pill tags (e.g. ["LOW LATENCY", "6,000+ SATS", "< 25MS PING"])
  description: string;
  spec: string;
  image: string;
  imageAlt: string;
}

export default function TechFeatures() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const features: FeatureItem[] = [
    {
      id: "leo",
      icon: Satellite,
      badge: "SpaceX Architecture",
      bigTitle: ["LOW EARTH", "ORBIT MESH"],
      tags: ["LOW LATENCY", "6,000+ SATELLITES", "< 25MS PING"],
      description:
        "Orbiting at ~550 km altitude for instant cloud and exam responsiveness, eliminating terrestrial undersea cable bottlenecks.",
      spec: "< 25ms Latency",
      image: "/images/leo.png",
      imageAlt: "Starlink Low Earth Orbit satellite constellation",
    },
    {
      id: "antenna",
      icon: CloudRain,
      badge: "Weatherproof Hardware",
      bigTitle: ["PHASED ARRAY", "ANTENNA DISH"],
      tags: ["SOLID STATE", "IP54 RUGGEDIZED", "THERMAL DEFROST"],
      description:
        "Solid-state electronic beam tracking with zero mechanical gears, engineered to pierce dense tropical Mount Fako rain squalls.",
      spec: "IP54 Rugged",
      image: "/images/antenna.png",
      imageAlt: "Starlink phased array antenna dish terminal",
    },
    {
      id: "wifi6",
      icon: Cpu,
      badge: "Enterprise Routing",
      bigTitle: ["WI-FI 6 HIGH", "DENSITY MESH"],
      tags: ["TRI-BAND OFDMA", "WPA3 SECURITY", "100+ CLIENTS"],
      description:
        "Intelligent multi-channel OFDMA distribution powering dozens of hostel student laptops simultaneously without packet drops.",
      spec: "100+ Devices",
      image: "/images/wifi-6.png",
      imageAlt: "Wi-Fi 6 mesh router and access points",
    },
    {
      id: "transit",
      icon: Gauge,
      badge: "Unlimited Pipeline",
      bigTitle: ["UNTHROTTLED", "GIGABIT TRANSIT"],
      tags: ["ZERO DATA CAPS", "280+ MBPS PEAK", "DIRECT ROUTING"],
      description:
        "Direct SpaceX ground station routing with zero fair-use throttling, arbitrary speed caps, or peak-hour congestion.",
      spec: "Uncapped Bandwidth",
      image: "/images/dish.png",
      imageAlt: "SpaceX Starlink dish hardware terminal kit",
    },
    {
      id: "multifloor",
      icon: Layers,
      badge: "Hostel Deployment",
      bigTitle: ["MULTI-FLOOR", "CONCRETE MESH"],
      tags: ["SHIELDED CAT6", "ZERO DEAD ZONES", "SOLID COPPER"],
      description:
        "Shielded Cat6 solid copper backbone and synchronized corridor nodes engineered to penetrate dense multi-story concrete walls.",
      spec: "Shielded Cat6",
      image: "/images/multi-floor.png",
      imageAlt: "Multi-floor building mesh Wi-Fi network distribution layout",
    },
    {
      id: "support",
      icon: ShieldCheck,
      badge: "Regional Dispatch",
      bigTitle: ["24/7 LOCAL", "BUEA SUPPORT"],
      tags: ["LOCAL WAREHOUSE", "2-HOUR DISPATCH", "DIRECT WHATSAPP"],
      description:
        "On-site Cameroon technicians, local spare parts inventory in Buea, and instant WhatsApp support for hostel wardens.",
      spec: "2-Hour Dispatch",
      image: "/images/support.png",
      imageAlt: "Samitech certified technical engineer on site",
    },
  ];

  const totalFeatures = features.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalFeatures);
  }, [totalFeatures]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalFeatures) % totalFeatures);
  }, [totalFeatures]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Autoplay functionality: switches to next after 10 seconds automatically
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalFeatures);
    }, 10000);
    return () => clearInterval(timer);
  }, [totalFeatures, currentIndex]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 45;
    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      id="features"
      className="relative z-10 py-8 sm:py-12 lg:py-16 px-3.5 sm:px-6 lg:px-12 scroll-mt-24 bg-black text-white selection:bg-[#0088FF]/30"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-[#8b0000]/15 border border-[#8b0000]/30 mb-2">
            <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#8b0000]" />
            <span className="text-[10px] sm:text-xs font-semibold text-[#8b0000] uppercase tracking-wider">
              Space-Age Architecture
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight max-w-2xl mb-1.5">
            Next-Generation Connectivity
          </h2>

          <p className="text-xs sm:text-sm text-gray-400 max-w-xl leading-relaxed">
            Engineered by SpaceX, localized and deployed flawlessly across Cameroon by Samitech Networks.
          </p>
        </div>

        {/* Feature Tabs Bar for Quick Navigation */}
        <div className="flex items-center justify-start md:justify-center overflow-x-auto scrollbar-none gap-2 mb-6 sm:mb-8 pb-1.5 -mx-3.5 px-3.5 md:mx-0 md:px-0">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            const isActive = idx === currentIndex;
            return (
              <button
                key={feat.id}
                onClick={() => goToSlide(idx)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold transition-all duration-300 shrink-0 cursor-pointer ${
                  isActive
                    ? "bg-[#0088FF] text-white shadow-lg shadow-[#0088FF]/40 border border-white/40 scale-105"
                    : "bg-white/[0.05] text-gray-300 hover:text-white hover:bg-white/[0.1] border border-white/15"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-gray-400"}`} />
                <span className="whitespace-nowrap">{feat.bigTitle[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Outer Carousel Container with Ambient Glow and Floating Arrows */}
        <div className="relative">
          {/* Luminous fluid ambient glow behind the frosted glass plate */}
          <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-blue-700/40 via-cyan-500/25 to-blue-900/40 rounded-[2.5rem] sm:rounded-[3.5rem] blur-3xl -z-10 pointer-events-none" />

          {/* Desktop Floating Navigation Arrows */}
          <button
            onClick={prevSlide}
            aria-label="Previous card"
            className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-[#081225]/85 hover:bg-[#0088FF] border border-white/30 text-white items-center justify-center transition-all duration-300 cursor-pointer shadow-xl hover:scale-110 active:scale-95 group"
          >
            <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next card"
            className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-[#081225]/85 hover:bg-[#0088FF] border border-white/30 text-white items-center justify-center transition-all duration-300 cursor-pointer shadow-xl hover:scale-110 active:scale-95 group"
          >
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
          </button>

          {/* Carousel Viewport (Hides overflowing slides) */}
          <div
            className="w-full overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] border border-white/25 shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),0_25px_60px_-12px_rgba(0,119,255,0.35)]"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Sliding Horizontal Track */}
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] w-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {features.map((item) => {
                const ItemIcon = item.icon;
                return (
                  <div
                    key={item.id}
                    className="w-full shrink-0 flex-none relative p-6 sm:p-8 lg:p-10 bg-[#081225]/70 backdrop-blur-2xl overflow-hidden"
                  >
                    {/* Vertical Fluted / Ribbed Light Beams Texture */}
                    <div
                      className="absolute inset-0 pointer-events-none opacity-20"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(90deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 2px, transparent 2px, transparent 32px)",
                      }}
                    />

                    {/* Glowing Refracted Aurora Swirl inside each card */}
                    <div className="absolute right-0 top-0 bottom-0 w-3/5 bg-gradient-to-l from-blue-500/30 via-cyan-400/20 to-transparent blur-3xl pointer-events-none" />

                    {/* Header Row: Oval Pill Badge on Left, Asterisk Icon on Right */}
                    <div className="relative z-10 flex items-center justify-between mb-6 sm:mb-8">
                      {/* Oval Pill Badge */}
                      <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/35 bg-white/[0.06] backdrop-blur-md shadow-sm">
                        <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase text-white/90">
                          {item.badge}
                        </span>
                      </div>

                      {/* 8-Point Geometric Asterisk Star */}
                      <div className="flex items-center justify-center text-white/90">
                        <svg
                          className="w-6 h-6 sm:w-7 sm:h-7"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        >
                          <line x1="12" y1="3" x2="12" y2="21" />
                          <line x1="3" y1="12" x2="21" y2="12" />
                          <line x1="5.64" y1="5.64" x2="18.36" y2="18.36" />
                          <line x1="5.64" y1="18.36" x2="18.36" y2="5.64" />
                        </svg>
                      </div>
                    </div>

                    {/* Horizontal Layout: Left Text side, Right Image side */}
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 items-center">
                      
                      {/* Left Side: Micro-Tags, Bold Stacked Typography, Description */}
                      <div className="md:col-span-7 flex flex-col justify-between order-1 text-left">
                        {/* Stacked Pill Micro-Tags */}
                        <div className="space-y-1.5 mb-4 sm:mb-5">
                          <div className="flex">
                            <span className="inline-flex items-center px-3 py-1 rounded-full border border-white/30 bg-white/[0.05] text-[9px] sm:text-[10px] font-semibold tracking-wider uppercase text-white/90 backdrop-blur-sm">
                              {item.tags[0]}
                            </span>
                          </div>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="inline-flex items-center px-3 py-1 rounded-full border border-white/30 bg-white/[0.05] text-[9px] sm:text-[10px] font-semibold tracking-wider uppercase text-white/90 backdrop-blur-sm">
                              {item.tags[1]}
                            </span>
                            <span className="inline-flex items-center px-3 py-1 rounded-full border border-white/30 bg-white/[0.05] text-[9px] sm:text-[10px] font-semibold tracking-wider uppercase text-white/90 backdrop-blur-sm">
                              {item.tags[2]}
                            </span>
                          </div>
                        </div>

                        {/* Big Bold Stacked All-Caps Title */}
                        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-[0.95] mb-3 sm:mb-4 drop-shadow-sm">
                          <div className="text-white">{item.bigTitle[0]}</div>
                          <div className="text-[#0088FF]">{item.bigTitle[1]}</div>
                        </h3>

                        {/* Concise Description Text */}
                        <p className="text-xs sm:text-sm text-blue-100/85 leading-relaxed max-w-md mb-4 sm:mb-5">
                          {item.description}
                        </p>

                        {/* Bottom Metric Pill */}
                        <div className="flex items-center gap-2 pt-3 border-t border-white/15">
                          <div className="w-5 h-5 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center shrink-0">
                            <ItemIcon className="w-3 h-3 text-red-400" />
                          </div>
                          <span className="text-[11px] sm:text-xs text-gray-300 font-medium">Standard Spec:</span>
                          <span className="text-xs sm:text-sm font-black text-[#0088FF] tracking-wide">
                            {item.spec}
                          </span>
                        </div>
                      </div>

                      {/* Right Side: Floating Hardware Image with Luminous Aura */}
                      <div className="md:col-span-5 order-2">
                        <div className="relative w-full h-52 sm:h-60 md:h-64 lg:h-72 rounded-2xl sm:rounded-3xl overflow-hidden bg-black/40 border border-white/20 shadow-2xl flex items-center justify-center p-3 sm:p-4 group">
                          {/* Internal Radial Glow */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-[#0088FF]/30 via-cyan-400/15 to-transparent pointer-events-none" />

                          {/* Hardware Image */}
                          <div className="relative w-full h-full">
                            <Image
                              src={item.image}
                              alt={item.imageAlt}
                              fill
                              className="object-contain p-2 transition-transform duration-700 group-hover:scale-105"
                              sizes="(max-width: 768px) 100vw, 40vw"
                              priority
                            />
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Carousel Navigation Footer: Interactive Dots & Mobile Arrow Controls */}
          <div className="mt-6 sm:mt-8 flex items-center justify-between px-2">
            {/* Dots Indicator */}
            <div className="flex items-center gap-2">
              {features.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    idx === currentIndex
                      ? "w-8 sm:w-10 h-2 bg-[#0088FF] shadow-md shadow-[#0088FF]/50 border border-white/40"
                      : "w-2.5 h-2 bg-white/25 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            {/* Quick Action Navigation Controls */}
            <div className="flex items-center gap-2.5">
              <button
                onClick={prevSlide}
                aria-label="Previous feature"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#081225]/80 hover:bg-white/[0.18] border border-white/25 text-white flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-md"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <button
                onClick={nextSlide}
                aria-label="Next feature"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0088FF] hover:bg-blue-600 border border-white/30 text-white flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-lg shadow-[#0088FF]/40"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
