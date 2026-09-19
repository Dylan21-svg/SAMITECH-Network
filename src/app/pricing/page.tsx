"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import PricingSection from "@/components/PricingSection";
import CoverageModal from "@/components/CoverageModal";
import { ArrowUp } from "lucide-react";

export default function PricingPage() {
  const [coverageOpen, setCoverageOpen] = useState(false);

  const handleOpenCoverage = () => {
    setCoverageOpen(true);
  };

  const handleContactWhatsApp = (message?: string) => {
    const defaultMsg =
      message ||
      "Hello Samitech Networks, I would like to get started with Starlink Internet.";
    const url = `https://wa.me/237674137259?text=${encodeURIComponent(defaultMsg)}`;
    window.open(url, "_blank");
  };

  const handleSelectPlan = (planName: string) => {
    handleContactWhatsApp(`Hello Samitech Networks, I would like to inquire about the ${planName} plan.`);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0B0F17] text-white flex flex-col selection:bg-[#0088FF] selection:text-white">
      {/* Top Navigation */}
      <Navbar onOpenCoverage={handleOpenCoverage} onOpenContact={() => handleContactWhatsApp()} />

      <main className="flex-1 flex flex-col items-center justify-center p-8">
        <PricingSection onSelectPlan={handleSelectPlan} />
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 pt-10 pb-8 px-4 sm:px-6 lg:px-8 text-gray-400">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>&copy; {new Date().getFullYear()} SAMITECH Corporation. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-gray-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-gray-300 cursor-pointer">Terms of Service</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </footer>

      {/* Coverage Checker Modal */}
      <CoverageModal isOpen={coverageOpen} onClose={() => setCoverageOpen(false)} />
    </div>
  );
}
