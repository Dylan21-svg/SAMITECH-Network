"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PairedCoverflowCarousel from '@/components/PairedCoverflowCarousel';
import SpeedTestSimulator from "@/components/SpeedTestSimulator";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import CoverageModal from "@/components/CoverageModal";
import ContactModal from "@/components/ContactModal";
import {
  Sparkles,
  Check,
  Satellite,
  Flame,
} from "lucide-react";

export default function FeaturesPage() {
  const [coverageOpen, setCoverageOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const comparison = [
    {
      feature: "Average Latency",
      starlink: "18 - 25 ms",
      cellular4G: "90 - 180 ms",
      legacyVsat: "600 - 900 ms",
      localFiber: "40 - 80 ms (frequent cuts)",
    },
    {
      feature: "Download Speed",
      starlink: "180 - 250+ Mbps",
      cellular4G: "8 - 25 Mbps",
      legacyVsat: "5 - 15 Mbps",
      localFiber: "20 - 50 Mbps",
    },
    {
      feature: "Peak-Hour Throttling",
      starlink: "Zero throttling",
      cellular4G: "Severe speed drop (7-10 PM)",
      legacyVsat: "Strict data caps (FUP)",
      localFiber: "Frequent congestion",
    },
    {
      feature: "Weather Penetration",
      starlink: "Phased array beam pierce",
      cellular4G: "Signal drops during rain",
      legacyVsat: "Severe rain fade",
      localFiber: "Underground flooding issues",
    },
    {
      feature: "Concrete Wall Mesh",
      starlink: "Custom Wi-Fi 6 nodes",
      cellular4G: "Single weak modem antenna",
      legacyVsat: "Basic single router",
      localFiber: "Single ISP router",
    },
    {
      feature: "Local On-Site Support",
      starlink: "Samitech 2-hour Buea dispatch",
      cellular4G: "Automated hotline queue",
      legacyVsat: "Days/weeks for parts",
      localFiber: "Call center ticket delay",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#0088FF]/30 selection:text-white">
      <Navbar
        onOpenCoverage={() => setCoverageOpen(true)}
        onOpenContact={() => setContactOpen(true)}
      />

      <main className="pt-20 sm:pt-24 pb-12">
        {/* Hero Header */}
        <section className="px-3.5 sm:px-6 lg:px-12 py-8 sm:py-10 lg:py-12 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8b0000]/15 border border-[#8b0000]/30 text-[#8b0000] text-[11px] sm:text-xs font-semibold mb-3 sm:mb-4 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Space-Grade Hardware Architecture</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mb-3 sm:mb-4 max-w-4xl mx-auto">
            Architected for <span className="text-[#0088FF]">Space</span>,{" "}
            <span className="text-red-500">Engineered</span> for Cameroon.
          </h1>

          <p className="text-xs sm:text-sm lg:text-base text-blue-100 max-w-2xl mx-auto leading-relaxed mb-6">
            Explore the phased-array electronic beam steering, Wi-Fi 6 multi-floor mesh, and low-earth orbit constellation
            that makes Samitech Networks the most reliable connection in student and residential spaces.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5">
            <button
              onClick={() => setContactOpen(true)}
              className="px-5 sm:px-7 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-red-600 via-red-500 to-[#0088FF] hover:from-red-700 hover:to-blue-600 text-white shadow-lg shadow-red-600/30 transition-all cursor-pointer"
            >
              Get Starlink Installed
            </button>
            <button
              onClick={() => setCoverageOpen(true)}
              className="px-6 sm:px-8 py-3 rounded-xl text-xs sm:text-sm font-bold bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-all cursor-pointer"
            >
              Check Local Orbit Coverage
            </button>
          </div>
        </section>

        {/* Feature Grid Component */}
        <PairedCoverflowCarousel />

        {/* Live Speed Simulator Component */}
        <SpeedTestSimulator />

        {/* Deep Tech Breakdown: Phased Array & Weatherproof Heating */}
        <section className="px-3.5 sm:px-6 lg:px-12 max-w-7xl mx-auto py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Phased Array Card */}
            <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-white/[0.08] border border-white/20 backdrop-blur-xl shadow-2xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-red-500/15 border border-red-500/30 flex items-center justify-center text-red-400 mb-6">
                  <Satellite className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-red-400 uppercase tracking-widest block mb-2">
                  Phased Array Antenna
                </span>
                <h3 className="text-2xl font-black text-white tracking-tight mb-3">
                  Electronic Steering Without Moving Gears
                </h3>
                <p className="text-xs sm:text-sm text-blue-100 leading-relaxed mb-6">
                  Traditional satellite dishes require heavy motorized positioning that breaks down in coastal salt air or heavy wind.
                  Starlink uses a flat electronic phased array with hundreds of miniature antenna elements that instantaneously track multiple
                  satellites flying overhead at 27,000 km/h without mechanical vibration.
                </p>

                <div className="space-y-2.5">
                  <div className="flex items-center gap-2.5 text-xs text-blue-200">
                    <Check className="w-4 h-4 text-red-400 shrink-0" />
                    <span>Instant beam handoff every 4 minutes as new satellites crest horizon</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-blue-200">
                    <Check className="w-4 h-4 text-red-400 shrink-0" />
                    <span>100-degree field of view penetrating tree canopies</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-blue-200">
                    <Check className="w-4 h-4 text-red-400 shrink-0" />
                    <span>IP54 weather sealed against volcanic dust and tropical storms</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tropical Heating & Rain Squall Pierce */}
            <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-white/[0.08] border border-white/20 backdrop-blur-xl shadow-2xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#0088FF]/20 border border-[#0088FF]/40 flex items-center justify-center text-[#0088FF] mb-6">
                  <Flame className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-[#0088FF] uppercase tracking-widest block mb-2">
                  Climate Adaptability
                </span>
                <h3 className="text-2xl font-black text-white tracking-tight mb-3">
                  Integrated Thermal Defrost &amp; Rain Squall Pierce
                </h3>
                <p className="text-xs sm:text-sm text-blue-100 leading-relaxed mb-6">
                  Mount Fako slopes and Cameroon coastal belts experience some of the world&apos;s highest precipitation rates.
                  Starlink&apos;s adaptive RF beam dynamically increases transmission gain during downpours, while internal heating
                  elements keep the surface clear of condensation and debris.
                </p>

                <div className="space-y-2.5">
                  <div className="flex items-center gap-2.5 text-xs text-blue-200">
                    <Check className="w-4 h-4 text-[#0088FF] shrink-0" />
                    <span>Dynamic Ku/Ka-band power stepping during torrential rainstorms</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-blue-200">
                    <Check className="w-4 h-4 text-[#0088FF] shrink-0" />
                    <span>Operates reliably from -30°C to +50°C ambient temperatures</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-blue-200">
                    <Check className="w-4 h-4 text-[#0088FF] shrink-0" />
                    <span>Heavy-duty grounding rods protect equipment from Mount Fako lightning strikes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Comparison Table */}
        <section className="px-3.5 sm:px-6 lg:px-12 max-w-7xl mx-auto mb-16 sm:mb-24">
          <div className="rounded-3xl p-6 sm:p-10 bg-white/[0.08] border border-white/20 backdrop-blur-xl shadow-2xl overflow-hidden">
            <div className="text-center mb-8">
              <span className="text-xs font-bold text-red-500 uppercase tracking-widest block mb-2">
                Network Comparison
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                How Samitech Starlink Compares
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-white/20 text-gray-400">
                    <th className="py-3 px-4 font-bold uppercase tracking-wider">Feature</th>
                    <th className="py-3 px-4 font-bold text-[#0088FF] uppercase tracking-wider bg-white/[0.05] rounded-t-xl">
                      Samitech Starlink
                    </th>
                    <th className="py-3 px-4 font-bold text-red-400 uppercase tracking-wider">Regular 4G LTE</th>
                    <th className="py-3 px-4 font-bold uppercase tracking-wider">Legacy VSAT</th>
                    <th className="py-3 px-4 font-bold uppercase tracking-wider">Local Fiber</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {comparison.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.03] transition-colors">
                      <td className="py-3.5 px-4 font-bold text-white">{row.feature}</td>
                      <td className="py-3.5 px-4 font-black text-[#0088FF] bg-white/[0.05]">
                        {row.starlink}
                      </td>
                      <td className="py-3.5 px-4 text-red-400 font-medium">{row.cellular4G}</td>
                      <td className="py-3.5 px-4 text-gray-400">{row.legacyVsat}</td>
                      <td className="py-3.5 px-4 text-gray-300">{row.localFiber}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

      </main>

      <Footer onOpenCoverage={() => setCoverageOpen(true)} />

      <WhatsAppWidget onOpenCoverage={() => setCoverageOpen(true)} />
      <CoverageModal isOpen={coverageOpen} onClose={() => setCoverageOpen(false)} />
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}
