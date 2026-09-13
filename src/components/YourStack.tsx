import type { Technology } from "../types";

type YourStackProps = {
    stack: Technology[];
    onRemove: (id: string) => void;
    onRemoveAll: () => void;
};

function YourStack({ stack, onRemove, onRemoveAll }: YourStackProps) {
    return (
        <div className="w-72 bg-white border rounded-xl p-5 h-fit">
            <h3 className="font-bold text-lg">Your Stack</h3>
            <p className="text-gray-400 text-sm mb-4">
                {stack.length === 0
                    ? "No technologies selected yet."
                    : `${stack.length} Technology Selected`}
            </p>

            {stack.length === 0 ? (
                <div className="border border-dashed rounded-lg p-6 text-center text-gray-400 text-sm">
                    Your stack is empty.
                </div>
            ) : (
                <div className="flex flex-col gap-3">
                    {stack.map((item) => (
                        <div key={item.id} className="flex items-center justify-between border rounded-lg p-3">
                            <div className="flex items-center gap-2">
                                <img src={item.icon} alt={item.name} className="w-6 h-6" />
                                <div>
                                    <p className="font-medium text-sm">{item.name}</p>
                                    <p className="text-xs text-gray-400">{item.category}</p>
                                </div>
                            </div>
                            <button onClick={() => onRemove(item.id)}>✕</button>
                        </div>
                    ))}
                </div>
            )}

            {stack.length > 0 && (
                <button
                    onClick={onRemoveAll}
                    className="w-full mt-4 border border-red-300 text-red-500 py-2 rounded-lg text-sm"
                >
                    Remove All
                </button>
            )}
        </div>
    );
}

export default YourStack;