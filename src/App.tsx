import { useState } from "react";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TechGrid from "./components/TechGrid";
import type { Technology } from "./types";
import Footer from "./components/Footer";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [stack, setStack] = useState<Technology[]>([]);

  function handleAdd(tech: Technology) {
  const alreadyExists = stack.some((item) => item.id === tech.id);
  if (alreadyExists) {
    toast.warning(`${tech.name} is already in your stack!`);
    return;
  }
  setStack([...stack, tech]);
  toast.success(`${tech.name} added to your stack!`);
}

function handleRemove(id: string) {
  const removedItem = stack.find((item) => item.id === id);
  const updatedStack = stack.filter((item) => item.id !== id);
  setStack(updatedStack);
  if (removedItem) {
    toast.info(`${removedItem.name} removed from your stack.`);
  }
}

function handleRemoveAll() {
  setStack([]);
  toast.info("Stack cleared.");
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
      <Footer />
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default App;