"use client";

import React, { useState } from "react";
import { mobileLabData } from "../data/portfolioData";
import { BracketButton } from "./BracketButton";

export function MobileLabStrip() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="relative w-full min-h-[313px] bg-[#1D1D1D] overflow-hidden py-12 md:py-16 flex items-center">
      {/* Decorative rotated background graphic on right (Exact match to Figma 'IT' outline) */}
      <div
        className="hidden lg:block absolute -right-16 -top-12 pointer-events-none select-none opacity-80"
        style={{
          transform: "rotate(23.89deg)",
        }}
      >
        <div className="w-[388px] h-[368px] border-[18px] border-black flex items-center justify-center">
          <span className="font-sans font-black text-[220px] text-black tracking-[4px] leading-none select-none">
            {mobileLabData.badgeText}
          </span>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 flex flex-col items-start justify-center">
        {/* Strip Header */}
        <h2 className="font-ui font-bold text-[24px] md:text-[30px] leading-[37px] tracking-[0.18538em] text-white uppercase mb-4">
          {mobileLabData.title}
        </h2>

        {/* Justified Paragraph */}
        <p className="font-body font-normal text-[14px] md:text-[15px] leading-[22px] md:leading-[24px] text-white text-justify max-w-[1148px] mb-6">
          {mobileLabData.paragraph}
        </p>

        {isExpanded && (
          <p className="font-body font-light text-[14px] md:text-[15px] leading-[22px] md:leading-[24px] text-white/90 text-justify max-w-[1148px] mb-6 animate-fadeIn">
            {mobileLabData.moreContent}
          </p>
        )}

        {/* Bracket Button (Desktop: READ MORE, Mobile: MORE) */}
        <div>
          <BracketButton
            theme="light-text"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <span className="hidden md:inline">
              {isExpanded ? "SHOW LESS" : "READ MORE"}
            </span>
            <span className="inline md:hidden">
              {isExpanded ? "LESS" : "MORE"}
            </span>
          </BracketButton>
        </div>
      </div>
    </section>
  );
}
