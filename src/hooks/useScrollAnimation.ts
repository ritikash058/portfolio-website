"use client";

import { useEffect, useRef, useState } from "react";

type AnimationType =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "slide-left"
  | "slide-right"
  | "zoom-in"
  | "zoom-out";

interface UseScrollAnimationOptions {
  threshold?: number;
  delay?: number;
  once?: boolean;
}

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  animation: AnimationType = "fade-up",
  options: UseScrollAnimationOptions = {}
) {
  const { threshold = 0.15, delay = 0, once = true } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          if (once) observer.unobserve(element);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, delay, once]);

  const animationClasses: Record<AnimationType, string> = {
    "fade-up": "translate-y-12 opacity-0",
    "fade-down": "-translate-y-12 opacity-0",
    "fade-left": "translate-x-12 opacity-0",
    "fade-right": "-translate-x-12 opacity-0",
    "slide-left": "-translate-x-24 opacity-0",
    "slide-right": "translate-x-24 opacity-0",
    "zoom-in": "scale-90 opacity-0",
    "zoom-out": "scale-110 opacity-0",
  };

  return {
    ref,
    className: `transition-all duration-700 ease-out ${
      isVisible
        ? "translate-x-0 translate-y-0 scale-100 opacity-100"
        : animationClasses[animation]
    }`,
    isVisible,
  };
}