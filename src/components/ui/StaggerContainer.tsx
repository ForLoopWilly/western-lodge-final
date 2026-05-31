"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/animations";

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  once?: boolean;
}

export function StaggerContainer({ children, className, once = true }: StaggerContainerProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      className={`gpu-accelerated${className ? ` ${className}` : ""}`}
    >
      {children}
    </motion.div>
  );
}
