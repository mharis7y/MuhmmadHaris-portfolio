import React from "react";

export function SectionHeader({ title, width = "404px", darkBorder = false, className = "" }) {
  return (
    <div className={`flex justify-center items-center my-8 md:my-14 ${className}`}>
      <div
        style={{ maxWidth: width }}
        className={`w-full mx-4 h-[72px] md:h-[107px] flex items-center justify-center transition-all duration-300 border-[5px] md:border-[8px] ${
          darkBorder ? "border-black text-black" : "border-black text-black"
        }`}
      >
        <h2 className="font-ui font-bold text-[18px] sm:text-[22px] md:text-[30px] leading-tight tracking-[0.25em] md:tracking-[0.35538em] uppercase text-center select-none px-2">
          {title}
        </h2>
      </div>
    </div>
  );
}
