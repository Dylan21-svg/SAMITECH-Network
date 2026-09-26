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
    sm: "h-8 sm:h-9",
    md: "h-9 sm:h-10 lg:h-11",
    lg: "h-11 sm:h-12 lg:h-14",
  };

  return (
    <div className={`relative flex items-center shrink-0 ${heightClasses[size]} ${className}`}>
      <Image
        src="/images/samitech-logo.png"
        alt="Samitech Networks - Connecting The Future"
        width={380}
        height={130}
        priority
        unoptimized
        className="h-full w-auto object-contain select-none"
      />
    </div>
  );
}
