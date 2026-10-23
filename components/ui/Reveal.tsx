"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

// One shared entrance for content blocks: a short rise as they scroll into view.
export default function Reveal({ children, delay = 0, className }: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial={reduce ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease, delay }}
    >
      {children}
    </motion.div>
  );
}
