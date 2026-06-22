"use client";

import { motion } from "framer-motion";

type ShinyTextProps = {
  text: string;
  /** Base text color. */
  baseColor?: string;
  /** Color of the moving shine highlight. */
  shineColor?: string;
  /** Full sweep duration in seconds. */
  speed?: number;
  /** Angle of the gradient sweep, in degrees. */
  spread?: number;
  className?: string;
};

/**
 * Animated text whose color sweeps a bright "shine" across a base color,
 * continuously from left to right, using a clipped CSS gradient driven by
 * framer-motion's backgroundPosition animation.
 */
export default function ShinyText({
  text,
  baseColor = "#64CEFB",
  shineColor = "#ffffff",
  speed = 3,
  spread = 100,
  className = "",
}: ShinyTextProps) {
  return (
    <motion.span
      className={className}
      style={{
        display: "inline-block",
        backgroundImage: `linear-gradient(${spread}deg, ${baseColor} 0%, ${baseColor} 35%, ${shineColor} 50%, ${baseColor} 65%, ${baseColor} 100%)`,
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
        color: "transparent",
      }}
      // Sweep the gradient left -> right and loop seamlessly.
      animate={{ backgroundPosition: ["100% 0%", "-100% 0%"] }}
      transition={{
        duration: speed,
        ease: "linear",
        repeat: Infinity,
      }}
    >
      {text}
    </motion.span>
  );
}
