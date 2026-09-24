"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingSection from "@/components/PricingSection";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import CoverageModal from "@/components/CoverageModal";
import ContactModal from "@/components/ContactModal";
import {
  Sparkles,
  Calculator,
  Users,
  ArrowRight,
} from "lucide-react";

export default function PricingPage() {
  const [coverageOpen, setCoverageOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>("Hostel Standard");

  // Split-billing calculator states
  const [studentCount, setStudentCount] = useState<number>(12);
  const [totalMonthlyFee, setTotalMonthlyFee] = useState<number>(45000); // 45,000 FCFA typical shared subscription

  const perStudentCost = Math.round(totalMonthlyFee / studentCount);
  const monthlyMobileDataAverage = 12000; // 12,000 FCFA spent on 4G bundles
  const studentSavings = Math.max(0, monthlyMobileDataAverage - perStudentCost);

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
            <span>Zero Hidden Fees · Transparent Pricing</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4 sm:mb-6 max-w-4xl mx-auto">
            Affordable Gigabit Satellite Plans for{" "}
            <span className="text-[#0088FF]">Cameroon</span>
            <span className="text-red-500">.</span>
          </h1>

          <p className="text-xs sm:text-sm lg:text-base text-blue-100 max-w-2xl mx-auto leading-relaxed mb-8">
            Whether you&apos;re an entire hostel splitting costs across 30 rooms, a private resident in a single studio,
            or an apartment complex, we provide tailored packages with local Mobile Money payment flexibility.
          </p>
        </section>

        {/* Pricing Cards Grid Component */}
        <PricingSection
          onSelectPlan={(plan) => {
            setSelectedPlan(plan);
            setContactOpen(true);
          }}
        />

        {/* Interactive Split Billing Student Calculator */}
        <section className="px-3.5 sm:px-6 lg:px-12 max-w-5xl mx-auto my-16 sm:my-24">
          <div className="rounded-3xl p-6 sm:p-10 lg:p-12 bg-white/[0.08] hover:bg-white/[0.12] border border-white/20 backdrop-blur-xl shadow-2xl transition-all">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/15">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold text-red-500 uppercase tracking-widest mb-1">
                  <Calculator className="w-4 h-4" />
                  <span>Hostel Savings Calculator</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  See How Much Your Hostel Tenants Save
                </h2>
              </div>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#0088FF]/20 text-[#0088FF] border border-[#0088FF]/40 self-start sm:self-auto">
                Real-Time Estimates (FCFA)
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Inputs */}
              <div className="md:col-span-6 space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-red-400" />
                      Number of Contributing Students / Rooms
                    </label>
                    <span className="text-lg font-black text-[#0088FF]">
                      {studentCount} Students
                    </span>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="60"
                    step="1"
                    value={studentCount}
                    onChange={(e) => setStudentCount(Number(e.target.value))}
                    className="w-full accent-[#0088FF] h-2 bg-white/20 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                    <span>3 Rooms (Studio flat)</span>
                    <span>20 Rooms (Medium hostel)</span>
                    <span>60 Rooms (Large complex)</span>
                  </div>
                </div>

                <div>
                  <label className="text-xs sm:text-sm font-bold text-white block mb-2">
                    Select Starlink Shared Tier
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setTotalMonthlyFee(38000)}
                      className={`p-3 rounded-xl border text-xs font-bold transition-all text-left ${
                        totalMonthlyFee === 38000
                          ? "bg-white/[0.16] border-[#0088FF] text-white"
                          : "bg-white/[0.04] border-white/10 text-gray-300 hover:bg-white/[0.08]"
                      }`}
                    >
                      <span className="block text-red-400">Standard Tier</span>
                      <span className="text-sm font-black text-white">38,000 FCFA/mo</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setTotalMonthlyFee(48000)}
                      className={`p-3 rounded-xl border text-xs font-bold transition-all text-left ${
                        totalMonthlyFee === 48000
                          ? "bg-white/[0.16] border-[#0088FF] text-white"
                          : "bg-white/[0.04] border-white/10 text-gray-300 hover:bg-white/[0.08]"
                      }`}
                    >
                      <span className="block text-red-400">High-Density Tier</span>
                      <span className="text-sm font-black text-white">48,000 FCFA/mo</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Calculated Outputs in White Glass Card */}
              <div className="md:col-span-6 p-6 rounded-2xl bg-white/[0.08] border-2 border-[#0088FF] shadow-lg shadow-[#0088FF]/15">
                <div className="text-xs font-bold text-red-400 uppercase tracking-wider mb-1">
                  Estimated Cost Per Student
                </div>
                <div className="text-3xl sm:text-4xl font-black text-[#0088FF] mb-3">
                  {perStudentCost.toLocaleString()} FCFA{" "}
                  <span className="text-xs font-bold text-gray-300 uppercase">/ month</span>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.06] border border-white/10 mb-4">
                  <div className="text-[11px] text-gray-300 mb-1">
                    Compared to individual 4G bundles (~12,000 FCFA/mo):
                  </div>
                  <div className="text-sm font-extrabold text-emerald-400">
                    Each student saves ~{studentSavings.toLocaleString()} FCFA every month!
                  </div>
                </div>

                <button
                  onClick={() => setContactOpen(true)}
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-red-600 via-red-500 to-[#0088FF] hover:from-red-700 hover:to-blue-600 text-white shadow-lg shadow-red-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Lock In This Hostel Rate</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Methods Accepted */}
        <section className="px-3.5 sm:px-6 lg:px-12 max-w-7xl mx-auto mb-16">
          <div className="rounded-3xl p-6 sm:p-8 bg-white/[0.06] border border-white/15 text-center">
            <h3 className="text-base sm:text-lg font-bold text-white mb-2">
              Flexible Local Payment Methods Supported
            </h3>
            <p className="text-xs text-gray-400 max-w-xl mx-auto mb-6">
              We accommodate Cameroon banking and mobile money channels for zero-friction monthly renewals.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-bold text-gray-200">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span>MTN Mobile Money (MoMo)</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
                <span>Orange Money</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0088FF]" />
                <span>UBA / Afriland / Local Bank Transfer</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span>On-Site Technician Cash Receipt</span>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer onOpenCoverage={() => setCoverageOpen(true)} />

      <WhatsAppWidget onOpenCoverage={() => setCoverageOpen(true)} />
      <CoverageModal isOpen={coverageOpen} onClose={() => setCoverageOpen(false)} />
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        defaultPlan={selectedPlan}
      />
    </div>
  );
}
