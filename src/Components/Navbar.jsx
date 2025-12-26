import React, { useEffect, useState } from "react";
import Logo from "../assets/Logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle Scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-20 shadow-sm transition-all duration-300 
      w-full max-w-full overflow-x-hidden
      ${isScrolled ? "bg-gray-500" : "bg-white"}`}
    >
      {/* FULL WIDTH WRAPPER */}
      <div className="w-full max-w-full">

        {/* CENTERED CONTENT CONTAINER */}
        <div className="max-w-[1200px] mx-auto 
        flex justify-between items-center 
        py-4 px-6 md:px-20 lg:px-32 w-full">

          <img src={Logo} alt="logo" className="w-20" />

          {/* Desktop Menu */}
          <ul
            className={`hidden md:flex gap-7 transition-all duration-300 
            ${isScrolled ? "text-white" : "text-gray-800"}`}
          >
            <li><a href="#Demo" className="hover:text-orange-500">Demo</a></li>
            <li><a href="#About" className="hover:text-orange-500">About</a></li>
            <li><a href="#Blog" className="hover:text-orange-500">Blog</a></li>
            <li><a href="#Pages" className="hover:text-orange-500">Pages</a></li>
            <li><a href="#Contact" className="hover:text-orange-500">Contact</a></li>
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center space-x-12">
            <a
              href="#"
              className={`py-2 px-3 transition-all duration-300 
              ${isScrolled ? "text-white" : "text-gray-800"} hover:text-orange-500`}
            >
              Login
            </a>

            <button className="rounded-xl bg-[#FB8E0B] py-3 px-5 text-white hover:text-orange-100">
              Get Started Free
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div
            className="md:hidden cursor-pointer z-30"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            {showMobileMenu ? (
              <FaTimes size={24} className={`${isScrolled ? "text-white" : "text-gray-800"}`} />
            ) : (
              <FaBars size={20} className={`${isScrolled ? "text-white" : "text-gray-800"}`} />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 
        bg-gray-600 transition-all duration-300 
        w-full max-w-full overflow-x-hidden
        ${showMobileMenu ? "flex" : "hidden"}`}
      >
        <div className="flex flex-col items-center justify-center 
        h-full space-y-8 text-lg font-medium p-6">

          <a href="#Demo" className="text-white hover:text-orange-500">Demo</a>
          <a href="#About" className="text-white hover:text-orange-500">About</a>
          <a href="#Blog" className="text-white hover:text-orange-500">Blog</a>
          <a href="#Pages" className="text-white hover:text-orange-500">Pages</a>
          <a href="#Contact" className="text-white hover:text-orange-500">Contact</a>

          <button className="rounded-xl bg-[#FB8E0B] text-white py-3 px-6">
            Get Started Free
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;