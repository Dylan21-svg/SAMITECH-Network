"use client";

import React, { useState } from "react";
import { ArrowDown, ArrowUp, RotateCcw, Check, Sparkles, X } from "lucide-react";

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
        setDownloadSpeed(Math.floor(Math.random() * 45 + curr * 3.6));
      } else if (curr <= 100) {
        setDownloadSpeed(Math.floor(220 + Math.random() * 32));
        setUploadSpeed(Math.floor(32 + Math.random() * 14));
      }

      if (curr >= 100) {
        clearInterval(interval);
        setTesting(false);
        setDownloadSpeed(246);
        setUploadSpeed(44);
        setPing(18);
      }
    }, 75);
  };

  return (
    <section className="relative z-10 py-8 sm:py-12 lg:py-16 px-3.5 sm:px-6 lg:px-12 scroll-mt-24 bg-black text-white selection:bg-[#0088FF]/30">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-[#8b0000]/15 border border-[#8b0000]/30 mb-2">
            <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#8b0000]" />
            <span className="text-[10px] sm:text-xs font-semibold text-[#8b0000] uppercase tracking-wider">
              Real-Time Telemetry
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight max-w-2xl mb-1.5">
            Real-World Satellite Throughput
          </h2>

          <p className="text-xs sm:text-sm text-gray-400 max-w-xl leading-relaxed">
            Live unthrottled performance benchmarked directly against Cameroonian cellular 4G and legacy VSAT lines.
          </p>
        </div>

        {/* Glassmorphism Card Container (Matching Luminous Gradient Reference Template) */}
        <div className="relative">
          {/* Luminous fluid ambient glow behind the frosted glass plate */}
          <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-blue-700/40 via-cyan-500/25 to-blue-900/40 rounded-[2.5rem] sm:rounded-[3.5rem] blur-3xl -z-10 pointer-events-none" />

          {/* Frosted Glass Plate */}
          <div className="relative rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] p-6 sm:p-8 lg:p-10 bg-[#081225]/60 backdrop-blur-2xl border border-white/25 shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),0_25px_60px_-12px_rgba(0,119,255,0.35)] transition-all duration-500 overflow-hidden">
            
            {/* Vertical Fluted / Ribbed Light Beams Texture */}
            <div
              className="absolute inset-0 pointer-events-none opacity-20"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(90deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 2px, transparent 2px, transparent 32px)",
              }}
            />

            {/* Glowing Refracted Aurora Swirl inside the card */}
            <div className="absolute right-0 top-0 bottom-0 w-3/5 bg-gradient-to-l from-blue-500/30 via-cyan-400/20 to-transparent blur-3xl pointer-events-none" />

            {/* Header Row: Oval Pill Badge on Left, Asterisk Icon on Right */}
            <div className="relative z-10 flex items-center justify-between mb-6 sm:mb-8">
              {/* Oval Pill Badge */}
              <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/35 bg-white/[0.06] backdrop-blur-md shadow-sm">
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase text-white/90">
                  LIVE BENCHMARK TELEMETRY
                </span>
              </div>

              {/* 8-Point Geometric Asterisk Star (matches reference image) */}
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

            {/* Content Grid: Left Text side, Right Interactive Speed Gauge */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 items-center">
              
              {/* Left Side: Pill Tags, Big Bold Typography, Description & Comparison */}
              <div className="md:col-span-6 flex flex-col justify-between order-1 text-left">
                
                {/* Stacked Pill Micro-Tags (matches reference template) */}
                <div className="space-y-1.5 mb-4 sm:mb-5">
                  <div className="flex">
                    <span className="inline-flex items-center px-3 py-1 rounded-full border border-white/30 bg-white/[0.05] text-[9px] sm:text-[10px] font-semibold tracking-wider uppercase text-white/90 backdrop-blur-sm">
                      REAL-TIME TRANSIT
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full border border-white/30 bg-white/[0.05] text-[9px] sm:text-[10px] font-semibold tracking-wider uppercase text-white/90 backdrop-blur-sm">
                      SUB-25MS PING
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full border border-white/30 bg-white/[0.05] text-[9px] sm:text-[10px] font-semibold tracking-wider uppercase text-white/90 backdrop-blur-sm">
                      99.9% UPTIME SLA
                    </span>
                  </div>
                </div>

                {/* Big Bold Stacked All-Caps Title (matches "LUMINOUS GRADIENT" typography) */}
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-[0.95] mb-3 sm:mb-4 drop-shadow-sm">
                  <div className="text-white">REAL-WORLD</div>
                  <div className="text-[#0088FF]">THROUGHPUT</div>
                </h3>

                {/* Concise Description Text */}
                <p className="text-xs sm:text-sm text-blue-100/85 leading-relaxed max-w-md mb-5">
                  Unlike cellular towers that throttle during evening peak hours, Samitech Networks delivers direct low-orbit beam transit with uncompromised gigabit-grade speed.
                </p>

                {/* Comparison Breakdown Cards in Frosted Glass */}
                <div className="space-y-2.5 w-full max-w-md">
                  {/* Regular 4G / Modems */}
                  <div className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-white/[0.04] border border-white/15 backdrop-blur-md">
                    <span className="text-xs font-bold text-red-400 flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center shrink-0">
                        <X className="w-2.5 h-2.5 text-red-400" />
                      </div>
                      Regular 4G / Modems
                    </span>
                    <span className="text-[11px] sm:text-xs font-semibold text-red-300">
                      8 - 25 Mbps · 110ms
                    </span>
                  </div>

                  {/* Samitech Starlink (Highlighted Glow Card) */}
                  <div className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-[#0088FF]/15 border-2 border-[#0088FF] shadow-lg shadow-[#0088FF]/25 backdrop-blur-md">
                    <span className="text-xs font-bold text-white flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-[#0088FF] text-white flex items-center justify-center shrink-0 shadow-sm">
                        <Check className="w-2.5 h-2.5 text-white" />
                      </div>
                      Samitech Starlink
                    </span>
                    <span className="text-xs sm:text-sm font-black text-[#0088FF]">
                      180 - 250+ Mbps · 18ms
                    </span>
                  </div>
                </div>

              </div>

              {/* Right Side: Interactive Circular Gauge Meter Card with Luminous Frame */}
              <div className="md:col-span-6 order-2">
                <div className="relative w-full rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 bg-black/40 border border-white/20 shadow-2xl flex flex-col items-center justify-center backdrop-blur-xl">
                  {/* Subtle Internal Glow */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0088FF]/20 via-cyan-400/10 to-transparent rounded-2xl sm:rounded-3xl pointer-events-none" />

                  {/* Speed Readout Radial Meter */}
                  <div className="relative w-44 h-44 sm:w-52 sm:h-52 lg:w-56 lg:h-56 flex flex-col items-center justify-center">
                    {/* SVG Radial Arc */}
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="42"
                        stroke="rgba(255, 255, 255, 0.1)"
                        strokeWidth="7"
                        fill="none"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="42"
                        stroke="url(#gradient-speed-luminous)"
                        strokeWidth="7"
                        strokeDasharray="264"
                        strokeDashoffset={264 - (264 * (testing ? progress : 94)) / 100}
                        strokeLinecap="round"
                        fill="none"
                        className="transition-all duration-300"
                      />
                      <defs>
                        <linearGradient id="gradient-speed-luminous" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#0088FF" />
                          <stop offset="60%" stopColor="#38BDF8" />
                          <stop offset="100%" stopColor="#EF4444" />
                        </linearGradient>
                      </defs>
                    </svg>

                    {/* Numerical Readout in Center */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <span className="text-4xl sm:text-5xl font-black text-white tracking-tight drop-shadow-md">
                        {downloadSpeed}
                      </span>
                      <span className="text-[10px] sm:text-[11px] font-extrabold text-[#0088FF] uppercase tracking-widest mt-0.5">
                        Mbps Download
                      </span>
                      <span className="text-[10px] text-blue-100 font-semibold mt-1.5 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/20 backdrop-blur-sm">
                        Ping: {ping} ms
                      </span>
                    </div>
                  </div>

                  {/* Metrics Breakdown Grid */}
                  <div className="grid grid-cols-2 gap-3 w-full max-w-xs mt-5 pt-4 border-t border-white/15">
                    <div className="p-2.5 rounded-xl bg-white/[0.05] border border-white/15 flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-[#0088FF] flex items-center justify-center text-white shrink-0 shadow-md">
                        <ArrowDown className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-[9px] text-blue-200 font-bold uppercase tracking-wider">Download</div>
                        <div className="text-xs sm:text-sm font-black text-white">{downloadSpeed} Mbps</div>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-white/[0.05] border border-white/15 flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-red-600 flex items-center justify-center text-white shrink-0 shadow-md">
                        <ArrowUp className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-[9px] text-red-300 font-bold uppercase tracking-wider">Upload</div>
                        <div className="text-xs sm:text-sm font-black text-white">{uploadSpeed} Mbps</div>
                      </div>
                    </div>
                  </div>

                  {/* Trigger Benchmark Button */}
                  <button
                    onClick={startTest}
                    disabled={testing}
                    className="mt-5 w-full sm:w-auto px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#0088FF] via-blue-600 to-red-600 hover:from-blue-500 hover:to-red-500 text-white shadow-lg shadow-[#0088FF]/30 transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50 cursor-pointer border border-white/25"
                  >
                    <RotateCcw className={`w-3.5 h-3.5 ${testing ? "animate-spin" : ""}`} />
                    <span>{testing ? "Benchmarking Beam..." : "Rerun Speed Test"}</span>
                  </button>

                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
