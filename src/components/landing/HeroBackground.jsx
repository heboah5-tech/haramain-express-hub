import React from "react";

const BACKGROUND_IMAGE = "https://media.base44.com/images/public/user_69f07e798188f6f614f0bca2/30d3e9e70_Makkahwithgreenlight1.jpg";

export default function HeroBackground({ isHovered }) {
  return (
    <div className="absolute inset-0 transition-all duration-700">
      <img
        src={BACKGROUND_IMAGE}
        alt="محطة قطار الحرمين"
        className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? "scale-105" : "scale-100"}`}
      />
      <div className={`absolute inset-0 transition-all duration-700 ${isHovered ? "bg-black/70" : "bg-gradient-to-t from-black/90 via-black/50 to-black/30"}`} />
    </div>
  );
}