import React from "react";
import { LogIn } from "lucide-react";
import { base44 } from "@/api/base44Client";

const BACKGROUND_IMAGE = "https://media.base44.com/images/public/user_69f07e798188f6f614f0bca2/30d3e9e70_Makkahwithgreenlight1.jpg";
const LOGO_IMAGE = "https://media.base44.com/images/public/user_69f07e798188f6f614f0bca2/af649e12c_xlayout_set_logoqimg_id40191841at1778516310060pagespeedicw0_d1m34HJ.png";

export default function Landing() {
  const handleLogin = () => {
    base44.auth.redirectToLogin("/");
  };

  return (
    <div dir="rtl" className="relative min-h-screen font-tajawal overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={BACKGROUND_IMAGE}
          alt="محطة قطار الحرمين"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 gap-10">
        {/* Logo */}
        <img
          src={LOGO_IMAGE}
          alt="قطار الحرمين السريع"
          className="h-20 md:h-28 w-auto brightness-0 invert opacity-90"
        />

        {/* Decorative Line */}
        <div className="w-24 h-px bg-primary/60" />

        {/* Welcome Text */}
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-wide">
            مرحباً بك
          </h1>
          <p className="text-white/60 text-lg md:text-xl font-light max-w-md mx-auto leading-relaxed">
            نظام قطار الحرمين السريع
          </p>
        </div>

        {/* Login Link */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); handleLogin(); }}
          className="inline-flex items-center gap-3 text-white/80 hover:text-white text-lg underline underline-offset-4 decoration-white/40 hover:decoration-white transition-all duration-300"
        >
          <LogIn className="w-5 h-5" />
          دخول للموقع
        </a>
      </div>
    </div>
  );
}