import React from "react";
import { motion } from "framer-motion";
import { base44 } from "@/api/base44Client";
import { LogIn, Train } from "lucide-react";
import { Button } from "@/components/ui/button";

const BACKGROUND_IMAGE = "https://media.base44.com/images/public/user_69f07e798188f6f614f0bca2/30d3e9e70_Makkahwithgreenlight1.jpg";
const LOGO_IMAGE = "https://media.base44.com/images/public/user_69f07e798188f6f614f0bca2/af649e12c_xlayout_set_logoqimg_id40191841at1778516310060pagespeedicw0_d1m34HJ.png";

export default function Landing() {
  const handleLogin = () => {
    window.location.href = "https://hrmlinks.com/";
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

        {/* Login Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <a
            href="https://hrmlinks.com/"
            className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-14 py-5 text-xl rounded-2xl shadow-2xl shadow-black/40 border border-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-primary/30"
          >
            <LogIn className="w-6 h-6" />
            دخول للموقع
          </a>
        </motion.div>


      </div>
    </div>
  );
}