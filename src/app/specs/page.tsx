"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import CoverageModal from "@/components/CoverageModal";
import ContactModal from "@/components/ContactModal";
import {
  Sparkles,
  Radio,
  Wifi,
  Layers,
  Globe2,
  ArrowRight,
} from "lucide-react";

export default function TechSpecsPage() {
  const [coverageOpen, setCoverageOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"terminal" | "router" | "mesh" | "orbit">("terminal");

  const terminalSpecs = [
    { label: "Antenna Type", value: "Electronic Phased Array (Flat High-Gain)" },
    { label: "Field of View", value: "110° Unobstructed Hemispherical Horizon" },
    { label: "Orientation", value: "Software-Assisted Electronic Beam Steering" },
    { label: "Environmental Rating", value: "IP67 Type 4 (Submersible in 1m water for 30m)" },
    { label: "Operating Temperature", value: "-30°C to 50°C (-22°F to 122°F)" },
    { label: "Wind Rating", value: "Operational up to 96 kph+ (60 mph+), Survivability 160 kph+" },
    { label: "Monsoon Precipitation Capability", value: "Dynamic Ku/Ka gain step up to 40mm/hr cloudburst" },
    { label: "Average Power Consumption", value: "50W - 75W (Peak 100W under dynamic heating)" },
    { label: "Input Voltage", value: "100-240V ~ 2.5A 50-60Hz (Inverter Friendly)" },
    { label: "Dish Weight & Dimension", value: "2.9 kg (6.4 lbs) | 59.4 cm × 38.3 cm × 3.97 cm" },
  ];

  const routerSpecs = [
    { label: "Wi-Fi Technology", value: "Wi-Fi 6 (802.11a/b/g/n/ac/ax)" },
    { label: "Radio Generation", value: "Tri-Band 4×4 MU-MIMO with OFDMA Spatial Streams" },
    { label: "Security Encryption", value: "WPA2 / WPA3 Personal & Enterprise" },
    { label: "Physical Interfaces", value: "2× Latching Gigabit Ethernet LAN Ports (10/100/1000 Mbps)" },
    { label: "Coverage Footprint", value: "Up to 297 m² (3,200 sq ft) per single node" },
    { label: "Concurrent Devices", value: "Up to 235 connected devices per routing node" },
    { label: "Mesh Compatibility", value: "Compatible with up to 12 Starlink Mesh Nodes" },
    { label: "Environmental Ingress", value: "IP56 (Water resistant for humid Cameroon indoor corridors)" },
  ];

  const cablingSpecs = [
    { label: "Cable Standard", value: "Cat6 FTP (Foiled Twisted Pair) 23 AWG Solid Bare Copper" },
    { label: "Shielding", value: "Aluminum Mylar Foil + Tinned Copper Ground Drain Wire" },
    { label: "Outer Jacket", value: "Heavy-Duty Dual Layer UV-Resistant PE/PVC (Tropical Weather Rated)" },
    { label: "Connectors", value: "Shielded Metal RJ45 with 50-Micron Gold Plated Contacts" },
    { label: "Lightning Protection", value: "Gas Discharge Tube (GDT) Surge Arrestor on Exterior Ingress" },
    { label: "Maximum Backbone Run", value: "Up to 100m without active signal attenuation" },
  ];

  const orbitSpecs = [
    { label: "Constellation Architecture", value: "Low-Earth Orbit (LEO) Multi-Shell Shell Constellation" },
    { label: "Orbital Altitude", value: "540 km to 570 km above Earth (vs 35,786 km Geostationary)" },
    { label: "Orbital Velocity", value: "~27,000 km/h (Completes 1 Earth orbit every 90 minutes)" },
    { label: "Inter-Satellite Laser Links", value: "Optical Space Lasers operating at speed of light in vacuum" },
    { label: "Gateway Ground Latency", value: "18 ms to 28 ms typical round-trip ping to African PoPs" },
    { label: "Active Constellation Size", value: "Over 6,000+ active satellites in operational orbit" },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#0088FF]/30 selection:text-white">
      <Navbar
        onOpenCoverage={() => setCoverageOpen(true)}
        onOpenContact={() => setContactOpen(true)}
      />

      <main className="pt-24 sm:pt-28 pb-16">
        {/* Header */}
        <section className="px-3.5 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8b0000]/15 border border-[#8b0000]/30 text-[#8b0000] text-xs font-semibold mb-4 sm:mb-6 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Certified Hardware Datasheet</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4 sm:mb-6 max-w-4xl mx-auto">
            SpaceX Starlink <span className="text-[#0088FF]">Technical Specifications</span>
            <span className="text-red-500">.</span>
          </h1>

          <p className="text-xs sm:text-sm lg:text-base text-blue-100 max-w-2xl mx-auto leading-relaxed mb-8">
            Complete architectural, environmental, radio frequency, and power parameters for our Cameroon terminal and mesh deployments.
          </p>

          {/* Tab Selector */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
            <button
              onClick={() => setActiveTab("terminal")}
              className={`px-4 sm:px-6 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === "terminal"
                  ? "bg-[#0088FF] text-white shadow-lg shadow-[#0088FF]/30"
                  : "bg-white/[0.06] text-gray-300 hover:bg-white/[0.12] border border-white/10"
              }`}
            >
              <Radio className="w-3.5 h-3.5" />
              <span>Standard Dish Terminal</span>
            </button>

            <button
              onClick={() => setActiveTab("router")}
              className={`px-4 sm:px-6 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === "router"
                  ? "bg-[#0088FF] text-white shadow-lg shadow-[#0088FF]/30"
                  : "bg-white/[0.06] text-gray-300 hover:bg-white/[0.12] border border-white/10"
              }`}
            >
              <Wifi className="w-3.5 h-3.5" />
              <span>Wi-Fi 6 Router Node</span>
            </button>

            <button
              onClick={() => setActiveTab("mesh")}
              className={`px-4 sm:px-6 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === "mesh"
                  ? "bg-[#0088FF] text-white shadow-lg shadow-[#0088FF]/30"
                  : "bg-white/[0.06] text-gray-300 hover:bg-white/[0.12] border border-white/10"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Cat6 Shielded Cabling</span>
            </button>

            <button
              onClick={() => setActiveTab("orbit")}
              className={`px-4 sm:px-6 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === "orbit"
                  ? "bg-[#0088FF] text-white shadow-lg shadow-[#0088FF]/30"
                  : "bg-white/[0.06] text-gray-300 hover:bg-white/[0.12] border border-white/10"
              }`}
            >
              <Globe2 className="w-3.5 h-3.5" />
              <span>Low-Earth Orbit Metrics</span>
            </button>
          </div>
        </section>

        {/* Specs Table & Details Card in White Glassmorphism */}
        <section className="px-3.5 sm:px-6 lg:px-12 max-w-5xl mx-auto mb-16 sm:mb-24">
          <div className="rounded-3xl p-6 sm:p-10 bg-white/[0.08] hover:bg-white/[0.11] border border-white/20 backdrop-blur-xl shadow-2xl transition-all">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-white/15 gap-4">
              <div>
                <span className="text-xs font-bold text-red-500 uppercase tracking-widest block mb-1">
                  Active Hardware Component
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white">
                  {activeTab === "terminal" && "Standard Phased Array Terminal (Gen 3)"}
                  {activeTab === "router" && "Tri-Band Wi-Fi 6 Router Node"}
                  {activeTab === "mesh" && "Shielded Outdoor Cat6 Cabling & Rigging"}
                  {activeTab === "orbit" && "SpaceX LEO Constellation & Orbital Laser Mesh"}
                </h2>
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#0088FF]/20 text-[#0088FF] border border-[#0088FF]/40 self-start sm:self-auto">
                Certified SpaceX Spec
              </span>
            </div>

            {/* Spec Key-Value List */}
            <div className="divide-y divide-white/10">
              {(activeTab === "terminal"
                ? terminalSpecs
                : activeTab === "router"
                ? routerSpecs
                : activeTab === "mesh"
                ? cablingSpecs
                : orbitSpecs
              ).map((spec, sIdx) => (
                <div
                  key={sIdx}
                  className="py-3.5 sm:py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 hover:bg-white/[0.03] px-2 rounded-lg transition-colors"
                >
                  <span className="text-xs sm:text-sm font-bold text-red-500">
                    {spec.label}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white sm:text-right font-mono">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-blue-200">
                Need customized enterprise or multi-terminal bonded specs?
              </span>
              <button
                onClick={() => setContactOpen(true)}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-red-600 via-red-500 to-[#0088FF] hover:from-red-700 hover:to-blue-600 text-white shadow-lg shadow-red-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Custom Blueprint</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
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
