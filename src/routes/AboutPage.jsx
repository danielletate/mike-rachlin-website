import React from 'react';
import { Link } from 'react-router-dom';
import MikeImg from '../assets/images/mike-rachlin.jpeg';

const AboutPage = () => {
  return (
    <section
      name="about"
      className="bg-white py-10 px-10 h-full md:py-44 md:px-20"
    >
      {/* Flex Container */}
      <div className="flex flex-col justify-between w-full space-y-6 md:w-9/12 md:flex-row">
        {/* Content */}
        <div className="space-y-4 md:max-w-lg">
          <h1 className="text-3xl text-gray-800 font-bold py-4 md:text-4xl">
            About Mike
          </h1>
          <p className="py-4 leading-7">
            My love of all things music began in childhood..... Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Suscipit porro quo,
            ipsam accusamus ea perspiciatis dignissimos voluptatum nobis sed
            fugiat adipisci, facilis recusandae provident iste libero optio
            labore ducimus pariatur a odio consequatur quam quisquam excepturi
            fugit? Qui fuga voluptas assumenda ipsum aperiam similique ea!
            Maxime sequi illo sed quam?
          </p>

          <Link to="/contact">
            <button className="w-1/3 bg-gray-400 text-white uppercase p-4 my-6 transition-all duration-300 hover:bg-gray-500 hover:border-gray-500 hover:text-white">
              Contact Me
            </button>
          </Link>
        </div>

        {/* Image */}
        <img src={MikeImg} className="object-fit h-96 w-96" alt="" />
      </div>
    </section>
  );
};

export default AboutPage;
