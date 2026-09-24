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
  title: string;
  badge: string;
  highlight: boolean;
  spec: string;
  description: string;
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
      title: "Low Earth Orbit (LEO) Constellation",
      badge: "SpaceX Architecture",
      highlight: true,
      spec: "< 25ms Latency",
      description:
        "6,000+ satellites orbiting at ~550 km altitude, delivering sub-25ms latency with zero terrestrial cable bottlenecks.",
      image: "/images/leo.png",
      imageAlt: "Starlink Low Earth Orbit satellite constellation",
    },
    {
      id: "antenna",
      icon: CloudRain,
      title: "All-Weather Phased Array Antenna",
      badge: "Tropical Weatherproof",
      highlight: false,
      spec: "IP54 Ruggedized",
      description:
        "Solid-state electronic beam steering with integrated thermal elements that pierce dense tropical Mount Fako rainstorms.",
      image: "/images/antenna.png",
      imageAlt: "Starlink phased array antenna dish terminal",
    },
    {
      id: "wifi6",
      icon: Cpu,
      title: "Wi-Fi 6 High-Density Mesh",
      badge: "High Capacity",
      highlight: true,
      spec: "100+ Devices",
      description:
        "Intelligent OFDMA multi-user routing connecting 100+ student devices simultaneously without packet loss or hallway dead zones.",
      image: "/images/wifi-6.png",
      imageAlt: "Wi-Fi 6 mesh router and access points",
    },
    {
      id: "transit",
      icon: Gauge,
      title: "Unthrottled Gigabit Transit",
      badge: "Unlimited Pipeline",
      highlight: false,
      spec: "Uncapped Bandwidth",
      description:
        "Direct SpaceX ground station routing with zero data caps, artificial speed throttling, or peak-hour congestion.",
      image: "/images/dish.png",
      imageAlt: "SpaceX Starlink dish hardware terminal kit",
    },
    {
      id: "multifloor",
      icon: Layers,
      title: "Seamless Multi-Floor Coverage",
      badge: "Concrete Penetration",
      highlight: true,
      spec: "Shielded Cat6",
      description:
        "Shielded Cat6 solid copper backbone and synchronized corridor nodes engineered to penetrate dense concrete hostel walls.",
      image: "/images/multi-floor.png",
      imageAlt: "Multi-floor building mesh Wi-Fi network distribution layout",
    },
    {
      id: "support",
      icon: ShieldCheck,
      title: "24/7 Local Support & Maintenance",
      badge: "Buea Field Team",
      highlight: false,
      spec: "2-Hour Dispatch",
      description:
        "Certified Buea technicians, local spare parts inventory, and instant WhatsApp support with guaranteed 2-hour dispatch.",
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
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);
    return () => clearInterval(interval);
  }, [nextSlide, currentIndex]);

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
    const minSwipeDistance = 50;
    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const current = features[currentIndex];
  const CurrentIcon = current.icon;

  return (
    <section
      id="features"
      className="relative z-10 py-7 sm:py-9 lg:py-12 px-3.5 sm:px-6 lg:px-12 scroll-mt-24 bg-black text-white selection:bg-[#0088FF]/30"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-5 sm:mb-7">
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
        <div className="flex items-center justify-start md:justify-center overflow-x-auto scrollbar-none gap-2 mb-5 sm:mb-6 pb-1.5 -mx-3.5 px-3.5 md:mx-0 md:px-0">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            const isActive = idx === currentIndex;
            return (
              <button
                key={feat.id}
                onClick={() => goToSlide(idx)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11px] sm:text-xs font-semibold transition-all duration-200 shrink-0 cursor-pointer ${
                  isActive
                    ? "bg-[#0088FF] text-white shadow-md shadow-[#0088FF]/30 border border-[#0088FF]"
                    : "bg-white/[0.06] text-gray-300 hover:text-white hover:bg-white/[0.12] border border-white/10"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-gray-400"}`} />
                <span className="whitespace-nowrap">{feat.title.split(" (")[0].split(" ")[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Horizontal Carousel Card Container */}
        <div
          className="relative rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 bg-white/[0.08] hover:bg-white/[0.11] border border-white/20 backdrop-blur-xl shadow-2xl transition-all duration-300 overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Active Feature Slide Grid: Horizontal Landscape layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8 items-center">
            
            {/* Left Side: Essential Text (Title, Concise Description, and Spec) */}
            <div className="md:col-span-7 flex flex-col justify-center order-1 text-left">
              {/* Badge Row */}
              <div className="flex items-center gap-2 mb-2.5">
                <div className="w-6 h-6 rounded-full bg-red-500/15 border border-red-500/30 flex items-center justify-center shrink-0">
                  <CurrentIcon className="w-3.5 h-3.5 text-red-400" />
                </div>
                <span
                  className={`text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                    current.highlight
                      ? "bg-[#0088FF] text-white shadow-sm shadow-blue-500/25"
                      : "bg-red-500/20 text-red-400 border border-red-500/30"
                  }`}
                >
                  {current.badge}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-red-500 tracking-tight mb-2">
                {current.title}
              </h3>

              {/* Reduced & Most Important Text */}
              <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed mb-4">
                {current.description}
              </p>

              {/* Key Metric Highlight */}
              <div className="pt-3 border-t border-white/15 flex items-center justify-between">
                <span className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider font-semibold">
                  Standard Spec
                </span>
                <span className="text-xs sm:text-sm font-black text-[#0088FF]">
                  {current.spec}
                </span>
              </div>
            </div>

            {/* Right Side: Horizontal Image Representation */}
            <div className="md:col-span-5 order-2">
              <div className="relative w-full h-44 sm:h-52 md:h-56 lg:h-64 rounded-xl sm:rounded-2xl overflow-hidden bg-black/50 border border-white/20 shadow-xl flex items-center justify-center p-3 group">
                {/* Subtle Ambient Radial Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0088FF]/15 via-transparent to-red-500/10 pointer-events-none" />
                
                {/* Hardware Graphic */}
                <div className="relative w-full h-full">
                  <Image
                    src={current.image}
                    alt={current.imageAlt}
                    fill
                    className="object-contain p-1.5 transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 40vw"
                    priority
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Carousel Navigation Footer: Arrows + Dots */}
          <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between">
            {/* Dots Indicator */}
            <div className="flex items-center gap-1.5">
              {features.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    idx === currentIndex
                      ? "w-6 h-2 bg-[#0088FF] shadow-sm shadow-[#0088FF]/40"
                      : "w-2 h-2 bg-white/25 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            {/* Previous & Next Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                aria-label="Previous feature"
                className="w-8 h-8 rounded-full bg-white/[0.08] hover:bg-white/[0.16] border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-sm"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={nextSlide}
                aria-label="Next feature"
                className="w-8 h-8 rounded-full bg-[#0088FF] hover:bg-blue-600 border border-[#0088FF] text-white flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-md shadow-[#0088FF]/30"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
