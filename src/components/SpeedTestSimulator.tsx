"use client";

import React, { useState } from "react";
import { ArrowDown, ArrowUp, RotateCcw, Check, Sparkles, X } from "lucide-react";

export default function SpeedTestSimulator() {
  const [testing, setTesting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [downloadSpeed, setDownloadSpeed] = useState(234);
  const [uploadSpeed, setUploadSpeed] = useState(38);
  const [ping, setPing] = useState(19);

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

  return (
    <section className="relative z-10 py-10 sm:py-14 lg:py-20 px-3.5 sm:px-6 lg:px-12 scroll-mt-24 bg-black">
      <div className="max-w-5xl mx-auto rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 bg-white/[0.08] hover:bg-white/[0.13] border border-white/20 hover:border-white/35 backdrop-blur-xl shadow-2xl transition-all duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#8b0000]/15 border border-[#8b0000]/30 mb-3 sm:mb-4">
              <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#8b0000]" />
              <span className="text-[10px] sm:text-xs font-semibold text-[#8b0000] uppercase tracking-wider">
                Live Starlink Benchmark
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-2 sm:mb-3">
              Real-World Satellite Throughput
            </h3>

            <p className="text-[11px] sm:text-xs lg:text-sm text-blue-200/90 leading-relaxed mb-4 sm:mb-6">
              Unlike congested cellular towers that crawl during evening rush hours,
              Samitech Networks delivers direct low-orbit beam connectivity with
              uncompromising gigabit-grade speed.
            </p>

            {/* Comparison Cards in White Glassmorphism with Red & Blue Styling */}
            <div className="space-y-2.5 sm:space-y-3">
              {/* Regular 4G / Modems */}
              <div className="flex items-center justify-between p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/[0.06] border border-white/15">
                <span className="text-xs sm:text-sm font-bold text-red-500 flex items-center gap-2">
                  <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-red-500/15 border border-red-500/30 flex items-center justify-center shrink-0">
                    <X className="w-2 sm:w-2.5 h-2 sm:h-2.5 text-red-400" />
                  </div>
                  Regular 4G / Modems
                </span>
                <span className="text-[11px] sm:text-xs font-semibold text-red-400">
                  8 - 25 Mbps · 110ms
                </span>
              </div>

              {/* Samitech Starlink (Highlighted Card Style) */}
              <div className="flex items-center justify-between p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/[0.14] border-2 border-[#0088FF] shadow-lg shadow-[#0088FF]/20">
                <span className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                  <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#0088FF] text-white flex items-center justify-center shrink-0">
                    <Check className="w-2 sm:w-2.5 h-2 sm:h-2.5 text-white" />
                  </div>
                  Samitech Starlink
                </span>
                <span className="text-xs sm:text-sm font-black text-[#0088FF]">
                  180 - 250+ Mbps · 20ms
                </span>
              </div>

              {/* SLA Guarantee Card */}
              <div className="flex items-center justify-between p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/[0.06] border border-white/15">
                <span className="text-xs sm:text-sm text-blue-100 font-medium">
                  Monthly Availability SLA
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#0088FF]">
                  99.9% Uptime Guarantee
                </span>
              </div>
            </div>
          </div>

          {/* Right Live Gauge / Meter Card (White Glassmorphism with Red & Blue Styling) */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-white/[0.10] border border-white/20 backdrop-blur-xl shadow-2xl">
            
            {/* Speed Readout Circle */}
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 flex flex-col items-center justify-center">
              {/* Outer Circular SVG Track */}
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  stroke="#1E293B"
                  strokeWidth="8"
                  fill="none"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  stroke="url(#gradient-speed-custom)"
                  strokeWidth="8"
                  strokeDasharray="264"
                  strokeDashoffset={264 - (264 * (testing ? progress : 92)) / 100}
                  strokeLinecap="round"
                  fill="none"
                  className="transition-all duration-300"
                />
                <defs>
                  <linearGradient id="gradient-speed-custom" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0088FF" />
                    <stop offset="100%" stopColor="#EF4444" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Numerical readout in center */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0088FF] tracking-tight">
                  {downloadSpeed}
                </span>
                <span className="text-[11px] sm:text-xs font-extrabold text-red-500 uppercase tracking-widest mt-1">
                  Mbps Download
                </span>
                <span className="text-[10px] text-blue-200/90 font-medium mt-1 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/15">
                  Latency: {ping} ms
                </span>
              </div>
            </div>

            {/* Metrics Breakdown */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-xs mt-6 pt-4 border-t border-white/15">
              <div className="p-3 rounded-xl bg-white/[0.08] border border-white/20 flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#0088FF] flex items-center justify-center text-white shrink-0 shadow-md">
                  <ArrowDown className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-blue-200 font-bold uppercase tracking-wider">Download</div>
                  <div className="text-sm sm:text-base font-black text-[#0088FF]">{downloadSpeed} Mbps</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.08] border border-white/20 flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white shrink-0 shadow-md">
                  <ArrowUp className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-red-300 font-bold uppercase tracking-wider">Upload</div>
                  <div className="text-sm sm:text-base font-black text-red-500">{uploadSpeed} Mbps</div>
                </div>
              </div>
            </div>

            {/* Trigger Button matching PricingSection Highlight CTA */}
            <button
              onClick={startTest}
              disabled={testing}
              className="mt-6 w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-red-600 via-red-500 to-[#0088FF] hover:from-red-700 hover:to-blue-600 text-white shadow-lg shadow-red-600/30 transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50 cursor-pointer"
            >
              <RotateCcw className={`w-3.5 h-3.5 ${testing ? "animate-spin" : ""}`} />
              <span>{testing ? "Benchmarking Beam..." : "Rerun Speed Test"}</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
