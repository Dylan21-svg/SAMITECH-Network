"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Zap, Wifi, Shield, Sun, CloudRain } from "lucide-react";

/* ─── Data ─────────────────────────────────────────────────────────────── */

export interface FeatureSlide {
  id: string;
  category: string;
  title: string;
  location: string;
  description: string;
  image: string;
  stats: { label: string; value: string }[];
  badge: string;
  ctaHref: string;
}

const mockSlides: FeatureSlide[] = [
  {
    id: "1",
    category: "Space-Age Architecture",
    title: "Phased-Array Beam Steering",
    location: "SAMITECH · Low Earth Orbit",
    description:
      "Flat electronic array tracks multiple satellites simultaneously without any moving parts, delivering ultra-stable connectivity.",
    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80",
    stats: [
      { label: "Latency", value: "<1 ms" },
      { label: "Throughput", value: "250 Mbps" },
      { label: "Uptime", value: "99.9%" },
    ],
    badge: "Active",
    ctaHref: "/features/phased-array",
  },
  {
    id: "2",
    category: "Connectivity",
    title: "Dynamic Mesh Wi-Fi 6",
    location: "SAMITECH · Indoor Network",
    description:
      "High-density mesh nodes self-optimise routing in real time for seamless, blanket indoor coverage across every floor.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    stats: [
      { label: "Nodes", value: "12+" },
      { label: "Bands", value: "2.4 / 5 GHz" },
      { label: "Range", value: "300 m²" },
    ],
    badge: "Connected",
    ctaHref: "/features/mesh-wifi",
  },
  {
    id: "3",
    category: "Power",
    title: "Solar-Assisted Power System",
    location: "SAMITECH · Off-Grid Sites",
    description:
      "Hybrid solar-battery array reduces grid dependency, cutting operating costs while maintaining uninterrupted uptime.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80",
    stats: [
      { label: "Battery", value: "24 kWh" },
      { label: "Solar", value: "5 kW" },
      { label: "Runtime", value: "72 h" },
    ],
    badge: "Eco",
    ctaHref: "/features/solar-power",
  },
  {
    id: "4",
    category: "Security",
    title: "End-to-End Encryption",
    location: "SAMITECH · Secure Gateway",
    description:
      "Quantum-ready TLS 1.3 with AES-256-GCM ensures every byte of your data remains confidential across the entire link.",
    image:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800&q=80",
    stats: [
      { label: "TLS", value: "1.3" },
      { label: "Cipher", value: "AES-256" },
      { label: "Cert", value: "Quantum" },
    ],
    badge: "Secure",
    ctaHref: "/features/encryption",
  },
  {
    id: "5",
    category: "Resilience",
    title: "Adaptive Rain-Fade Mitigation",
    location: "SAMITECH · Weather Resilience",
    description:
      "Beam power auto-scales during heavy rainfall to maintain stable throughput, even in the worst tropical downpours.",
    image:
      "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?auto=format&fit=crop&w=800&q=80",
    stats: [
      { label: "Gain", value: "+6 dB" },
      { label: "Rain Rate", value: "200 mm/h" },
      { label: "Recovery", value: "<2 s" },
    ],
    badge: "Resilient",
    ctaHref: "/features/rain-fade",
  },
];

/* ─── Per-card 3-D transform config ─────────────────────────────────────── */

interface SlotConfig {
  scale: number;
  translateX: string;
  translateZ: number;
  rotateY: number;
  opacity: number;
  zIndex: number;
  brightness: number;
}

function getSlotConfig(offset: number): SlotConfig {
  switch (offset) {
    case 0: // Active – centre, large
      return { scale: 1, translateX: "0%", translateZ: 0, rotateY: 0, opacity: 1, zIndex: 30, brightness: 1 };
    case 1: // Right neighbour
      return { scale: 0.8, translateX: "70%", translateZ: -200, rotateY: -28, opacity: 0.85, zIndex: 20, brightness: 0.7 };
    case -1: // Left neighbour
      return { scale: 0.8, translateX: "-70%", translateZ: -200, rotateY: 28, opacity: 0.85, zIndex: 20, brightness: 0.7 };
    case 2: // Far right
      return { scale: 0.65, translateX: "130%", translateZ: -400, rotateY: -40, opacity: 0.55, zIndex: 10, brightness: 0.45 };
    case -2: // Far left
      return { scale: 0.65, translateX: "-130%", translateZ: -400, rotateY: 40, opacity: 0.55, zIndex: 10, brightness: 0.45 };
    default: // Hidden
      return { scale: 0.5, translateX: offset > 0 ? "200%" : "-200%", translateZ: -600, rotateY: offset > 0 ? -55 : 55, opacity: 0, zIndex: 0, brightness: 0.2 };
  }
}

/* ─── Component ──────────────────────────────────────────────────────────── */

export default function PairedCoverflowCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const total = mockSlides.length;

  const navigate = useCallback(
    (delta: number) => setActiveIndex((i) => (i + delta + total) % total),
    [total]
  );

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") navigate(-1);
      if (e.key === "ArrowRight") navigate(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [navigate]);

  // Auto-advance
  useEffect(() => {
    const start = () => {
      autoPlayRef.current = setInterval(() => setActiveIndex((i) => (i + 1) % total), 6000);
    };
    const stop = () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
    start();
    const el = containerRef.current;
    el?.addEventListener("mouseenter", stop);
    el?.addEventListener("mouseleave", start);
    return () => {
      stop();
      el?.removeEventListener("mouseenter", stop);
      el?.removeEventListener("mouseleave", start);
    };
  }, [total]);

  const active = mockSlides[activeIndex];

  return (
    <section
      className="relative py-16 overflow-hidden"
      style={{ background: "#0B0F17" }}
      aria-label="Tech features carousel"
    >
      {/* ── Ambient blurred backdrop ── */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={active.image}
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            backgroundImage: `url(${active.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(80px) saturate(1.4)",
            transform: "scale(1.3)",
          }}
        />
      </AnimatePresence>

      {/* Subtle map/grain texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4" ref={containerRef}>
        {/* ── Section header ── */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-medium mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
            Next-Generation Connectivity
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Technology That Sets Us Apart
          </h2>
          <p className="mt-2 text-white/50 text-sm max-w-lg mx-auto">
            Discover the engineering innovations behind every SAMITECH connection.
          </p>
        </div>

        {/* ── 3-D Coverflow Stage ── */}
        <div
          className="relative mx-auto"
          style={{
            height: "clamp(380px, 52vw, 520px)",
            perspective: "1400px",
            perspectiveOrigin: "50% 45%",
          }}
        >
          {mockSlides.map((slide, idx) => {
            // Compute shortest offset accounting for wrap-around
            let offset = idx - activeIndex;
            if (offset > total / 2) offset -= total;
            if (offset < -total / 2) offset += total;

            const cfg = getSlotConfig(offset);
            const isActive = offset === 0;

            return (
              <motion.div
                key={slide.id}
                className="absolute"
                style={{
                  top: 0,
                  left: "50%",
                  width: "clamp(200px, 22vw, 280px)",
                  marginLeft: "clamp(-100px, -11vw, -140px)",
                  height: "100%",
                  transformStyle: "preserve-3d",
                  zIndex: cfg.zIndex,
                  cursor: isActive ? "default" : "pointer",
                }}
                animate={{
                  scale: cfg.scale,
                  x: cfg.translateX,
                  z: cfg.translateZ,
                  rotateY: cfg.rotateY,
                  opacity: cfg.opacity,
                }}
                transition={{ type: "spring", stiffness: 280, damping: 32 }}
                onClick={() => { if (!isActive) setActiveIndex(idx); }}
              >
                {/* Card shell */}
                <div
                  className="relative w-full h-full rounded-[22px] overflow-hidden flex flex-col border border-white/10"
                  style={{
                    background: "rgba(20, 28, 43, 0.88)",
                    backdropFilter: "blur(18px)",
                    boxShadow: isActive
                      ? "0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.12)"
                      : "0 12px 40px rgba(0,0,0,0.5)",
                    filter: `brightness(${cfg.brightness})`,
                  }}
                >
                  {/* Image – top 55% */}
                  <div className="relative flex-shrink-0" style={{ height: "55%" }}>
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                      draggable={false}
                    />
                    {/* Gradient fade into card body */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-16"
                      style={{
                        background:
                          "linear-gradient(to bottom, transparent, rgba(20,28,43,0.95))",
                      }}
                    />
                    {/* Badge */}
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide bg-lime-400 text-black">
                      {slide.badge}
                    </span>
                  </div>

                  {/* Info – bottom 45% */}
                  <div className="flex flex-col flex-1 px-4 pt-1 pb-4 justify-between">
                    <div>
                      {/* Title */}
                      <h3 className="text-white font-black text-sm leading-tight mb-0.5 line-clamp-2">
                        {slide.title}
                      </h3>
                      {/* Location */}
                      <p className="flex items-center gap-1 text-[10px] text-white/50 mb-1.5">
                        <svg className="w-2.5 h-2.5 fill-[#0088FF] flex-shrink-0" viewBox="0 0 24 24">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
                        </svg>
                        <span className="truncate">{slide.location}</span>
                      </p>
                      {/* Description – only visible on active */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.p
                            className="text-[10px] text-white/60 leading-snug mb-2 line-clamp-3"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                          >
                            {slide.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Stats row */}
                    <div>
                      <div className="grid grid-cols-3 gap-1 mb-2.5 pt-1.5 border-t border-white/10">
                        {slide.stats.map((stat) => (
                          <div key={stat.label} className="flex flex-col items-center">
                            <span className="text-[9px] text-white/40 uppercase tracking-wide">{stat.label}</span>
                            <span className="text-[11px] font-bold text-white">{stat.value}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] text-white/40 uppercase tracking-wide">Category</span>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] text-white/70 font-medium">{slide.category}</span>
                          <a
                            href={slide.ctaHref}
                            onClick={(e) => e.stopPropagation()}
                            className="w-7 h-7 flex items-center justify-center rounded-full text-white transition-all hover:scale-110"
                            style={{ background: "#0088FF", boxShadow: "0 0 12px rgba(0,136,255,0.5)" }}
                            aria-label={`Learn more about ${slide.title}`}
                          >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Chevron controls ── */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/15 hover:scale-105 transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Pagination dots */}
          <div className="flex items-center gap-2">
            {mockSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: i === activeIndex ? "28px" : "8px",
                  height: "8px",
                  background: i === activeIndex ? "#A3E635" : "rgba(255,255,255,0.2)",
                }}
              />
            ))}
          </div>

          <button
            onClick={() => navigate(1)}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/15 hover:scale-105 transition-all"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* ── Explore all link ── */}
        <div className="text-center mt-6">
          <a
            href="/features"
            className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-medium text-white transition-all hover:scale-105"
            style={{ background: "#0088FF", boxShadow: "0 0 24px rgba(0,136,255,0.35)" }}
          >
            Explore All Features
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
