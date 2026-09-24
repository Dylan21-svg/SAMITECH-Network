"use client";

import React from "react";
import SamitechLogo from "@/components/SamitechLogo";
import { useNavbarState } from "@/hooks/useNavbar";
import {
  User,
  Menu,
  X,
  Phone,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  Building2,
  Home as HomeIcon,
  Sparkles,
  Zap,
  Radio,
  Lock,
} from "lucide-react";

// Re-export hook so it is directly accessible from the Navbar module as requested
export { useNavbarState };

interface NavbarProps {
  onOpenCoverage: () => void;
  onOpenContact: () => void;
}

export default function Navbar({ onOpenCoverage, onOpenContact }: NavbarProps) {
  // Use the dedicated state-managed hook to handle responsive mobile toggle & dropdown menus
  const nav = useNavbarState("Home");

  const serviceSubItems = [
    {
      title: "Student Hostels Setup",
      desc: "Multi-device mesh for dormitories (40-120+ devices)",
      href: "#services",
      icon: Building2,
      badge: "Most Popular",
    },
    {
      title: "Single Rooms & Studios",
      desc: "Plug-and-play dedicated terminal (1-8 devices)",
      href: "#services",
      icon: HomeIcon,
    },
    {
      title: "Apartments & Residences",
      desc: "Wi-Fi 6 coverage for multi-room flats",
      href: "#services",
      icon: Radio,
    },
    {
      title: "Technology Specs & Throughput",
      desc: "LEO satellite proximity, <25ms ultra-low ping",
      href: "#features",
      icon: Zap,
    },
    {
      title: "Pricing Plans & Hardware",
      desc: "Clear transparent packages for tenants & wardens",
      href: "#pricing",
      icon: Sparkles,
    },
  ];

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 w-full transition-all duration-300 ${
          nav.scrolled || nav.mobileMenuOpen
            ? "bg-[#0B0F17]/85 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/35 py-2.5 sm:py-3"
            : "bg-transparent border-b border-transparent py-3 sm:py-4 lg:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-12 flex items-center justify-between">
          {/* Brand Group (Left): Samitech Networks */}
          <a
            href="#"
            onClick={() => nav.handleNavClick("Home")}
            className="flex items-center group cursor-pointer"
          >
            <SamitechLogo size="md" className="group-hover:scale-[1.02] transition-transform" />
          </a>

          {/* Center Pill Navigation with State-Managed Desktop Dropdown */}
          <nav className="hidden md:flex items-center bg-[#0B0F17]/50 backdrop-blur-md px-1.5 py-1.5 rounded-full border border-white/15 shadow-xl relative">
            <a
              href="#"
              onClick={() => nav.handleNavClick("Home")}
              className={`px-3.5 lg:px-5 py-1.5 lg:py-2 text-xs font-medium rounded-full transition-all duration-200 ${
                nav.activeTab === "Home"
                  ? "bg-[#0088FF] text-white shadow-md shadow-[#0088FF]/30"
                  : "text-gray-200 hover:text-white hover:bg-white/10"
              }`}
            >
              Home
            </a>

            <a
              href="#about"
              onClick={() => nav.handleNavClick("About Us")}
              className={`px-3.5 lg:px-5 py-1.5 lg:py-2 text-xs font-medium rounded-full transition-all duration-200 ${
                nav.activeTab === "About Us"
                  ? "bg-[#0088FF] text-white shadow-md shadow-[#0088FF]/30"
                  : "text-gray-200 hover:text-white hover:bg-white/10"
              }`}
            >
              About Us
            </a>

            {/* Services with State-Managed Desktop Dropdown Menu */}
            <div
              data-dropdown="services"
              className="relative z-50"
            >
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  nav.toggleServicesDropdown();
                }}
                className={`px-3.5 lg:px-5 py-1.5 lg:py-2 text-xs font-medium rounded-full transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                  nav.activeTab === "Service" || nav.servicesDropdownOpen
                    ? "bg-[#0088FF] text-white shadow-md shadow-[#0088FF]/30"
                    : "text-gray-200 hover:text-white hover:bg-white/10"
                }`}
                aria-haspopup="true"
                aria-expanded={nav.servicesDropdownOpen}
                aria-label="Toggle services menu"
              >
                <span>Service</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    nav.servicesDropdownOpen ? "rotate-180 text-white" : "text-gray-300"
                  }`}
                />
              </button>

              {/* Desktop Dropdown Panel */}
              {nav.servicesDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-80 lg:w-96 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="p-2.5 rounded-2xl bg-[#0D131F]/95 backdrop-blur-2xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                    <div className="px-3 py-1.5 mb-1.5 border-b border-white/10 flex items-center justify-between">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                        Available Deployments
                      </span>
                      <span className="text-[10px] text-[#0088FF] font-semibold">
                        Cameroon Starlink
                      </span>
                    </div>

                    <div className="space-y-1">
                      {serviceSubItems.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                          <a
                            key={idx}
                            href={item.href}
                            onClick={() => nav.handleNavClick("Service")}
                            className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/10 transition-colors group text-left cursor-pointer"
                          >
                            <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-[#0088FF] group-hover:bg-[#0088FF] group-hover:text-white transition-colors shrink-0 mt-0.5">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-bold text-white group-hover:text-[#0088FF] transition-colors truncate">
                                  {item.title}
                                </span>
                                {item.badge && (
                                  <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-400/20 text-amber-300 font-semibold border border-amber-400/30">
                                    {item.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-[10px] text-gray-400 leading-tight mt-0.5 line-clamp-1">
                                {item.desc}
                              </p>
                            </div>
                          </a>
                        );
                      })}
                    </div>

                    <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between px-2">
                      <button
                        type="button"
                        onClick={() => {
                          nav.closeServicesDropdown();
                          onOpenCoverage();
                        }}
                        className="text-[11px] font-semibold text-[#0088FF] hover:text-blue-300 transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" /> Check Regional Coverage
                      </button>
                      <span className="text-[10px] text-gray-500 font-mono">220+ Mbps</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a
              href="#features"
              onClick={() => nav.handleNavClick("Feature")}
              className={`px-3.5 lg:px-5 py-1.5 lg:py-2 text-xs font-medium rounded-full transition-all duration-200 ${
                nav.activeTab === "Feature"
                  ? "bg-[#0088FF] text-white shadow-md shadow-[#0088FF]/30"
                  : "text-gray-200 hover:text-white hover:bg-white/10"
              }`}
            >
              Feature
            </a>

            <a
              href="#pricing"
              onClick={() => nav.handleNavClick("Pricing")}
              className={`px-3.5 lg:px-5 py-1.5 lg:py-2 text-xs font-medium rounded-full transition-all duration-200 ${
                nav.activeTab === "Pricing"
                  ? "bg-[#0088FF] text-white shadow-md shadow-[#0088FF]/30"
                  : "text-gray-200 hover:text-white hover:bg-white/10"
              }`}
            >
              Pricing
            </a>
          </nav>

          {/* Right CTA Group (Desktop) */}
          <div className="hidden md:flex items-center gap-2.5 lg:gap-4">
            <button
              type="button"
              onClick={nav.openPortalModal}
              className="flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors text-xs font-medium px-2 py-1 cursor-pointer"
              title="Client & Agent Portal"
            >
              <div className="w-6 h-6 lg:w-7 lg:h-7 rounded-full border border-white/15 flex items-center justify-center bg-white/5">
                <User className="w-3 h-3 lg:w-3.5 lg:h-3.5 text-gray-300" />
              </div>
              <span className="hidden lg:inline">Portal</span>
            </button>

            <button
              type="button"
              onClick={onOpenContact}
              className="px-3.5 lg:px-5 py-1.5 lg:py-2 rounded-full text-xs font-semibold bg-[#8b0000] hover:bg-[#700000] text-white shadow-lg shadow-[#8b0000]/25 transition-all duration-200 active:scale-95 cursor-pointer"
            >
              Get Started
            </button>
          </div>

          {/* Mobile / Tablet Controls (< md) with State-Managed Click Toggle */}
          <div className="flex md:hidden items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={onOpenContact}
              className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold bg-[#8b0000] hover:bg-[#700000] text-white transition-colors cursor-pointer"
            >
              Get Started
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                nav.toggleMobileMenu();
              }}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/15 border border-white/15 text-white transition-colors cursor-pointer active:scale-95"
              aria-label={nav.mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={nav.mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
            >
              {nav.mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer Menu Controlled by State Hook */}
        {nav.mobileMenuOpen && (
          <div
            id="mobile-navigation-drawer"
            className="md:hidden px-3.5 pt-2 pb-4 animate-in slide-in-from-top-2 fade-in duration-200"
          >
            <div className="max-h-[80vh] overflow-y-auto p-4 rounded-2xl bg-[#0D131F]/98 backdrop-blur-2xl border border-white/15 shadow-2xl flex flex-col gap-2">
              
              {/* Constellation Live Badge */}
              <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-white/[0.04] border border-white/5 text-[11px] text-gray-400 mb-1">
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-300">Starlink Constellation</span>
                </span>
                <span className="text-[10px] text-blue-400 font-semibold uppercase tracking-wider">
                  Active in Cameroon
                </span>
              </div>

              {/* Primary Navigation Links */}
              <div className="flex flex-col gap-1">
                <a
                  href="#"
                  onClick={() => nav.handleNavClick("Home")}
                  className={`min-h-[46px] px-4 rounded-xl text-sm font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                    nav.activeTab === "Home"
                      ? "bg-[#0088FF] text-white"
                      : "text-gray-200 hover:bg-white/5 active:bg-white/10"
                  }`}
                >
                  <span>Home</span>
                  <ChevronRight className={`w-4 h-4 ${nav.activeTab === "Home" ? "text-white" : "text-gray-500"}`} />
                </a>

                <a
                  href="#about"
                  onClick={() => nav.handleNavClick("About Us")}
                  className={`min-h-[46px] px-4 rounded-xl text-sm font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                    nav.activeTab === "About Us"
                      ? "bg-[#0088FF] text-white"
                      : "text-gray-200 hover:bg-white/5 active:bg-white/10"
                  }`}
                >
                  <span>About Us</span>
                  <ChevronRight className={`w-4 h-4 ${nav.activeTab === "About Us" ? "text-white" : "text-gray-500"}`} />
                </a>

                {/* Mobile Dropdown Sub-Menu for Services */}
                <div className="rounded-xl overflow-hidden bg-white/[0.02] border border-white/5">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      nav.toggleMobileServices();
                    }}
                    className="w-full min-h-[46px] px-4 flex items-center justify-between text-sm font-semibold text-gray-200 hover:bg-white/5 cursor-pointer"
                    aria-expanded={nav.mobileServicesOpen}
                    aria-label="Toggle mobile services sub-menu"
                  >
                    <span className="flex items-center gap-2">
                      <span>Services &amp; Setups</span>
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-blue-500/20 text-[#0088FF]">
                        Deployments
                      </span>
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                        nav.mobileServicesOpen ? "rotate-180 text-white" : ""
                      }`}
                    />
                  </button>

                  {nav.mobileServicesOpen && (
                    <div className="p-2 space-y-1 bg-black/20 border-t border-white/5 animate-in slide-in-from-top-1 fade-in duration-150">
                      {serviceSubItems.map((sub, i) => (
                        <a
                          key={i}
                          href={sub.href}
                          onClick={() => nav.handleNavClick("Service")}
                          className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                        >
                          <span>{sub.title}</span>
                          <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                <a
                  href="#features"
                  onClick={() => nav.handleNavClick("Feature")}
                  className={`min-h-[46px] px-4 rounded-xl text-sm font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                    nav.activeTab === "Feature"
                      ? "bg-[#0088FF] text-white"
                      : "text-gray-200 hover:bg-white/5 active:bg-white/10"
                  }`}
                >
                  <span>Feature &amp; Specs</span>
                  <ChevronRight className={`w-4 h-4 ${nav.activeTab === "Feature" ? "text-white" : "text-gray-500"}`} />
                </a>

                <a
                  href="#pricing"
                  onClick={() => nav.handleNavClick("Pricing")}
                  className={`min-h-[46px] px-4 rounded-xl text-sm font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                    nav.activeTab === "Pricing"
                      ? "bg-[#0088FF] text-white"
                      : "text-gray-200 hover:bg-white/5 active:bg-white/10"
                  }`}
                >
                  <span>Pricing Plans</span>
                  <ChevronRight className={`w-4 h-4 ${nav.activeTab === "Pricing" ? "text-white" : "text-gray-500"}`} />
                </a>

                <a
                  href="#faq"
                  onClick={() => nav.handleNavClick("FAQ")}
                  className={`min-h-[46px] px-4 rounded-xl text-sm font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                    nav.activeTab === "FAQ"
                      ? "bg-[#0088FF] text-white"
                      : "text-gray-200 hover:bg-white/5 active:bg-white/10"
                  }`}
                >
                  <span>FAQ &amp; Support</span>
                  <ChevronRight className={`w-4 h-4 ${nav.activeTab === "FAQ" ? "text-white" : "text-gray-500"}`} />
                </a>
              </div>

              {/* Direct Actions & Portal */}
              <div className="pt-3 mt-1 border-t border-white/10 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => {
                    nav.closeMobileMenu();
                    onOpenCoverage();
                  }}
                  className="w-full min-h-[44px] text-xs font-bold rounded-xl bg-white/10 hover:bg-white/15 active:scale-98 text-white flex items-center justify-center gap-2 border border-white/10 transition-all cursor-pointer"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#0088FF]" /> Check Satellite Coverage
                </button>

                <a
                  href="https://wa.me/237674137259?text=Hello%20Samitech%20Networks,%20I'd%20like%20to%20get%20started%20with%20Starlink%20Internet."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[44px] text-xs font-bold rounded-xl bg-[#25D366] hover:bg-[#20ba5a] active:scale-98 text-white flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20 transition-all cursor-pointer"
                >
                  <Phone className="w-4 h-4" /> WhatsApp Technician (674 137 259)
                </a>

                <button
                  type="button"
                  onClick={nav.openPortalModal}
                  className="w-full min-h-[42px] text-xs font-medium rounded-xl bg-white/[0.04] text-gray-300 hover:text-white flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <User className="w-3.5 h-3.5 text-gray-400" />
                  <span>Client &amp; Warden Portal</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Backdrop overlay for mobile menu */}
      {nav.mobileMenuOpen && (
        <div
          onClick={nav.closeMobileMenu}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden cursor-pointer"
          aria-hidden="true"
        />
      )}

      {/* Invisible backdrop overlay for desktop dropdown dismissal */}
      {nav.servicesDropdownOpen && (
        <div
          onClick={(e) => {
            e.stopPropagation();
            nav.closeServicesDropdown();
          }}
          className="fixed inset-0 z-30 bg-transparent hidden md:block cursor-default"
          aria-hidden="true"
        />
      )}

      {/* Client & Warden Portal Modal */}
      {nav.portalModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-md rounded-2xl bg-[#0E1420] border border-white/15 p-6 shadow-2xl text-left">
            <button
              type="button"
              onClick={nav.closePortalModal}
              className="absolute top-4 right-4 p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close portal modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#0088FF]/15 border border-[#0088FF]/30 flex items-center justify-center text-[#0088FF]">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Client &amp; Warden Portal</h3>
                <p className="text-xs text-gray-400">Bandwidth &amp; Voucher Management</p>
              </div>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed mb-4">
              Access real-time tenant QoS telemetry, renew Wi-Fi access tokens, or generate guest vouchers for your hostel compound.
            </p>

            <div className="space-y-3 mb-5">
              <div>
                <label className="block text-[11px] font-semibold text-gray-400 mb-1">
                  Hostel or Compound ID
                </label>
                <input
                  type="text"
                  placeholder="e.g. HST-MOLYKO-042"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#0088FF]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-gray-400 mb-1">
                  Access PIN / Token
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#0088FF]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <a
                href="https://wa.me/237674137259?text=Hello%20Samitech,%20I%20need%20assistance%20logging%20into%20the%20Hostel%20Portal."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl text-xs font-bold bg-[#0088FF] hover:bg-[#0077e6] text-white flex items-center justify-center gap-2 transition-colors text-center cursor-pointer"
              >
                Request Access from Samitech Admin
              </a>
              <button
                type="button"
                onClick={nav.closePortalModal}
                className="w-full py-2 rounded-xl text-xs font-semibold text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
