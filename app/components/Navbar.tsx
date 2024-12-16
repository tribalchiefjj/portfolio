import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle"; // Import your theme toggle component

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = ["home", "about", "projects", "contact"];
      const offsets = sections.map(
        (id) => document.getElementById(id)?.offsetTop ?? 0
      );

      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPosition >= offsets[i] - 80) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="bg-blue-600 text-white fixed w-full z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold">My Portfolio</div>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Navigation Items */}
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:space-x-6 space-y-4 md:space-y-0 absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-blue-600 md:bg-transparent p-4 md:p-0`}
        >
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.to}
                smooth={true}
                duration={800}
                offset={-70}
                className={`cursor-pointer block hover:underline ${
                  activeSection === item.to ? "font-bold text-yellow-400" : ""
                }`}
                onClick={() => setIsMenuOpen(false)} // Close menu on click
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Theme Toggle */}
        <div className="hidden md:block ml-4">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
