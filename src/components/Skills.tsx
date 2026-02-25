import React from "react";

import { skills } from "@/utils/data";
const Skills = () => {
    return (
        <section id="skills" className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
            {skills.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                <h2 className="text-2xl font-bold text-gray-900 text-center">
                    {category.title}
                </h2>
                <div className="w-20 h-1 bg-indigo-600 mx-auto mb-8"></div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {category.children.map((skill, skillIndex) => (
                    <div
                        key={skillIndex}
                        className=" flex flex-col items-center bg-white p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition duration-300"
                    >
                        <div className="mb-4">{skill.emoji}</div>
                        <h4 className="font-semibold text-2xl text-gray-800 mb-2 capitalize">
                        {skill.title}
                        </h4>
                        <p className="text-sm text-gray-600">{skill.subtitle}</p>
                    </div>
                    ))}
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
};

export default Skills;
