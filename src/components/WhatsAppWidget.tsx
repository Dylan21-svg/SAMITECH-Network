"use client";

import React, { useState } from "react";
import { Phone, MessageCircle, ArrowRight, ShieldCheck, Clock, X } from "lucide-react";

export default function WhatsAppWidget() {
  const [minimized, setMinimized] = useState(false);
  const phoneNumber = "674 137 259";
  const internationalNumber = "+237674137259";
  const whatsappUrl = `https://wa.me/237674137259?text=${encodeURIComponent(
    "Hello Samitech Networks, I am interested in Starlink Internet for my hostel / room / apartment. Please share setup details."
  )}`;

  return (
    <>
      {/* 1. Large High-Visibility Banner (Derived directly from Flyer Image 2) */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-12 bg-gradient-to-r from-[#0B0F17] via-[#111827] to-[#0B0F17] border-t border-white/10">
        <div className="max-w-5xl mx-auto rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-[#111827] via-[#141C2B] to-[#0D1522] border-2 border-[#0088FF]/40 shadow-2xl relative overflow-hidden">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#0088FF]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#8b0000]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            
            {/* Left: Contact Info & Corporation Tag */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] text-xs font-bold mb-3">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                <span>Instant Technician Booking</span>
              </div>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-2">
                {phoneNumber}
              </h3>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs sm:text-sm font-semibold text-gray-300">
                <span className="px-3 py-1 rounded-md bg-blue-500/20 text-[#0088FF] border border-blue-500/30">
                  CALL OR WHATSAPP
                </span>
                <span className="text-gray-400">·</span>
                <span className="text-gray-300 tracking-wider">
                  SAMITECH CORPORATION
                </span>
              </div>
            </div>

            {/* Right: Direct Clickable Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-[#25D366] hover:bg-[#20ba58] text-white font-bold text-sm shadow-xl shadow-[#25D366]/25 flex items-center justify-center gap-3 transition-all duration-200 active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={`tel:${internationalNumber}`}
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/15 flex items-center justify-center gap-3 transition-all duration-200 active:scale-95"
              >
                <Phone className="w-5 h-5 text-[#0088FF]" />
                <span>Call Directly</span>
              </a>
            </div>

          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-gray-400 gap-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#0088FF]" />
              <span>Certified Starlink Hardware & Warranty Included</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>Same-Day Deployment Across Student Hostels</span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Floating Sticky WhatsApp Button on Bottom Right */}
      {!minimized ? (
        <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2 animate-bounce-short">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba58] text-white font-bold text-xs shadow-2xl shadow-black/50 border border-white/20 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <div className="flex flex-col text-left">
              <span className="text-[10px] uppercase tracking-wider text-green-100 font-semibold">
                Quick Setup?
              </span>
              <span className="text-xs font-extrabold text-white">
                WhatsApp 674 137 259
              </span>
            </div>
          </a>
          <button
            onClick={() => setMinimized(true)}
            className="p-1 rounded-full bg-black/60 text-gray-400 hover:text-white transition-colors"
            title="Minimize"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      ) : (
        <button
          onClick={() => setMinimized(false)}
          className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 transition-transform"
          title="Open WhatsApp Support"
        >
          <MessageCircle className="w-6 h-6 fill-white" />
        </button>
      )}
    </>
  );
}
