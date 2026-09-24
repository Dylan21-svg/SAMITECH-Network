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
import Footer from "@/components/Footer";
import { SolutionItem } from "@/lib/data";

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

      {/* Footer Component */}
      <Footer
        onOpenCoverage={handleOpenCoverage}
        onContactWhatsApp={handleContactWhatsApp}
      />

      {/* Coverage Checker Modal */}
      <CoverageModal
        isOpen={coverageOpen}
        onClose={() => setCoverageOpen(false)}
      />
    </div>
  );
}

