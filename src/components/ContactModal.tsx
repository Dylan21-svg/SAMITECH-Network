"use client";

import React, { useState } from "react";
import { X, Send, Sparkles, CheckCircle2 } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlan?: string;
}

export default function ContactModal({ isOpen, onClose, defaultPlan }: ContactModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [spaceType, setSpaceType] = useState("Student Hostel");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedText = encodeURIComponent(
      `*New Starlink Consultation Request*\n\n` +
      `*Name:* ${name || "Anonymous"}\n` +
      `*Phone:* ${phone}\n` +
      `*Location/Hostel:* ${location}\n` +
      `*Space Type:* ${spaceType}\n` +
      (defaultPlan ? `*Interested Plan:* ${defaultPlan}\n` : "") +
      (message ? `*Notes:* ${message}\n` : "")
    );
    const whatsappUrl = `https://wa.me/237674137259?text=${encodedText}`;
    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#0D131F] border border-white/20 p-6 sm:p-8 shadow-2xl text-white">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-red-500 uppercase tracking-widest mb-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Samitech Field Engineering Desk</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-2">
              Schedule An On-Site Satellite Survey
            </h2>
            <p className="text-xs text-blue-100 mb-6">
              Our Buea, Douala, or Yaoundé field technicians will assess your rooftop clearance, concrete wall density, and design a custom Wi-Fi 6 mesh blueprint.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-300 mb-1">
                  Full Name / Hostel Representative
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Roland M. (Hostel Delegate)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.06] border border-white/15 text-white placeholder-gray-500 text-xs sm:text-sm focus:outline-none focus:border-[#0088FF]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-300 mb-1">
                    WhatsApp Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+237 6XX XXX XXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.06] border border-white/15 text-white placeholder-gray-500 text-xs sm:text-sm focus:outline-none focus:border-[#0088FF]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 mb-1">
                    Hostel / Living Space Type
                  </label>
                  <select
                    value={spaceType}
                    onChange={(e) => setSpaceType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#131B2A] border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-[#0088FF]"
                  >
                    <option value="Student Hostel (Multi-Story)">Student Hostel (Multi-Story)</option>
                    <option value="Single Room / Studio">Single Room / Studio</option>
                    <option value="Residential Apartment">Residential Apartment</option>
                    <option value="Co-Working Space / Office">Co-Working Space / Office</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 mb-1">
                  Hostel Name &amp; Campus Location
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Le Bon Samaritain Hostel, Molyko Buea"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.06] border border-white/15 text-white placeholder-gray-500 text-xs sm:text-sm focus:outline-none focus:border-[#0088FF]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 mb-1">
                  Specific Requirements or Number of Rooms (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. 24 rooms across 3 floors, need split billing setup..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.06] border border-white/15 text-white placeholder-gray-500 text-xs sm:text-sm focus:outline-none focus:border-[#0088FF] resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <button
                  type="submit"
                  className="flex-1 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-red-600 via-red-500 to-[#0088FF] hover:from-red-700 hover:to-blue-600 text-white shadow-lg shadow-red-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Request to Dispatch</span>
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="py-3 px-4 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/15 text-white transition-colors cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-black text-white">Survey Request Dispatched!</h3>
            <p className="text-xs text-blue-100 max-w-sm mx-auto">
              Our engineering lead will connect with you on WhatsApp within 15 minutes to confirm your site location and schedule your signal test.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="py-2.5 px-6 rounded-xl text-xs font-bold bg-[#0088FF] text-white hover:bg-blue-600 transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
