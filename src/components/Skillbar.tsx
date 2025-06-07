export default function SkillBar({ label, percentage }:any) {
    return (
        <div>
            <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-gray-700">{label}</span>
            <span className="text-sm font-medium text-gray-700">{percentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
                className="bg-indigo-600 h-2.5 rounded-full transition-all duration-1000 ease-out" 
                style={{ width: `${percentage}%` }}
            ></div>
            </div>
        </div>
    );
}