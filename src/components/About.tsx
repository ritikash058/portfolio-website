import React from "react";
import SkillBar from "@/components/Skillbar";
const About = () => {
    return (
        <section id="about" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                About Me
                </h2>
                <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                I&apos;m a passionate software engineer with experience building web and mobile applications and solving complex technical challenges.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Professional Background
                </h3>
                <p className="text-gray-600 mb-4">
                    With over 3 years of experience in software development, I&apos;ve
                    worked on diverse projects ranging from enterprise
                    applications to innovative startups. My journey began with a
                    strong foundation in computer science fundamentals, which has
                    allowed me to adapt to new technologies and methodologies
                    throughout my career.
                </p>
                <p className="text-gray-600 mb-4">
                    I specialize in full-stack development with a focus on React,
                    Node.js, and cloud technologies. I enjoy turning complex
                    problems into simple, elegant solutions that provide real
                    value to users.
                </p>
                <p className="text-gray-600">
                    When I&apos;m not coding, you can find me exploring the latest tech
                    trends, contributing to open-source projects, or mentoring
                    aspiring developers.
                </p>
                </div>
                <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Technical Skills
                </h3>
                <div className="space-y-6">
                    <SkillBar label="JavaScript / TypeScript" />
                    <SkillBar label="React / Next.js" />
                    <SkillBar label="React Native" />
                    <SkillBar label="Node.js / Express" />
                    <SkillBar label="HTML / CSS" />
                    <SkillBar label="Python" />
                    <SkillBar label="Cloud (AWS)" />
                    <SkillBar label="Git" />
                </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default About;