"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { User, Menu, X, Phone, CheckCircle2, Wifi } from "lucide-react";

interface NavbarProps {
  onOpenCoverage: () => void;
  onOpenContact: () => void;
}

export default function Navbar({ onOpenCoverage, onOpenContact }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/#about" },
    { name: "Service", href: "/#services" },
    { name: "Feature", href: "/#features" },
    { name: "Pricing", href: "/pricing" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Brand Group (Left): Samitech Networks */}
        <Link href="/" className="flex items-center gap-2 group focus:outline-none">
          <div className="relative h-12 sm:h-14 w-auto">
            <Image
              src="/images/netlogo.png"
              alt="SAMITECH Networks"
              fill
              className="object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </div>
        </Link>

        {/* Center Pill Navigation (Exact Mockup Match) */}
        <nav className="hidden lg:flex items-center bg-[#111827]/80 backdrop-blur-md px-1 py-1 rounded-full border border-white/10 shadow-inner">
          {navLinks.map((item) => {
            const isActive = activeTab === item.name;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActiveTab(item.name)}
                className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-[#0088FF] text-white shadow-md shadow-[#0088FF]/30"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Group (User icon, Login, Get Started crimson button) */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={onOpenContact}
            className="flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors text-xs font-medium px-2 py-1"
            title="Account / Agent Portal"
          >
            <div className="w-7 h-7 rounded-full border border-white/15 flex items-center justify-center bg-white/5">
              <User className="w-3.5 h-3.5 text-gray-300" />
            </div>
            <span className="hidden xl:inline">Login</span>
          </button>

          <button
            onClick={onOpenContact}
            className="px-5 py-2 rounded-full text-xs font-semibold bg-[#8b0000] hover:bg-[#700000] text-white shadow-lg shadow-[#8b0000]/25 transition-all duration-200 active:scale-95"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenContact}
            className="px-3 py-1.5 rounded-full text-xs font-semibold bg-[#8b0000] text-white"
          >
            Get Started
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden mt-3 p-4 rounded-2xl bg-[#111827]/95 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col gap-3">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => {
                setActiveTab(item.name);
                setMobileMenuOpen(false);
              }}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium ${
                activeTab === item.name
                  ? "bg-[#0088FF] text-white"
                  : "text-gray-300 hover:bg-white/5"
              }`}
            >
              {item.name}
            </a>
          ))}
          <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCoverage();
              }}
              className="w-full py-2.5 text-xs font-semibold rounded-xl bg-white/10 text-white flex items-center justify-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4 text-[#0088FF]" /> Check Coverage
            </button>
            <a
              href="https://wa.me/237674137259?text=Hello%20Samitech%20Networks,%20I'd%20like%20to%20get%20started%20with%20Starlink%20Internet."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 text-xs font-semibold rounded-xl bg-[#25D366] text-white flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" /> WhatsApp Us (674 137 259)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
