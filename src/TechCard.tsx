import type { Technology } from "./types";

type TechCardProps = {
    tech: Technology;
    onAdd: (tech: Technology) => void;
    isAdded: boolean;
};

function getBadgeColor(id: string) {
    switch (id) {
        case "react":
            return "bg-sky-50 text-sky-600 border-sky-200";
        case "vuejs":
            return "bg-emerald-50 text-emerald-600 border-emerald-200";
        case "svelte":
            return "bg-orange-50 text-orange-600 border-orange-200";
        case "nodejs":
            return "bg-green-50 text-green-600 border-green-200";
        case "postgresql":
            return "bg-blue-50 text-blue-600 border-blue-200";
        case "redis":
            return "bg-red-50 text-red-600 border-red-200";
        case "javascript":
            return "bg-yellow-50 text-yellow-700 border-yellow-200";
        case "typescript":
            return "bg-blue-50 text-blue-700 border-blue-200";
        case "java":
            return "bg-blue-50 text-blue-700 border-blue-200";
        case "tailwindcss":
            return "bg-cyan-50 text-cyan-600 border-cyan-200";
        case "docker":
            return "bg-blue-50 text-blue-700 border-blue-200";
        default:
            return "bg-white-50 text-black border-black";
    }
}

function TechCard({ tech, onAdd, isAdded }: TechCardProps) {
    return (
        <div className={`rounded-xl p-5 flex flex-col transition-all duration-200 hover:-translate-y-1 hover:shadow-md border ${isAdded ? " border-rose-200" : "bg-white border-gray-200"}`}>

            <div className="flex justify-between items-start mb-3">
                <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
                {tech.badge && (
                    <span className={`text-xs font-medium px-2 py-1 rounded-full border ${getBadgeColor(tech.id)}`}>
                        {tech.badge}
                    </span>
                )}
            </div>

            <h3 className="font-bold text-lg">{tech.name}</h3>
            <p className="text-gray-500 text-sm mt-1 flex-1">{tech.description}</p>

            <div className="flex items-center gap-3 text-xs text-gray-500 mt-3">
                <span className="bg-gray-100 px-2 py-1 rounded font-medium">{tech.category}</span>
                <span>{tech.difficulty}</span>
                <span className="font-bold">⭐ {tech.rating}</span>
            </div>

            <button
                onClick={() => onAdd(tech)}
                disabled={isAdded}
                className={`mt-4 py-2 rounded-lg text-sm font-medium transition-colors ${isAdded
                    ? "bg-rose-50 text-rose-600 border border-rose-200 cursor-not-allowed"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                    }`}
            >
                {isAdded ? "✓ Added to Stack" : "Add to Stack"}
            </button>
        </div>
    );
}

export default TechCard;