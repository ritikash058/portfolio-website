export default function ContactInfoItem({ icon, title, value, link }:any) {
    return (
        <div className="flex items-start">
            <div className="mt-1 text-indigo-600 mr-4">{icon}</div>
            <div>
            <h4 className="text-sm font-medium text-gray-500">{title}</h4>
            <a href={link} className="text-gray-800 hover:text-indigo-600 transition duration-150" target='_blank'>
                {value}
            </a>
            </div>
        </div>
    );
}