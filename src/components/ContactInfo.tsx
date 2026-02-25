export default function ContactInfoItem({ icon, title, value, link }: any) {
  return (
    <div className="flex items-start group relative">
      <a
        href={link}
        target="_blank"
        className="mt-1 text-indigo-600 mr-4 transition-transform duration-300 group-hover:rotate-12 cursor-pointer"
      >
        {icon}
      </a>
      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50">
        {value}
        {/* Tooltip arrow */}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
          <div className="w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-gray-800"></div>
        </div>
      </div>
    </div>
  );
}
