"use client";

import { motion } from "motion/react"

export default function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative z-0 page-wrapper"
    >
      {children}
    </motion.div>
  );
}