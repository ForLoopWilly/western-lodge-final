"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface FadeInUpProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  once?: boolean;
}

export function FadeInUp({ children, delay = 0, className, once = true }: FadeInUpProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
      transition={{ delay }}
      className={`gpu-accelerated${className ? ` ${className}` : ""}`}
    >
      {children}
    </motion.div>
  );
}
