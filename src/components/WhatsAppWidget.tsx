"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, X, MapPin } from "lucide-react";

interface WhatsAppWidgetProps {
  onOpenCoverage?: () => void;
}

export default function WhatsAppWidget({ onOpenCoverage }: WhatsAppWidgetProps) {
  const [minimized, setMinimized] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  const whatsappUrl = `https://wa.me/237674137259?text=${encodeURIComponent(
    "Hello Samitech Networks, I am interested in Starlink Internet for my hostel / room / apartment. Please share setup details."
  )}`;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const windowHeight = window.innerHeight;
      const documentHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );

      // Trigger appearance when scrolled to within 80px of the absolute bottom of the site
      const atBottom = scrollY + windowHeight >= documentHeight - 80;
      setIsAtBottom(atBottom);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on load to evaluate initial position
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 1. Desktop Floating Sticky WhatsApp Button (hidden on mobile) */}
      <div className="hidden md:flex">
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
              aria-label="Minimize floating WhatsApp button"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        ) : (
          <button
            onClick={() => setMinimized(false)}
            className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 transition-transform"
            title="Open WhatsApp Support"
            aria-label="Open WhatsApp support"
          >
            <MessageCircle className="w-6 h-6 fill-white" />
          </button>
        )}
      </div>

      {/* 2. Mobile Action Bar: Only appears once the user has reached the absolute bottom of the site */}
      <div
        className={`fixed bottom-0 inset-x-0 z-40 md:hidden bg-[#0B0F17]/95 backdrop-blur-xl border-t border-white/10 px-3.5 py-2.5 shadow-[0_-10px_30px_rgba(0,0,0,0.75)] transition-all duration-300 ${
          isAtBottom
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center gap-2.5 max-w-md mx-auto">
          {onOpenCoverage && (
            <button
              onClick={onOpenCoverage}
              className="flex-1 min-h-[44px] px-3.5 rounded-xl bg-white/10 hover:bg-white/15 active:scale-95 text-white text-xs font-semibold border border-white/15 flex items-center justify-center gap-1.5 transition-all"
            >
              <MapPin className="w-3.5 h-3.5 text-[#0088FF]" />
              <span className="truncate">Check Coverage</span>
            </button>
          )}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-h-[44px] px-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba58] active:scale-95 text-white text-xs font-bold shadow-lg shadow-[#25D366]/25 flex items-center justify-center gap-1.5 transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span className="truncate">WhatsApp Order</span>
          </a>
        </div>
      </div>
    </>
  );
}
