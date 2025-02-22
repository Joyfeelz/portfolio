import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  // Menu array with paths
  const menu = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    // { name: "Resume", path: "/resume" },
    { name: "Services", path: "/services" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    // { name: "Contact", path: "/contact" },
  ];

  // State for mobile menu
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white p-4 fixed w-full top-0 z-50">
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        {/* <h1 className="text-lg font-bold">Joyfeelz</h1> */}
        <img src="/assets/logo.png" alt="joyfeelz"  className="w-32"/>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {menu.map((item) => (
            <li key={item.name} className="hover:text-yellow-500">
              <Link to={item.path} className="cursor-pointer">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? "Close" : "Menu"}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <ul className="absolute bg-black text-white top-16 left-0 w-full flex flex-col items-center space-y-4 md:hidden">
            {menu.map((item) => (
              <li key={item.name} className="hover:text-yellow-500">
                <Link
                  to={item.path}
                  className="cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)} // Close menu on click
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
