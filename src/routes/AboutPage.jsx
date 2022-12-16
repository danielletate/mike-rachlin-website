import React from 'react';
import { Link } from 'react-router-dom';
import MikeImg from '../assets/images/mike-rachlin.jpeg';

const AboutPage = () => {
  return (
    <section name="about" className="bg-white px-4 h-full py-20 mb-32 md:py-36">
      {/* Flex Container */}
      <div className="flex flex-col justify-between w-full space-y-6 py-8 lg:py-16 max-w-screen-lg px-4 mx-auto md:w-[9/12] md:flex-row ">
        {/* Content */}
        <div className="md:max-w-lg">
          <h2 className="mb-10 font-normal text-left text-gray-900 text-4xl">
            About Me
          </h2>
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
