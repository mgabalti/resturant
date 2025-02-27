'use client'


import Link from "next/link";
import { useState } from "react";

const NavbarComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center py-4">
          <Link href="/" className="text-xl font-semibold text-gray-800">
            Navbar
          </Link>
          <button
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
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
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } md:flex md:items-center md:space-x-6 w-full md:w-auto`}
          >
            <ul className="flex flex-col md:flex-row md:space-x-6 mt-4 md:mt-0">
              <li>
                <Link href="/" className="block px-3 py-2 text-gray-800 hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/restaurant" className="block px-3 py-2 text-gray-800 hover:text-blue-600">
                  Restaurant
                </Link>
              </li>
              <li>
                <Link href="/contact" className="block px-3 py-2 text-gray-800 hover:text-blue-600">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/login" className="block px-3 py-2 text-gray-800 hover:text-blue-600">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/profile" className="block px-3 py-2 text-gray-800 hover:text-blue-600">
                  Profile
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  
    );
}

export default NavbarComponent;