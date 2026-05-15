import React from "react";
import { motion } from "framer-motion";
import { Train } from "lucide-react";

export default function HorizonFooter() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.4 }}
      className="absolute bottom-8 left-0 right-0 flex items-center justify-center gap-2 text-white/20"
    >
      <Train className="w-4 h-4" />
      <span className="text-xs font-light tracking-widest">HARAMAIN HIGH SPEED RAILWAY</span>
    </motion.div>
  );
}