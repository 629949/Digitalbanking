import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; 


function Tester() {

    const [isOpen, setIsOpen] = useState(false); 

  return (
    <div>
  <nav className="w-full bg-white px-6 py-4 shadow-md">
    <div className="max-w-6xl mx-auto flex justify-between items-center">
      {/* Logo or Site Name */}
      <div className="text-2xl font-bold">MySite</div>

      {/* Desktop Nav (medium screens and up) */}
      <ul className="hidden md:flex space-x-8 text-black font-medium">
        <li className="hover:text-black cursor-pointer">Home</li>
        <li className="hover:text-black cursor-pointer">About</li>
        <li className="hover:text-black cursor-pointer">Contact</li>
      </ul>

      {/* Mobile Icon */}
      <div className="md:hidden">
        {isOpen ? (
          <X className="w-7 h-7 cursor-pointer" onClick={() => setIsOpen(false)} />
        ) : (
          <Menu className="w-7 h-7 cursor-pointer" onClick={() => setIsOpen(true)} />
        )}
      </div>
    </div>

    {/* Mobile Dropdown Menu */}
    {isOpen && (
      <ul className="md:hidden bg-white px-6 py-4 flex flex-col space-y-4 text-gray-700 font-medium shadow-md">
        <li className="hover:text-black cursor-pointer">Home</li>
        <li className="hover:text-black cursor-pointer">About</li>
        <li className="hover:text-black cursor-pointer">Contact</li>
      </ul>
    )}
  </nav>

    </div>
  )
}

export default Tester
