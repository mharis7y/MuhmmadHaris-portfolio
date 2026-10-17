"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Icon } from "./Icons";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About me", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Portfolio", href: "#portfolio" },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "h-[66px] bg-[#0B0B0B]/95 backdrop-blur-md shadow-lg shadow-black/40"
            : "h-[80px] md:h-[100px] bg-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto h-full px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => handleLinkClick(e, "#top")}
            className="group flex items-center gap-2 select-none"
            aria-label="Muhammad Haris - Home"
          >
            <div className="relative w-[50px] h-[45px] md:w-[60px] md:h-[50px] transition-transform duration-200 group-hover:scale-105">
              <Image
                src="/images/logo-white.svg"
                alt="MH Monogram Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="w-[147px] h-[46px] flex items-center justify-center font-ui font-bold text-[17px] leading-[21px] text-white hover:text-white/80 transition-colors no-underline select-none"
              >
                {link.label}
              </a>
            ))}

            {/* CONTACT ME Pill Button */}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="w-[147px] h-[46px] ml-2 flex items-center justify-center bg-white text-black font-ui font-bold text-[15px] leading-[18px] uppercase tracking-wider rounded-[30px] border-[4px] border-white hover:bg-transparent hover:text-white transition-all duration-200 no-underline shadow-md select-none"
            >
              CONTACT ME
            </a>
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white focus:outline-none"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <Icon name="close" size={28} color="#FFFFFF" />
              ) : (
                <Icon name="menu" size={28} color="#FFFFFF" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Dropdown Menu (Exact match to Figma 'dropdown menu.png') */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[56px] z-40 md:hidden bg-[#1A1A1A]/95 backdrop-blur-md flex flex-col justify-start animate-fadeIn">
          <div className="w-full flex flex-col pt-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="h-[64px] flex items-center justify-center font-ui font-semibold text-[18px] text-white hover:text-white/70 border-b border-white/10 transition-colors no-underline"
              >
                {link.label}
              </a>
            ))}

            {/* Full width white Contact Me button */}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="h-[64px] mt-4 flex items-center justify-center bg-white text-black font-ui font-bold text-[16px] uppercase tracking-wider transition-colors no-underline"
            >
              CONTACT ME
            </a>
          </div>
        </div>
      )}
    </>
  );
}
