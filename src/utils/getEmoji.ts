export function getSkillEmoji(skill:any) {
    switch(skill) {
        case "JavaScript": return "🟨";
        case "TypeScript": return "🔵";
        case "React": return "⚛️";
        case "Node.js": return "🟢";
        case "Express": return "🔷";
        case "Python": return "🐍";
        case "PostgreSQL": return "🟪";
        case "MongoDB": return "🟢";
        case "AWS": return "☁️";
        case "Docker": return "🐋";
        case "Git": return "🐙";
        case "GraphQL": return "🔵";
        default: return "🔧";
    }
}