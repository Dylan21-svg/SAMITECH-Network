"use client";

import React from "react";
import Image from "next/image";

interface SamitechLogoProps {
  className?: string;
  variant?: "full" | "icon";
  size?: "sm" | "md" | "lg";
}

export default function SamitechLogo({
  className = "",
  size = "md",
}: SamitechLogoProps) {
  const heightClasses = {
    sm: "h-7 sm:h-8",
    md: "h-8 sm:h-9 lg:h-10",
    lg: "h-10 sm:h-12 lg:h-14",
  };

  return (
    <div className={`relative flex items-center shrink-0 ${heightClasses[size]} ${className}`}>
      <Image
        src="/images/netlogo.png"
        alt="Samitech Networks - Connecting The Future"
        width={320}
        height={120}
        priority
        className="h-full w-auto object-contain select-none"
      />
    </div>
  );
}
