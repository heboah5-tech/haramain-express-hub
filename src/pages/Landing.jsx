import React from "react";
import { motion } from "framer-motion";
import { base44 } from "@/api/base44Client";
import { LogIn, Train } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12"
        >
          <img
            src={LOGO_IMAGE}
            alt="قطار الحرمين السريع"
            className="h-20 md:h-28 w-auto brightness-0 invert opacity-90"
          />
        </motion.div>

        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-24 h-px bg-primary/60 mb-10"
        />

        {/* Welcome Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center mb-14"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-wide">
            مرحباً بك
          </h1>
          <p className="text-white/60 text-lg md:text-xl font-light max-w-md mx-auto leading-relaxed">
            نظام قطار الحرمين السريع
          </p>
        </motion.div>

        {/* Login Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <Button
            onClick={handleLogin}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-7 text-lg rounded-xl gap-3 shadow-2xl shadow-primary/20 transition-all duration-300 hover:shadow-primary/40 hover:scale-105"
          >
            <LogIn className="w-5 h-5" />
            دخول للموقع
          </Button>
        </motion.div>

        {/* Bottom Train Icon */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 flex items-center gap-2 text-white/20"
        >
          <Train className="w-4 h-4" />
          <span className="text-xs font-light tracking-widest">HARAMAIN HIGH SPEED RAILWAY</span>
        </motion.div>
      </div>
    </div>
  );
}