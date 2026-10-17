"use client";

import React from "react";
import { aboutData } from "../data/portfolioData";
import { SectionHeader } from "./SectionHeader";
import { BracketButton } from "./BracketButton";
import { Separator } from "./Separator";
import { Icon } from "./Icons";

export function AboutMe() {
  const scrollToServices = () => {
    const el = document.getElementById("services-anchor");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getServiceIconName = (type) => {
    switch (type) {
      case "design":
        return "service-design";
      case "development":
        return "service-development";
      case "maintenance":
        return "service-maintenance";
      default:
        return "service-design";
    }
  };

  return (
    <section
      id="about"
      className="relative w-full py-16 md:py-24"
      style={{
        background:
          "radial-gradient(50% 50% at 50% 50%, rgba(26,21,21,0) 0%, rgba(1,1,1,.16) 100%), #FFFFFF",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 flex flex-col items-center">
        {/* Section Header */}
        <SectionHeader title={aboutData.title} width="404px" />

        {/* About Paragraph */}
        <p className="font-body font-normal text-[15px] leading-[22px] md:leading-[25px] text-[#050505] text-center max-w-[763px] mt-2 mb-8">
          {aboutData.paragraph}
        </p>

        {/* EXPLORE Bracket Button */}
        <div className="mb-6">
          <BracketButton theme="dark-text" onClick={scrollToServices}>
            EXPLORE
          </BracketButton>
        </div>

        {/* Separator */}
        <Separator color="black" />

        {/* Services Staggered Layout (Row 1: DESIGN & DEVELOPMENT, Row 2: MAINTENANCE) */}
        <div id="services-anchor" className="w-full max-w-[1066px] mt-6 md:mt-10">
          {/* Row 1: DESIGN & DEVELOPMENT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {aboutData.services.slice(0, 2).map((service) => (
              <div key={service.id} className="relative flex flex-col group">
                {/* Watermark Faded Icon behind/overlapping title */}
                <div className="flex items-center relative mb-2">
                  <div className="absolute -left-6 -top-5 opacity-20 text-black group-hover:opacity-30 transition-opacity pointer-events-none">
                    <Icon
                      name={getServiceIconName(service.type)}
                      size={74}
                      color="#000000"
                    />
                  </div>
                  <h3 className="relative z-10 font-ui font-bold text-[20px] md:text-[22px] leading-[27px] tracking-[0.18538em] text-black uppercase pl-6 md:pl-8">
                    {service.title}
                  </h3>
                </div>

                {/* Justified Description */}
                <p className="font-body font-light text-[14px] leading-[19px] text-black text-justify pl-6 md:pl-8 max-w-[430px]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Row 2: MAINTENANCE centered below */}
          {aboutData.services[2] && (
            <div className="mt-12 md:mt-16 flex justify-center">
              <div className="relative flex flex-col group max-w-[500px]">
                <div className="flex items-center relative mb-2">
                  <div className="absolute -left-6 -top-5 opacity-20 text-black group-hover:opacity-30 transition-opacity pointer-events-none">
                    <Icon
                      name={getServiceIconName(aboutData.services[2].type)}
                      size={74}
                      color="#000000"
                    />
                  </div>
                  <h3 className="relative z-10 font-ui font-bold text-[20px] md:text-[22px] leading-[27px] tracking-[0.18538em] text-black uppercase pl-6 md:pl-8">
                    {aboutData.services[2].title}
                  </h3>
                </div>

                <p className="font-body font-light text-[14px] leading-[19px] text-black text-justify pl-6 md:pl-8 max-w-[430px]">
                  {aboutData.services[2].description}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Separator after services */}
        <Separator color="black" className="mt-14 md:mt-20" />
      </div>
    </section>
  );
}
