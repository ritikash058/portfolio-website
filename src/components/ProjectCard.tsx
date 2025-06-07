export default function ProjectCard({ title, description, tags, image }:any) {
    return (
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag:any, index:any) => (
              <span key={index} className="text-xs px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }