import React from 'react';

const About = () => {
  return (
    <section name="about" className="bg-white w-full h-screen">
      {/* Flex Container */}
      <div className="flex flex-col h-screen justify-between mx-auto px-14 py-14 md:px-20 md:flex-row">
        <div>
          <h1 className="text-3xl font-bold uppercase py-4 md:text-4xl">
            A little bit about me
          </h1>
          <p className="py-4 leading-7 max-w-lg">
            My love of all things music began in childhood..... Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Suscipit porro quo,
            ipsam accusamus ea perspiciatis dignissimos voluptatum nobis sed
            fugiat adipisci, facilis recusandae provident iste libero optio
            labore ducimus pariatur a odio consequatur quam quisquam excepturi
            fugit? Qui fuga voluptas assumenda ipsum aperiam similique ea!
            Maxime sequi illo sed quam?
          </p>
        </div>

        <img src="https://via.placeholder.com/500" alt="" />
      </div>
    </section>
  );
};

export default About;
