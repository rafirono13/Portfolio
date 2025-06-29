import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 z-[100] mx-auto w-7/12 -translate-x-1/2 px-6">
      <ul className="flex items-center justify-center gap-6 rounded-full border border-white/20 bg-white/10 px-6 py-2 text-sm font-medium text-gray-200 shadow-lg backdrop-blur-md md:gap-20 md:text-base">
        <li>
          <a
            href="#about"
            className="transition duration-300 ease-in-out hover:text-[#ff7597]"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="transition duration-300 ease-in-out hover:text-[#ff7597]"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="transition duration-300 ease-in-out hover:text-[#ff7597]"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
