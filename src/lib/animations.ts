import type { Variants } from "framer-motion";

const EASE_LUXURY = [0.25, 0.46, 0.45, 0.94] as const;

export const fadeInUp: Variants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_LUXURY } },
};

export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4, ease: EASE_LUXURY } },
};

export const fadeInLeft: Variants = {
  hidden:  { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE_LUXURY } },
};

export const fadeInRight: Variants = {
  hidden:  { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE_LUXURY } },
};

export const staggerContainer: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export const heroTextContainer: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};

export const heroText: Variants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_LUXURY } },
};

export const cardHover = {
  rest:  { scale: 1,    y: 0,  transition: { duration: 0.25, ease: EASE_LUXURY } },
  hover: { scale: 1.02, y: -4, transition: { duration: 0.25, ease: EASE_LUXURY } },
};

export const imageHover = {
  rest:  { scale: 1 },
  hover: { scale: 1.04, transition: { duration: 0.35, ease: EASE_LUXURY } },
};

export const overlayReveal: Variants = {
  hidden: { opacity: 0 },
  hover:  { opacity: 1, transition: { duration: 0.2 } },
};

export const modalBackdrop: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit:    { opacity: 0, transition: { duration: 0.15 } },
};

export const modalPanel: Variants = {
  hidden:  { opacity: 0, scale: 0.95, y: 10 },
  visible: { opacity: 1, scale: 1,    y: 0,  transition: { type: "spring", damping: 28, stiffness: 350, mass: 0.9 } },
  exit:    { opacity: 0, scale: 0.95, y: 10, transition: { duration: 0.15 } },
};

export const successCheck: Variants = {
  hidden:  { pathLength: 0, opacity: 0 },
  visible: { pathLength: 1, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export const slideDown: Variants = {
  hidden:  { opacity: 0, scaleY: 0.8, y: -10 },
  visible: { opacity: 1, scaleY: 1,   y: 0,   transition: { duration: 0.3, ease: EASE_LUXURY } },
  exit:    { opacity: 0, scaleY: 0.8, y: -10, transition: { duration: 0.2 } },
};
