"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import CoverageModal from "@/components/CoverageModal";
import ContactModal from "@/components/ContactModal";
import {
  Sparkles,
  Search,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  AlertCircle,
} from "lucide-react";

export default function FAQPage() {
  const [coverageOpen, setCoverageOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "installation", label: "Installation & Setup" },
    { id: "billing", label: "Split Billing & Payments" },
    { id: "performance", label: "Speed & Weather" },
    { id: "hardware", label: "Hardware & Maintenance" },
  ];

  const allFaqs = [
    {
      category: "installation",
      q: "Can Starlink penetrate thick concrete walls in my Cameroon hostel?",
      a: "Yes. While a standard Wi-Fi router alone struggles to pass through multi-layer reinforced concrete, Samitech Networks deploys an extendable high-density Wi-Fi 6 mesh network. We run UV-shielded outdoor Cat6 lines to secondary wireless nodes positioned on each floor, delivering strong, full-bar signal into every single room.",
    },
    {
      category: "performance",
      q: "How does heavy Mount Fako / tropical rain affect the satellite connection?",
      a: "Starlink operates on high-frequency Ku and Ka bands with advanced adaptive beamforming. During heavy tropical downpours, the dish automatically boosts its signal transmission gain. Speeds may temporarily settle around 120-160 Mbps during severe cloudbursts, but the link remains active, low-latency, and uninterrupted.",
    },
    {
      category: "billing",
      q: "How does the split billing work for student roommates or hostel blocks?",
      a: "We offer automated per-room billing structures. A student committee, hostel delegate, or landlord can enroll the building, and each room pays their fixed monthly contribution via MTN Mobile Money or Orange Money directly to the billing portal. Zero arguments, zero awkward bill chasing.",
    },
    {
      category: "installation",
      q: "How long does a standard hostel installation take from order to live Wi-Fi?",
      a: "In Buea, Douala, and Yaoundé, physical installation typically takes between 3 to 5 hours once our technicians arrive. This includes rooftop mast alignment, cable routing, Wi-Fi 6 mesh node calibration, speed verification, and warden handover.",
    },
    {
      category: "performance",
      q: "Is Starlink good for software engineering, gaming, and remote video calls?",
      a: "Exceptional. Unlike older geostationary satellites that sit 36,000 km away and suffer from 600ms+ lag, Starlink satellites orbit only ~550 km above Earth. Latency is consistently under 25ms, making it ideal for competitive gaming (Valorant, FIFA, Call of Duty), Zoom, GitHub pushes, and live trading.",
    },
    {
      category: "hardware",
      q: "What happens if our dish gets damaged by lightning strikes or violent storms?",
      a: "Every Samitech installation includes certified electrical grounding rods, heavy-duty surge arrestors, and weatherproofing seals. In the rare event of hardware failure, our local Buea warehouse stocks original SpaceX Gen 2 & Gen 3 spare dishes, proprietary cables, and routers for immediate swap-out within 24 hours.",
    },
    {
      category: "billing",
      q: "Are there data caps or bandwidth throttling after downloading heavy files?",
      a: "No. Samitech Networks provides truly unlimited, unmetered Starlink satellite service. There are no artificial fair-use throttling caps, no midnight bandwidth limits, and no surcharges for streaming in 4K or downloading multi-gigabyte software SDKs.",
    },
    {
      category: "hardware",
      q: "What power backup options are available during local grid electricity cuts (Eneo)?",
      a: "We install automatic pure sine-wave UPS (Uninterruptible Power Supply) and mini-solar battery packs configured specifically for Starlink terminals and routers, keeping your hostel online for 4 to 12 hours during municipal power outages.",
    },
  ];

  const filteredFaqs = allFaqs.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch =
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#0088FF]/30 selection:text-white">
      <Navbar
        onOpenCoverage={() => setCoverageOpen(true)}
        onOpenContact={() => setContactOpen(true)}
      />

      <main className="pt-20 sm:pt-24 pb-12">
        {/* Header */}
        <section className="px-3.5 sm:px-6 lg:px-12 py-8 sm:py-10 lg:py-12 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8b0000]/15 border border-[#8b0000]/30 text-[#8b0000] text-[11px] sm:text-xs font-semibold mb-3 sm:mb-4 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Support Desk &amp; Knowledge Base</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mb-3 sm:mb-4 max-w-4xl mx-auto">
            Got Questions? We Have <span className="text-[#0088FF]">Answers</span>
            <span className="text-red-500">.</span>
          </h1>

          <p className="text-xs sm:text-sm lg:text-base text-blue-100 max-w-2xl mx-auto leading-relaxed mb-6">
            Find immediate answers on satellite dish placement, split billing for hostels, rain performance, and 24/7 technical dispatch.
          </p>

          {/* Search Box */}
          <div className="max-w-xl mx-auto relative mb-6">
            <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions (e.g. rain, split billing, concrete walls)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white/[0.08] border border-white/20 text-white placeholder-gray-400 text-xs sm:text-sm focus:outline-none focus:border-[#0088FF] backdrop-blur-xl shadow-lg transition-all"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-[#0088FF] text-white shadow-md shadow-[#0088FF]/30"
                    : "bg-white/[0.06] text-gray-300 hover:bg-white/[0.12] border border-white/10"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        {/* FAQs Accordion in White Glassmorphism */}
        <section className="px-3.5 sm:px-6 lg:px-12 max-w-4xl mx-auto mb-16 sm:mb-24">
          <div className="space-y-3 sm:space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl sm:rounded-3xl transition-all duration-300 backdrop-blur-xl shadow-2xl border ${
                      isOpen
                        ? "bg-white/[0.12] border-[#0088FF]"
                        : "bg-white/[0.07] hover:bg-white/[0.10] border-white/20"
                    }`}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span className="text-sm sm:text-base font-extrabold text-red-500 leading-snug">
                        {faq.q}
                      </span>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                          isOpen ? "rotate-180 bg-[#0088FF] text-white" : "bg-white/10 text-gray-400"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-blue-100 leading-relaxed border-t border-white/10 pt-4 animate-in fade-in duration-200">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="text-center py-12 rounded-3xl bg-white/[0.05] border border-white/10">
                <AlertCircle className="w-8 h-8 text-red-400 mx-auto mb-3" />
                <p className="text-sm text-gray-300 font-bold">No questions found matching your search.</p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("all");
                  }}
                  className="mt-3 text-xs text-[#0088FF] hover:underline"
                >
                  Reset search filter
                </button>
              </div>
            )}
          </div>
        </section>

        {/* 24/7 Direct Dispatch Helpdesk Cards */}
        <section className="px-3.5 sm:px-6 lg:px-12 max-w-7xl mx-auto mb-16">
          <div className="rounded-3xl p-6 sm:p-10 lg:p-12 bg-white/[0.08] border border-white/20 backdrop-blur-xl shadow-2xl">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs font-bold text-red-500 uppercase tracking-widest block mb-1">
                Direct Contact Channels
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Need To Speak With A Field Engineer?
              </h2>
              <p className="text-xs text-gray-300 mt-2">
                Our local Buea and Douala support staff are on standby 24 hours a day.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <a
                href="https://wa.me/237674137259?text=Hello%20Samitech%20Support,%20I%20have%20an%20urgent%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-white/[0.06] hover:bg-white/[0.10] border border-white/15 transition-all text-center group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-sm font-bold text-white mb-1">WhatsApp Chat</div>
                <div className="text-xs text-emerald-400 font-mono">+237 674 137 259</div>
                <span className="text-[10px] text-gray-400 mt-1 block">Instant reply within 5 mins</span>
              </a>

              <a
                href="tel:+237674137259"
                className="p-5 rounded-2xl bg-white/[0.06] hover:bg-white/[0.10] border border-white/15 transition-all text-center group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0088FF]/20 text-[#0088FF] flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-sm font-bold text-white mb-1">Emergency Dispatch</div>
                <div className="text-xs text-[#0088FF] font-mono">+237 674 137 259</div>
                <span className="text-[10px] text-gray-400 mt-1 block">Direct technician call</span>
              </a>

              <a
                href="mailto:support@samitech.network"
                className="p-5 rounded-2xl bg-white/[0.06] hover:bg-white/[0.10] border border-white/15 transition-all text-center group"
              >
                <div className="w-10 h-10 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-sm font-bold text-white mb-1">Email Tickets</div>
                <div className="text-xs text-red-400 font-mono">support@samitech.network</div>
                <span className="text-[10px] text-gray-400 mt-1 block">Formal warden inquiries</span>
              </a>

              <div className="p-5 rounded-2xl bg-white/[0.06] border border-white/15 text-center">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-sm font-bold text-white mb-1">Physical Center</div>
                <div className="text-xs text-purple-300">Molyko, Silicon Mountain</div>
                <span className="text-[10px] text-gray-400 mt-1 block">Buea / Douala / Yaoundé</span>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer onOpenCoverage={() => setCoverageOpen(true)} />

      <WhatsAppWidget onOpenCoverage={() => setCoverageOpen(true)} />
      <CoverageModal isOpen={coverageOpen} onClose={() => setCoverageOpen(false)} />
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}
