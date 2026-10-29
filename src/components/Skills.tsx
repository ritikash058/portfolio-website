"use client";

import { skills } from "@/utils/data";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

function SkillCard({
  category,
  index,
}: {
  category: (typeof skills)[0];
  index: number;
}) {
  const card = useScrollAnimation<HTMLDivElement>("fade-up", {
    threshold: 0.1,
    delay: index * 150,
  });

  return (
    <div
      ref={card.ref}
      className={`bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 ${card.className}`}
    >
      <h3 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-3">
        <span className="w-9 h-9 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center text-sm font-bold">
          {category.title[0]}
        </span>
        {category.title}
      </h3>

      <div className="space-y-4">
        {category.children.map((skill, j) => (
          <div key={j} className="flex items-center gap-3 group">
            <div className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-lg group-hover:scale-110 group-hover:bg-indigo-50 transition">
              {skill.emoji}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-medium text-gray-800 text-sm capitalize truncate">
                {skill.title}
              </div>
              <div className="text-xs text-gray-500 truncate">
                {skill.subtitle}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const header = useScrollAnimation<HTMLDivElement>("fade-down", {
    threshold: 0.2,
  });

  return (
    <section id="skills" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={header.ref} className={`text-center mb-16 ${header.className}`}>
          <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">
            My Toolkit
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category, i) => (
            <SkillCard key={i} category={category} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}