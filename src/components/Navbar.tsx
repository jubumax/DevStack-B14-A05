import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-br from-orange-500 via-pink-500 to-violet-600 text-white font-bold w-8 h-8 rounded-md flex items-center justify-center text-sm">
            DS
          </div>
          <span className="font-bold text-lg">
            Dev<span className="text-pink-600">Stack</span>
          </span>
        </div>

        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
          <a href="#home">Home</a>
          <a href="#technologies">Technologies</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="text-sm font-medium text-gray-700">Sign In</a>
          <a href="#" className="bg-pink-600 text-white text-sm font-medium px-5 py-2 rounded-full">
            Sign Up
          </a>
        </div>

        <button className="md:hidden text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </button>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden flex flex-col gap-4 px-6 pb-4">
          <a href="#home">Home</a>
          <a href="#technologies">Technologies</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#" className="font-medium">Sign In</a>
          <a href="#" className="bg-pink-600 text-white text-center px-5 py-2 rounded-full">Sign Up</a>
        </nav>
      )}
    </header>
  );
}

export default Navbar;