"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import CoverageModal from "@/components/CoverageModal";
import ContactModal from "@/components/ContactModal";
import {
  Building2,
  Home as HomeIcon,
  Radio,
  Briefcase,
  Wrench,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Phone,
  Server,
} from "lucide-react";

export default function ServicesPage() {
  const [coverageOpen, setCoverageOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const services = [
    {
      id: "hostel",
      icon: Building2,
      badge: "Flagship Solution",
      highlight: true,
      title: "Student Hostel Mesh Infrastructure",
      subtitle: "Full-building high-density deployment for 40 to 150+ students",
      description:
        "Designed specifically for student complexes in Molyko, UB Junction, and student hubs. We run shielded Cat6 outdoor cabling, mount heavy-duty rooftop mast fixtures, and place Wi-Fi 6 access points on every corridor so zero rooms suffer from dead zones.",
      features: [
        "Shielded Cat6 backbone & multi-floor node distribution",
        "Individual tenant authentication & bandwidth fairness (QoS)",
        "Zero-drama automated split billing for hostel committees",
        "Ruggedized rooftop mast resistant to violent Mount Fako wind squalls",
      ],
      idealFor: "Hostel owners, student delegates, 2-4 floor residential complexes",
    },
    {
      id: "rooms",
      icon: HomeIcon,
      badge: "Compact & Private",
      highlight: false,
      title: "Private Rooms & Student Studios",
      subtitle: "Dedicated gigabit terminal for 1 to 8 personal devices",
      description:
        "Need clean, uninterrupted bandwidth for remote software development, forex trading, YouTube uploading, or online university exams? Get your own dedicated Starlink terminal installed on your window/balcony bracket.",
      features: [
        "100% private bandwidth with zero roommates sharing your line",
        "Portable setup that you can relocate when switching hostels",
        "Sub-20ms ping for remote desktop and competitive gaming",
        "Plug-and-play Wi-Fi 6 router with zero maintenance headache",
      ],
      idealFor: "Software developers, university researchers, forex traders, master's students",
    },
    {
      id: "residential",
      icon: Radio,
      badge: "Whole-Home Wi-Fi",
      highlight: false,
      title: "Apartments & Executive Residences",
      subtitle: "Complete multi-room coverage for modern families and executives",
      description:
        "Equip your entire flat with seamless roaming. Move from the master bedroom to the living room or balcony without your Zoom or WhatsApp video call dropping, powered by our custom mesh repeaters.",
      features: [
        "Simultaneous 4K/8K smart TV streaming on multiple screens",
        "Guest network isolation and parental content controls",
        "UPS battery backup integration for uninterrupted power during outages",
        "Clean, aesthetic in-wall cabling with zero dangling wires",
      ],
      idealFor: "Executive residential flats, expatriate staff, family townhouses",
    },
    {
      id: "commercial",
      icon: Briefcase,
      badge: "Enterprise Grade",
      highlight: true,
      title: "Co-Working Hubs & Tech Startups",
      subtitle: "Dual-WAN bonded satellite connectivity with 99.9% uptime SLA",
      description:
        "Keep your engineering team, design agency, or co-working space shipping code without fiber cuts or telecom blackouts. We provide redundant dual-satellite failover and captive portal management.",
      features: [
        "Dual-WAN router bonding Starlink with local fiber backup",
        "Custom captive portal with branded login vouchers",
        "Priority Tier-1 satellite traffic routing directly through SpaceX gateway",
        "Dedicated account manager & 1-hour physical on-site emergency SLA",
      ],
      idealFor: "Silicon Mountain tech hubs, incubation spaces, creative agencies, fintechs",
    },
    {
      id: "roam",
      icon: Server,
      badge: "Mobile Field Ops",
      highlight: false,
      title: "Starlink Roam & Field Operations",
      subtitle: "Rapid-deploy connectivity for remote projects across Central Africa",
      description:
        "Taking your research team, filming crew, or field engineers to remote locations outside cellular coverage? We provision and package ruggedized transport cases with portable solar-battery power generators.",
      features: [
        "Mil-spec waterproof Pelican transport cases",
        "Pure sine-wave portable solar inverter power stations",
        "Global Roam subscription active anywhere on African continent",
        "5-minute rapid deployment with zero tools required",
      ],
      idealFor: "Documentary crews, mining & exploration, NGO missions, field research",
    },
    {
      id: "maintenance",
      icon: Wrench,
      badge: "24/7 Rapid Care",
      highlight: false,
      title: "Preventive Care & Repair Hotline",
      subtitle: "Local Cameroon emergency technician dispatch and hardware care",
      description:
        "Already have a Starlink dish that suffered lightning surges, cable damage, or misalignment? Samitech Networks provides replacement cables, Ethernet adapters, lightning surge protectors, and dish realignment.",
      features: [
        "Official Starlink Gen 2 & Gen 3 replacement cables in local stock",
        "Ethernet adapters, bypass mode configurations, & PoE injectors",
        "Grounding rod installation and lightning surge arrestors",
        "Signal spectrum sweep and azimuth realignment for maximum throughput",
      ],
      idealFor: "Existing Starlink owners, hostel managers needing urgent cable fixes",
    },
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
            <span>Turnkey Starlink Deployments</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4 sm:mb-6 max-w-4xl mx-auto">
            Engineered Satellite Solutions for{" "}
            <span className="text-[#0088FF]">Every Living Space</span>
            <span className="text-[#EF4444]">.</span>
          </h1>

          <p className="text-xs sm:text-sm lg:text-base text-blue-100 max-w-2xl mx-auto leading-relaxed mb-8">
            From multi-story student hostels in Molyko to private development studios and corporate innovation hubs,
            Samitech delivers end-to-end installation, cabling, Wi-Fi 6 mesh distribution, and local support.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setContactOpen(true)}
              className="px-6 sm:px-8 py-3 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-red-600 via-red-500 to-[#0088FF] hover:from-red-700 hover:to-blue-600 text-white shadow-lg shadow-red-600/30 transition-all cursor-pointer"
            >
              Request an On-Site Survey
            </button>
            <a
              href="https://wa.me/237674137259?text=Hello%20Samitech%20Networks,%20I%20would%20like%20to%20inquire%20about%20your%20Starlink%20installation%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-8 py-3 rounded-xl text-xs sm:text-sm font-bold bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Direct WhatsApp Desk</span>
            </a>
          </div>
        </section>

        {/* Services Grid (Using the exact white glassmorphism, red and blue styling) */}
        <section className="px-3.5 sm:px-6 lg:px-12 max-w-7xl mx-auto mb-16 sm:mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 items-stretch">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  id={svc.id}
                  key={svc.id}
                  className={`scroll-mt-28 rounded-2xl sm:rounded-3xl p-6 sm:p-7 lg:p-8 flex flex-col justify-between transition-all duration-300 relative backdrop-blur-xl shadow-2xl ${
                    svc.highlight
                      ? "bg-white/[0.14] hover:bg-white/[0.18] border-2 border-[#0088FF] shadow-[#0088FF]/20"
                      : "bg-white/[0.08] hover:bg-white/[0.13] border border-white/20 hover:border-white/35"
                  }`}
                >
                  <div>
                    {/* Header Row */}
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`text-[10px] sm:text-[11px] font-bold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full uppercase tracking-wider ${
                          svc.highlight
                            ? "bg-[#0088FF] text-white shadow-md shadow-blue-500/25"
                            : "bg-red-500/20 text-red-400 border border-red-500/30"
                        }`}
                      >
                        {svc.badge}
                      </span>

                      <div className="w-10 h-10 rounded-xl bg-red-500/15 border border-red-500/30 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-red-400" />
                      </div>
                    </div>

                    <h3 className="text-xl font-extrabold text-red-500 tracking-tight mb-1">
                      {svc.title}
                    </h3>
                    <div className="text-xs font-semibold text-[#0088FF] mb-3">
                      {svc.subtitle}
                    </div>

                    <p className="text-xs text-blue-200/90 leading-relaxed mb-5">
                      {svc.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2 mb-6">
                      {svc.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5">
                          <div className="w-4 h-4 rounded-full bg-red-500/15 border border-red-500/30 flex items-center justify-center shrink-0 mt-0.5">
                            <CheckCircle2 className="w-2.5 h-2.5 text-red-400" />
                          </div>
                          <span className="text-xs text-blue-100 font-medium leading-snug">
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Footer Details */}
                  <div className="pt-4 border-t border-white/15">
                    <div className="text-[11px] text-gray-400 mb-3">
                      <strong className="text-red-400 font-semibold block">Ideal For:</strong>
                      <span>{svc.idealFor}</span>
                    </div>

                    <button
                      onClick={() => setContactOpen(true)}
                      className={`w-full py-3 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                        svc.highlight
                          ? "bg-gradient-to-r from-red-600 via-red-500 to-[#0088FF] hover:from-red-700 hover:to-blue-600 text-white shadow-lg shadow-red-600/30"
                          : "bg-[#0088FF] hover:bg-blue-600 text-white shadow-md shadow-blue-500/20"
                      }`}
                    >
                      <span>Inquire About This Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Deployment Process */}
        <section className="px-3.5 sm:px-6 lg:px-12 max-w-7xl mx-auto mb-16 sm:mb-24">
          <div className="rounded-3xl p-6 sm:p-10 lg:p-12 bg-white/[0.08] border border-white/20 backdrop-blur-xl shadow-2xl">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs font-bold text-red-500 uppercase tracking-widest block mb-2">
                Turnkey Workflow
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                How A Samitech Installation Works
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 relative">
                <span className="text-3xl font-black text-[#0088FF]/30 absolute top-4 right-4">01</span>
                <h4 className="text-base font-bold text-red-500 mb-2">Site &amp; Sky Survey</h4>
                <p className="text-xs text-blue-100">
                  Technician performs a digital satellite obstruction sweep using SpaceX tools to determine the 100% clear sky field.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 relative">
                <span className="text-3xl font-black text-[#0088FF]/30 absolute top-4 right-4">02</span>
                <h4 className="text-base font-bold text-red-500 mb-2">Rooftop Rigging</h4>
                <p className="text-xs text-blue-100">
                  Heavy-duty non-penetrating ballast or structural wall mount attached, weather-sealed against tropical rain and lightning.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 relative">
                <span className="text-3xl font-black text-[#0088FF]/30 absolute top-4 right-4">03</span>
                <h4 className="text-base font-bold text-red-500 mb-2">Mesh Routing</h4>
                <p className="text-xs text-blue-100">
                  High-speed Cat6 cabling terminated to Wi-Fi 6 access points positioned on every floor to conquer dense concrete walls.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 relative">
                <span className="text-3xl font-black text-[#0088FF]/30 absolute top-4 right-4">04</span>
                <h4 className="text-base font-bold text-red-500 mb-2">Beam Handover</h4>
                <p className="text-xs text-blue-100">
                  Speed test validation (200+ Mbps verified in front of tenants/warden), billing setup, and WhatsApp support group onboarding.
                </p>
              </div>
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
