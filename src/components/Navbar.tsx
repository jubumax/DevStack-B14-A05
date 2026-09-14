import { useState } from "react";
import logo from "../assets/logo-text.png";

function getLinkHref(link: string) {
  switch (link) {
    case "Home":
      return "#";
    case "Technologies":
    case "Projects":
      return "#technologies";
    case "About":
    case "Contact":
      return "#footer";
    default:
      return "#";
  }
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4">

        {/* Mobile layout: hamburger | logo | auth buttons — three columns */}

        <div className="grid grid-cols-3 items-center md:hidden">
          <button
            className="text-2xl justify-self-start"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>

          <img src={logo} alt="Dev Stack" className="h-7 justify-self-center" />

          <div className="flex items-center gap-3 justify-self-end">
            <a href="#" className="text-xs font-medium text-gray-700">Sign In</a>
            <a href="#" className="bg-pink-600 text-white text-xs font-medium px-3 py-1.5 rounded-full">
              Sign Up
            </a>
          </div>
        </div>

        {/* Desktop layout: original three-zone flex (logo left, links center, auth right) */}

        <div className="hidden md:flex items-center justify-between">
          <div className="flex-1">
            <img src={logo} alt="Dev Stack" className="h-8" />
          </div>

          <nav className="flex-1 flex justify-center gap-8 text-sm font-medium text-gray-700">
            {["Home", "Technologies", "Projects", "About", "Contact"].map((link) => (
              <a
                key={link}
                href={getLinkHref(link)}
                onClick={() => setActiveLink(link)}
                className={activeLink === link ? "text-pink-600" : "text-gray-700"}
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="flex-1 flex justify-end items-center gap-4">
            <a href="#" className="text-sm font-medium text-gray-700">Sign In</a>
            <a href="#" className="bg-pink-600 text-white text-sm font-medium px-5 py-2 rounded-full">
              Sign Up
            </a>
          </div>
        </div>
      </div>

      {/* Mobile dropdown — only nav links, since Sign In/Up already shown above */}

      {isMenuOpen && (
        <nav className="md:hidden flex flex-col gap-4 px-6 pb-4">
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
      )}
    </header>
  );
}

export default Navbar;