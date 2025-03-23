'use client'


import Link from "next/link";
import { useEffect, useState } from "react";
import Image from 'next/image'
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
    <nav className="">
      <div className="lg:container dark:bg-black restaurent-nav  mx-auto px-4 flex justify-between items-center py-4 bg-white dark:bg-gray-black ">
        <Link href="/" className="text-xl font-semibold text-white">
         <Image width={100} src="https://bizantheme.com/html/foodking-php/assets/img/logo/logo.svg" alt="logo" height={50} />
        </Link>
        <div>

        <button
          className="lg:hidden  focus:outline-none dark:text-white"
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
        </div>
        <div
          className={`${isOpen ? "show-nav show" : "show-nav"
            } lg:block lg:items-center lg:space-x-6 top-0   lg:mt-0 fixed lg:static w-80 lg:w-full ` }
        >
          <ul className="flex flex-col lg:flex-row lg:justify-end lg:space-x-6 top-0 left-0 mt-0 h-screen lg:h-auto bg-white dark:bg-black lg:dark:bg-transparent  lg:bg-transparent">
            <li>
              <Link href="/" className="block px-3 py-2 text-white  hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/restaurant" className="block px-3 py-2  dark:text-white text-black lg:text-white  hover:text-blue-600">
                Restaurant
              </Link>
            </li>
            <li>
              <Link href="/restaurant/dashboard" className="block dark:text-white text-black lg:text-white px-3 py-2  hover:text-blue-600">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/login" className="block dark:text-white text-black lg:text-white px-3 py-2  hover:text-blue-600">
                Login
              </Link>
            </li>
            <li>
              <Link href="/profile" className="block dark:text-white text-black lg:text-white px-3 py-2  hover:text-blue-600">
                Profile
              </Link>

             
            </li>
            <li>
              <button onClick={darkModeToggle} className="block px-3 py-2 dark:text-white text-black lg:text-white  hover:text-blue-600">
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