import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-gray-100 w-full z-10 flex justify-between items-center h-28 mx-auto text-black px-10 md:px-20 md:fixed">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold uppercase text-black cursor-pointer">
          Mike Rachlin
        </h1>

        <ul class="flex space-x-2 text-xs text-gray-500">
          <li>Artist</li>
          <li>Producer</li>
          <li>Audio Engineer</li>
        </ul>
      </div>

      {/* Nav Menu */}
      <ul className="hidden md:flex">
        <li className="p-4 font-medium hover:text-gray-500">
          <Link to="/">Home</Link>
        </li>
        <li className="p-4 font-medium hover:text-gray-500">
          <Link to="/about">About</Link>
        </li>
        <li className="p-4 font-medium hover:text-gray-500">
          <Link to="/services">Services</Link>
        </li>
        <li className="p-4 font-medium hover:text-gray-500">
          <Link to="/music">Music</Link>
        </li>
        <li className="p-4 font-medium  hover:text-gray-500">
          <Link exact to="/contact">
            Contact
          </Link>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden cursor-pointer">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={22} />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          nav
            ? 'z-10 fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-400 bg-gray-600 ease-in-out duration-500'
            : 'ease-in-out duration-500 fixed left-[-100%]'
        }
      >
        <h1 className="w-full text-3xl font-bold text-black m-4 uppercase">
          Mike Rachlin
        </h1>
        <li className="p-4 border-b border-gray-400">
          <Link to="/">Home</Link>
        </li>
        <li className="p-4 border-b border-gray-400">
          <Link to="/about">About</Link>
        </li>
        <li className="p-4 border-b border-gray-400">
          <Link to="/services">Services</Link>
        </li>
        <li className="p-4 border-b border-gray-400">
          <Link to="music">music</Link>
        </li>
        <li className="p-4">
          <Link exact to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
