import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gradient-to-l from-secondary to-primary px-6 py-4 shadow-md">
      <nav className="flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="flex items-center">
          <img className="w-10 h-10" src="/logo192.png" alt="Logo" />
          <span className="text-white text-2xl font-semibold ml-3">
            BrandName
          </span>
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 items-center">
          <li className="relative group">
            <Link
              to="/"
              className="text-white text-lg font-medium hover:text-yellow-400 transition duration-300"
            >
              Home
            </Link>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
          </li>
          <li className="relative group">
            <Link
              to="/service"
              className="text-white text-lg font-medium hover:text-yellow-400 transition duration-300"
            >
              Service
            </Link>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
          </li>
          <li className="relative group">
            <Link
              to="/connectus"
              className="text-white text-lg font-medium hover:text-yellow-400 transition duration-300"
            >
              Connect Us
            </Link>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
          </li>
          <li className="relative group">
            <Link
              to="/about"
              className="text-white text-lg font-medium hover:text-yellow-400 transition duration-300"
            >
              About Us
            </Link>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
          </li>
        </ul>

        {/* Call to Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/login"
            className="px-5 py-2 rounded-full border border-yellow-400 text-white hover:bg-yellow-400 hover:text-primary transition duration-300"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-5 py-2 rounded-full bg-yellow-400 text-primary font-semibold hover:bg-yellow-500 transition duration-300"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className="flex md:hidden mt-4">
        <input
          type="text"
          className="px-4 py-2 w-full rounded-md border border-white focus:outline-none focus:border-yellow-400 transition duration-300"
          placeholder="Search..."
        />
      </div>
    </header>
  );
}

export default Header;
