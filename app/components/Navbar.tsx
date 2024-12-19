import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';
import ThemeSwitcher from './ThemeSwitcher'; 

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <nav className="bg-blue-600 dark:bg-gray-800 text-white py-4 fixed w-full z-50 shadow-lg transition-colors duration-300">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Logo or Title */}
        <div className="text-2xl font-bold mb-2 md:mb-0 text-center w-full md:w-auto">
          The Tribalchief 
        </div>

        {/* Menu Icon for Mobile */}
        <div className="md:hidden absolute right-4 top-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? '✖' : '☰'}
          </button>
        </div>

        {/* Navigation Items */}
        <ul
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 items-center w-full md:w-auto`}
        >
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
          {/* Theme Switcher */}
          <li>
            <ThemeSwitcher />
          </li>
        </ul>
      </div>
    </nav>
  );
}
