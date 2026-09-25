"use client";

import React, { useState, useEffect, useRef } from 'react';

import { motion, AnimatePresence } from 'framer-motion';


export interface FeatureSlide {
  id: string;
  category: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  image: string; // high‑resolution URL
  specs: { label: string; value: string }[]; // badges on image side
}

// Mock data – replace URLs with real assets as needed
const mockSlides: FeatureSlide[] = [
  {
    id: '1',
    category: 'Space‑Age Architecture',
    title: 'Phased‑Array Beam Steering',
    description: 'Flat electronic array tracks multiple satellites without moving parts.',
    ctaLabel: 'Learn more ↗',
    ctaHref: '/features/phased-array',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    specs: [{ label: 'Latency', value: '<1 ms' }, { label: 'Throughput', value: '250 Mbps+' }],
  },
  {
    id: '2',
    category: 'Connector',
    title: 'Dynamic Mesh Wi‑Fi 6',
    description: 'High‑density mesh with self‑optimising routing for seamless indoor coverage.',
    ctaLabel: 'Explore ↗',
    ctaHref: '/features/mesh-wifi',
    image: 'https://images.unsplash.com/photo-1519494080419-8e7314f5bb5b?auto=format&fit=crop&w=800&q=80',
    specs: [{ label: 'Nodes', value: '12+ per site' }, { label: 'Band', value: '2.4 / 5 GHz' }],
  },
  {
    id: '3',
    category: 'Power',
    title: 'Solar‑Assisted Power System',
    description: 'Hybrid solar‑battery array reduces grid dependency and operating cost.',
    ctaLabel: 'See details ↗',
    ctaHref: '/features/solar-power',
    image: 'https://images.unsplash.com/photo-1526401485004-2f2fc1f2d5ed?auto=format&fit=crop&w=800&q=80',
    specs: [{ label: 'Battery', value: '24 kWh' }, { label: 'Solar', value: '5 kW' }],
  },
  {
    id: '4',
    category: 'Security',
    title: 'End‑to‑End Encryption',
    description: 'Quantum‑ready TLS ensures data confidentiality across the link.',
    ctaLabel: 'Read more ↗',
    ctaHref: '/features/encryption',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80',
    specs: [{ label: 'TLS', value: '1.3' }, { label: 'Alg', value: 'AES‑256‑GCM' }],
  },
  {
    id: '5',
    category: 'Resilience',
    title: 'Adaptive Rain‑Fade Mitigation',
    description: 'Beam power auto‑scales during heavy rain to keep throughput stable.',
    ctaLabel: 'Discover ↗',
    ctaHref: '/features/rain-fade',
    image: 'https://images.unsplash.com/photo-1555908306-257f4e8ed663?auto=format&fit=crop&w=800&q=80',
    specs: [{ label: 'Gain', value: '+6 dB' }, { label: 'Rain Rate', value: '200 mm/h' }],
  },
];

/**
 * Paired‑Coverflow carousel – each slide is a twin‑card (info on left, visual on right).
 * Implements 3‑D perspective, spring physics, auto‑play, drag, ambient backdrop and controls.
 */
export default function PairedCoverflowCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const total = mockSlides.length;

  // Auto‑advance every 10 s, pause on hover
  useEffect(() => {
    const startTimer = () => {
      autoPlayRef.current = setInterval(() => {
        setActiveIndex((i) => (i + 1) % total);
      }, 10_000);
    };
    const stopTimer = () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
    startTimer();
    const container = containerRef.current;
    container?.addEventListener('mouseenter', stopTimer);
    container?.addEventListener('mouseleave', startTimer);
    return () => {
      stopTimer();
      container?.removeEventListener('mouseenter', stopTimer);
      container?.removeEventListener('mouseleave', startTimer);
    };
  }, [total]);

  const navigate = useCallback((delta: number) => {
    setActiveIndex((i) => (i + delta + total) % total);
  }, [total]);

  // Drag handling – simple threshold based
  const handleDragEnd = (_: any, info: { offset: { x: number } }) => {
    const swipe = Math.round(info.offset.x / 100);
    if (swipe > 0) navigate(-1);
    else if (swipe < 0) navigate(1);
  };

  // Ambient backdrop – blurred version of the active slide image
  const backdrop = mockSlides[activeIndex].image;

  return (
    <section className="relative py-16 bg-[#0B0F17] overflow-hidden" aria-label="Tech features carousel">
      {/* Ambient backdrop */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={backdrop}
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0, scale: 1.3 }}
          animate={{ opacity: 0.35, scale: 1.3 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            backgroundImage: `url(${backdrop})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(100px)',
          }}
        />
      </AnimatePresence>

      <div className="relative max-w-7xl mx-auto" ref={containerRef}>
        {/* Header bar */}
        <div className="flex items-center justify-between mb-8 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 text-white rounded-full px-3 py-1">
            <span className="w-2 h-2 rounded-full bg-lime-400" />
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Next‑Generation Connectivity</span>
          </div>
          <a href="/catalog" className="px-4 py-1.5 rounded-full bg-[#0088FF] text-white text-sm font-medium hover:bg-[#0077EE] transition-colors">
            Explore All ↗
          </a>
        </div>

        {/* 3‑D stage */}
        <div className="relative h-[500px] sm:h-[560px] md:h-[620px] perspective-[1200px]" style={{ perspective: '1200px' }}>
          {/* Slides */}
          {mockSlides.map((slide, idx) => {
            const offset = idx - activeIndex;
            let rotateY = 0;
            let translateZ = 0;
            let scale = 1;
            let opacity = 1;
            let zIndex = 20;
            let overlay = '';
            if (offset === 0) {
              rotateY = 0;
              translateZ = 0;
              scale = 1;
              opacity = 1;
              zIndex = 20;
            } else if (Math.abs(offset) === 1) {
              rotateY = offset * -22;
              translateZ = -120;
              scale = 0.88;
              opacity = 0.65;
              zIndex = 10;
              overlay = 'bg-black/35';
            } else if (Math.abs(offset) === 2) {
              rotateY = offset * -32;
              translateZ = -240;
              scale = 0.72;
              opacity = 0.3;
              zIndex = 5;
            } else {
              rotateY = offset * -45;
              translateZ = -400;
              scale = 0.6;
              opacity = 0;
              zIndex = 0;
            }
            const isActive = offset === 0;
            return (
              <motion.div
                key={slide.id}
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
                style={{ transformStyle: 'preserve-3d', pointerEvents: opacity === 0 ? 'none' : 'auto' }}
                onClick={() => { if (!isActive) setActiveIndex(idx); }}
                animate={{ rotateY, translateZ, scale, opacity }}
                transition={{ type: 'spring', stiffness: 260, damping: 28 }}
              >
                <div className={`relative w-full max-w-4xl flex gap-4 p-4 ${overlay}`} style={{ zIndex }}>
                  {/* Card A – Info */}
                  <motion.div
                    className="flex-1 min-w-[44%] bg-[rgba(20,28,43,0.85)] backdrop-blur-md rounded-2xl border border-white/10 p-6 flex flex-col justify-between"
                    initial={{ y: 12, opacity: 0 }}
                    animate={isActive ? { y: 0, opacity: 1 } : {}}
                    transition={{ delay: isActive ? 0.15 : 0, duration: 0.4 }}
                  >
                    <div>
                      <span className="inline-block mb-2 px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-white/70">
                        {slide.category}
                      </span>
                      <h3 className="text-2xl font-black text-white mb-3">{slide.title}</h3>
                      <p className="text-sm text-white/70 mb-4">{slide.description}</p>
                    </div>
                    <a
                      href={slide.ctaHref}
                      className="inline-block self-start px-4 py-2 rounded-full bg-[#0088FF] text-white text-sm font-medium hover:bg-[#0077EE] transition-colors"
                    >
                      {slide.ctaLabel}
                    </a>
                  </motion.div>

                  {/* Card B – Visual */}
                  <motion.div className="flex-1 min-w-[56%] relative group" initial={{ opacity: 0 }} animate={isActive ? { opacity: 1 } : {}} transition={{ delay: isActive ? 0.2 : 0, duration: 0.4 }}>
                    <motion.img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover rounded-2xl border border-white/10"
                      whileHover={isActive ? { scale: 1.05 } : {}}
                      transition={{ duration: 0.3 }}
                    />
                    {slide.specs.map((spec, sIdx) => (
                      <motion.div
                        key={sIdx}
                        className="absolute top-2 right-2 bg-white/10 backdrop-blur-md border border-white/15 text-white text-xs px-2 py-0.5 rounded-md"
                        initial={{ scale: 0.92, opacity: 0 }}
                        animate={isActive ? { scale: 1, opacity: 1 } : {}}
                        transition={{ delay: 0.25 + sIdx * 0.06, duration: 0.25 }}
                        style={{ top: `${8 + sIdx * 28}px` }}
                      >
                        <span className="font-medium">{spec.label}:</span> {spec.value}
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation chevrons */}
        <button onClick={() => navigate(-1)} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-full text-white hover:bg-white/15 hover:scale-105 transition-all" aria-label="Previous slide">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button onClick={() => navigate(1)} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-full text-white hover:bg-white/15 hover:scale-105 transition-all" aria-label="Next slide">
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Bottom pagination */}
        <div className="flex justify-center mt-6 gap-2">
          {mockSlides.map((_, i) => (
            <motion.div
              key={i}
              layoutId={i === activeIndex ? 'active-pill' : undefined}
              className={i === activeIndex ? 'w-8 h-2.5 bg-lime-400 rounded-full' : 'w-2.5 h-2.5 bg-white/20 rounded-full'}
              onClick={() => setActiveIndex(i)}
              whileHover={{ scale: 1.2 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
