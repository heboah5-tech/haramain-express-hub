import React from "react";
import { motion } from "framer-motion";

export default function TrackLines() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Left rail */}
      <motion.div
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        style={{ transformOrigin: "bottom" }}
        className="absolute bottom-0 left-1/3 w-px h-2/3 bg-gradient-to-t from-primary/30 to-transparent"
      />
      {/* Right rail */}
      <motion.div
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        style={{ transformOrigin: "bottom" }}
        className="absolute bottom-0 right-1/3 w-px h-2/3 bg-gradient-to-t from-primary/30 to-transparent"
      />
    </div>
  );
}