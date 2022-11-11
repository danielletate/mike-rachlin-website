import React from 'react';
import { ImEqualizer2 } from 'react-icons/im';
import { BsMusicNoteBeamed } from 'react-icons/bs';
import { TbWritingSign } from 'react-icons/tb';

const Services = () => {
  return (
    <section name="services" className="bg-gray-100 w-full h-full">
      {/* Container */}
      <div className="flex flex-col justify-center items-center p-16 py-20 text-gray-800 md:flex-row">
        <div className="flex flex-col justify-center items-center space-x-8 md:flex-row">
          <div className="flex flex-col items-center space-y-4">
            <ImEqualizer2 className="text-4xl" />
            <h2 className="text-xl font-semibold uppercase">
              Recording & Mixing
            </h2>
            <p className="text-left max-w-md">
              From tracking to mixing and mastering, let me take your vision to
              the next level.
              jkkljljkljljljljljljlkjkljljljlkjkljkjlkjlkjkljkljkljjkhjkkhkjhhk
            </p>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <BsMusicNoteBeamed className="text-4xl" />
            <h2 className="text-xl font-semibold uppercase">Custom Beats</h2>
            <p className="text-left max-w-md">
              I specialize in building custom beats of all genres from scratch.
              Have a reference track in mind? I can create a beat from that too!
            </p>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <TbWritingSign className="text-4xl" />
            <h2 className="text-xl font-semibold uppercase">
              Writing Sessions
            </h2>
            <p className="text-left max-w-md">
              Have an idea for a track or want to brainstorm ideas together? I
              would love to help you write and produce a song that's yours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
