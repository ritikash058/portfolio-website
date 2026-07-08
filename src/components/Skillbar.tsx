export default function SkillBar({ label }: { label: string }) {
    return (
        <div className="grid grid-cols-[1fr_auto] items-center gap-4">
            <div>
                <span className="text-sm font-medium text-gray-700">{label}</span>
            </div>
        </div>
    );
}