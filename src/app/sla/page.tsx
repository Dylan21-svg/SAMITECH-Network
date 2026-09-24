"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import CoverageModal from "@/components/CoverageModal";
import ContactModal from "@/components/ContactModal";
import { Award, ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function SLAPage() {
  const [coverageOpen, setCoverageOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#0088FF]/30 selection:text-white">
      <Navbar
        onOpenCoverage={() => setCoverageOpen(true)}
        onOpenContact={() => setContactOpen(true)}
      />

      <main className="pt-24 sm:pt-28 pb-16">
        <section className="px-3.5 sm:px-6 lg:px-12 py-10 sm:py-14 max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </Link>

          <div className="rounded-3xl p-6 sm:p-10 lg:p-12 bg-white/[0.08] border border-white/20 backdrop-blur-xl shadow-2xl space-y-8">
            <div className="border-b border-white/15 pb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider mb-3">
                <Award className="w-3.5 h-3.5" /> Performance Guarantees
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                Service Level Agreement (SLA) &amp; Guarantees
              </h1>
              <p className="text-xs text-gray-400 mt-2">
                Commercial &amp; Student Living Performance Standards · Samitech Networks
              </p>
            </div>

            {/* SLA Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-white/[0.05] border border-white/10 text-center">
                <div className="text-2xl font-black text-[#0088FF]">99.9%</div>
                <div className="text-xs font-bold text-red-500">Core Uptime Target</div>
                <span className="text-[10px] text-gray-400">Monthly availability SLA</span>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.05] border border-white/10 text-center">
                <div className="text-2xl font-black text-[#0088FF]">&lt; 25 ms</div>
                <div className="text-xs font-bold text-red-500">Low Latency Guarantee</div>
                <span className="text-[10px] text-gray-400">Low-orbit laser mesh</span>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.05] border border-white/10 text-center">
                <div className="text-2xl font-black text-[#0088FF]">2 Hours</div>
                <div className="text-xs font-bold text-red-500">Buea On-Site Dispatch</div>
                <span className="text-[10px] text-gray-400">Emergency physical response</span>
              </div>
            </div>

            <div className="space-y-6 text-xs sm:text-sm text-blue-100 leading-relaxed">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-red-500 mb-2">
                  1. Network Availability Standards
                </h3>
                <p>
                  Samitech Networks maintains a 99.9% uptime standard for all installed multi-device mesh nodes.
                  Our automated Network Operations Center monitors downlink throughput, signal attenuation, and Wi-Fi node
                  health around the clock. If a line drops, automated alerts dispatch a technician before hostel wardens notice.
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold text-red-500 mb-2">
                  2. Rapid Field Technician Dispatch
                </h3>
                <p>
                  In the event of hardware disturbance, cable cuts by external contractors, or lightning events:
                </p>
                <div className="space-y-2 mt-3">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Buea / Molyko Hub:</strong> On-site technician arrival within 2 hours of ticket log.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Douala / Yaoundé Hubs:</strong> Same-day technician dispatch and hardware inspection.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Hardware Replacement:</strong> Immediate swap of fried routers or damaged cables from local warehouse stock.</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold text-red-500 mb-2">
                  3. Service Credits &amp; Downtime Compensation
                </h3>
                <p>
                  If cumulative network downtime exceeds 0.5% in any given calendar month due to Samitech hardware or cabling failure,
                  affected hostel rooms and subscribers will receive pro-rated billing credits automatically applied to their next month&apos;s renewal.
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold text-red-500 mb-2">
                  4. Weather &amp; Extreme Cloudburst Exceptions
                </h3>
                <p>
                  Temporary signal attenuation during rare, violent monsoon cloudbursts exceeding 80mm/hour is an inherent property
                  of atmospheric RF physics. The dish automatically recovers full gigabit transmission within minutes of rain weakening.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-gray-400">
                Hostel committee enterprise contracts: support@samitech.network
              </span>
              <Link
                href="/terms"
                className="text-xs font-bold text-[#0088FF] hover:underline"
              >
                View Terms of Service &rarr;
              </Link>
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
