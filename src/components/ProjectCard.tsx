export default function ProjectCard({ title, description, tags, image , type}: any) {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1 relative">
      {/* Banner on the right side */}  
      <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 text-xs font-semibold rounded-l-lg">
        {type}
      </div>
      <img src={image} alt={title} className="w-full h-48 object-contain bg-white" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="mb-4 text-white">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag: any, index: any) => (
            <span
              key={index}
              className="text-xs px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
