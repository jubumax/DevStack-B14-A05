import { useState, useEffect } from "react";
import TechCard from "../TechCard";
import YourStack from "./YourStack";
import techData from "../data/technologies.json";
import type { Technology } from "../types";

type TechGridProps = {
  stack: Technology[];
  onAdd: (tech: Technology) => void;
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
};

function TechGrid({ stack, onAdd, onRemove, onRemoveAll }: TechGridProps) {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTechnologies(techData);
    setLoading(false);
  }, []);

  if (loading) {
    return <p className="text-center py-10">Loading technologies...</p>;
  }

  return (
    <section id="technologies" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-2">
        Explore the <span className="text-pink-600">Technologies</span>
      </h2>
      <p className="text-gray-500 mb-10">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
          {technologies.map((tech) => (
            <TechCard
              key={tech.id}
              tech={tech}
              onAdd={onAdd}
              isAdded={stack.some((s) => s.id === tech.id)}
            />
          ))}
        </div>

        <div className="w-full lg:w-72 flex-shrink-0">
          <YourStack stack={stack} onRemove={onRemove} onRemoveAll={onRemoveAll} />
        </div>
      </div>
    </section>
  );
}

export default TechGrid;