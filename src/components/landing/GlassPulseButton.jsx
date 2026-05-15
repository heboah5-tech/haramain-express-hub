import React, { useState } from "react";
import { motion } from "framer-motion";
import { LogIn } from "lucide-react";
import { base44 } from "@/api/base44Client";

export default function GlassPulseButton({ onHoverChange }) {
  const [hovered, setHovered] = useState(false);

  const handleHover = (val) => {
    setHovered(val);
    onHoverChange?.(val);
  };

  const handleLogin = () => {
    base44.auth.redirectToLogin("/");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.9 }}
    >
      <motion.button
        onClick={handleLogin}
        onHoverStart={() => handleHover(true)}
        onHoverEnd={() => handleHover(false)}
        whileTap={{ scale: 0.97 }}
        className="relative group flex items-center gap-3 px-8 py-3.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-lg font-medium tracking-wide overflow-hidden transition-all duration-300 hover:border-primary/60 hover:bg-white/15"
      >
        {/* Pulse ring */}
        {hovered && (
          <motion.span
            initial={{ scale: 0.8, opacity: 0.6 }}
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="absolute inset-0 rounded-full border border-primary/40"
          />
        )}
        <LogIn className="w-5 h-5 text-primary" />
        دخول للموقع
      </motion.button>
    </motion.div>
  );
}