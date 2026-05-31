"use client";

import { motion } from "framer-motion";
import { Fish, Waves, TreePine, Sailboat } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Fish, Waves, TreePine, Sailboat,
};

interface AttractionCardProps {
  name: string;
  description: string;
  icon: string;
  distance: string;
}

export function AttractionCard({ name, description, icon, distance }: AttractionCardProps) {
  const Icon = ICONS[icon];

  return (
    <motion.div
      variants={fadeInUp}
      className="bg-white/8 hover:bg-white/14 border border-white/12 hover:border-white/22 rounded-2xl p-6 transition-all duration-400"
    >
      <div className="w-10 h-10 bg-white/10 hover:bg-white/18 rounded-xl flex items-center justify-center mb-4 transition-colors duration-400">
        {Icon && <Icon className="w-5 h-5 text-sand-200" />}
      </div>
      <h3 className="font-body font-600 text-white text-base mb-2">{name}</h3>
      <p className="font-body text-white/60 text-sm leading-relaxed mb-4">{description}</p>
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-terracotta-400 shrink-0" />
        <span className="font-body text-xs text-sand-300/70">{distance}</span>
      </div>
    </motion.div>
  );
}
