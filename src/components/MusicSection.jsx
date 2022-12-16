import React from 'react';

const MusicSection = () => {
  return (
    <section className="bg-white w-full h-screen py-4">
      <div className="flex flex-col justify-center items-center py-2 mx-4 md:mx-10">
        <h2 className="text-3xl uppercase font-semibold tracking-tighter">
          My Sound
        </h2>
        <p className="text-xs text-gray-500 max-w-sm my-2 md:max-w-xl mb-16">
          A collection of original releases and remixes that I've recorded and
          produced.{' '}
        </p>
      </div>
    </section>
  );
};

export default MusicSection;
