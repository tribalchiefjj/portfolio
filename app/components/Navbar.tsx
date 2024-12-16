import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle'; // Import the ThemeToggle component

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // For mobile menu toggle

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = ['home', 'about', 'projects', 'contact'];
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="bg-blue-600 text-white py-4 fixed w-full z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo or Title */}
        <div className="text-2xl font-bold">My Portfolio</div>

        {/* Navigation Items for Desktop */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.to}
                smooth={true}
                duration={800}
                offset={-70}
                className={`cursor-pointer hover:underline ${
                  activeSection === item.to ? 'font-bold text-yellow-400' : ''
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="text-white">☰</span>
        </button>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <ul className="md:hidden absolute top-16 left-0 w-full bg-blue-600 py-4 text-center space-y-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.to}
                  smooth={true}
                  duration={800}
                  offset={-70}
                  className={`cursor-pointer hover:underline ${
                    activeSection === item.to ? 'font-bold text-yellow-400' : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)} // Close menu on item click
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        )}

        {/* Theme Toggle */}
        <div className="ml-4">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
