"use client";

import React from "react";
import { Play, ArrowRight, ShieldCheck } from "lucide-react";

interface HeroSectionProps {
  onOpenCoverage: () => void;
  onOpenContact: () => void;
}

export default function HeroSection({ onOpenCoverage, onOpenContact }: HeroSectionProps) {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-between overflow-hidden pt-8 pb-20 lg:py-24 px-4 sm:px-6 lg:px-12 isolate">
      {/* Background Video - 100% Bright, Vivid & Fully Visible */}
      <div className="absolute inset-0 pointer-events-none -z-20 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center opacity-100"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        
        {/* Soft, minimal left-side gradient to ensure text readability without dimming the video */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F17]/75 via-[#0B0F17]/20 to-transparent" />
        {/* Seamless bottom fade into the next section */}
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#0B0F17] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Copy & Actions */}
        <div className="lg:col-span-8 flex flex-col items-start">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B0F17]/60 border border-white/20 mb-6 backdrop-blur-md shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#0088FF] animate-ping" />
            <span className="text-xs font-semibold text-gray-200">
              #1 High-Speed Starlink Provider in Cameroon
            </span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.12] mb-6 drop-shadow-[0_3px_16px_rgba(0,0,0,0.85)]">
            The Best Place to <br />
            Experience{" "}
            <span className="text-[#0088FF] inline-block drop-shadow-[0_0_24px_rgba(0,136,255,0.45)]">
              Starlink
            </span>{" "}
            <br />
            <span className="text-[#E63946] inline-block drop-shadow-[0_0_24px_rgba(230,57,70,0.45)]">
              Internet
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-gray-100 font-normal leading-relaxed max-w-xl mb-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            Superfast, reliable satellite internet for your hostel, room, or
            apartment. Stay connected with zero buffering and ultra-low latency.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-10 sm:mb-12">
            <button
              onClick={onOpenContact}
              className="px-7 py-3.5 rounded-full text-sm font-bold bg-white text-[#0B0F17] hover:bg-gray-100 hover:shadow-xl hover:shadow-white/10 transition-all duration-200 active:scale-95 flex items-center gap-2 cursor-pointer shadow-lg"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenCoverage}
              className="px-6 py-3.5 rounded-full text-sm font-medium bg-[#0B0F17]/70 hover:bg-[#141C2B] text-gray-100 hover:text-white border border-white/20 backdrop-blur-md transition-all duration-200 flex items-center gap-2.5 active:scale-95 shadow-lg cursor-pointer"
            >
              Check Coverage
              <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center">
                <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
              </div>
            </button>
          </div>

          {/* Bottom-Left Metric Card (Avatar stack + 99.9% Uptime) */}
          <div className="p-4 rounded-2xl bg-[#0B0F17]/75 border border-white/20 backdrop-blur-xl shadow-2xl flex items-center gap-4 max-w-md w-full sm:w-auto">
            {/* Avatar Stack */}
            <div className="flex -space-x-2.5 overflow-hidden">
              <img
                className="inline-block h-9 w-9 rounded-full ring-2 ring-[#0B0F17] object-cover"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                alt="Student resident"
              />
              <img
                className="inline-block h-9 w-9 rounded-full ring-2 ring-[#0B0F17] object-cover"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                alt="Hostel user"
              />
              <img
                className="inline-block h-9 w-9 rounded-full ring-2 ring-[#0B0F17] object-cover"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80"
                alt="Apartment tenant"
              />
              <img
                className="inline-block h-9 w-9 rounded-full ring-2 ring-[#0B0F17] object-cover"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
                alt="Resident"
              />
            </div>

            <div className="h-8 w-[1px] bg-white/20" />

            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                <span>100%</span>
                <span className="text-gray-300 font-normal">or 24/7</span>
                <span className="text-[#0088FF]">→ 99.9%</span>
              </div>
              <div className="text-[11px] text-gray-300 font-medium tracking-wide">
                Uptime &amp; High-Speed Mesh
              </div>
            </div>
          </div>

        </div>

        {/* Right side is intentionally left open so the background video shines through completely */}
        <div className="lg:col-span-4 hidden lg:block" />

      </div>

      {/* Bottom Right Floating Badge: "Trusted by over 12K+ students & tenants" */}
      <div className="absolute bottom-6 right-4 sm:right-6 lg:right-12 z-20">
        <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#0B0F17]/75 border border-white/25 backdrop-blur-xl shadow-2xl text-xs font-semibold text-gray-100 hover:border-white/40 transition-all">
          <ShieldCheck className="w-4 h-4 text-[#0088FF]" />
          <span>Trusted by over 12K+ students &amp; tenants</span>
        </div>
      </div>
    </section>
  );
}
