import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section
      name="hero"
      className="bg-hero bg-no-repeat bg-cover bg-top bg-fixed h-screen w-full opacity-90 brightness-60 text-white px-5 "
    >
      {/* Hero Container */}
      <div className="flex flex-col justify-center items-center h-full text-white">
        <p className="text-4xl font-bold text-center uppercases mt-12">
          Hi, I'm Mike!
        </p>
        <p className="text-2xl text-center uppercase mt-4">
          I'm a Music Producer and Audio Engineer Based in Denver, CO
        </p>

        <Link to="/contact">
          <button className="uppercase border-solid border-2 p-4 mt-12 transition-all duration-300 hover:bg-gray-900 hover:border-gray-900">
            Start Your Project
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
