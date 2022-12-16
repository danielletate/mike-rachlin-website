import React from 'react';
import CollaborationsGallery from './CollaborationsGallery';

const CollaborationsSection = () => {
  return (
    <section>
      <div className="flex flex-col justify-center items-center py-2 mx-4 md:mx-10">
        <h2 className="text-3xl uppercase font-semibold tracking-tighter">
          Collaborations
        </h2>
        <p className="text-xs text-gray-500 max-w-sm my-2 md:max-w-xl mb-16">
          Below are some of the projects that I have worked on.
        </p>
        <CollaborationsGallery />
      </div>
    </section>
  );
};

export default CollaborationsSection;
