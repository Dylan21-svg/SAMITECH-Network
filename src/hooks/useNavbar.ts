"use client";

import { useState, useEffect, useCallback } from "react";

export interface UseNavbarStateReturn {
  mobileMenuOpen: boolean;
  servicesDropdownOpen: boolean;
  mobileServicesOpen: boolean;
  portalModalOpen: boolean;
  activeTab: string;
  scrolled: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setServicesDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setMobileServicesOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setPortalModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  toggleMobileMenu: () => void;
  openMobileMenu: () => void;
  closeMobileMenu: () => void;
  toggleServicesDropdown: (e?: React.MouseEvent) => void;
  openServicesDropdown: () => void;
  closeServicesDropdown: () => void;
  toggleMobileServices: (e?: React.MouseEvent) => void;
  openPortalModal: () => void;
  closePortalModal: () => void;
  handleNavClick: (tabName: string) => void;
  closeAllMenus: () => void;
}

/**
 * Custom state-managed hook for Navbar component.
 * Handles responsive mobile drawer toggle, desktop dropdown menu visibility,
 * mobile services sub-menu accordion, modal toggles, click-outside handling,
 * keyboard accessibility, scroll detection, and window resize synchronization.
 */
export function useNavbarState(initialTab: string = "Home"): UseNavbarStateReturn {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [portalModalOpen, setPortalModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(initialTab);
  const [scrolled, setScrolled] = useState(false);

  // Monitor window scroll to apply elevated navbar styles
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dismiss desktop dropdown menu when clicking outside (only active when dropdown is open)
  useEffect(() => {
    if (!servicesDropdownOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement | SVGElement | null;
      if (target && typeof target.closest === "function" && target.closest('[data-dropdown="services"]')) {
        return;
      }
      setServicesDropdownOpen(false);
    };

    // Small timeout ensures the opening click event does not trigger immediate outside dismissal
    const timer = setTimeout(() => {
      document.addEventListener("click", handleClickOutside);
    }, 10);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [servicesDropdownOpen]);

  // Dismiss open menus or modals when Escape key is pressed
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setServicesDropdownOpen(false);
        setMobileServicesOpen(false);
        setPortalModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Auto-close mobile drawer if viewport expands to desktop breakpoint (>= 768px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent background body scroll when mobile menu or modal is open
  useEffect(() => {
    if (mobileMenuOpen || portalModalOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [mobileMenuOpen, portalModalOpen]);

  // Toggle handlers with stopPropagation support to ensure reliable click response
  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  const openMobileMenu = useCallback(() => {
    setMobileMenuOpen(true);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  const toggleServicesDropdown = useCallback((e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    setServicesDropdownOpen((prev) => !prev);
  }, []);

  const openServicesDropdown = useCallback(() => {
    setServicesDropdownOpen(true);
  }, []);

  const closeServicesDropdown = useCallback(() => {
    setServicesDropdownOpen(false);
  }, []);

  const toggleMobileServices = useCallback((e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    setMobileServicesOpen((prev) => !prev);
  }, []);

  const openPortalModal = useCallback(() => {
    setMobileMenuOpen(false);
    setPortalModalOpen(true);
  }, []);

  const closePortalModal = useCallback(() => {
    setPortalModalOpen(false);
  }, []);

  const closeAllMenus = useCallback(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setMobileServicesOpen(false);
  }, []);

  const handleNavClick = useCallback(
    (tabName: string) => {
      setActiveTab(tabName);
      closeAllMenus();
    },
    [closeAllMenus]
  );

  return {
    mobileMenuOpen,
    servicesDropdownOpen,
    mobileServicesOpen,
    portalModalOpen,
    activeTab,
    scrolled,
    setMobileMenuOpen,
    setServicesDropdownOpen,
    setMobileServicesOpen,
    setPortalModalOpen,
    setActiveTab,
    toggleMobileMenu,
    openMobileMenu,
    closeMobileMenu,
    toggleServicesDropdown,
    openServicesDropdown,
    closeServicesDropdown,
    toggleMobileServices,
    openPortalModal,
    closePortalModal,
    handleNavClick,
    closeAllMenus,
  };
}

export default useNavbarState;
