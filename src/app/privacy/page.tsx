"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import CoverageModal from "@/components/CoverageModal";
import ContactModal from "@/components/ContactModal";
import { Lock, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0088FF]/20 text-[#0088FF] border border-[#0088FF]/30 text-xs font-bold uppercase tracking-wider mb-3">
                <Lock className="w-3.5 h-3.5" /> Privacy &amp; Data Rights
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                Privacy &amp; Data Protection Policy
              </h1>
              <p className="text-xs text-gray-400 mt-2">
                Last updated: October 2026 · Samitech Networks Corporation (Cameroon)
              </p>
            </div>

            <div className="space-y-6 text-xs sm:text-sm text-blue-100 leading-relaxed">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-red-500 mb-2">
                  1. Zero Traffic Logging Commitment
                </h3>
                <p>
                  At Samitech Networks, student and resident privacy is absolute. We do not inspect, log, store, or monetize
                  your web browsing history, DNS queries, visited domains, or encrypted SSL/TLS payload data. Traffic moves directly
                  from our local Wi-Fi 6 access points to the SpaceX Starlink space laser constellation without intermediate proxy inspection.
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold text-red-500 mb-2">
                  2. Information We Collect For Billing &amp; Dispatch
                </h3>
                <p>
                  We collect strictly the operational data necessary to service your connection:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-300">
                  <li>Client contact information (Name, WhatsApp phone number, hostel room identifier).</li>
                  <li>Payment transaction identifiers (MTN MoMo or Orange Money transaction codes for receipting).</li>
                  <li>Telemetry signal health (Satellite signal-to-noise ratio, dish temperature, packet drop rates) for proactive repair.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold text-red-500 mb-2">
                  3. Protection of Financial Data
                </h3>
                <p>
                  Samitech Networks never stores banking credentials, PIN codes, or debit card CVVs. Mobile money payments
                  are validated via direct operator USSD or official Cameroon merchant APIs.
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold text-red-500 mb-2">
                  4. Your Rights Under Cameroon Telecommunications Regulations
                </h3>
                <p>
                  Residents have the right to inspect their account profile, request deletion of contact records upon graduating
                  or moving out of the hostel, and opt out of promotional broadcast SMS alerts at any time.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-gray-400">
                Data protection inquiries: privacy@samitech.network
              </span>
              <Link
                href="/sla"
                className="text-xs font-bold text-[#0088FF] hover:underline"
              >
                Read Service Level Agreement (SLA) &rarr;
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
