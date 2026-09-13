import type { Technology } from "./types";

type TechCardProps = {
    tech: Technology;
    onAdd: (tech: Technology) => void;
    isAdded: boolean;
};

function TechCard({ tech, onAdd, isAdded }: TechCardProps) {
    return (
        <div className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col">

            <div className="flex justify-between items-start mb-3">
                <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                    {tech.badge}
                </span>
            </div>

            <h3 className="font-bold text-lg">{tech.name}</h3>
            <p className="text-gray-500 text-sm mt-1 flex-1">{tech.description}</p>

            <div className="flex items-center gap-3 text-xs text-gray-500 mt-3">
                <span className="bg-gray-100 px-2 py-1 rounded">{tech.category}</span>
                <span>{tech.difficulty}</span>
                <span>⭐ {tech.rating}</span>
            </div>

            <button
                onClick={() => onAdd(tech)}
                disabled={isAdded}
                className="mt-4 bg-gray-900 text-white py-2 rounded-lg text-sm font-medium disabled:opacity-50"
            >
                {isAdded ? "✓ Added to Stack" : "Add to Stack"}
            </button>
        </div>
    );
}

export default TechCard;