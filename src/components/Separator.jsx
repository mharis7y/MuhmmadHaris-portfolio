import React from "react";

export function Separator({ color = "black", className = "" }) {
  const isWhite = color === "white";
  const strokeColor = isWhite ? "#FFFFFF" : "#000000";

  return (
    <div className={`flex justify-center items-center my-8 md:my-12 ${className}`}>
      <svg
        width="170"
        height="12"
        viewBox="0 0 170 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="select-none"
      >
        {/* Left horizontal bar */}
        <line x1="0" y1="6" x2="56" y2="6" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" />
        {/* Chevron Zigzags \\\/// */}
        <path
          d="M64 2L71 10L78 2L85 10L92 2L99 10L106 2"
          stroke={strokeColor}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Right horizontal bar */}
        <line x1="114" y1="6" x2="170" y2="6" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}
