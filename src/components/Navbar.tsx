import { useState } from "react";
import logo from "../assets/logo-text.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        <div className="flex items-center gap-2">
          <img src={logo} alt="Dev Stack" className="h-8" />
        </div>

        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
          {["Home", "Technologies", "Projects", "About", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setActiveLink(link)}
              className={activeLink === link ? "text-pink-600" : "text-gray-700"}
            >
              {link}
            </a>
          ))}
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

      {
        isMenuOpen && (
          <nav className="md:hidden flex flex-col gap-4 px-6 pb-4">
            <a href="#home">Home</a>
            <a href="#technologies">Technologies</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#" className="font-medium">Sign In</a>
            <a href="#" className="bg-pink-600 text-white text-center px-5 py-2 rounded-full">Sign Up</a>
          </nav>
        )
      }
    </header >
  );
}

export default Navbar;