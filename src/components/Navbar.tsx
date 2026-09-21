"use client";

import React, { useState, useEffect } from "react";
import { User, Menu, X, Phone, CheckCircle2, Wifi, ChevronRight } from "lucide-react";

interface NavbarProps {
  onOpenCoverage: () => void;
  onOpenContact: () => void;
}

export default function Navbar({ onOpenCoverage, onOpenContact }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#about" },
    { name: "Service", href: "#services" },
    { name: "Feature", href: "#features" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 w-full transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? "bg-[#0B0F17]/60 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/25 py-2.5 sm:py-3"
          : "bg-transparent border-b border-transparent py-3 sm:py-4 lg:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Group (Left): Samitech Networks */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 rounded-full bg-gradient-to-tr from-[#0088FF] via-[#111827] to-[#8b0000] p-[1.5px] flex items-center justify-center shadow-lg">
            <div className="w-full h-full bg-[#0B0F17] rounded-full flex items-center justify-center">
              <Wifi className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-[#0088FF]" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1 sm:gap-1.5">
              <span className="font-extrabold text-xs sm:text-sm lg:text-base tracking-wider text-white">
                SAMITECH
              </span>
              <span className="text-[9px] sm:text-[10px] lg:text-xs font-semibold px-1 sm:px-1.5 py-0.5 rounded bg-blue-500/10 text-[#0088FF] border border-blue-500/20">
                NETWORKS
              </span>
            </div>
            <span className="text-[8px] text-gray-400 tracking-widest uppercase hidden lg:inline-block">
              Connecting The Future
            </span>
          </div>
        </div>

        {/* Center Pill Navigation (Translucent glass over the video) */}
        <nav className="hidden md:flex items-center bg-[#0B0F17]/40 backdrop-blur-md px-1.5 py-1.5 rounded-full border border-white/15 shadow-lg">
          {navLinks.map((item) => {
            const isActive = activeTab === item.name;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActiveTab(item.name)}
                className={`px-3.5 lg:px-5 py-1.5 lg:py-2 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-[#0088FF] text-white shadow-md shadow-[#0088FF]/30"
                    : "text-gray-200 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Group (Visible on md and up) */}
        <div className="hidden md:flex items-center gap-2.5 lg:gap-4">
          <button
            onClick={onOpenContact}
            className="flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors text-xs font-medium px-2 py-1"
            title="Account / Agent Portal"
          >
            <div className="w-6 h-6 lg:w-7 lg:h-7 rounded-full border border-white/15 flex items-center justify-center bg-white/5">
              <User className="w-3 h-3 lg:w-3.5 lg:h-3.5 text-gray-300" />
            </div>
            <span className="hidden lg:inline">Login</span>
          </button>

          <button
            onClick={onOpenContact}
            className="px-3.5 lg:px-5 py-1.5 lg:py-2 rounded-full text-xs font-semibold bg-[#8b0000] hover:bg-[#700000] text-white shadow-lg shadow-[#8b0000]/25 transition-all duration-200 active:scale-95"
          >
            Get Started
          </button>
        </div>

        {/* Mobile / Tablet Hamburger & CTA (Visible when < md) */}
        <div className="flex md:hidden items-center gap-1.5 sm:gap-2">
          <button
            onClick={onOpenContact}
            className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold bg-[#8b0000] hover:bg-[#700000] text-white transition-colors"
          >
            Get Started
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 sm:p-2 rounded-lg bg-white/10 hover:bg-white/15 border border-white/15 text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 animate-in slide-in-from-top-2 duration-200">
          <div className="p-4 rounded-2xl bg-[#111827]/98 backdrop-blur-2xl border border-white/15 shadow-2xl flex flex-col gap-2">
            
            {/* Live Constellation Status Tag */}
            <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-white/[0.03] border border-white/5 text-[11px] text-gray-400 mb-1">
              <span className="flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-300">Starlink Constellation</span>
              </span>
              <span className="text-[10px] text-blue-400 font-semibold uppercase tracking-wider">
                Active Node
              </span>
            </div>

            {/* Navigation Links (Minimum 48px height for thumb friendliness) */}
            <div className="flex flex-col gap-1">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => {
                    setActiveTab(item.name);
                    setMobileMenuOpen(false);
                  }}
                  className={`min-h-[46px] px-4 rounded-xl text-sm font-semibold flex items-center justify-between transition-colors ${
                    activeTab === item.name
                      ? "bg-[#0088FF] text-white"
                      : "text-gray-200 hover:bg-white/5 active:bg-white/10"
                  }`}
                >
                  <span>{item.name}</span>
                  <ChevronRight className={`w-4 h-4 ${activeTab === item.name ? "text-white" : "text-gray-500"}`} />
                </a>
              ))}
            </div>

            {/* User Login & Actions */}
            <div className="pt-3 mt-1 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCoverage();
                }}
                className="w-full min-h-[46px] text-xs font-bold rounded-xl bg-white/10 hover:bg-white/15 active:scale-98 text-white flex items-center justify-center gap-2 border border-white/10 transition-all"
              >
                <CheckCircle2 className="w-4 h-4 text-[#0088FF]" /> Check Satellite Coverage
              </button>

              <a
                href="https://wa.me/237674137259?text=Hello%20Samitech%20Networks,%20I'd%20like%20to%20get%20started%20with%20Starlink%20Internet."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[46px] text-xs font-bold rounded-xl bg-[#25D366] hover:bg-[#20ba5a] active:scale-98 text-white flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20 transition-all"
              >
                <Phone className="w-4 h-4" /> WhatsApp Technician (674 137 259)
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  alert("Client Portal & Bandwidth Manager: Please contact your Samitech administrator for direct hostel tenant login credentials.");
                }}
                className="w-full min-h-[42px] text-xs font-medium rounded-xl bg-white/[0.04] text-gray-300 hover:text-white flex items-center justify-center gap-2 transition-colors"
              >
                <User className="w-3.5 h-3.5 text-gray-400" />
                <span>Client &amp; Agent Portal Login</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
