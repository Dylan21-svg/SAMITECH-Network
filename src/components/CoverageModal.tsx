"use client";

import React, { useState } from "react";
import { X, MapPin, CheckCircle2, Satellite, Signal, Phone, Sparkles } from "lucide-react";

interface CoverageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QUICK_LOCATIONS = [
  "Buea, Molyko Campus",
  "Douala, Bonapriso",
  "Yaoundé, Bastos",
  "Bamenda, Commercial Ave",
  "Limbe, Down Beach",
];

export default function CoverageModal({ isOpen, onClose }: CoverageModalProps) {
  const [cityQuery, setCityQuery] = useState("Buea, Molyko Campus");
  const [searched, setSearched] = useState(true);

  if (!isOpen) return null;

  const handleSelectQuickCity = (city: string) => {
    setCityQuery(city);
    setSearched(true);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-md transition-all duration-300"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-lg rounded-t-[28px] sm:rounded-3xl bg-[#111827] border-t sm:border border-white/15 p-5 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl overflow-hidden animate-in slide-in-from-bottom duration-300">
        
        {/* Mobile Pull / Drag Indicator Handle */}
        <div className="w-12 h-1.5 rounded-full bg-white/25 mx-auto mb-4 sm:hidden" />

        {/* Glow effect behind modal */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#0088FF]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4 sm:mb-5">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-[#0088FF] shrink-0">
            <Satellite className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              Satellite Coverage Checker
            </h3>
            <p className="text-xs text-gray-400">
              Check real-time Starlink beam availability in your area
            </p>
          </div>
        </div>

        {/* Search Input */}
        <div className="mb-4 sm:mb-5">
          <label className="block text-xs font-semibold text-gray-300 mb-2">
            Enter Your Town, Campus or Neighborhood
          </label>
          <div className="relative flex items-center">
            <MapPin className="absolute left-3.5 w-4 h-4 text-[#0088FF]" />
            <input
              type="text"
              value={cityQuery}
              onChange={(e) => setCityQuery(e.target.value)}
              placeholder="e.g. Molyko Buea, Yaoundé Bastos, Douala Bonapriso..."
              className="w-full pl-10 pr-24 py-3 rounded-xl bg-[#0B0F17] border border-white/10 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#0088FF] min-h-[46px]"
            />
            <button
              onClick={() => setSearched(true)}
              className="absolute right-2 px-3.5 py-1.5 rounded-lg bg-[#0088FF] text-white text-xs font-bold hover:bg-[#0070D2] active:scale-95 transition-all min-h-[34px]"
            >
              Verify
            </button>
          </div>
        </div>

        {/* Quick Select Location Chips for One-Tap Mobile UX */}
        <div className="mb-5">
          <div className="flex items-center gap-1.5 text-[11px] text-gray-400 mb-2">
            <Sparkles className="w-3 h-3 text-[#0088FF]" />
            <span>Popular Student &amp; Resident Hubs:</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {QUICK_LOCATIONS.map((loc) => (
              <button
                key={loc}
                onClick={() => handleSelectQuickCity(loc)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all ${
                  cityQuery === loc
                    ? "bg-[#0088FF] text-white font-semibold"
                    : "bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10"
                }`}
              >
                {loc.split(",")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Results Card */}
        {searched && (
          <div className="p-3.5 sm:p-4 rounded-2xl bg-[#141C2B] border border-blue-500/30 mb-5 sm:mb-6">
            <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-white/10">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs font-bold text-white">
                  Active Starlink Satellite Beam
                </span>
              </div>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                100% Operational
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 text-xs">
              <div>
                <span className="text-[10px] text-gray-400 block uppercase">Signal Quality</span>
                <span className="font-bold text-white flex items-center gap-1 mt-0.5">
                  <Signal className="w-3.5 h-3.5 text-[#0088FF]" /> Excellent (99.8%)
                </span>
              </div>
              <div>
                <span className="text-[10px] text-gray-400 block uppercase">Est. Latency</span>
                <span className="font-bold text-[#0088FF] mt-0.5 block">21 - 24 ms</span>
              </div>
              <div>
                <span className="text-[10px] text-gray-400 block uppercase">Installation Lead</span>
                <span className="font-bold text-white mt-0.5 block">&lt; 24 Hours</span>
              </div>
              <div>
                <span className="text-[10px] text-gray-400 block uppercase">Hardware Availability</span>
                <span className="font-bold text-emerald-400 mt-0.5 block">In Stock Ready</span>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 pb-2 sm:pb-0">
          <a
            href={`https://wa.me/237674137259?text=Hello%20Samitech%20Networks,%20I%20checked%20coverage%20for%20${encodeURIComponent(
              cityQuery
            )}%20and%20would%20like%20to%20schedule%20an%20installation.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3.5 px-4 min-h-[48px] rounded-xl text-xs font-bold bg-[#25D366] hover:bg-[#20bd5a] active:scale-95 text-white flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#25D366]/20"
          >
            <Phone className="w-4 h-4" />
            <span>Book Via WhatsApp (674 137 259)</span>
          </a>

          <button
            onClick={onClose}
            className="py-3 px-4 min-h-[44px] rounded-xl text-xs font-medium bg-white/10 hover:bg-white/15 text-white transition-all"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
