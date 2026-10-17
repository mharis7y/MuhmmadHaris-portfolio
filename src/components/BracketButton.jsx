import React from "react";

export function BracketButton({
  children,
  onClick,
  href,
  target,
  rel,
  type = "button",
  variant = "default", // 'default' | 'submit' | 'small' | 'demo'
  theme = "dark-text", // 'dark-text' (black) | 'light-text' (white)
  className = "",
  disabled = false,
}) {
  const isLightText = theme === "light-text";

  // Dimensions based on spec
  let barHeightClass = "h-[32px]";
  let barWidthClass = "w-[2px]";
  let textClass = "text-[15px] leading-[18px] font-semibold";
  let minWidthStyle = { minWidth: "139px" };

  if (variant === "submit") {
    barHeightClass = "h-[45px]";
    barWidthClass = "w-[3px]";
    textClass = "text-[16px] leading-[20px] font-bold tracking-[0.1em]";
    minWidthStyle = { minWidth: "197px" };
  } else if (variant === "small" || variant === "demo") {
    barHeightClass = "h-[27px]";
    barWidthClass = "w-[2px]";
    textClass = "text-[12px] leading-[15px] font-semibold tracking-[0.095em]";
    minWidthStyle = { minWidth: "90px" };
  }

  const barBgClass = isLightText ? "bg-white" : "bg-black";
  const textColorClass = isLightText ? "text-white" : "text-black";

  const content = (
    <div
      style={minWidthStyle}
      className={`group relative inline-flex items-center justify-between px-3 py-1 cursor-pointer select-none transition-transform duration-200 hover:scale-105 active:scale-95 ${className}`}
    >
      {/* Left Vertical Bar */}
      <span
        className={`${barWidthClass} ${barHeightClass} ${barBgClass} transition-all duration-300 group-hover:scale-y-110`}
      />

      {/* Button Text */}
      <span
        className={`font-ui uppercase mx-3 text-center transition-colors duration-200 ${textClass} ${textColorClass}`}
      >
        {children}
      </span>

      {/* Right Vertical Bar */}
      <span
        className={`${barWidthClass} ${barHeightClass} ${barBgClass} transition-all duration-300 group-hover:scale-y-110`}
      />
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className="inline-block no-underline"
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="inline-block bg-transparent border-0 p-0 focus:outline-none"
    >
      {content}
    </button>
  );
}
