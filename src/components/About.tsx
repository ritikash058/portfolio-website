"use client";

import SkillBar from "./Skillbar";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const highlights = [
  "Full-stack web & mobile development",
  "Cloud-native architecture on AWS",
  "Scalable API design & databases",
  "Payment gateway integrations",
];

export default function About() {
  const header = useScrollAnimation<HTMLDivElement>("fade-down", {
    threshold: 0.2,
  });
  const bio = useScrollAnimation<HTMLDivElement>("slide-right", {
    threshold: 0.2,
  });
  const skillsCard = useScrollAnimation<HTMLDivElement>("slide-left", {
    threshold: 0.2,
    delay: 150,
  });

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={header.ref} className={`text-center mb-16 ${header.className}`}>
          <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Get to Know Me
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <div
            ref={bio.ref}
            className={`lg:col-span-3 space-y-5 ${bio.className}`}
          >
            <h3 className="text-2xl font-bold text-gray-900">
              Professional Background
            </h3>
            <p className="text-gray-600 leading-relaxed">
              With over <strong>3 years of experience</strong> in software
              development, I&apos;ve worked on diverse projects ranging from
              enterprise applications to innovative startups. My journey began
              with a strong foundation in computer science fundamentals, which
              has allowed me to adapt quickly to new technologies.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I specialize in <strong>full-stack development</strong> with a
              focus on React, Next.js, Node.js, and cloud technologies. I love
              turning complex problems into simple, elegant solutions that
              provide real value to users.
            </p>
            <p className="text-gray-600 leading-relaxed">
              When I&apos;m not coding, you can find me exploring the latest
              tech trends, and experimenting new things.
            </p>

            <ul className="grid sm:grid-cols-2 gap-3 pt-4">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-gray-700">
                  <span className="mt-1 w-5 h-5 flex-shrink-0 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs">
                    ✓
                  </span>
                  <span className="text-sm">{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            ref={skillsCard.ref}
            className={`lg:col-span-2 bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100 ${skillsCard.className}`}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Core Proficiency
            </h3>
            <div className="space-y-5">
              <SkillBar label="JavaScript / TypeScript" level={95} />
              <SkillBar label="React / Next.js" level={95} />
              <SkillBar label="Node.js / Express" level={90} />
              <SkillBar label="React Native" level={80} />
              <SkillBar label="PostgreSQL / MongoDB" level={85} />
              <SkillBar label="AWS / Docker" level={75} />
              <SkillBar label="HTML / CSS / Tailwind" level={95} />
              <SkillBar label="Git / CI-CD" level={85} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}