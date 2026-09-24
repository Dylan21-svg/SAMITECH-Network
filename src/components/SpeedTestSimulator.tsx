"use client";

import React, { useState } from "react";
import { ArrowDown, ArrowUp, RotateCcw, Check, Sparkles, X } from "lucide-react";

// 8-Point Asterisk Icon matching reference design
function LuminousAsterisk({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a1.25 1.25 0 0 1 1.25 1.25v5.48l3.87-3.87a1.25 1.25 0 1 1 1.77 1.77L15.02 10.5h5.48a1.25 1.25 0 1 1 0 2.5h-5.48l3.87 3.87a1.25 1.25 0 1 1-1.77 1.77L13.25 14.77v5.48a1.25 1.25 0 1 1-2.5 0v-5.48l-3.87 3.87a1.25 1.25 0 1 1-1.77-1.77l3.87-3.87H3.5a1.25 1.25 0 1 1 0-2.5h5.48L5.11 6.63a1.25 1.25 0 0 1 1.77-1.77l3.87 3.87V3.25A1.25 1.25 0 0 1 12 2z" />
    </svg>
  );
}

export default function SpeedTestSimulator() {
  const [testing, setTesting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [downloadSpeed, setDownloadSpeed] = useState(238);
  const [uploadSpeed, setUploadSpeed] = useState(42);
  const [ping, setPing] = useState(18);

  const startTest = () => {
    setTesting(true);
    setProgress(0);
    setDownloadSpeed(0);
    setUploadSpeed(0);

    let curr = 0;
    const interval = setInterval(() => {
      curr += 4;
      setProgress(curr);

      // simulate dynamic speeds
      if (curr < 60) {
        setDownloadSpeed(Math.floor(Math.random() * 40 + curr * 3.8));
      } else if (curr <= 100) {
        setDownloadSpeed(Math.floor(220 + Math.random() * 25));
        setUploadSpeed(Math.floor(30 + Math.random() * 12));
      }

      if (curr >= 100) {
        clearInterval(interval);
        setTesting(false);
        setDownloadSpeed(238);
        setUploadSpeed(42);
        setPing(18);
      }
    }, 80);
  };

  const tags = ["Ultra Low Latency", "Gigabit Satellite", "99.9% Uptime SLA", "Uncapped Transit"];

  return (
    <section className="relative z-10 py-12 sm:py-16 lg:py-24 px-3.5 sm:px-6 lg:px-12 scroll-mt-24 bg-black overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Main Card with Luminous Frosted Aesthetic from reference image */}
        <div className="luminous-glass-card rounded-[28px] sm:rounded-[36px] p-6 sm:p-9 lg:p-12 relative overflow-hidden shadow-2xl transition-all duration-300">
          {/* Vertical flutes and luminous light streaks */}
          <div className="luminous-flutes" />
          <div className="luminous-aurora" />

          {/* Top Row: Oval outline pill badge on left & 8-point Asterisk on right */}
          <div className="relative z-10 flex items-center justify-between mb-6 sm:mb-8">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/35 bg-white/[0.04] text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-white/95 uppercase backdrop-blur-md shadow-sm">
              Live Starlink Benchmark
            </div>

            <div className="text-white drop-shadow-[0_0_14px_rgba(255,255,255,0.7)] hover:rotate-45 transition-transform duration-500">
              <LuminousAsterisk className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-4 sm:space-y-6">
              {/* Pills row (like FULLY EDITABLE / CREATIVE PACK / ULTRA HD in reference image) */}
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, idx) => (
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
                Real-World Satellite Throughput
              </h3>

              <p className="text-xs sm:text-sm lg:text-base text-blue-100/85 leading-relaxed max-w-xl font-normal">
                Unlike congested cellular towers that crawl during evening rush hours,
                Samitech Networks delivers direct low-orbit beam connectivity with
                uncompromising gigabit-grade speed across Cameroon.
              </p>

              {/* Benchmark Comparison Cards */}
              <div className="space-y-2.5 sm:space-y-3 pt-2">
                {/* Regular 4G / Modems */}
                <div className="flex items-center justify-between p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
                  <span className="text-xs sm:text-sm font-bold text-red-400 flex items-center gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center shrink-0">
                      <X className="w-2.5 h-2.5 text-red-400" />
                    </div>
                    Regular 4G / Modems
                  </span>
                  <span className="text-[11px] sm:text-xs font-semibold text-red-400/90 font-mono">
                    8 - 25 Mbps · 110ms
                  </span>
                </div>

                {/* Samitech Starlink (Highlighted Card Style) */}
                <div className="flex items-center justify-between p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.08] border-2 border-cyan-400/60 shadow-lg shadow-cyan-500/20 backdrop-blur-md">
                  <span className="text-xs sm:text-sm font-bold text-white flex items-center gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-cyan-400 text-black flex items-center justify-center shrink-0 shadow-sm">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    Samitech Starlink
                  </span>
                  <span className="text-xs sm:text-sm font-black text-cyan-300 font-mono drop-shadow-[0_0_8px_rgba(0,229,255,0.5)]">
                    180 - 250+ Mbps · 18ms
                  </span>
                </div>

                {/* SLA Guarantee Card */}
                <div className="flex items-center justify-between p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
                  <span className="text-xs sm:text-sm text-blue-100/90 font-medium">
                    Monthly Availability SLA
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-cyan-300 font-mono">
                    99.9% Uptime Guarantee
                  </span>
                </div>
              </div>
            </div>

            {/* Right Live Gauge / Meter Card */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-white/15 bg-white/[0.03] backdrop-blur-xl shadow-inner relative overflow-hidden">
              {/* Radial glow in center */}
              <div className="absolute w-48 h-48 bg-cyan-400/15 rounded-full blur-[70px] pointer-events-none" />

              {/* Speed Readout Circle */}
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 lg:w-60 lg:h-60 flex flex-col items-center justify-center">
                {/* Outer Circular SVG Track */}
                <svg className="w-full h-full transform -rotate-90 drop-shadow-[0_0_20px_rgba(0,180,255,0.35)]" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    stroke="rgba(255, 255, 255, 0.08)"
                    strokeWidth="7"
                    fill="none"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    stroke="url(#gradient-luminous-speed)"
                    strokeWidth="7"
                    strokeDasharray="264"
                    strokeDashoffset={264 - (264 * (testing ? progress : 92)) / 100}
                    strokeLinecap="round"
                    fill="none"
                    className="transition-all duration-300"
                  />
                  <defs>
                    <linearGradient id="gradient-luminous-speed" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00E5FF" />
                      <stop offset="60%" stopColor="#0088FF" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Numerical readout in center */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight drop-shadow-[0_0_25px_rgba(0,229,255,0.7)]">
                    {downloadSpeed}
                  </span>
                  <span className="text-[10px] sm:text-xs font-extrabold text-cyan-300 uppercase tracking-widest mt-1">
                    Mbps Download
                  </span>
                  <span className="text-[10px] text-blue-100/90 font-medium mt-1.5 bg-white/10 px-3 py-0.5 rounded-full border border-white/20 backdrop-blur-md">
                    Latency: {ping} ms
                  </span>
                </div>
              </div>

              {/* Metrics Breakdown */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-sm mt-6 pt-5 border-t border-white/15">
                <div className="p-3 sm:p-3.5 rounded-xl bg-white/[0.05] border border-white/15 backdrop-blur-md flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shrink-0 shadow-sm">
                    <ArrowDown className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-blue-200/80 font-bold uppercase tracking-wider">Download</div>
                    <div className="text-sm sm:text-base font-black text-white">{downloadSpeed} Mbps</div>
                  </div>
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl bg-white/[0.05] border border-white/15 backdrop-blur-md flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300 shrink-0 shadow-sm">
                    <ArrowUp className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-purple-200/80 font-bold uppercase tracking-wider">Upload</div>
                    <div className="text-sm sm:text-base font-black text-white">{uploadSpeed} Mbps</div>
                  </div>
                </div>
              </div>

              {/* Trigger Button with Luminous Glow */}
              <button
                onClick={startTest}
                disabled={testing}
                className="mt-6 w-full sm:w-auto px-7 py-3 rounded-full text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-cyan-500 via-[#0088FF] to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-[0_0_25px_rgba(0,180,255,0.4)] hover:shadow-[0_0_35px_rgba(0,229,255,0.6)] transition-all duration-300 flex items-center justify-center gap-2.5 active:scale-95 disabled:opacity-50 cursor-pointer"
              >
                <RotateCcw className={`w-3.5 h-3.5 ${testing ? "animate-spin" : ""}`} />
                <span>{testing ? "Benchmarking Beam..." : "Rerun Speed Test"}</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
