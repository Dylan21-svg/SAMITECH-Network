"use client";

import React from "react";
import Image from "next/image";
import { Play, ArrowRight, ShieldCheck, Zap, Sparkles } from "lucide-react";

interface HeroSectionProps {
  onOpenCoverage: () => void;
  onOpenContact: () => void;
}

export default function HeroSection({ onOpenCoverage, onOpenContact }: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-6 pb-16 lg:py-16 px-4 sm:px-6 lg:px-12 isolate">
      {/* Background Video */}
      <div className="absolute inset-0 pointer-events-none -z-20 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center scale-105 opacity-40"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        {/* Dark tinted overlay for contrast and seamless edge blending */}
        <div className="absolute inset-0 bg-[#0B0F17]/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F17]/90 via-[#0B0F17]/40 to-[#0B0F17]" />
      </div>

      {/* Background Subtle Stars & Radial Gradients */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {/* Subtle deep blue aura */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#0088FF]/10 blur-[130px]" />
        {/* Subtle deep crimson aura */}
        <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-[#E63946]/5 blur-[120px]" />
        
        {/* Fine Star Dust dots */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:32px_32px] opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Copy & Actions */}
        <div className="lg:col-span-6 flex flex-col items-start z-10">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-6 backdrop-blur-sm shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0088FF] animate-ping" />
            <span className="text-xs font-medium text-gray-300">
              #1 High-Speed Starlink Provider
            </span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
            The Best Place to <br />
            Experience{" "}
            <span className="text-[#0088FF] inline-block drop-shadow-[0_0_24px_rgba(0,136,255,0.25)]">
              Starlink
            </span>{" "}
            <br />
            <span className="text-[#E63946] inline-block drop-shadow-[0_0_24px_rgba(230,57,70,0.25)]">
              Internet
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-gray-400 font-normal leading-relaxed max-w-xl mb-8">
            Superfast, reliable satellite internet for your hostel, room, or
            apartment. Stay connected with zero buffering.
          </p>

          {/* CTAs matching Mockup (White Pill + Dark Ghost Pill with Play icon) */}
          <div className="flex flex-wrap items-center gap-4 mb-12 sm:mb-16">
            <button
              onClick={onOpenContact}
              className="px-7 py-3.5 rounded-full text-sm font-bold bg-white text-[#0B0F17] hover:bg-gray-100 hover:shadow-lg hover:shadow-white/10 transition-all duration-200 active:scale-95 flex items-center gap-2"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenCoverage}
              className="px-6 py-3.5 rounded-full text-sm font-medium bg-[#141C2B]/80 hover:bg-[#1A2438] text-gray-200 hover:text-white border border-white/15 backdrop-blur-sm transition-all duration-200 flex items-center gap-2.5 active:scale-95"
            >
              Check Coverage
              <div className="w-4 h-4 rounded-full bg-white/15 flex items-center justify-center">
                <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
              </div>
            </button>
          </div>

          {/* Bottom-Left Floating Metric Card (Avatar stack + 99.9% Uptime) */}
          <div className="p-4 rounded-2xl bg-[#111827]/85 border border-white/10 backdrop-blur-xl shadow-2xl flex items-center gap-4 max-w-md w-full sm:w-auto">
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

            <div className="h-8 w-[1px] bg-white/10" />

            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                <span>100%</span>
                <span className="text-gray-400 font-normal">or 24/7</span>
                <span className="text-[#0088FF]">→ 99.9%</span>
              </div>
              <div className="text-[11px] text-gray-400 font-medium tracking-wide">
                Uptime & High-Speed
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Starlink Dish Graphic with Orbital Lines & Floating Badges */}
        <div className="lg:col-span-6 relative flex items-center justify-center min-h-[460px] lg:min-h-[560px]">
          
          {/* Orbital Elliptical Rings (Vector strokes in Blue & Crimson, matching Mockup) */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <svg
              className="w-full h-full max-w-[620px] max-h-[620px] overflow-visible opacity-80"
              viewBox="0 0 600 600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Electric Blue Orbit Ellipse */}
              <ellipse
                cx="310"
                cy="300"
                rx="270"
                ry="130"
                transform="rotate(-28 310 300)"
                stroke="#0088FF"
                strokeWidth="1.8"
                strokeDasharray="8 6"
                className="opacity-70"
              />
              {/* Crimson Red Orbit Ellipse */}
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
              {/* Subtle White Outer Orbit */}
              <ellipse
                cx="300"
                cy="300"
                rx="290"
                ry="180"
                transform="rotate(-6 300 300)"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="1.2"
              />
              {/* Active Satellite Indicator Dot */}
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

          {/* Main High-Res Starlink Terminal Image */}
          <div className="relative z-10 w-full max-w-[480px] lg:max-w-[540px] aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/5 group">
            <Image
              src="/images/starlink-dish.jpg"
              alt="Starlink satellite terminal dish on tripod stand"
              fill
              priority
              className="object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
            />
            {/* Vignette to blend smoothly with dark background */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-transparent to-transparent opacity-80 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F17] via-transparent to-transparent opacity-50 pointer-events-none" />
          </div>

          {/* Floating Pill: "Trusted by over 12K+ customers" */}
          <div className="absolute top-1/2 left-2 sm:left-4 z-20 -translate-y-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#111827]/90 border border-white/15 backdrop-blur-md shadow-xl text-xs font-medium text-gray-200 hover:border-white/25 transition-all">
              <ShieldCheck className="w-4 h-4 text-[#0088FF]" />
              <span>Trusted by over 12K+ customers</span>
            </div>
          </div>

          {/* Floating Testimonial Card (Bottom Right, matching Mockup) */}
          <div className="absolute -bottom-6 right-0 sm:right-4 z-20 max-w-[280px] sm:max-w-[320px] p-4 rounded-2xl bg-[#151D2C]/90 border border-white/10 backdrop-blur-xl shadow-2xl">
            <div className="flex items-center justify-between mb-2.5">
              <div className="flex items-center gap-2.5">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                  alt="Student Reviewer"
                  className="w-8 h-8 rounded-full ring-2 ring-[#0088FF]/30 object-cover"
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
