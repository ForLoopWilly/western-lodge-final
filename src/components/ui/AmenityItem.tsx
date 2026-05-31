"use client";

import { motion } from "framer-motion";
import { Sunset, UtensilsCrossed, Sparkles, TreePalm, Wifi, ParkingCircle } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Sunset, UtensilsCrossed, Sparkles, TreePalm, Wifi, ParkingCircle,
};

interface AmenityItemProps {
  icon: string;
  label: string;
  description: string;
}

export function AmenityItem({ icon, label, description }: AmenityItemProps) {
  const Icon = ICONS[icon];

  return (
    <motion.div
      variants={fadeInUp}
      className="bg-white/8 hover:bg-white/14 border border-white/12 hover:border-white/20 rounded-2xl p-6 transition-all duration-400"
    >
      <div className="w-10 h-10 bg-white/10 hover:bg-white/18 rounded-xl flex items-center justify-center mb-4 transition-colors duration-400">
        {Icon && <Icon className="w-5 h-5 text-sand-200" />}
      </div>
      <h3 className="font-body font-600 text-white text-sm tracking-wide mb-2">{label}</h3>
      <p className="font-body text-white/60 text-xs leading-relaxed">{description}</p>
    </motion.div>
  );
}
