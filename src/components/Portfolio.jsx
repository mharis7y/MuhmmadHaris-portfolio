"use client";

import React, { useState } from "react";
import Image from "next/image";
import { portfolioData } from "../data/portfolioData";
import { BracketButton } from "./BracketButton";

export function Portfolio() {
  const [activeTab, setActiveTab] = useState("ALL");
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeScreenshotIdx, setActiveScreenshotIdx] = useState(0);

  const filteredProjects = portfolioData.projects.filter((project) => {
    if (activeTab === "ALL") return true;
    return project.category.includes(activeTab);
  });

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setActiveScreenshotIdx(0);
  };

  return (
    <section id="portfolio" className="relative w-full bg-[#1A1A1A] pb-16 md:pb-24">
      {/* 1. Top Banner with Mountains and PORTFOLIO Box (321px high) */}
      <div className="relative w-full h-[260px] md:h-[321px] overflow-hidden flex items-center justify-center">
        {/* Mountain background image */}
        <div className="absolute inset-0">
          <Image
            src={portfolioData.bannerImage}
            alt="Mountain landscape"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* 32% black overlay per spec */}
          <div className="absolute inset-0 bg-black/35" />
        </div>

        {/* Centered PORTFOLIO Header Box (482px wide, 8px black border) */}
        <div className="relative z-10 w-full max-w-[482px] mx-4 h-[75px] md:h-[107px] border-[5px] md:border-[8px] border-black flex items-center justify-center backdrop-blur-[2px]">
          <h2 className="font-ui font-bold text-[22px] md:text-[30px] leading-[38px] tracking-[0.25em] md:tracking-[0.43538em] text-black uppercase text-center select-none px-4">
            {portfolioData.title}
          </h2>
        </div>
      </div>

      {/* 2. Filter Bar (587px wide, 48px high, ~32px below banner) */}
      <div className="w-full flex justify-center mt-8 md:mt-12 px-4">
        <div className="relative w-full max-w-[587px] h-[48px] flex flex-col justify-end">
          {/* Filter Tabs */}
          <div className="flex items-center justify-center w-full">
            {portfolioData.categories.map((cat) => {
              const isActive = activeTab === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`w-[149px] pb-3 font-ui font-semibold text-[14px] leading-[17px] tracking-wider uppercase text-center transition-colors focus:outline-none ${
                    isActive ? "text-[#FFFBFB]" : "text-[#7C7C7C] hover:text-[#B0B0B0]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Track Line (1px #AAAAAA) */}
          <div className="relative w-full h-[1px] bg-[#AAAAAA]">
            {/* Active Moving Underline (1px #FFFFFF) */}
            <div
              className="absolute top-0 h-[2px] bg-white transition-all duration-300"
              style={{
                width: "33.33%",
                left:
                  activeTab === "ALL"
                    ? "0%"
                    : activeTab === "CODED"
                    ? "33.33%"
                    : "66.66%",
              }}
            />
          </div>
        </div>
      </div>

      {/* 3. Grid of Projects: Exactly 3 Projects in 3 Columns on Desktop, 1 on Mobile */}
      <div className="w-full max-w-[1920px] mx-auto mt-10 md:mt-14 px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-y border-white/10">
          {filteredProjects.map((project, idx) => {
            // Keep overlay visible on first item for mobile preview, matching Figma
            const isAlwaysOpenOnMobile = idx === 0;

            return (
              <div
                key={project.id}
                className="relative group h-[380px] sm:h-[420px] lg:h-[450px] bg-[#121212] overflow-hidden cursor-pointer border-r border-white/10 last:border-r-0 flex items-center justify-center p-6"
                onClick={() => openProjectModal(project)}
              >
                {/* Centered App Icon showcase */}
                <div className="relative w-full h-full flex flex-col items-center justify-center">
                  <div className="relative w-[150px] h-[150px] sm:w-[170px] sm:h-[170px] md:w-[190px] md:h-[190px] rounded-[34px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.6)] border border-white/20 transition-transform duration-500 group-hover:scale-105">
                    <Image
                      src={project.image}
                      alt={`${project.title} App Icon`}
                      fill
                      className="object-cover object-center select-none"
                      sizes="(min-width: 1024px) 220px, 170px"
                    />
                  </div>
                  <span className="font-ui font-bold text-[16px] md:text-[18px] text-white tracking-[0.15em] uppercase mt-4 select-none opacity-80 group-hover:opacity-100 transition-opacity">
                    {project.title}
                  </span>
                </div>

                {/* Dark Hover/Active Overlay (Exact match to Figma 'eatsome.' tile) */}
                <div
                  className={`absolute inset-0 bg-black/85 flex flex-col items-center justify-center p-6 text-center transition-opacity duration-300 ${
                    isAlwaysOpenOnMobile
                      ? "opacity-100 md:opacity-0 md:group-hover:opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                >
                  {/* Tag: coded, designed */}
                  <span className="font-ui font-semibold italic text-[11px] leading-[13px] tracking-[0.095em] text-white uppercase mb-2">
                    {project.tag}
                  </span>

                  {/* Title */}
                  <h3 className="font-ui font-bold text-[22px] md:text-[25px] leading-[32px] tracking-[0.20538em] text-white uppercase mb-2">
                    {project.title}
                  </h3>

                  {/* Short Description */}
                  <p className="font-ui font-medium text-[11px] leading-[16px] tracking-tight text-white/90 max-w-[320px] mb-6">
                    {project.shortDesc}
                  </p>

                  {/* DEMO / MORE Bracket Buttons */}
                  <div
                    className="flex items-center gap-4"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <BracketButton
                      variant="demo"
                      theme="light-text"
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      DEMO
                    </BracketButton>

                    <BracketButton
                      variant="demo"
                      theme="light-text"
                      onClick={() => openProjectModal(project)}
                    >
                      MORE
                    </BracketButton>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. Bottom Line: "And many more to come!" */}
      <div className="w-full text-center mt-12 md:mt-16">
        <p className="font-ui font-semibold text-[18px] md:text-[20px] leading-[24px] text-[#FFFBFB] select-none tracking-wide">
          And many more to come!
        </p>
      </div>

      {/* 5. Project Detail Modal with Live Screenshot Gallery */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 md:p-8 overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-[850px] max-h-[90vh] bg-[#1A1A1A] border-2 border-white/20 p-6 md:p-8 rounded-lg shadow-2xl animate-fadeIn overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-white/70 hover:text-white p-2 text-xl"
              aria-label="Close dialog"
            >
              ✕
            </button>

            {/* Header info with App Icon */}
            <div className="flex items-center gap-4 mb-4">
              <div className="relative w-[56px] h-[56px] md:w-[64px] md:h-[64px] rounded-[16px] overflow-hidden border border-white/20 flex-shrink-0 shadow-lg">
                <Image
                  src={selectedProject.image}
                  alt={`${selectedProject.title} Icon`}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <div>
                <span className="font-ui font-semibold italic text-[11px] text-[#53C1DE] tracking-widest uppercase">
                  {selectedProject.tag}
                </span>
                <h3 className="font-ui font-bold text-[22px] md:text-[28px] text-white tracking-[0.12em] uppercase mt-0.5">
                  {selectedProject.title}
                </h3>
                <p className="font-ui font-medium text-[13px] text-[#A0A0A0]">
                  {selectedProject.shortDesc}
                </p>
              </div>
            </div>

            {/* Screenshots Gallery */}
            {selectedProject.screenshots && selectedProject.screenshots.length > 0 && (
              <div className="my-6">
                <span className="font-ui font-bold text-[12px] text-white/70 uppercase tracking-wider block mb-3">
                  App Screenshots:
                </span>

                {/* Main active screenshot preview */}
                <div className="relative w-full h-[320px] md:h-[400px] bg-black/60 rounded-lg overflow-hidden border border-white/10 flex items-center justify-center mb-3">
                  <Image
                    src={selectedProject.screenshots[activeScreenshotIdx]}
                    alt={`${selectedProject.title} Screenshot ${activeScreenshotIdx + 1}`}
                    fill
                    className="object-contain"
                    sizes="(min-width: 768px) 600px, 100vw"
                  />
                </div>

                {/* Thumbnails row */}
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {selectedProject.screenshots.map((src, idx) => (
                    <button
                      key={src}
                      onClick={() => setActiveScreenshotIdx(idx)}
                      className={`relative w-[60px] h-[90px] rounded border-2 overflow-hidden flex-shrink-0 transition-all ${
                        activeScreenshotIdx === idx
                          ? "border-[#53C1DE] scale-105"
                          : "border-white/20 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={src}
                        alt="Thumbnail"
                        fill
                        className="object-cover"
                        sizes="60px"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Full Description */}
            <p className="font-body font-light text-[14px] md:text-[15px] leading-[22px] text-white/90 mb-6">
              {selectedProject.fullDesc}
            </p>

            {/* Tech Stack */}
            <div className="mb-6">
              <span className="font-ui font-bold text-[12px] text-white/70 uppercase tracking-wider block mb-1">
                Technologies Used:
              </span>
              <p className="font-ui font-semibold text-[13px] text-[#FFFBFB]">
                {selectedProject.tech}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 pt-2">
              <BracketButton
                theme="light-text"
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GITHUB REPO
              </BracketButton>

              <button
                onClick={() => setSelectedProject(null)}
                className="px-6 py-2 border border-white/30 text-white font-ui font-semibold text-[13px] hover:bg-white hover:text-black transition-colors rounded"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
