import React from "react";
import ProjectCard from "@/components/ProjectCard";

import { projects } from "@/utils/data";
const Projects = () => {
    return (
        <section id="projects" className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
            ))}
            </div>
        </div>
    </section>
    )
}
export default Projects;