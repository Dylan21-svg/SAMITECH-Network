"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import CoverageModal from "@/components/CoverageModal";
import ContactModal from "@/components/ContactModal";
import {
  ShieldCheck,
  Award,
  MapPin,
  CheckCircle2,
  Sparkles,
  Phone,
  Radio,
  Cpu,
  Globe,
} from "lucide-react";

export default function AboutPage() {
  const [coverageOpen, setCoverageOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const team = [
    {
      name: "Engr. Samuel T. N.",
      role: "Lead Satellite Architect & Founder",
      bio: "Certified SpaceX Starlink hardware engineer with 8+ years experience deploying RF mesh microwave and satellite backhauls across Central Africa.",
      location: "Buea HQ",
      badge: "Starlink Certified",
    },
    {
      name: "Boris K. Mbi",
      role: "Head of Field Deployments",
      bio: "Specializes in multi-story hostel cabling, phased array rooftop ballast mounts, and high-density UniFi/Wi-Fi 6 wireless distribution.",
      location: "Southwest & Littoral",
      badge: "Field Ops Lead",
    },
    {
      name: "Dr. Vanessa E. Ashu",
      role: "Director of Network Operations",
      bio: "Oversees the 24/7 automated NOC (Network Operations Center), ensuring sub-20ms latency and 99.9% availability SLAs for student dorms.",
      location: "Douala Center",
      badge: "NOC Director",
    },
  ];

  const milestones = [
    { value: "120+", label: "Hostels & Complexes", detail: "Connected across Buea, Douala, & Yaoundé" },
    { value: "15,000+", label: "Active Students & Tenants", detail: "Relying daily on Samitech Starlink" },
    { value: "220+ Mbps", label: "Average Real Throughput", detail: "Consistent beam during peak hours" },
    { value: "< 25ms", label: "Average Ping Latency", detail: "Ideal for coding, trading, and gaming" },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#0088FF]/30 selection:text-white">
      <Navbar
        onOpenCoverage={() => setCoverageOpen(true)}
        onOpenContact={() => setContactOpen(true)}
      />

      <main className="pt-24 sm:pt-28 pb-16">
        {/* Hero Section */}
        <section className="relative px-3.5 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-24 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8b0000]/15 border border-[#8b0000]/30 text-[#8b0000] text-xs font-semibold mb-4 sm:mb-6 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Samitech Mission</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4 sm:mb-6 max-w-4xl mx-auto leading-tight">
            Pioneering Low-Earth Orbit Satellite Connectivity in{" "}
            <span className="text-[#0088FF]">Cameroon</span>
            <span className="text-[#EF4444]">.</span>
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed mb-8">
            Born in Buea (&quot;Silicon Mountain&quot;), Samitech Networks bridges the gap between SpaceX Starlink&apos;s
            cutting-edge satellite constellation and the real-world connectivity challenges faced by student hostels,
            remote studios, and modern apartments.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => setContactOpen(true)}
              className="px-6 sm:px-8 py-3 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-red-600 via-red-500 to-[#0088FF] hover:from-red-700 hover:to-blue-600 text-white shadow-lg shadow-red-600/30 transition-all cursor-pointer"
            >
              Consult With Our Engineers
            </button>
            <button
              onClick={() => setCoverageOpen(true)}
              className="px-6 sm:px-8 py-3 rounded-xl text-xs sm:text-sm font-bold bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-all cursor-pointer"
            >
              Verify Campus Coverage
            </button>
          </div>
        </section>

        {/* Impact Numbers Grid */}
        <section className="px-3.5 sm:px-6 lg:px-12 max-w-7xl mx-auto mb-16 sm:mb-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-white/[0.08] border border-white/20 hover:border-white/35 backdrop-blur-xl shadow-2xl transition-all"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0088FF] mb-1">
                  {m.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-red-500 mb-1">
                  {m.label}
                </div>
                <p className="text-[11px] sm:text-xs text-blue-200/80 leading-snug">
                  {m.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Story & Why Samitech */}
        <section className="px-3.5 sm:px-6 lg:px-12 max-w-7xl mx-auto mb-16 sm:mb-24">
          <div className="rounded-3xl p-6 sm:p-10 lg:p-14 bg-white/[0.08] border border-white/20 backdrop-blur-xl shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Why We Exist</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
                Solving the &quot;Last 100 Meters&quot; of Satellite Internet.
              </h2>

              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                Ordering a Starlink terminal is only the first step. In Cameroon, students and residents frequently struggle with:
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-500/15 border border-red-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3 h-3 text-red-400" />
                  </div>
                  <div>
                    <strong className="text-white text-xs sm:text-sm block">Thick Concrete Wall Penetration</strong>
                    <span className="text-[11px] sm:text-xs text-blue-200/80">Standard routers cannot penetrate dense 3-story concrete hostel blocks without certified mesh node distribution.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#0088FF]/20 border border-[#0088FF]/40 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3 h-3 text-[#0088FF]" />
                  </div>
                  <div>
                    <strong className="text-white text-xs sm:text-sm block">Fair Split Billing Systems</strong>
                    <span className="text-[11px] sm:text-xs text-blue-200/80">We automate room-by-room contributions so student tenants never have to chase roommates for monthly ISP bills.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-500/15 border border-red-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3 h-3 text-red-400" />
                  </div>
                  <div>
                    <strong className="text-white text-xs sm:text-sm block">Tropical Heavy Rainfall Protection</strong>
                    <span className="text-[11px] sm:text-xs text-blue-200/80">Mounts engineered to withstand tropical rainstorms on Mount Fako slopes without beam deflection.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white/[0.06] border border-white/15">
                <Radio className="w-7 h-7 text-[#0088FF] mb-3" />
                <h4 className="text-sm font-bold text-red-500 mb-1">SpaceX Phased Array</h4>
                <p className="text-[11px] text-blue-100">Tracking 6,000+ LEO satellites moving across Cameroon sky at 27,000 km/h.</p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.06] border border-white/15">
                <Cpu className="w-7 h-7 text-red-400 mb-3" />
                <h4 className="text-sm font-bold text-red-500 mb-1">Wi-Fi 6 Mesh Engine</h4>
                <p className="text-[11px] text-blue-100">Dual-band OFDMA technology handling 100+ concurrent devices per node.</p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.06] border border-white/15">
                <Globe className="w-7 h-7 text-[#0088FF] mb-3" />
                <h4 className="text-sm font-bold text-red-500 mb-1">Low-Orbit Latency</h4>
                <p className="text-[11px] text-blue-100">Sub-25ms response time beats traditional geostationary delay by 2500%.</p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.06] border border-white/15">
                <Award className="w-7 h-7 text-red-400 mb-3" />
                <h4 className="text-sm font-bold text-red-500 mb-1">Certified Technicians</h4>
                <p className="text-[11px] text-blue-100">Official Starlink installation toolkit, spectrum analyzers, and safety rigging.</p>
              </div>
            </div>

          </div>
        </section>

        {/* Certified Team */}
        <section className="px-3.5 sm:px-6 lg:px-12 max-w-7xl mx-auto mb-16 sm:mb-24">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-2">
              Our Certified Engineering Leadership
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto">
              Meet the licensed satellite systems experts keeping your student hostel and residence seamlessly online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white/[0.08] hover:bg-white/[0.13] border border-white/20 backdrop-blur-xl shadow-2xl flex flex-col justify-between transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full uppercase bg-[#0088FF] text-white">
                      {member.badge}
                    </span>
                    <span className="text-[11px] text-red-400 flex items-center gap-1 font-semibold">
                      <MapPin className="w-3 h-3" /> {member.location}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-red-500 mb-1">
                    {member.name}
                  </h3>
                  <div className="text-xs font-bold text-[#0088FF] mb-3">
                    {member.role}
                  </div>
                  <p className="text-xs text-blue-100 leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] text-gray-400 uppercase font-mono">Status</span>
                  <span className="text-xs text-emerald-400 font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> On Duty
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="px-3.5 sm:px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-red-600 via-red-500 to-[#0088FF] text-white shadow-2xl text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-3">
              Ready to Upgrade Your Living Space to Orbit-Class Wi-Fi?
            </h2>
            <p className="text-xs sm:text-sm text-white/90 max-w-xl mx-auto mb-6">
              Contact our Buea field dispatch team today for an on-site signal inspection and free hostel quote.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://wa.me/237674137259?text=Hello%20Samitech%20Networks,%20I'd%20like%20to%20schedule%20an%20on-site%20hostel%20installation%20survey."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl text-xs sm:text-sm font-bold bg-white text-black hover:bg-gray-100 transition-all flex items-center gap-2 shadow-lg"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>Chat on WhatsApp (+237 674 137 259)</span>
              </a>
              <button
                onClick={() => setCoverageOpen(true)}
                className="px-6 py-3 rounded-xl text-xs sm:text-sm font-bold bg-black/40 hover:bg-black/60 text-white border border-white/30 transition-all cursor-pointer"
              >
                Check My Hostel Address
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
