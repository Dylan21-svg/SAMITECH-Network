"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Sparkles,
  Radio,
  Satellite,
  Wifi,
  Globe,
  Building2,
  BatteryCharging,
  Headphones,
} from "lucide-react";

interface MetricItem {
  label: string;
  value: string;
}

interface TechCardData {
  id: string;
  title: string;
  subtitle: string;
  categoryIcon: React.ReactNode;
  description: string;
  metrics: [MetricItem, MetricItem, MetricItem];
  footerLabel: string;
  footerValue: string;
  image: string;
  statusBadge: string;
}

const techCards: TechCardData[] = [
  {
    id: "card-1",
    title: "Weatherproof Phased-Array Dish",
    subtitle: "Solid-State Radar • Zero Moving Parts",
    categoryIcon: <Radio className="w-3.5 h-3.5 text-blue-500" />,
    description:
      "Microsecond electronic beam-forming antenna with zero mechanical gears. Engineered to automatically track low-orbit satellites and maintain signal through dense tropical Mount Fako rain squalls.",
    metrics: [
      { label: "LATENCY", value: "< 25ms" },
      { label: "WEATHER", value: "IP54 Rugged" },
      { label: "BEAM FOV", value: "100° Matrix" },
    ],
    footerLabel: "HARDWARE GRADE",
    footerValue: "Starlink High-Performance",
    image: "/images/antenna.png",
    statusBadge: "ACTIVE BEAM",
  },
  {
    id: "card-2",
    title: "Low Earth Orbit Constellation",
    subtitle: "SpaceX Teleport • ~550km Orbit Altitude",
    categoryIcon: <Satellite className="w-3.5 h-3.5 text-cyan-500" />,
    description:
      "6,000+ low-orbit satellites delivering light-speed transit directly to dedicated ground teleports, completely bypassing congested undersea fiber bottlenecks and cuts.",
    metrics: [
      { label: "FLEET DENSITY", value: "6,000+ LEO" },
      { label: "ALTITUDE", value: "~550 km" },
      { label: "PEAK SPEED", value: "280+ Mbps" },
    ],
    footerLabel: "CONSTELLATION",
    footerValue: "Ku & Ka-Band Teleport",
    image: "/images/leo.png",
    statusBadge: "550KM ORBIT",
  },
  {
    id: "card-3",
    title: "Wi-Fi 6 Multi-Room Mesh",
    subtitle: "Tri-Band OFDMA • 4x4 MU-MIMO",
    categoryIcon: <Wifi className="w-3.5 h-3.5 text-emerald-500" />,
    description:
      "Next-generation intelligent routing engine capable of handling 120+ concurrent student smartphones, laptops, and smart TVs simultaneously across rooms with zero packet loss or lag.",
    metrics: [
      { label: "CAPACITY", value: "120+ Clients" },
      { label: "STANDARD", value: "Wi-Fi 6 (AX)" },
      { label: "MAX BANDWIDTH", value: "1.8 Gbps" },
    ],
    footerLabel: "ROUTING POWER",
    footerValue: "Dynamic QoS Shaper",
    image: "/images/wifi-6.png",
    statusBadge: "TRI-BAND AX",
  },
  {
    id: "card-4",
    title: "Dedicated Gigabit Backbone",
    subtitle: "Direct Ground Gateway • 100% Uncapped",
    categoryIcon: <Globe className="w-3.5 h-3.5 text-sky-500" />,
    description:
      "Direct teleport gateway routing with no fair-use caps or nighttime throttling. Provides sustained 280+ Mbps burst rates for uncompressed 4K streaming, cloud backups, and online collaboration.",
    metrics: [
      { label: "BURST RATE", value: "280+ Mbps" },
      { label: "DATA QUOTA", value: "100% Uncapped" },
      { label: "NETWORK SLA", value: "99.9% Uptime" },
    ],
    footerLabel: "TRANSIT LINK",
    footerValue: "SpaceX Dedicated Gateway",
    image: "/images/tp-link.png",
    statusBadge: "ZERO THROTTLING",
  },
  {
    id: "card-5",
    title: "Multi-Floor Shielded Infrastructure",
    subtitle: "Shielded Cat6 Copper • Synchronized Nodes",
    categoryIcon: <Building2 className="w-3.5 h-3.5 text-amber-500" />,
    description:
      "Industrial-grade shielded Cat6 solid copper backbone and synchronized repeaters engineered specifically to penetrate reinforced concrete floors and walls in multi-story student hostels.",
    metrics: [
      { label: "PENETRATION", value: "Multi-Story" },
      { label: "CABLING", value: "Shielded Cat6" },
      { label: "COVERAGE", value: "Zero Dead Zones" },
    ],
    footerLabel: "BUILDING GRADE",
    footerValue: "Reinforced Concrete Hostels",
    image: "/images/multi-floor.png",
    statusBadge: "HOSTEL CERTIFIED",
  },
  {
    id: "card-6",
    title: "Micro-UPS Power Resilience",
    subtitle: "Instant Transfer • 4000V Surge Guard",
    categoryIcon: <BatteryCharging className="w-3.5 h-3.5 text-indigo-500" />,
    description:
      "Intelligent lithium-ion battery backup providing instant, uninterruptible power during local grid outages or voltage spikes in Buea and Douala, keeping your internet alive 24/7.",
    metrics: [
      { label: "FAILOVER", value: "0ms Instant" },
      { label: "BACKUP TIME", value: "4 – 6 Hours" },
      { label: "SURGE GUARD", value: "4000V Shield" },
    ],
    footerLabel: "POWER RESILIENCE",
    footerValue: "Online Double-Conversion",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80",
    statusBadge: "GRID FAILOVER",
  },
  {
    id: "card-7",
    title: "24/7 Local Support & Maintenance",
    subtitle: "On-Site Dispatch • Instant WhatsApp Help",
    categoryIcon: <Headphones className="w-3.5 h-3.5 text-rose-500" />,
    description:
      "Direct on-site engineering assistance across Cameroon with rapid technician dispatch, proactive hardware maintenance, and instant WhatsApp support for zero downtime.",
    metrics: [
      { label: "DISPATCH", value: "Rapid On-Site" },
      { label: "AVAILABILITY", value: "24/7 Live SLA" },
      { label: "COVERAGE", value: "Buea, Limbe, & Douala" },
    ],
    footerLabel: "FIELD SUPPORT",
    footerValue: "Samitech Technical Team",
    image: "/images/support.png",
    statusBadge: "24/7 CAMEROON",
  },
];

export default function TechFeatures() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const total = techCards.length;

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Auto-advance every 8 seconds, paused on hover
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(handleNext, 8500);
    return () => clearInterval(interval);
  }, [isHovered, handleNext]);

  // Calculate circular offset relative to active card
  const getCardOffset = (index: number) => {
    let diff = index - activeIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  return (
    <section
      id="features"
      className="relative z-10 py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 scroll-mt-20 bg-black overflow-hidden select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Ambience: Subtle world map/constellation grid texture */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg
          className="w-full h-full object-cover"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
        >
          <defs>
            <pattern
              id="geo-grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="30" cy="30" r="0.8" fill="#38BDF8" opacity="0.6" />
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="rgba(255, 255, 255, 0.05)"
                strokeWidth="0.8"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#geo-grid)" />
        </svg>
      </div>

      {/* Atmospheric Radial Spotlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[580px] bg-sky-600/[0.08] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-blue-500/[0.06] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/25 mb-3.5 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span className="text-[11px] sm:text-xs font-bold text-sky-300 uppercase tracking-widest">
              HARDWARE & ARCHITECTURE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight max-w-3xl mb-3 sm:mb-4">
            Next-Generation Satellite & Routing Tech
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
            Engineered by SpaceX, localized and deployed flawlessly across Cameroon
            by Samitech certified field engineers.
          </p>
        </div>

        {/* 3D Arc / Coverflow Carousel Stage */}
        <div
          ref={containerRef}
          className="relative w-full h-[580px] sm:h-[620px] flex items-center justify-center overflow-visible"
        >
          {techCards.map((card, index) => {
            const offset = getCardOffset(index);
            const isCenter = offset === 0;
            const isVisible = Math.abs(offset) <= 2;

            // Positioning & scale variables based on offset
            let xOffset = 0;
            let scale = 1;
            let zIndex = 50;
            let scrimOpacity = 0;
            let opacity = 1;

            if (offset === 0) {
              xOffset = 0;
              scale = 1;
              zIndex = 50;
              scrimOpacity = 0;
            } else if (Math.abs(offset) === 1) {
              xOffset = offset * 230; // ~38% peeking out
              scale = 0.93;
              zIndex = 40;
              scrimOpacity = 0.28;
            } else if (Math.abs(offset) === 2) {
              xOffset = offset * 395; // outer flanking
              scale = 0.86;
              zIndex = 30;
              scrimOpacity = 0.52;
            } else {
              xOffset = Math.sign(offset) * 520;
              scale = 0.75;
              zIndex = 10;
              opacity = 0;
              scrimOpacity = 0.85;
            }

            return (
              <motion.div
                key={card.id}
                onClick={() => {
                  if (!isCenter) setActiveIndex(index);
                }}
                initial={false}
                animate={{
                  x: xOffset,
                  scale: scale,
                  zIndex: zIndex,
                  opacity: opacity,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 28,
                }}
                drag={isCenter ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, info) => {
                  if (info.offset.x > 50) handlePrev();
                  else if (info.offset.x < -50) handleNext();
                }}
                className={`absolute w-[330px] sm:w-[365px] md:w-[380px] h-[530px] sm:h-[560px] rounded-[32px] bg-white cursor-pointer select-none overflow-hidden transition-shadow duration-300 ${
                  isCenter
                    ? "shadow-[0_28px_60px_-15px_rgba(0,0,0,0.7)] cursor-default ring-1 ring-white/20"
                    : "shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] hover:brightness-105"
                } ${!isVisible ? "pointer-events-none" : ""}`}
                style={{
                  transformOrigin: "center center",
                }}
              >
                {/* ── A. TOP VISUAL PANEL (~48%) ── */}
                <div className="relative h-[230px] sm:h-[245px] w-full overflow-hidden rounded-t-[32px] rounded-b-[28px] sm:rounded-b-[32px] bg-slate-900 group shadow-sm">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 340px, 380px"
                    className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
                    priority={isCenter}
                  />

                  {/* Gradient lighting fade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/25 pointer-events-none" />

                  {/* Status Tag (Top Left) */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
                    <span className="text-[10px] font-extrabold text-white tracking-wider uppercase">
                      {card.statusBadge}
                    </span>
                  </div>

                  {/* Icon Emblem (Top Right) */}
                  <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center shadow-md">
                    {card.categoryIcon}
                  </div>
                </div>

                {/* ── B. CONTENT & METADATA (~35%) ── */}
                <div className="px-5 sm:px-6 pt-4 sm:pt-5 pb-5 sm:pb-6 flex flex-col justify-between h-[calc(100%-230px)] sm:h-[calc(100%-245px)] bg-white text-slate-900">
                  <div className="flex-1 flex flex-col justify-between">
                    {/* Title & Subtitle */}
                    <div>
                      <h3 className="text-[17px] sm:text-[19px] font-extrabold text-slate-950 tracking-tight leading-snug line-clamp-1">
                        {card.title}
                      </h3>
                      <div className="flex items-center gap-1.5 mt-1 text-slate-500">
                        <span className="text-[11px] sm:text-xs font-medium truncate">
                          {card.subtitle}
                        </span>
                      </div>
                    </div>

                    {/* Description Block */}
                    <div className="mt-2.5">
                      <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mb-1">
                        Description
                      </div>
                      <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed line-clamp-3 font-normal">
                        {card.description}
                      </p>
                    </div>

                    {/* Signature 3-Column Metric Bar (Cyan values) */}
                    <div className="grid grid-cols-3 gap-1.5 sm:gap-2 py-2 px-3 bg-slate-50 rounded-2xl border border-slate-100 mt-2">
                      {card.metrics.map((metric, idx) => (
                        <div key={idx} className="flex flex-col">
                          <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider truncate">
                            {metric.label}
                          </span>
                          <span className="text-xs sm:text-sm font-black text-[#00A8B5] tracking-tight mt-0.5 truncate">
                            {metric.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ── C. BOTTOM FOOTER / ACTION ROW (~17%) ── */}
                  <div className="flex items-center justify-between pt-3 mt-2 border-t border-slate-100">
                    <div className="flex flex-col">
                      <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">
                        {card.footerLabel}
                      </span>
                      <span className="text-xs sm:text-[13px] font-extrabold text-slate-900 tracking-tight truncate max-w-[210px]">
                        {card.footerValue}
                      </span>
                    </div>

                    <a
                      href="#coverage-map"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      aria-label={`Explore ${card.title}`}
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#111827] hover:bg-black text-white flex items-center justify-center shadow-md hover:scale-110 active:scale-95 transition-all duration-300 group/btn"
                    >
                      <ArrowUpRight className="w-5 h-5 text-white transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                  </div>
                </div>

                {/* Scrim Overlay for physical lighting falloff */}
                <div
                  className="absolute inset-0 rounded-[32px] pointer-events-none transition-opacity duration-300"
                  style={{
                    backgroundColor: `rgba(0, 0, 0, ${scrimOpacity})`,
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Carousel Navigation Arrows */}
        <div className="flex items-center justify-center gap-3 mt-8 sm:mt-10">
          <button
            onClick={handlePrev}
            aria-label="Previous Feature"
            className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white flex items-center justify-center transition-all active:scale-90 shadow-md backdrop-blur-md cursor-pointer hover:border-white/30"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next Feature"
            className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white flex items-center justify-center transition-all active:scale-90 shadow-md backdrop-blur-md cursor-pointer hover:border-white/30"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
