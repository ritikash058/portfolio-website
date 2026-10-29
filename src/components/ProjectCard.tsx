"use client";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  type: string;
  liveUrl?: string;
  githubUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  image,
  type,
  liveUrl,
  githubUrl,
}: ProjectCardProps) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 flex flex-col">
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-gradient-to-br from-indigo-50 to-purple-50">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-indigo-700 px-3 py-1 text-xs font-semibold rounded-full shadow-sm">
          {type}
        </span>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-indigo-900/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white text-indigo-700 rounded-lg font-medium text-sm hover:bg-gray-100 transition"
            >
              Live Demo
            </a>
          ) : (
            <span className="px-4 py-2 bg-white/20 text-white rounded-lg text-sm">
              Private Project
            </span>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-white text-white rounded-lg font-medium text-sm hover:bg-white/10 transition"
            >
              Code
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 flex-1 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}