"use client";

import React from "react";
import { Play, ArrowRight, ShieldCheck } from "lucide-react";

interface HeroSectionProps {
  onOpenCoverage: () => void;
  onOpenContact: () => void;
}

export default function HeroSection({ onOpenCoverage, onOpenContact }: HeroSectionProps) {
  return (
    <section className="relative min-h-[460px] sm:min-h-[540px] lg:min-h-[78vh] flex items-center justify-between overflow-hidden pt-16 sm:pt-20 lg:pt-24 pb-6 sm:pb-10 lg:pb-12 px-3.5 sm:px-6 lg:px-12 isolate">
      {/* Background Video - Single high-performance video, 100% full width, extending to the very top behind the navbar */}
      <div className="absolute inset-0 pointer-events-none -z-20 overflow-hidden bg-[#0B0F17]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center opacity-100"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        
        {/* Soft, minimal left-side gradient to ensure text readability without dimming the video behind the navbar */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F17]/80 via-[#0B0F17]/35 to-transparent" />
        {/* Seamless bottom fade into the next section */}
        <div className="absolute bottom-0 inset-x-0 h-16 sm:h-20 bg-gradient-to-t from-[#0B0F17] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Copy & Actions (Styled exactly like desktop, scaled proportionally) */}
        <div className="lg:col-span-8 flex flex-col items-start">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B0F17]/70 border border-white/20 mb-2.5 sm:mb-4 backdrop-blur-md shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#0088FF] animate-ping" />
            <span className="text-[11px] sm:text-xs font-semibold text-gray-200">
              #1 High-Speed Starlink Provider in Cameroon
            </span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.14] mb-2.5 sm:mb-4 drop-shadow-[0_3px_16px_rgba(0,0,0,0.85)]">
            The Best Place to <br />
            Experience{" "}
            <span className="text-[#0088FF] inline-block drop-shadow-[0_0_24px_rgba(0,136,255,0.45)]">
              Starlink
            </span>{" "}
            <br />
            <span className="text-[#8b0000] inline-block drop-shadow-[0_0_24px_rgba(139,0,0,0.5)]">
              Internet
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-gray-100 font-normal leading-relaxed max-w-md mb-4 sm:mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            Superfast, reliable satellite internet for your hostel, room, or
            apartment. Stay connected with zero buffering and ultra-low latency.
          </p>

          {/* CTAs - Side-by-side horizontal row like desktop */}
          <div className="flex flex-row items-center gap-2.5 sm:gap-3.5 mb-4 sm:mb-6">
            <button
              onClick={onOpenContact}
              className="px-5 sm:px-6 py-2 sm:py-2.5 min-h-[38px] sm:min-h-[42px] rounded-full text-xs sm:text-sm font-bold bg-white text-[#0B0F17] hover:bg-gray-100 hover:shadow-xl hover:shadow-white/10 transition-all duration-200 active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer shadow-lg"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={onOpenCoverage}
              className="px-3.5 sm:px-5 py-2 sm:py-2.5 min-h-[38px] sm:min-h-[42px] rounded-full text-xs sm:text-sm font-medium bg-[#0B0F17]/70 hover:bg-[#141C2B] text-gray-100 hover:text-white border border-white/20 backdrop-blur-md transition-all duration-200 flex items-center justify-center gap-1.5 active:scale-95 shadow-lg cursor-pointer"
            >
              <span>Check Coverage</span>
              <div className="w-3.5 h-3.5 rounded-full bg-white/20 flex items-center justify-center">
                <Play className="w-2 h-2 fill-current ml-0.5" />
              </div>
            </button>
          </div>

          {/* Bottom-Left Metric Card (Avatar stack + 99.9% Uptime) */}
          <div className="p-2 sm:p-2.5 rounded-xl bg-[#0B0F17]/75 border border-white/20 backdrop-blur-xl shadow-2xl flex items-center gap-2.5 sm:gap-3.5 max-w-md w-auto">
            {/* Avatar Stack */}
            <div className="flex -space-x-2 sm:-space-x-2.5 overflow-hidden">
              <img
                className="inline-block h-7 w-7 sm:h-9 sm:w-9 rounded-full ring-2 ring-[#0B0F17] object-cover"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                alt="Student resident"
              />
              <img
                className="inline-block h-7 w-7 sm:h-9 sm:w-9 rounded-full ring-2 ring-[#0B0F17] object-cover"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                alt="Hostel user"
              />
              <img
                className="inline-block h-7 w-7 sm:h-9 sm:w-9 rounded-full ring-2 ring-[#0B0F17] object-cover"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80"
                alt="Apartment tenant"
              />
              <img
                className="inline-block h-7 w-7 sm:h-9 sm:w-9 rounded-full ring-2 ring-[#0B0F17] object-cover"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
                alt="Resident"
              />
            </div>

            <div className="h-6 sm:h-8 w-[1px] bg-white/20" />

            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                <span>100%</span>
                <span className="text-gray-300 font-normal">or 24/7</span>
                <span className="text-[#0088FF]">→ 99.9%</span>
              </div>
              <div className="text-[10px] sm:text-[11px] text-gray-300 font-medium tracking-wide">
                Uptime &amp; High-Speed Mesh
              </div>
            </div>
          </div>

        </div>

        {/* Right side is intentionally left open so the background video shines through completely */}
        <div className="lg:col-span-4 hidden lg:block" />

      </div>

      {/* Bottom Right Floating Badge */}
      <div className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 lg:right-12 z-20">
        <div className="inline-flex items-center gap-1.5 sm:gap-2.5 px-2.5 py-1.5 sm:px-4 sm:py-2.5 rounded-full bg-[#0B0F17]/75 border border-white/25 backdrop-blur-xl shadow-2xl text-[10px] sm:text-xs font-semibold text-gray-100 hover:border-white/40 transition-all">
          <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0088FF]" />
          <span>Trusted by over 12K+ students &amp; tenants</span>
        </div>
      </div>
    </section>
  );
}
