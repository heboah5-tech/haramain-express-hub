import React from "react";
import { motion } from "framer-motion";

export default function LuminousRail({ className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      animate={{ scaleX: 1, opacity: 1 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={`relative h-px ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="absolute inset-0 blur-sm bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
    </motion.div>
  );
}