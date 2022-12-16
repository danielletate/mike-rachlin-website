import React from 'react';
import { ImEqualizer2 } from 'react-icons/im';
import { BsMusicNoteBeamed } from 'react-icons/bs';
import { TbWritingSign } from 'react-icons/tb';

const Services = () => {
  return (
    <section name="services" className="bg-gray-100 w-full h-full">
      {/* Container */}
      <div className="flex flex-col justify-center items-center p-16 py-20 gap-10 text-gray-800 md:flex-row">
        <div className="flex flex-col items-center space-y-4 mb-10 md:m-0">
          <ImEqualizer2 className="text-4xl" />
          <h2 className="text-xl font-semibold uppercase">
            Recording & Mixing
          </h2>
          <p className="text-center max-w-md md:text-left">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit atque
            ducimus expedita, quas optio inventore consequuntur voluptatibus
            commodi officia? Pariatur?
          </p>
        </div>

        <div className="flex flex-col items-center space-y-4 mb-10 md:m-0">
          <BsMusicNoteBeamed className="text-4xl" />
          <h2 className="text-xl font-semibold uppercase">Custom Beats</h2>
          <p className="text-center max-w-md md:text-left">
            I specialize in building custom beats of all genres from scratch.
            Have a reference track in mind? I can create a beat from that too!
          </p>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <TbWritingSign className="text-4xl" />
          <h2 className="text-xl font-semibold uppercase">Writing Sessions</h2>
          <p className="text-center max-w-md md:text-left">
            Have an idea for a track or want to brainstorm ideas together? I
            would love to help you write and produce a song that's yours.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
