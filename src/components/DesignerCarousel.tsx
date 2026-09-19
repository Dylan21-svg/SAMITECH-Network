"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Props for the carousel. Each item follows the shape used in TechFeatures.
 * The optional `image` field supplies the visual proof for the right card.
 */
interface DesignerCarouselProps {
  items: {
    icon: React.ReactNode;
    title: string;
    description: string;
    image?: string;
  }[];
}

/**
 * Paired‑Module Carousel – asymmetric twin‑card slide.
 *
 * • Left Card (Info & CTA)  ≈ 42% width – vertical flex layout.
 * • Right Card (Visual)    ≈ 58% width – shows an image or placeholder.
 *
 * Navigation: prev/next arrows (bottom‑right) and pill pagination (bottom‑center).
 * Styling re‑uses the site palette (blue #0088FF, red #8b0000, white).
 */
export default function DesignerCarousel({ items }: DesignerCarouselProps) {
  const [current, setCurrent] = useState(0);
  const total = items.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  // Auto‑advance every 6 seconds.
  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, []);

  // Helper for side‑peek scaling / opacity.
  const getSlideStyle = (index: number) => {
    const offset = (index - current + total) % total;
    if (offset === 0) return { scale: 1, opacity: 1 };
    if (offset === 1 || offset === total - 1) return { scale: 0.97, opacity: 0.7 };
    return { scale: 0.9, opacity: 0.5 };
  };

  return (
    <div className="relative overflow-visible py-4">
      {/* Track */}
      <div
        className="flex transition-transform duration-600 ease-[cubic-bezier(0.25,1,0.5,1)]"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {items.map((item, idx) => {
          const { scale, opacity } = getSlideStyle(idx);
          return (
            <div
              key={idx}
              className="flex-shrink-0 w-full flex justify-center"
              style={{ transform: `scale(${scale})`, opacity }}
            >
              {/* Slide – asymmetric twin cards */}
              <div className="flex w-[calc(100%-2rem)] max-w-4xl bg-[#0B0F17] rounded-xl overflow-hidden shadow-[0_0_24px_rgba(0,0,0,0.04)]">
                {/* Card A – Info & CTA */}
                <div className="w-[46%] flex flex-col p-6 sm:p-7 bg-[#111827] border-r border-white/10 justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-white mb-3 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-[15px] md:text-base text-gray-200 leading-relaxed sm:leading-[1.65]">
                      {item.description}
                    </p>
                  </div>
                  <button className="mt-6 self-start px-4 py-2 bg-[#0088FF] hover:bg-[#0066cc] text-white rounded-lg text-xs sm:text-sm font-semibold shadow-md shadow-[#0088FF]/20 transition-all duration-200 active:scale-95 flex items-center gap-2">
                    <span>Learn More</span>
                  </button>
                </div>
                {/* Card B – Visual proof */}
                <div className="w-[54%] relative bg-gradient-to-br from-[#111A2C] via-[#0D1422] to-[#080D16] flex items-center justify-center overflow-hidden min-h-[220px]">
                  {item.image ? (
                    <div className="relative w-full h-full flex items-center justify-center p-3 sm:p-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full max-h-[260px] object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  ) : (
                    <div className="flex items-center justify-center w-full h-full bg-gray-800 text-gray-400 text-xs">
                      No visual
                    </div>
                  )}
                  {/* Feature Spec Badge */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-black/70 backdrop-blur-md text-[#0088FF] border border-[#0088FF]/30 text-[10px] font-bold tracking-wider uppercase rounded-full shadow-md">
                    Starlink Spec
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-2 bottom-2 bg-white/10 hover:bg-white/20 rounded-full p-2 text-gray-300 hover:text-white transition-colors"
        aria-label="Previous"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-2 bottom-2 bg-white/10 hover:bg-white/20 rounded-full p-2 text-gray-300 hover:text-white transition-colors"
        aria-label="Next"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Pill pagination */}
      <div className="flex items-center justify-center mt-4 space-x-2">
        {items.map((_, idx) => (
          <div
            key={idx}
            className={`h-2 transition-all duration-300 ${idx === current ? 'w-6 bg-[#0088FF] rounded-full' : 'w-2 bg-gray-500/30 rounded-full'}`}
          />
        ))}
      </div>
    </div>
  );
}
