"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Phone, MapPin, Mail, ArrowUp } from "lucide-react";
import SamitechLogo from "@/components/SamitechLogo";

interface FooterProps {
  onOpenCoverage?: () => void;
  onContactWhatsApp?: (message?: string) => void;
}

export default function Footer({ onOpenCoverage, onContactWhatsApp }: FooterProps) {
  const router = useRouter();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleWhatsApp = () => {
    if (onContactWhatsApp) {
      onContactWhatsApp();
    } else {
      const defaultMsg = "Hello Samitech Networks, I would like to get started with Starlink Internet.";
      window.open(`https://wa.me/237674137259?text=${encodeURIComponent(defaultMsg)}`, "_blank");
    }
  };

  const handleCoverage = () => {
    if (onOpenCoverage) {
      onOpenCoverage();
    } else {
      router.push("/#coverage");
    }
  };

  return (
    <footer className="bg-black border-t border-white/10 pt-8 sm:pt-10 lg:pt-12 pb-24 md:pb-10 px-3.5 sm:px-6 lg:px-12 text-gray-400">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 pb-6 sm:pb-8 border-b border-white/10">
        
        {/* Col 1: Brand Info & Mission */}
        <div className="lg:col-span-4 space-y-4 sm:space-y-5">
          <Link href="/">
            <SamitechLogo size="lg" className="my-1 cursor-pointer" />
          </Link>
          <p className="text-[11px] sm:text-xs leading-relaxed text-gray-400 max-w-sm">
            Cameroon&apos;s premier certified Starlink installer and high-speed satellite
            mesh networking provider for student hostels, rooms, apartments, and commercial venues.
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs text-gray-300 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0088FF]" />
            Authorized Starlink Deployment Partner
          </div>
        </div>

        {/* Col 2: Navigation Links */}
        <div className="lg:col-span-4 grid grid-cols-2 gap-6">
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Explore
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services & Solutions
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Pricing Plans
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Support & Legal
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/specs" className="hover:text-white transition-colors">
                  Technology Specs
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQ & Support Desk
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/sla" className="hover:text-white transition-colors">
                  SLA & Acceptable Use
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Col 3: Direct Contact & Action */}
        <div className="lg:col-span-4 space-y-4">
          <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
            Direct Contact & Dispatch
          </h4>
          <p className="text-[11px] sm:text-xs text-gray-400">
            Certified field engineers and 24/7 technical dispatch in Molyko Buea, Douala, and Yaoundé.
          </p>

          <div className="space-y-2.5 text-[11px] sm:text-xs">
            <a
              href="tel:+237674137259"
              className="flex items-center gap-2.5 text-gray-300 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0088FF] shrink-0" />
              <span>+237 674 137 259</span>
            </a>
            <a
              href="mailto:support@samitech.network"
              className="flex items-center gap-2.5 text-gray-300 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8b0000] shrink-0" />
              <span>support@samitech.network</span>
            </a>
            <div className="flex items-start gap-2.5 text-gray-300">
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0088FF] shrink-0 mt-0.5" />
              <span>Molyko Buea / Douala / Yaoundé, Cameroon</span>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
            <button
              onClick={handleCoverage}
              className="flex-1 py-2 px-3 rounded-xl text-xs font-bold bg-[#0088FF] hover:bg-[#0077e6] text-white transition-colors text-center cursor-pointer shadow-lg shadow-[#0088FF]/20"
            >
              Verify Coverage
            </button>
            <button
              onClick={handleWhatsApp}
              className="flex-1 py-2 px-3 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/15 text-white border border-white/10 transition-colors text-center cursor-pointer"
            >
              Chat on WhatsApp
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Legal / Copyright Row */}
      <div className="max-w-7xl mx-auto pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs text-gray-400 gap-3 sm:gap-4">
        <p>
          &copy; {new Date().getFullYear()} SAMITECH Corporation. All rights reserved. Authorized Starlink Deployment Partner in Cameroon.
        </p>
        <div className="flex items-center gap-4 sm:gap-6">
          <Link href="/privacy" className="hover:text-gray-300 transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-gray-300 transition-colors">
            Terms of Service
          </Link>
          <Link href="/sla" className="hover:text-gray-300 transition-colors">
            SLA Guarantee
          </Link>
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
  );
}
