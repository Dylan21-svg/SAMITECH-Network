"use client";

import React, { useState, useEffect } from "react";
import {
  RotateCcw,
  Sparkles,
  ArrowDown,
  ArrowUp,
  Check,
  X,
} from "lucide-react";

export default function SpeedTestSimulator() {
  const [downloadSpeed, setDownloadSpeed] = useState(248);
  const [uploadSpeed, setUploadSpeed] = useState(38);
  const [ping, setPing] = useState(18);
  const [testing, setTesting] = useState(false);
  const [progress, setProgress] = useState(100);

  const startTest = () => {
    if (testing) return;
    setTesting(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTesting(false);
          setDownloadSpeed(Math.floor(220 + Math.random() * 65));
          setUploadSpeed(Math.floor(30 + Math.random() * 18));
          setPing(Math.floor(15 + Math.random() * 8));
          return 100;
        }
        setDownloadSpeed(Math.floor(180 + Math.random() * 95));
        setUploadSpeed(Math.floor(25 + Math.random() * 25));
        return prev + 5;
      });
    }, 100);
  };

  useEffect(() => {
    const autoInterval = setInterval(() => {
      if (!testing) {
        setDownloadSpeed((prev) =>
          Math.min(290, Math.max(210, prev + Math.floor(Math.random() * 11) - 5))
        );
      }
    }, 3000);
    return () => clearInterval(autoInterval);
  }, [testing]);

  return (
    <section className="relative z-10 py-12 sm:py-16 lg:py-20 px-3.5 sm:px-6 lg:px-12 scroll-mt-24 bg-black text-white selection:bg-[#0088FF]/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-[#8b0000]/15 border border-[#8b0000]/30 mb-2.5">
            <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#ff4444]" />
            <span className="text-[10px] sm:text-xs font-semibold text-red-400 uppercase tracking-wider">
              Real-Time Telemetry
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight max-w-2xl mb-2">
            Real-World Satellite Throughput
          </h2>

          <p className="text-xs sm:text-sm text-gray-400 max-w-xl leading-relaxed">
            Live unthrottled performance benchmarked directly against Cameroonian cellular 4G and legacy VSAT lines.
          </p>
        </div>

        {/* ── White Claymorphism Card Container ── */}
        <div className="relative">
          {/* Ambient diffuse glow behind the clay card */}
          <div className="absolute -inset-4 sm:-inset-6 bg-blue-600/15 rounded-[2.5rem] sm:rounded-[3.5rem] blur-3xl -z-10 pointer-events-none" />

          {/* Opaque 3D White Clay Plate */}
          <div
            className="relative rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] p-6 sm:p-8 lg:p-10 bg-[#F8FAFC] border border-white transition-all duration-500 overflow-hidden"
            style={{
              boxShadow: `
                0 30px 60px -15px rgba(0, 0, 0, 0.7),
                0 12px 28px -6px rgba(0, 0, 0, 0.35),
                inset 6px 6px 14px 0px rgba(255, 255, 255, 1),
                inset -6px -6px 18px 0px rgba(15, 23, 42, 0.12),
                inset 0 0 0 1px rgba(255, 255, 255, 0.85)
              `,
            }}
          >
            {/* Header Row: Clay Oval Pill Badge on Left, Asterisk Icon on Right */}
            <div className="relative z-10 flex items-center justify-between mb-6 sm:mb-8">
              {/* Oval Pill Badge (Clay indentation) */}
              <div
                className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 shadow-sm"
                style={{
                  boxShadow:
                    "inset 2px 2px 4px rgba(255, 255, 255, 0.95), inset -2px -2px 4px rgba(0, 0, 0, 0.06)",
                }}
              >
                <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.18em] uppercase text-slate-700">
                  LIVE BENCHMARK TELEMETRY
                </span>
              </div>

              {/* 8-Point Geometric Asterisk Star */}
              <div className="flex items-center justify-center text-slate-800">
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
                {/* Stacked Clay Micro-Tags */}
                <div className="space-y-1.5 mb-4 sm:mb-5">
                  <div className="flex">
                    <span
                      className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[9px] sm:text-[10px] font-bold tracking-wider uppercase text-slate-700"
                      style={{
                        boxShadow:
                          "inset 1.5px 1.5px 3px rgba(255, 255, 255, 0.95), inset -1.5px -1.5px 3px rgba(0, 0, 0, 0.06)",
                      }}
                    >
                      REAL-TIME TRANSIT
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[9px] sm:text-[10px] font-bold tracking-wider uppercase text-slate-700"
                      style={{
                        boxShadow:
                          "inset 1.5px 1.5px 3px rgba(255, 255, 255, 0.95), inset -1.5px -1.5px 3px rgba(0, 0, 0, 0.06)",
                      }}
                    >
                      SUB-25MS PING
                    </span>
                    <span
                      className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[9px] sm:text-[10px] font-bold tracking-wider uppercase text-slate-700"
                      style={{
                        boxShadow:
                          "inset 1.5px 1.5px 3px rgba(255, 255, 255, 0.95), inset -1.5px -1.5px 3px rgba(0, 0, 0, 0.06)",
                      }}
                    >
                      99.9% UPTIME SLA
                    </span>
                  </div>
                </div>

                {/* Big Bold Stacked All-Caps Title */}
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[0.95] mb-3 sm:mb-4">
                  <div className="text-slate-950">REAL-WORLD</div>
                  <div className="text-[#0088FF]">THROUGHPUT</div>
                </h3>

                {/* Concise Description Text */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mb-5 font-normal">
                  Unlike cellular towers that throttle during evening peak hours, Samitech Networks delivers direct low-orbit beam transit with uncompromised gigabit-grade speed.
                </p>

                {/* Comparison Breakdown Cards in Soft Clay Cutouts */}
                <div className="space-y-2.5 w-full max-w-md">
                  {/* Regular 4G / Modems */}
                  <div
                    className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-200/80"
                    style={{
                      boxShadow:
                        "inset 2px 2px 5px rgba(0, 0, 0, 0.04), inset -2px -2px 5px rgba(255, 255, 255, 0.95)",
                    }}
                  >
                    <span className="text-xs font-bold text-red-600 flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-red-100 border border-red-300 flex items-center justify-center shrink-0">
                        <X className="w-2.5 h-2.5 text-red-600" />
                      </div>
                      Regular 4G / Modems
                    </span>
                    <span className="text-[11px] sm:text-xs font-semibold text-slate-500">
                      8 - 25 Mbps · 110ms
                    </span>
                  </div>

                  {/* Samitech Starlink (Highlighted Glow Card) */}
                  <div
                    className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-blue-50/80 border-2 border-[#0088FF]"
                    style={{
                      boxShadow:
                        "0 8px 20px -4px rgba(0, 136, 255, 0.25), inset 2px 2px 4px rgba(255, 255, 255, 0.95)",
                    }}
                  >
                    <span className="text-xs font-bold text-slate-900 flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-[#0088FF] text-white flex items-center justify-center shrink-0 shadow-sm">
                        <Check className="w-2.5 h-2.5 text-white" />
                      </div>
                      Samitech Starlink
                    </span>
                    <span className="text-xs sm:text-sm font-black text-[#0088FF]">
                      180 - 250+ Mbps · 18ms
                    </span>
                  </div>

                  {/* SLA Guarantee Card */}
                  <div
                    className="flex items-center justify-between p-2.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200/80"
                    style={{
                      boxShadow:
                        "inset 2px 2px 5px rgba(0, 0, 0, 0.04), inset -2px -2px 5px rgba(255, 255, 255, 0.95)",
                    }}
                  >
                    <span className="text-xs sm:text-sm text-slate-700 font-medium">
                      Monthly Availability SLA
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-cyan-600 font-mono">
                      99.9% Uptime Guarantee
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Side: Interactive Circular Gauge Meter Card with Clay Cushion */}
              <div className="md:col-span-6 order-2">
                <div
                  className="relative w-full rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 bg-slate-50 border border-slate-200/90 flex flex-col items-center justify-center"
                  style={{
                    boxShadow: `
                      inset 4px 4px 10px rgba(0, 0, 0, 0.05),
                      inset -4px -4px 12px rgba(255, 255, 255, 1),
                      0 10px 25px -5px rgba(0, 0, 0, 0.06)
                    `,
                  }}
                >
                  {/* Speed Readout Radial Meter */}
                  <div className="relative w-44 h-44 sm:w-52 sm:h-52 lg:w-56 lg:h-56 flex flex-col items-center justify-center">
                    {/* SVG Radial Arc */}
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="42"
                        stroke="rgba(0, 0, 0, 0.07)"
                        strokeWidth="7"
                        fill="none"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="42"
                        stroke="url(#gradient-speed-clay)"
                        strokeWidth="7"
                        strokeDasharray="264"
                        strokeDashoffset={264 - (264 * (testing ? progress : 94)) / 100}
                        strokeLinecap="round"
                        fill="none"
                        className="transition-all duration-300"
                      />
                      <defs>
                        <linearGradient id="gradient-speed-clay" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#0088FF" />
                          <stop offset="60%" stopColor="#38BDF8" />
                          <stop offset="100%" stopColor="#EF4444" />
                        </linearGradient>
                      </defs>
                    </svg>

                    {/* Numerical Readout in Center */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <span className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight drop-shadow-sm">
                        {downloadSpeed}
                      </span>
                      <span className="text-[10px] sm:text-[11px] font-extrabold text-[#0088FF] uppercase tracking-widest mt-0.5">
                        Mbps Download
                      </span>
                      <span
                        className="text-[10px] text-slate-600 font-semibold mt-1.5 bg-white px-2.5 py-0.5 rounded-full border border-slate-200"
                        style={{
                          boxShadow:
                            "inset 1px 1px 2px rgba(255, 255, 255, 0.95), inset -1px -1px 2px rgba(0, 0, 0, 0.04)",
                        }}
                      >
                        Ping: {ping} ms
                      </span>
                    </div>
                  </div>

                  {/* Metrics Breakdown Grid */}
                  <div className="grid grid-cols-2 gap-3 w-full max-w-xs mt-5 pt-4 border-t border-slate-200">
                    <div
                      className="p-2.5 rounded-xl bg-white border border-slate-200 flex items-center gap-2.5"
                      style={{
                        boxShadow:
                          "inset 2px 2px 4px rgba(255, 255, 255, 0.95), inset -2px -2px 4px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.03)",
                      }}
                    >
                      <div className="w-7 h-7 rounded-lg bg-[#0088FF] flex items-center justify-center text-white shrink-0 shadow-md">
                        <ArrowDown className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">
                          Download
                        </div>
                        <div className="text-xs sm:text-sm font-black text-slate-900">
                          {downloadSpeed} Mbps
                        </div>
                      </div>
                    </div>

                    <div
                      className="p-2.5 rounded-xl bg-white border border-slate-200 flex items-center gap-2.5"
                      style={{
                        boxShadow:
                          "inset 2px 2px 4px rgba(255, 255, 255, 0.95), inset -2px -2px 4px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.03)",
                      }}
                    >
                      <div className="w-7 h-7 rounded-lg bg-red-600 flex items-center justify-center text-white shrink-0 shadow-md">
                        <ArrowUp className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">
                          Upload
                        </div>
                        <div className="text-xs sm:text-sm font-black text-slate-900">
                          {uploadSpeed} Mbps
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Trigger Benchmark Button */}
                  <button
                    onClick={startTest}
                    disabled={testing}
                    className="mt-5 w-full sm:w-auto px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#0088FF] via-blue-600 to-red-600 hover:from-blue-500 hover:to-red-500 text-white transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50 cursor-pointer border border-white/20"
                    style={{
                      boxShadow:
                        "0 10px 20px -5px rgba(0, 136, 255, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.35)",
                    }}
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
