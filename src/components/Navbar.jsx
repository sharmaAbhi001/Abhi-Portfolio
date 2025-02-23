"use client";

import { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white shadow-md z-50">
      <div className="container mx-auto flex justify-around items-center py-4 px-6">
        
        {/* Logo */}
        <div className="w-14 font-bold"><img src="src/assets/name_log-removebg-preview.png" alt="" /></div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li>
            <Link to="home" smooth={true} duration={800} className="cursor-pointer hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={800} className="cursor-pointer hover:text-gray-400">
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={800} className="cursor-pointer hover:text-gray-400">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu (Animated) */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "200px" : "0px" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden md:hidden bg-gray-900"
      >
        <ul className="flex flex-col items-center space-y-4 py-4 text-lg">
          <li>
            <Link to="home" smooth={true} duration={800} className="cursor-pointer hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={800} className="cursor-pointer hover:text-gray-400">
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={800} className="cursor-pointer hover:text-gray-400">
              Contact
            </Link>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;
