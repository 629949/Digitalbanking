import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['Home', 'About', 'Contact', 'Blog', 'Careers'];

  const gradientLinkClass =
    'relative h-20 flex items-center text-gray-700 transition duration-300 ' +
    "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-green-400 after:to-blue-400 after:transition-all after:duration-300";

  return (
    <nav className="w-full bg-white px-6 py-4 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <img src="src/images/logo.svg" alt="Logo" className="h-8" />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden sm:flex gap-6 text-lg font-normal">
          {navItems.map((item) => (
            <Link key={item} to="/" className={gradientLinkClass}>
              {item}
            </Link>
          ))}
        </ul>

        {/* Desktop Button */}
        <button className="hidden sm:block bg-gradient-to-r from-green-400 to-blue-400 text-white font-semibold px-6 py-2 rounded-full shadow-md hover:from-green-500 hover:to-blue-500 transition duration-300">
          Request Invite
        </button>

        {/* Mobile Hamburger Icon */}
        <div className="sm:hidden z-50">
          {isOpen ? (
            <X className="w-8 h-8 cursor-pointer" onClick={() => setIsOpen(false)} />
          ) : (
            <Menu className="w-8 h-8 cursor-pointer" onClick={() => setIsOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="sm:hidden absolute top-[70px] left-0 w-full bg-white px-6 py-4 shadow-md z-40">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            {navItems.map((item) => (
              <Link
                key={item}
                to="/"
                onClick={() => setIsOpen(false)}
                className={gradientLinkClass + ' h-10'}
              >
                {item}
              </Link>
            ))}
          </ul>

          {/* Mobile Button */}
          <div className="mt-6">
            <button className="w-full bg-gradient-to-r from-green-400 to-blue-400 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:from-green-500 hover:to-blue-500 transition duration-300">
              Request Invite
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
