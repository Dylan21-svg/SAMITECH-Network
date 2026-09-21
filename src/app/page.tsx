"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeBanner from "@/components/MarqueeBanner";
import StatsStrip from "@/components/StatsStrip";
import SolutionsSection from "@/components/SolutionsSection";
import TechFeatures from "@/components/TechFeatures";
import SpeedTestSimulator from "@/components/SpeedTestSimulator";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import CoverageModal from "@/components/CoverageModal";
import { SolutionItem } from "@/lib/data";
import { Wifi, Phone, MapPin, Mail, ArrowUp } from "lucide-react";

export default function Home() {
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

  const handleSelectSolution = (solution: SolutionItem) => {
    handleContactWhatsApp(
      `Hello Samitech Networks, I am interested in the ${solution.title} (${solution.badge}) package for my facility.`
    );
  };

  const handleSelectPlan = (planName: string) => {
    handleContactWhatsApp(
      `Hello Samitech Networks, I would like to inquire about the ${planName} plan.`
    );
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0B0F17] text-white flex flex-col selection:bg-[#0088FF] selection:text-white">
      {/* Top Navigation */}
      <Navbar
        onOpenCoverage={handleOpenCoverage}
        onOpenContact={() => handleContactWhatsApp()}
      />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection
          onOpenCoverage={handleOpenCoverage}
          onOpenContact={() => handleContactWhatsApp()}
        />

        {/* 2. Red Marquee Announcement Banner */}
        <MarqueeBanner />

        {/* 3. Real-Time Stats Strip */}
        <StatsStrip />

        {/* 3. Solutions by Living Space (Hostels, Rooms, Apartments) */}
        <SolutionsSection onSelectSolution={handleSelectSolution} />

        {/* 4. Technology Features & Specs */}
        <TechFeatures />

        {/* 5. Live Interactive Speed Test Simulator */}
        <SpeedTestSimulator />

        {/* 6. Pricing & Deployment Tiers */}
        <PricingSection onSelectPlan={handleSelectPlan} />

        {/* 7. Testimonials & Social Proof */}
        <TestimonialsSection />

        {/* 8. FAQ Accordion */}
        <FAQSection />

        {/* 9. Contact / WhatsApp CTA Strip */}
        <WhatsAppWidget onOpenCoverage={handleOpenCoverage} />
      </main>

      {/* Footer */}
      <footer className="bg-[#080C13] border-t border-white/10 pt-10 sm:pt-14 lg:pt-16 pb-28 md:pb-12 px-3.5 sm:px-6 lg:px-12 text-gray-400">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 pb-8 sm:pb-10 lg:pb-12 border-b border-white/10">
          {/* Col 1: Brand Info */}
          <div className="md:col-span-1 space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-[#0088FF] to-[#8b0000] p-[1.5px] flex items-center justify-center">
                <div className="w-full h-full bg-[#0B0F17] rounded-full flex items-center justify-center">
                  <Wifi className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0088FF]" />
                </div>
              </div>
              <span className="font-extrabold text-sm sm:text-base tracking-wider text-white">
                SAMITECH NETWORKS
              </span>
            </div>
            <p className="text-[11px] sm:text-xs leading-relaxed text-gray-400">
              Cameroon&apos;s premier certified Starlink installer and high-speed satellite
              mesh networking provider for student hostels, rooms, and residences.
            </p>
            <div className="text-[11px] sm:text-xs text-gray-300 font-semibold">
              Authorized Starlink Deployment Partner
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-2.5 sm:space-y-3">
            <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-[11px] sm:text-xs">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Solutions &amp; Services
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Technology Specs
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Pricing Plans
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Deployments */}
          <div className="space-y-2.5 sm:space-y-3">
            <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
              Deployments
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-[11px] sm:text-xs">
              <li>
                <span className="text-gray-300">University Student Hostels</span>
              </li>
              <li>
                <span className="text-gray-300">Single Rooms &amp; Studios</span>
              </li>
              <li>
                <span className="text-gray-300">Residential Apartments</span>
              </li>
              <li>
                <span className="text-gray-300">Campus Tech Hubs &amp; Coworking</span>
              </li>
              <li>
                <span className="text-gray-300">Commercial Multi-Floor Mesh</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Support */}
          <div className="space-y-2.5 sm:space-y-3">
            <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
              Direct Contact
            </h4>
            <div className="space-y-2 text-[11px] sm:text-xs">
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0088FF]" />
                <span>+237 674 137 259</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8b0000]" />
                <span>support@samitech.network</span>
              </div>
              <div className="flex items-start gap-2 text-gray-300">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0088FF] shrink-0 mt-0.5" />
                <span>Molyko Buea / Douala / Yaoundé, Cameroon</span>
              </div>
            </div>
            <button
              onClick={handleOpenCoverage}
              className="mt-2 w-full py-2 sm:py-2.5 px-3 sm:px-4 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/15 text-white border border-white/10 transition-colors text-center"
            >
              Verify Regional Coverage
            </button>
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="max-w-7xl mx-auto pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs text-gray-400 gap-3 sm:gap-4">
          <p>
            &copy; {new Date().getFullYear()} SAMITECH Corporation. All rights reserved.
          </p>
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="hover:text-gray-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-gray-300 cursor-pointer">Terms of Service</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 sm:p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
              title="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>
      </footer>

      {/* Coverage Checker Modal */}
      <CoverageModal
        isOpen={coverageOpen}
        onClose={() => setCoverageOpen(false)}
      />
    </div>
  );
}

