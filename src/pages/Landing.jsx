import React, { useState } from "react";
import { motion } from "framer-motion";
import HeroBackground from "../components/landing/HeroBackground";
import LuminousRail from "../components/landing/LuminousRail";
import GlassPulseButton from "../components/landing/GlassPulseButton";
import TrackLines from "../components/landing/TrackLines";
import HorizonFooter from "../components/landing/HorizonFooter";

const LOGO_IMAGE = "https://media.base44.com/images/public/user_69f07e798188f6f614f0bca2/af649e12c_xlayout_set_logoqimg_id40191841at1778516310060pagespeedicw0_d1m34HJ.png";

export default function Landing() {
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  return (
    <div dir="rtl" className="relative min-h-screen font-tajawal overflow-hidden bg-background">
      {/* Cinematic Background */}
      <HeroBackground isHovered={isButtonHovered} />

      {/* Track perspective lines */}
      <TrackLines />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8 md:mb-12"
        >
          <img
            src={LOGO_IMAGE}
            alt="قطار الحرمين السريع"
            className="h-16 md:h-24 w-auto brightness-0 invert opacity-85"
            width={240}
            height={96}
          />
        </motion.div>

        {/* Luminous Rail Divider */}
        <LuminousRail className="w-40 md:w-56 mb-8 md:mb-10" delay={0.5} />

        {/* Welcome Text Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-10 md:mb-14"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-3 md:mb-4 tracking-tight">
            مرحباً بك
          </h1>

          {/* Gold accent line under heading */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="w-12 h-0.5 bg-gradient-to-r from-secondary/60 via-secondary to-secondary/60 mx-auto mb-5 md:mb-6"
          />

          <p className="text-muted-foreground text-base md:text-xl font-light max-w-sm md:max-w-md mx-auto leading-relaxed">
            نظام قطار الحرمين السريع
          </p>
        </motion.div>

        {/* Glass Pulse Login Button */}
        <GlassPulseButton onHoverChange={setIsButtonHovered} />

        {/* Secondary info text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-8 text-xs md:text-sm text-muted-foreground/40 font-light"
        >
          بوابتك إلى رحلة الحرمين
        </motion.p>
      </div>

      {/* Horizon Footer */}
      <HorizonFooter />
    </div>
  );
}