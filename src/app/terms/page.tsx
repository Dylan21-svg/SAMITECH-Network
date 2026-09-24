"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import CoverageModal from "@/components/CoverageModal";
import ContactModal from "@/components/ContactModal";
import { FileText, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
  const [coverageOpen, setCoverageOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#0088FF]/30 selection:text-white">
      <Navbar
        onOpenCoverage={() => setCoverageOpen(true)}
        onOpenContact={() => setContactOpen(true)}
      />

      <main className="pt-20 sm:pt-24 pb-12">
        <section className="px-3.5 sm:px-6 lg:px-12 py-6 sm:py-8 max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </Link>

          <div className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 bg-white/[0.08] border border-white/20 backdrop-blur-xl shadow-2xl space-y-6">
            <div className="border-b border-white/15 pb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 text-xs font-bold uppercase tracking-wider mb-3">
                <FileText className="w-3.5 h-3.5" /> Legal Governance
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                Terms of Service &amp; Deployment Agreement
              </h1>
              <p className="text-xs text-gray-400 mt-2">
                Last updated: October 2026 · Samitech Networks Corporation (Cameroon)
              </p>
            </div>

            <div className="space-y-6 text-xs sm:text-sm text-blue-100 leading-relaxed">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-red-500 mb-2">
                  1. Scope of Service &amp; Relationship
                </h3>
                <p>
                  Samitech Networks provides satellite internet installation, structural mounting, Wi-Fi 6 mesh routing,
                  and technical maintenance utilizing SpaceX Starlink low-Earth orbit satellite infrastructure.
                  By engaging Samitech Networks for installation or subscribing to our monthly shared/dedicated access plans,
                  the client (&quot;Hostel Warden&quot;, &quot;Student Tenant&quot;, or &quot;Property Owner&quot;) agrees to these binding terms.
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold text-red-500 mb-2">
                  2. Hardware Mounting &amp; Property Permissions
                </h3>
                <p>
                  Prior to physical rooftop rigging, the client guarantees they have obtained requisite authorization from the building
                  proprietor or hostel management committee. Samitech installers use non-destructive ballast mounts or structurally sealed
                  brackets engineered to prevent roof leakages during Cameroon tropical rainy seasons.
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold text-red-500 mb-2">
                  3. Split Billing, Payments, and Service Continuity
                </h3>
                <p>
                  For student hostels utilizing our split-billing gateway:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-300">
                  <li>Subscriptions are prepaid on a 30-day calendar cycle via MTN Mobile Money, Orange Money, or approved bank wire.</li>
                  <li>A 48-hour grace period is granted upon billing renewal before automated node authentication restriction occurs.</li>
                  <li>No refunds are provided for partial-month disconnections requested by tenants vacating early during semester breaks.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold text-red-500 mb-2">
                  4. Acceptable Network Use
                </h3>
                <p>
                  Clients agree not to utilize Samitech satellite connections for unlawful activities, including unauthorized intrusion,
                  distributed denial-of-service (DDoS) attacks, or transmission of malicious payloads. Unreasonable bandwidth hoarding
                  that circumvents per-room QoS fairness scripts may trigger automatic throttling of the offending MAC address.
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold text-red-500 mb-2">
                  5. Governing Law &amp; Dispute Resolution
                </h3>
                <p>
                  These terms are governed by the laws of the Republic of Cameroon. Any disputes arising out of equipment deployment
                  or subscription agreements shall be submitted to the competent courts of Fako Division, South West Region, Cameroon.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-gray-400">
                Questions about our terms? Contact our legal desk at legal@samitech.network
              </span>
              <Link
                href="/privacy"
                className="text-xs font-bold text-[#0088FF] hover:underline"
              >
                Read Privacy Policy &rarr;
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
