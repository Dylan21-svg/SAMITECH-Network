"use client";

import React from "react";
import { Play, ArrowRight, ShieldCheck, Zap, Radio, CheckCircle2 } from "lucide-react";

interface HeroSectionProps {
  onOpenCoverage: () => void;
  onOpenContact: () => void;
}

export default function HeroSection({ onOpenCoverage, onOpenContact }: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-8 pb-16 lg:py-20 px-4 sm:px-6 lg:px-12 isolate">
      {/* Background Video - Bright & Highly Visible */}
      <div className="absolute inset-0 pointer-events-none -z-20 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center opacity-90"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        {/* Soft, targeted gradient: ensures left text contrast while leaving the rest open and bright */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F17]/80 via-[#0B0F17]/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-transparent to-[#0B0F17]/25" />
      </div>

      {/* Subtle Ambient Starfield & Glow */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-[#0088FF]/15 blur-[120px]" />
        <div className="absolute bottom-1/3 left-1/4 w-[350px] h-[350px] rounded-full bg-[#E63946]/10 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Copy & Actions */}
        <div className="lg:col-span-7 flex flex-col items-start">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B0F17]/60 border border-white/20 mb-6 backdrop-blur-md shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#0088FF] animate-ping" />
            <span className="text-xs font-semibold text-gray-200">
              #1 High-Speed Starlink Provider in Cameroon
            </span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
            The Best Place to <br />
            Experience{" "}
            <span className="text-[#0088FF] inline-block drop-shadow-[0_0_24px_rgba(0,136,255,0.4)]">
              Starlink
            </span>{" "}
            <br />
            <span className="text-[#E63946] inline-block drop-shadow-[0_0_24px_rgba(230,57,70,0.4)]">
              Internet
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-gray-200 font-normal leading-relaxed max-w-xl mb-8 drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)]">
            Superfast, reliable satellite internet for your hostel, room, or
            apartment. Stay connected with zero buffering and ultra-low latency.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-12 sm:mb-16">
            <button
              onClick={onOpenContact}
              className="px-7 py-3.5 rounded-full text-sm font-bold bg-white text-[#0B0F17] hover:bg-gray-100 hover:shadow-xl hover:shadow-white/10 transition-all duration-200 active:scale-95 flex items-center gap-2 cursor-pointer"
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

          {/* Floating Metric Card (Avatar stack + 99.9% Uptime) */}
          <div className="p-4 rounded-2xl bg-[#0B0F17]/70 border border-white/20 backdrop-blur-xl shadow-2xl flex items-center gap-4 max-w-md w-full sm:w-auto">
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

        {/* Right Column: Floating Translucent HUD telemetry & Testimonials (No opaque image) */}
        <div className="lg:col-span-5 relative flex flex-col items-end justify-center min-h-[420px] space-y-4">
          
          {/* Orbital Elliptical Rings SVG (Backdrop graphic) */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center -z-10">
            <svg
              className="w-full h-full max-w-[540px] max-h-[540px] overflow-visible opacity-70"
              viewBox="0 0 600 600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="310"
                cy="300"
                rx="270"
                ry="130"
                transform="rotate(-28 310 300)"
                stroke="#0088FF"
                strokeWidth="1.8"
                strokeDasharray="8 6"
                className="opacity-75"
              />
              <ellipse
                cx="300"
                cy="290"
                rx="250"
                ry="140"
                transform="rotate(22 300 290)"
                stroke="#E63946"
                strokeWidth="1.8"
                strokeDasharray="12 8"
                className="opacity-60"
              />
              <circle cx="160" cy="200" r="3.5" fill="#0088FF">
                <animate
                  attributeName="opacity"
                  values="0.3;1;0.3"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="470" cy="380" r="3" fill="#E63946" />
            </svg>
          </div>

          {/* Floating Telemetry Glass Card: Live Starlink Link */}
          <div className="w-full max-w-sm p-4 rounded-2xl bg-[#0B0F17]/65 border border-white/20 backdrop-blur-xl shadow-2xl transition-transform hover:scale-[1.02] duration-300">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Radio className="w-4 h-4 text-[#0088FF] animate-pulse" />
                <span className="text-xs font-bold text-white tracking-wide">
                  Live Starlink Constellation Link
                </span>
              </div>
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                <CheckCircle2 className="w-3 h-3" /> Active
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-3 pt-2 border-t border-white/10">
              <div>
                <div className="text-[11px] text-gray-300">Download Speed</div>
                <div className="text-lg font-extrabold text-white flex items-baseline gap-1">
                  240+ <span className="text-xs font-medium text-[#0088FF]">Mbps</span>
                </div>
              </div>
              <div>
                <div className="text-[11px] text-gray-300">Average Latency</div>
                <div className="text-lg font-extrabold text-white flex items-baseline gap-1">
                  24 <span className="text-xs font-medium text-gray-400">ms</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Pill: "Trusted by over 12K+ customers" */}
          <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#0B0F17]/65 border border-white/20 backdrop-blur-md shadow-xl text-xs font-medium text-gray-200">
            <ShieldCheck className="w-4 h-4 text-[#0088FF]" />
            <span>Trusted by over 12K+ students &amp; tenants</span>
          </div>

          {/* Floating Testimonial Card */}
          <div className="w-full max-w-sm p-4 rounded-2xl bg-[#0B0F17]/65 border border-white/20 backdrop-blur-xl shadow-2xl transition-transform hover:scale-[1.02] duration-300">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2.5">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                  alt="Student Reviewer"
                  className="w-8 h-8 rounded-full ring-2 ring-[#0088FF]/40 object-cover"
                />
                <div>
                  <div className="text-xs font-bold text-white">Sandra M.</div>
                  <div className="text-[10px] text-gray-400">Hostel President</div>
                </div>
              </div>
              <span className="text-xl font-serif text-[#E63946] leading-none">“</span>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed italic">
              Excellent speeds and zero hassle—this Starlink setup completely changed
              how we browse in our hostel.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
