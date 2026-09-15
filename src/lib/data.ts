export interface SolutionItem {
  id: string;
  title: string;
  badge: string;
  headline: string;
  description: string;
  specs: {
    speed: string;
    users: string;
    latency: string;
    coverage: string;
  };
  features: string[];
  image: string;
  popular?: boolean;
}

export const SOLUTIONS_DATA: SolutionItem[] = [
  {
    id: "hostels",
    title: "Student Hostels",
    badge: "Hostel Solutions",
    headline: "Multi-Device High-Bandwidth Shared Routing",
    description: "Engineered specifically for university dormitories and student residential compounds. Enjoy uninterrupted uptime during exam submissions, research, and collaborative group projects.",
    specs: {
      speed: "Up to 250 Mbps",
      users: "40 - 120+ Devices",
      latency: "< 25 ms",
      coverage: "Entire Multi-Story Facility"
    },
    features: [
      "Dynamic load balancing & anti-throttling QoS",
      "Dedicated hostel warden admin panel & usage logs",
      "Automated failover & priority exam bandwidth",
      "24/7 on-call technical engineer support"
    ],
    image: "/images/hostel.jpg",
    popular: true
  },
  {
    id: "rooms",
    title: "Single Rooms & Studios",
    badge: "Solo & Studio Pack",
    headline: "Compact Plug-and-Play High-Speed Setup",
    description: "Designed for individual scholars, remote developers, and private studio apartments who demand dedicated high-speed bandwidth without sharing congested local networks.",
    specs: {
      speed: "Up to 200 Mbps",
      users: "1 - 8 Devices",
      latency: "< 28 ms",
      coverage: "Studio & Room Interior"
    },
    features: [
      "Zero-configuration plug-and-play hardware",
      "Whisper-quiet low-power terminal footprint",
      "Dedicated personal IP with unrestricted peer speed",
      "Instant activation in under 15 minutes"
    ],
    image: "/images/room.jpg"
  },
  {
    id: "apartments",
    title: "Apartments & Residences",
    badge: "Residential Mesh",
    headline: "Whole-Home Seamless Mesh Coverage",
    description: "Premium whole-residence satellite connectivity designed for families and shared flats. Stream 4K/8K content, game online, and run smart-home IoT devices with zero lag.",
    specs: {
      speed: "220+ Mbps",
      users: "15 - 35 Devices",
      latency: "< 22 ms",
      coverage: "Multi-Bedroom & Balconies"
    },
    features: [
      "Mesh Wi-Fi 6 coverage eliminating all dead zones",
      "Simultaneous 4K/8K HDR video streaming",
      "Parental controls & guest network isolation",
      "Weather-hardened exterior satellite dish mount"
    ],
    image: "/images/hostel.jpg"
  }
];

export const PRICING_PLANS = [
  {
    name: "Room Solo Plan",
    tagline: "Ideal for single students, private rooms & studios",
    price: "Contact for Rates",
    frequency: "Flexible monthly billing",
    badge: "Student Favorite",
    features: [
      "Speeds up to 180 Mbps download",
      "Low latency (< 30ms)",
      "Uncapped data with zero throttle",
      "Wi-Fi 6 Compact Terminal",
      "Free remote technical setup"
    ],
    ctaText: "Inquire for Room",
    highlight: false
  },
  {
    name: "Hostel Enterprise Mesh",
    tagline: "Designed for full student hostels & campus residencies",
    price: "Custom Shared Quote",
    frequency: "Shared student split billing",
    badge: "Most Popular",
    features: [
      "High-output pooled speeds up to 250+ Mbps",
      "Supports 100+ simultaneous connections",
      "Multi-floor commercial mesh nodes included",
      "24/7 dedicated local technician hotline",
      "Quarterly performance maintenance visits"
    ],
    ctaText: "Hostel Inquiry",
    highlight: true
  },
  {
    name: "Apartment Premium",
    tagline: "For modern flats, duplexes & residential homes",
    price: "Residential Tier",
    frequency: "Turnkey installation included",
    badge: "Whole-Home",
    features: [
      "Speeds up to 220+ Mbps download",
      "Dual-node whole-home mesh coverage",
      "Ultra-low latency for competitive gaming",
      "Priority satellite beam access",
      "Complete rooftop dish mounting kit"
    ],
    ctaText: "Inquire for Apartment",
    highlight: false
  }
];

export const FAQS = [
  {
    question: "How does Starlink satellite internet work in Cameroon / Central Africa?",
    answer: "Starlink utilizes a constellation of thousands of Low Earth Orbit (LEO) satellites positioned just 550 km above Earth. Because the satellites are over 60 times closer than traditional geostationary satellites, signals travel dramatically faster, providing broadband speeds between 150-250 Mbps with latency comparable to optical fiber."
  },
  {
    question: "What is the installation process for my hostel or room?",
    answer: "Samitech Networks provides turnkey deployment. Our certified technicians survey your building, securely mount the Starlink terminal on the roof or balcony with an unobstructed view of the sky, run professional weatherproof cabling, and configure Wi-Fi 6 mesh routers. Full installation takes under 2 hours."
  },
  {
    question: "Does rain or heavy weather affect the satellite connection?",
    answer: "Starlink dishes are equipped with phased-array antennas and auto-heating elements capable of cutting through fog, tropical rainstorms, and intense conditions. Samitech Networks uses ruggedized mounting brackets to ensure zero signal drift even during severe winds."
  },
  {
    question: "How do students in a hostel share the billing?",
    answer: "We offer tailored shared-billing packages where hostel wardens or student committees can distribute vouchers, MAC-filtered access, or split monthly dues evenly among residents, reducing individual costs while providing gigabit-class speeds."
  }
];

export const TESTIMONIALS = [
  {
    quote: "Excellent speeds and zero hassle—this Starlink setup completely changed how we browse in our hostel. We used to struggle submitting assignments during rush hours, now it's instantaneous.",
    author: "Sandra M.",
    role: "Hostel Committee President, Molyko Campus",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
  },
  {
    quote: "As a remote software developer living in an apartment, regular 4G dongles were killing my productivity with constant dropouts. Samitech's Starlink installation delivers 210 Mbps consistently.",
    author: "Franklin T.",
    role: "Fullstack Engineer, Douala",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
  },
  {
    quote: "Our entire 4-story student residence is running on Samitech's mesh Starlink router system. Over 60 students online simultaneously without a single complaint of buffering.",
    author: "Dr. Patrick E.",
    role: "Property Manager & Hostel Owner",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
  }
];
