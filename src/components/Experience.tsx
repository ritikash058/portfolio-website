"use client";

import { experiences } from "@/utils/data";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

function ExperienceCard({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) {
  // Alternate direction: even = slide from right, odd = slide from left
  const fromRight = index % 2 === 0;
  const card = useScrollAnimation<HTMLDivElement>(
    fromRight ? "slide-left" : "slide-right",
    { threshold: 0.15, delay: 100 }
  );

  return (
    <div
      className={`relative flex flex-col md:flex-row ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      } items-start md:items-center gap-6`}
    >
      <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-indigo-600 rounded-full -translate-x-1.5 md:-translate-x-1.5 mt-2 md:mt-0 ring-4 ring-indigo-100" />

      <div
        ref={card.ref}
        className={`ml-12 md:ml-0 md:w-1/2 md:px-8 w-full ${card.className}`}
      >
        <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition border border-gray-100">
          <div className="text-xs font-semibold text-indigo-600 mb-1">
            {exp.period}
          </div>
          <h3 className="text-lg font-bold text-gray-900">{exp.role}</h3>
          <div className="text-sm text-gray-500 mb-3">{exp.company}</div>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            {exp.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {exp.tags.map((t) => (
              <span
                key={t}
                className="text-xs px-2.5 py-1 bg-gray-100 text-gray-700 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="hidden md:block md:w-1/2" />
    </div>
  );
}

export default function Experience() {
  const header = useScrollAnimation<HTMLDivElement>("fade-down", {
    threshold: 0.2,
  });

  return (
    <section id="experience" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={header.ref} className={`text-center mb-16 ${header.className}`}>
          <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">
            Career
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto" />
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-indigo-200 md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <ExperienceCard key={i} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}