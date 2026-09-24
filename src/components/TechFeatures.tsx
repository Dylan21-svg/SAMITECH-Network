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
  Check,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

interface FeatureItem {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  badge: string;
  highlight: boolean;
  spec: string;
  description: string;
  bulletPoints: string[];
  image: string;
  imageAlt: string;
  imageCaption: string;
}

export default function TechFeatures() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const features: FeatureItem[] = [
    {
      id: "leo",
      icon: Satellite,
      title: "Low Earth Orbit (LEO) Constellation",
      subtitle: "6,000+ Satellites at ~550 km Altitude",
      badge: "SpaceX Architecture",
      highlight: true,
      spec: "< 25ms Ping",
      description:
        "Orbiting over 60× closer to Earth than legacy geostationary satellites, SpaceX Starlink slashes round-trip packet travel times to sub-25ms. Experience instant cloud synchronization, high-frequency forex updates, and crystal-clear Zoom video streams.",
      bulletPoints: [
        "Sub-25ms ping eliminates lag in online exams and trading",
        "Direct laser cross-links bypass congested terrestrial undersea cables",
        "Continuous beam handoff guarantees zero dropped sessions",
      ],
      image: "/images/leo.png",
      imageAlt: "Starlink Low Earth Orbit satellite constellation above Earth",
      imageCaption: "Active LEO Orbital Shell Coverage",
    },
    {
      id: "antenna",
      icon: CloudRain,
      title: "All-Weather Phased Array Antenna",
      subtitle: "Solid-State Electronic Beam Steering",
      badge: "Tropical Weatherproof",
      highlight: false,
      spec: "IP54 / IP67 Ruggedized",
      description:
        "No fragile mechanical gears or motors that wear out. Advanced phased-array electronic beam steering tracks passing satellites in milliseconds while integrated heating elements and dynamic gain compensation pierce through tropical Mount Fako rain downpours.",
      bulletPoints: [
        "Electronic beam scanning adjusts tracking 1,000× per second",
        "Hydrophobic faceplate repels heavy monsoon rainfall",
        "Withstands extreme Mount Fako squalls up to 96+ km/h",
      ],
      image: "/images/antenna.png",
      imageAlt: "Starlink high-gain phased array antenna dish terminal",
      imageCaption: "Electronic Phased-Array Dish",
    },
    {
      id: "wifi6",
      icon: Cpu,
      title: "Wi-Fi 6 High-Density Mesh",
      subtitle: "Tri-Band OFDMA & MU-MIMO Distribution",
      badge: "High-Capacity Nodes",
      highlight: true,
      spec: "100+ Concurrent Devices",
      description:
        "Tailored for high-density student living environments. Next-gen Wi-Fi 6 OFDMA channels partition radio frequencies intelligently, allowing dozens of student laptops, smartphones, tablets, and smart TVs to stream and download simultaneously with zero packet collisions.",
      bulletPoints: [
        "Simultaneous multi-user OFDMA eliminates hallway buffering",
        "WPA3 enterprise encryption protects student banking and logins",
        "Automated QoS bandwidth fairness guarantees equal room speeds",
      ],
      image: "/images/wifi-6.png",
      imageAlt: "High-performance Wi-Fi 6 mesh router and access points",
      imageCaption: "Enterprise Wi-Fi 6 Mesh Engine",
    },
    {
      id: "transit",
      icon: Gauge,
      title: "Unthrottled Gigabit Transit",
      subtitle: "Zero Artificial Throttling & Unlimited Traffic",
      badge: "Unmetered Bandwidth",
      highlight: false,
      spec: "Uncapped Bandwidth",
      description:
        "Say goodbye to restrictive Fair Usage Policies (FUP) and arbitrary evening data caps. Samitech Networks provides truly unlimited satellite throughput directly routed via SpaceX ground stations, sustaining rapid download speeds even during peak 8 PM evening hours.",
      bulletPoints: [
        "Zero data caps or midnight speed reductions",
        "Sustained 180 to 280+ Mbps real-world download throughput",
        "Ideal for massive git repository clones and 4K media creation",
      ],
      image: "/images/dish.png",
      imageAlt: "SpaceX Starlink dish hardware terminal kit",
      imageCaption: "Pure Gigabit Satellite Pipeline",
    },
    {
      id: "multifloor",
      icon: Layers,
      title: "Seamless Multi-Floor Coverage",
      subtitle: "Heavy Concrete Penetration Backbone",
      badge: "Hostel Mesh Architecture",
      highlight: true,
      spec: "Shielded Cat6 Backbone",
      description:
        "Dense concrete walls and multi-story hostel layouts block ordinary Wi-Fi modems. Our certified technicians install shielded Cat6 outdoor cables and deploy synchronized ceiling and corridor mesh nodes, blanketing every single room with full signal bars.",
      bulletPoints: [
        "Shielded Cat6 solid copper backbone eliminates interference",
        "Zero dead spots from ground floor reception to rooftop study lounges",
        "Tamper-proof corridor node enclosures for hostel peace of mind",
      ],
      image: "/images/multi-floor.png",
      imageAlt: "Multi-floor building mesh Wi-Fi network distribution layout",
      imageCaption: "Multi-Story Concrete Penetration",
    },
    {
      id: "support",
      icon: ShieldCheck,
      title: "24/7 Local Support & Maintenance",
      subtitle: "On-Site Technician Team Based in Buea",
      badge: "Cameroon Support Hotline",
      highlight: false,
      spec: "2-Hour Physical Dispatch",
      description:
        "You never have to wait days for foreign customer support or hunt for elusive replacement cables. Samitech maintains a local warehouse in Buea stocked with genuine Starlink dishes, proprietary cables, surge protectors, and a mobile technician team ready to deploy.",
      bulletPoints: [
        "Dedicated Cameroon WhatsApp technical support desk",
        "2-hour emergency technician dispatch to student hostels in Buea",
        "Local warehouse stock of spare dishes, cables, and Wi-Fi adapters",
      ],
      image: "/images/support.png",
      imageAlt: "Samitech certified technical engineer on site",
      imageCaption: "24/7 Field Dispatch & Spares Warehouse",
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

  // Autoplay functionality
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

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
      className="relative z-10 py-8 sm:py-10 lg:py-14 px-3.5 sm:px-6 lg:px-12 scroll-mt-24 bg-black text-white selection:bg-[#0088FF]/30"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
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

        {/* Feature Tabs Bar for Quick Navigation */}
        <div className="flex items-center justify-start md:justify-center overflow-x-auto scrollbar-none gap-2 mb-6 sm:mb-8 pb-2 -mx-3.5 px-3.5 md:mx-0 md:px-0">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            const isActive = idx === currentIndex;
            return (
              <button
                key={feat.id}
                onClick={() => goToSlide(idx)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-[11px] sm:text-xs font-semibold transition-all duration-200 shrink-0 cursor-pointer ${
                  isActive
                    ? "bg-[#0088FF] text-white shadow-lg shadow-[#0088FF]/30 border border-[#0088FF]"
                    : "bg-white/[0.06] text-gray-300 hover:text-white hover:bg-white/[0.12] border border-white/10"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-gray-400"}`} />
                <span className="whitespace-nowrap">{feat.title.split(" (")[0].split(" ")[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Carousel Card Container */}
        <div
          className="relative rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-9 bg-white/[0.08] hover:bg-white/[0.11] border border-white/20 backdrop-blur-xl shadow-2xl transition-all duration-300"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Active Feature Slide Grid: Text on one side, Image on the other side */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            
            {/* Left Side: Text Description & Technical Details */}
            <div className="lg:col-span-6 flex flex-col justify-between order-2 lg:order-1">
              <div>
                {/* Badge & Spec Row */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3 sm:mb-4">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[10px] sm:text-[11px] font-bold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full uppercase tracking-wider ${
                        current.highlight
                          ? "bg-[#0088FF] text-white shadow-md shadow-blue-500/25"
                          : "bg-red-500/20 text-red-400 border border-red-500/30"
                      }`}
                    >
                      {current.badge}
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/[0.06] border border-white/15 text-[10px] sm:text-xs font-semibold text-gray-300">
                    <span className="text-[#0088FF] font-bold">0{currentIndex + 1}</span>
                    <span className="text-gray-500">/</span>
                    <span>0{totalFeatures}</span>
                  </div>
                </div>

                {/* Subtitle & Title */}
                <div className="text-[11px] sm:text-xs font-bold text-[#0088FF] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-full bg-red-500/15 border border-red-500/30 flex items-center justify-center shrink-0">
                    <CurrentIcon className="w-3 h-3 text-red-400" />
                  </div>
                  <span>{current.subtitle}</span>
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-red-500 tracking-tight mb-3">
                  {current.title}
                </h3>

                {/* Main Descriptive Text */}
                <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed mb-4 sm:mb-5">
                  {current.description}
                </p>

                {/* Bullet Points List */}
                <div className="space-y-2 sm:space-y-2.5 mb-5 sm:mb-6">
                  {current.bulletPoints.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-200">
                      <div className="w-4 h-4 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-red-400" />
                      </div>
                      <span className="leading-snug">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Spec Strip */}
              <div className="pt-3.5 sm:pt-4 border-t border-white/15 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] sm:text-xs text-red-400 font-semibold uppercase tracking-wider">
                    Engineering Metric
                  </span>
                </div>

                <div className="inline-flex items-center gap-2">
                  <span className="text-xs sm:text-sm font-black text-[#0088FF]">
                    {current.spec}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side: Image Representation */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-black/50 border border-white/20 shadow-2xl flex items-center justify-center p-3 sm:p-5 group">
                
                {/* Subtle Ambient Radial Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0088FF]/15 via-transparent to-red-500/10 pointer-events-none" />
                
                {/* Image */}
                <div className="relative w-full h-full">
                  <Image
                    src={current.image}
                    alt={current.imageAlt}
                    fill
                    className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>

                {/* Overlaid Image Caption Pill */}
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-10 px-3 py-1 rounded-lg bg-black/80 border border-white/20 backdrop-blur-md text-[10px] sm:text-xs font-semibold text-gray-200 flex items-center gap-1.5 shadow-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0088FF] animate-pulse" />
                  <span>{current.imageCaption}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Carousel Navigation Footer: Arrows + Dots */}
          <div className="mt-6 sm:mt-8 pt-4 sm:pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Dots Indicator */}
            <div className="flex items-center gap-1.5 sm:gap-2 order-2 sm:order-1">
              {features.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    idx === currentIndex
                      ? "w-7 sm:w-8 h-2 sm:h-2.5 bg-[#0088FF] shadow-md shadow-[#0088FF]/40"
                      : "w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/25 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            {/* Previous & Next Control Buttons */}
            <div className="flex items-center gap-2.5 order-1 sm:order-2">
              <button
                onClick={prevSlide}
                aria-label="Previous feature"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/[0.08] hover:bg-white/[0.16] border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-md"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <button
                onClick={nextSlide}
                aria-label="Next feature"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0088FF] hover:bg-blue-600 border border-[#0088FF] text-white flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-lg shadow-[#0088FF]/30"
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
