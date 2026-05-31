"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Star } from "lucide-react";
import { cn, formatPrice } from "@/lib/utils";
import { fadeInUp, cardHover, imageHover, overlayReveal } from "@/lib/animations";
import type { Room } from "@/types";

const TYPE_BADGE: Record<string, { label: string; className: string }> = {
  SINGLE:         { label: "Single",          className: "bg-tropical-500 text-white" },
  DOUBLE_BUNK:    { label: "Bunk",            className: "bg-tropical-600 text-white" },
  STUDIO:         { label: "Studio",          className: "bg-teal-500 text-white" },
  STUDIO_BALCONY: { label: "Studio+Balcony",  className: "bg-teal-600 text-white" },
  TWIN:           { label: "Twin",            className: "bg-teal-500 text-white" },
  FAMILY_STUDIO:  { label: "Family",          className: "bg-terracotta-500 text-white" },
  SUITE:          { label: "Suite",           className: "bg-terracotta-600 text-white" },
};

interface RoomCardProps {
  room: Room;
  onBook?: (roomType: string) => void;
}

export function RoomCard({ room, onBook }: RoomCardProps) {
  const imageUrl = room.images[0] ?? "/western-lodge.png";
  const badge = TYPE_BADGE[room.type] ?? { label: room.type, className: "bg-teal-500 text-white" };

  return (
    <motion.div
      variants={fadeInUp}
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="group bg-ivory rounded-2xl overflow-hidden shadow-card flex flex-col gpu-accelerated"
    >
      <motion.div variants={cardHover} className="flex flex-col h-full gpu-accelerated">
        {/* Image */}
        <div className="relative aspect-[3/2] overflow-hidden shrink-0">
          <motion.div variants={imageHover} className="h-full w-full">
            <Image
              src={imageUrl}
              alt={room.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          {/* Price badge */}
          <div className="absolute top-3 right-3 bg-teal-900/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-sm font-body font-600 leading-none">
            {formatPrice(Number(room.price))}
            <span className="text-sand-300/70 text-xs ml-1">/ night</span>
          </div>

          {/* Type badge */}
          <div className={cn("absolute top-3 left-3 text-xs font-body font-600 px-2.5 py-1 rounded-lg tracking-wide", badge.className)}>
            {badge.label}
          </div>

          {/* Hover overlay */}
          <motion.div
            variants={overlayReveal}
            initial="hidden"
            className="absolute inset-0 bg-linear-to-t from-teal-900/85 via-teal-900/30 to-transparent flex items-end p-5"
          >
            <button
              onClick={() => onBook?.(room.type)}
              className="w-full bg-terracotta-500 hover:bg-terracotta-600 text-white font-body font-600 py-2.5 px-5 rounded-xl transition-colors text-sm tracking-wide"
            >
              Book This Room
            </button>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-start justify-between gap-2 mb-3">
            <h3 className="font-heading text-lg font-700 text-teal-900 leading-tight">{room.name}</h3>
            <div className="flex items-center gap-1 text-tropical-500 shrink-0 mt-0.5">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span className="text-xs font-body font-600">4.9</span>
            </div>
          </div>

          <p className="font-body text-[0.95rem] text-muted leading-[1.7] mb-6 tracking-[0.3px]">
            {room.description}
          </p>

          {/* Amenities */}
          <div className="flex flex-wrap gap-2 mb-6">
            {room.amenities.map((amenity) => (
              <span key={amenity} className="text-xs font-body text-teal-700 bg-teal-50 border border-teal-100 px-3 py-1 rounded-full">
                {amenity}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between mt-auto pt-5 border-t border-sand-300">
            <div className="flex items-center gap-1.5 text-muted text-xs font-body">
              <Users className="w-3.5 h-3.5" />
              <span>Sleeps up to {room.capacity}</span>
            </div>
            <button
              onClick={() => onBook?.(room.type)}
              className="text-sm font-body font-600 text-terracotta-500 hover:text-terracotta-600 transition-colors"
            >
              Reserve →
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
