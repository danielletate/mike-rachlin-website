import React from 'react';
import MikeImg from '../assets/images/mike-rachlin.jpeg';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="bg-white h-full w-full px-4 md:p-0">
      {/* Container */}
      <div className="flex flex-col text-gray-800 justify-center h-auto my-8 gap-6 md:my-24 md:flex-row">
        {/* Image */}
        <img
          src={MikeImg}
          className="object-fit h-96 w-[30rem] md:h-96 md:w-80"
          alt="Mike Rachlin"
        />

        {/* Content */}
        <div className="max-w-md space-y-6">
          <h2 className="text-3xl text-gray-800 uppercase font-semibold tracking-tighter md:text-4xl">
            About
          </h2>
          <p className="text-sm max-w-xl">
            Mike Rachlin is a Denver based audio engineer and record producer
            who has over 10 years of experience working in the music
            industry....
          </p>
          <Link to="/contact">
            <button className="uppercase border-solid border-2 mt-16  border-gray-500 text-gray-600 p-3 transition-all duration-300 hover:bg-gray-800 hover:border-gray-800 hover:text-white">
              Say Hello
            </button>
          </Link>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="mx-auto my-8 bg-gray-200 md:w-[75%]" />

      <div className="flex flex-col justify-between my-10 text-gray-800 gap-4 md:mx-80 md:flex-row">
        <div>
          <h2 className="text-3xl mb- uppercase font-semibold tracking-tighter">
            Skills
          </h2>
          <ul className="list-disc my-2 space-y-2">
            <li className="ml-5 text-sm">Tracking</li>
            <li className="ml-5 text-sm">Audio Mixing + Mastering</li>
            <li className="ml-5 text-sm">Sound Design</li>
            <li className="ml-5 text-sm">Voiceover Editing</li>
            <li className="ml-5 text-sm">skill</li>
            <li className="ml-5 text-sm">skill</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl uppercase font-semibold tracking-tighter">
            Clients
          </h2>
          <p className="text-sm max-w-sm my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            esse perspiciatis ipsa! Optio eligendi autem facere quidem similique
            voluptatum laudantium?
          </p>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="mx-auto my-8 bg-gray-200 md:w-[75%]" />
    </section>
  );
};

export default AboutSection;
