import { useState } from "react";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TechGrid from "./components/TechGrid";
import type { Technology } from "./types";

function App() {
  const [stack, setStack] = useState<Technology[]>([]);

  function handleAdd(tech: Technology) {
    const alreadyExists = stack.some((item) => item.id === tech.id);
    if (alreadyExists) {
      alert("Already added!");
      return;
    }
    setStack([...stack, tech]);
  }

  function handleRemove(id: string) {
    const updatedStack = stack.filter((item) => item.id !== id);
    setStack(updatedStack);
  }

  function handleRemoveAll() {
    setStack([]);
  }

  return (
    <div>
      <Navbar />
      <Hero />
      <TechGrid
        stack={stack}
        onAdd={handleAdd}
        onRemove={handleRemove}
        onRemoveAll={handleRemoveAll}
      />
    </div>
  );
}

export default App;