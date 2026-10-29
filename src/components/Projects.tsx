"use client";

import { useMemo, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/utils/data";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const header = useScrollAnimation<HTMLDivElement>("fade-down", {
    threshold: 0.2,
  });
  const filterTabs = useScrollAnimation<HTMLDivElement>("fade-up", {
    threshold: 0.2,
    delay: 200,
  });
  const grid = useScrollAnimation<HTMLDivElement>("fade-up", {
    threshold: 0.1,
    delay: 300,
  });

  const types = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.type)))],
    []
  );

  const filtered = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((p) => p.type === filter),
    [filter]
  );

  return (
    <section id="projects" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={header.ref} className={`text-center mb-12 ${header.className}`}>
          <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-8" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            A selection of web and mobile applications I&apos;ve built — from
            full-stack dashboards to payment-integrated platforms.
          </p>
        </div>

        <div
          ref={filterTabs.ref}
          className={`flex flex-wrap gap-3 justify-center mb-12 ${filterTabs.className}`}
        >
          {types.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                filter === t
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/30"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div
          ref={grid.ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${grid.className}`}
        >
          {filtered.map((project, index) => (
            <ProjectCard key={`${project.title}-${index}`} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}