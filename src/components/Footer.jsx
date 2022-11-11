import React from 'react';
import { FaSoundcloud } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AiFillInstagram } from 'react-icons/ai';
import { IoLogoFacebook } from 'react-icons/io';

const Footer = () => {
  return (
    <footer class="text-center lg:text-left bg-gray-100 text-gray-600">
      <div className="flex flex-col justify-center items-center">
        {/* Social Icons */}
        <div className="flex justify-center items-center text-2xl -mb-2 space-x-2 py-4">
          <a
            href="https://soundcloud.com/mike_rachlin"
            target="_blank"
            rel="noreferrer"
            className="transition duration-300 ease-in-out hover:text-gray-400"
          >
            <FaSoundcloud />
          </a>
          <a
            href="https://www.instagram.com/mike_rachlin/?hl=en"
            target="_blank"
            rel="noreferrer"
            className="transition duration-300 ease-in-out hover:text-gray-400"
          >
            <AiFillInstagram />
          </a>
          <a
            href="https://www.instagram.com/mike_rachlin/?hl=en"
            target="_blank"
            rel="noreferrer"
            className="transition duration-300 ease-in-out hover:text-gray-400"
          >
            <IoLogoFacebook />
          </a>
        </div>

        <ul className="flex">
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
          <li className="p-4 font-medium hover:text-gray-500">
            <Link exact to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div class="text-center p-6 bg-gray-200">
        <p>
          © 2022 Copyright <span className="font-bold">Mike Rachlin Music</span>{' '}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
