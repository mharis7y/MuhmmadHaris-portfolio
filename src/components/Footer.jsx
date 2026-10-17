"use client";

import React from "react";
import { footerData } from "../data/portfolioData";
import { Icon } from "./Icons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full min-h-[326px] bg-[#1A1A1A] text-white flex flex-col items-center justify-between py-12 md:py-16 select-none">
      {/* 1. BACK TO TOP with Chevron */}
      <button
        onClick={scrollToTop}
        className="group flex flex-col items-center cursor-pointer focus:outline-none transition-transform duration-200 hover:-translate-y-1"
        aria-label="Back to top"
      >
        {/* Double Chevron Up */}
        <div className="mb-2 transition-transform duration-300 group-hover:-translate-y-1">
          <Icon name="double-chevron-up" size={18} color="#FFFFFF" />
        </div>

        {/* Text: BACK TO TOP */}
        <span className="font-ui font-bold text-[14px] md:text-[15px] leading-[18px] tracking-[0.18538em] uppercase text-white group-hover:text-white/80 transition-colors">
          BACK TO TOP
        </span>
      </button>

      {/* 2. Row of Social Icons (~30px, 28px gap) */}
      <div className="flex items-center gap-[28px] my-8">
        {footerData.socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target={social.url.startsWith("http") ? "_blank" : undefined}
            rel={social.url.startsWith("http") ? "noopener noreferrer" : undefined}
            className="w-[30px] h-[30px] flex items-center justify-center text-white/90 hover:text-white hover:scale-110 transition-all duration-200"
            aria-label={social.name}
          >
            <Icon name={social.icon} size={28} color="currentColor" />
          </a>
        ))}
      </div>

      {/* 3. Copyright in Nunito 700 18px */}
      <div className="text-center px-4">
        <p className="font-footer font-bold text-[15px] md:text-[18px] leading-[25px] text-white tracking-wide">
          {footerData.copyright}
        </p>
      </div>
    </footer>
  );
}
