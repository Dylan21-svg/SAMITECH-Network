"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Gauge, ArrowDown, ArrowUp, Zap, RotateCcw, CheckCircle2 } from "lucide-react";

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
        setDownloadSpeed(Math.floor(Math.random() * 40 + (curr * 3.8)));
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
    <section className="relative z-10 py-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image (bg2) - 100% Clear to the max */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none select-none">
        <Image
          src="/images/bg2.png"
          alt="Satellite Throughput Background"
          fill
          priority
          className="object-cover object-center contrast-[1.06] brightness-[1.02]"
        />
      </div>
      <div className="max-w-4xl mx-auto rounded-2xl p-5 sm:p-7 bg-[#111827]/80 border border-white/10 backdrop-blur-xl shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Left Info */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[#0088FF] text-[11px] font-semibold mb-3">
              <Zap className="w-3 h-3" />
              <span>Live Starlink Benchmark</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mb-2">
              Real-World Satellite Throughput
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed mb-4">
              Unlike congested cellular towers that crawl during evening rush hours,
              Samitech Networks delivers direct low-orbit beam connectivity with
              uncompromising gigabit-grade speed.
            </p>

            <div className="space-y-2">
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-[11px] text-gray-400">Regular 4G / Modems</span>
                <span className="text-[11px] font-semibold text-rose-400">8 - 25 Mbps · 110ms</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#0088FF]/10 border border-[#0088FF]/30">
                <span className="text-[11px] font-bold text-white flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-[#0088FF]" /> Samitech Starlink
                </span>
                <span className="text-[11px] font-bold text-[#0088FF]">180 - 250+ Mbps · 20ms</span>
              </div>
            </div>
          </div>

          {/* Right Live Gauge / Meter */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center p-5 rounded-xl bg-[#0B0F17]/90 border border-white/10">
            
            {/* Speed Readout Circle */}
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 flex flex-col items-center justify-center">
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
                  stroke="url(#gradient-speed)"
                  strokeWidth="8"
                  strokeDasharray="264"
                  strokeDashoffset={264 - (264 * (testing ? progress : 92)) / 100}
                  strokeLinecap="round"
                  fill="none"
                  className="transition-all duration-300"
                />
                <defs>
                  <linearGradient id="gradient-speed" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0088FF" />
                    <stop offset="100%" stopColor="#8b0000" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Numerical readout in center */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {downloadSpeed}
                </span>
                <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest">
                  Mbps Download
                </span>
                <span className="text-[10px] text-[#0088FF] font-medium mt-1">
                  Latency: {ping} ms
                </span>
              </div>
            </div>

            {/* Metrics Breakdown */}
            <div className="grid grid-cols-2 gap-6 w-full max-w-xs mt-6 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-[#0088FF]">
                  <ArrowDown className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider">Download</div>
                  <div className="text-sm font-bold text-white">{downloadSpeed} Mbps</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#8b0000]/15 flex items-center justify-center text-[#8b0000]">
                  <ArrowUp className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider">Upload</div>
                  <div className="text-sm font-bold text-white">{uploadSpeed} Mbps</div>
                </div>
              </div>
            </div>

            {/* Trigger Button */}
            <button
              onClick={startTest}
              disabled={testing}
              className="mt-6 px-6 py-2.5 rounded-full text-xs font-bold bg-white/10 hover:bg-white/15 text-white border border-white/15 transition-all flex items-center gap-2 active:scale-95 disabled:opacity-50"
            >
              <RotateCcw className={`w-3.5 h-3.5 ${testing ? "animate-spin" : ""}`} />
              {testing ? "Benchmarking Beam..." : "Rerun Speed Test"}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
