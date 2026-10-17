"use client";

import React from "react";
import { skillsData } from "../data/portfolioData";
import { SectionHeader } from "./SectionHeader";
import { Icon } from "./Icons";

export function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full py-16 md:py-24"
      style={{
        background:
          "radial-gradient(50% 50% at 50% 50%, rgba(26,21,21,0) 0%, rgba(1,1,1,.16) 100%), #FFFFFF",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 flex flex-col items-center">
        {/* Section Header */}
        <SectionHeader title={skillsData.title} width="404px" />

        {/* Skill Groups */}
        <div className="w-full max-w-[1004px] mt-8 md:mt-12 space-y-16 md:space-y-24">
          {skillsData.groups.map((group) => (
            <div key={group.id} className="w-full flex flex-col">
              {/* Group Sub-heading */}
              <h3 className="font-ui font-bold text-[22px] md:text-[30px] leading-[37px] tracking-[0.18538em] text-black uppercase mb-8 md:mb-14 text-center md:text-left">
                {group.title}
              </h3>

              {/* 4-Column Grid on Desktop, 2-Column on Mobile */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 md:gap-y-16 gap-x-6 md:gap-x-12 place-items-center">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex flex-col items-center justify-center text-center transition-transform duration-200 hover:-translate-y-2"
                  >
                    {/* Brand Icon */}
                    <div className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                      <Icon
                        name={skill.iconType}
                        size={80}
                        className="w-full h-full object-contain filter drop-shadow-sm"
                      />
                    </div>

                    {/* Uppercase Skill Label */}
                    <span className="font-ui font-normal text-[15px] md:text-[20px] lg:text-[24px] leading-[26px] md:leading-[29px] tracking-[0.13538em] text-black uppercase select-none">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
