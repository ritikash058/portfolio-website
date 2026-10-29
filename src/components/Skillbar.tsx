"use client";

import { useEffect, useRef, useState } from "react";

interface SkillBarProps {
  label: string;
  level?: number; // 0-100
  duration?: number; // ms for both bar + counter
}

export default function SkillBar({
  label,
  level = 85,
  duration = 1400,
}: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(0);

  // Trigger animation when in view
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Animate the counter number
  useEffect(() => {
    if (!visible) return;
    let raf: number;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutCubic for a nice natural feel
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * level));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, level, duration]);

  return (
    <div ref={ref}>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-sm text-gray-500 tabular-nums">
          {count}%
        </span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-[width] ease-out"
          style={{
            width: visible ? `${level}%` : "0%",
            transitionDuration: `${duration}ms`,
          }}
        />
      </div>
    </div>
  );
}