"use client";

import React, { useRef, useEffect } from "react";
import { motion, useMotionValue, useInView, useTransform, animate } from "framer-motion";

type CounterProps = {
  countTo: number;
  className?: string;
};

export default function Counter({ countTo, className }: CounterProps) {
  const counterRef = useRef(null);
  const isInView = useInView(counterRef, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (!prefersReducedMotion) {
        if (isInView) {
          const animation = animate(count, countTo, {
            duration: 3,
            delay: 0.25,
          });

          return animation.stop;
        }
      } else {
        count.set(countTo);
      }
    }
  }, [isInView, count, countTo]);

  return (
    <motion.div ref={counterRef} className={className}>
      {rounded}
    </motion.div>
  );
}
