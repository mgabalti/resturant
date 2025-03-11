'use client'


import Link from "next/link";
import { useEffect, useState } from "react";

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
const [isdarkMode, setIsdarkMode] = useState(false);  
  const darkModeToggle = () => {
    const isBrowser = typeof window !== "undefined"

    const html = isBrowser && document.getElementsByTagName("html")[0];
    html.classList.toggle('dark');
    localStorage.setItem('darkMode', html.classList.contains('dark'));
    setIsdarkMode(localStorage.getItem('darkMode')  === 'true');

  }

  useEffect(() => {
    const darkmode = localStorage.getItem('darkMode')  === 'true';
    setIsdarkMode(darkmode);
    debugger
    const isBrowser = typeof window !== "undefined"
    const html = isBrowser && document.getElementsByTagName("html")[0].classList;
    darkmode ?
      html.add('dark')
      : html.remove('dark');
  }
    , []);
  return (
    <nav className="bg-white shadow-md dark:bg-black dark:text-white">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <Link href="/" className="text-xl font-semibold text-gray-800 dark:text-white">
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
          className={`${isOpen ? "block" : "hidden"
            } md:flex md:items-center md:space-x-6 w-full md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 mt-4 md:mt-0">
            <li>
              <Link href="/" className="block px-3 py-2 dark:text-white text-gray-800 hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/restaurant" className="block px-3 py-2 dark:text-white text-gray-800 hover:text-blue-600">
                Restaurant
              </Link>
            </li>
            <li>
              <Link href="/restaurant/dashboard" className="block dark:text-white px-3 py-2 text-gray-800 hover:text-blue-600">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/login" className="block dark:text-white px-3 py-2 text-gray-800 hover:text-blue-600">
                Login
              </Link>
            </li>
            <li>
              <Link href="/profile" className="block dark:text-white px-3 py-2 text-gray-800 hover:text-blue-600">
                Profile
              </Link>

             
            </li>
            <li>
              <button onClick={darkModeToggle} className="block px-3 py-2 dark:text-white text-gray-800 hover:text-blue-600">
               {isdarkMode ?" Dark Mode" : "Light Mode"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
}

export default NavbarComponent;