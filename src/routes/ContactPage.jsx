import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlinePhone } from 'react-icons/ai';
import { GrLocation } from 'react-icons/gr';

const ContactPage = () => {
  return (
    <section classNameName="bg-white py-20 px-6 w-full h-[1200px] md:h-screen">
      <div classNameName="h-full py-8 lg:py-16 px-4 mx-auto md:w-[9/12] max-w-screen-lg">
        <h2 classNameName="text-4xl mb-10 font-normal text-left text-gray-900 md:mb-16">
          Contact Me
        </h2>

        {/* Container */}
        <div className="flex flex-col justify-between md:flex-row">
          {/* Contact Info */}
          <div className="text-gray-900 flex flex-col mb-12 space-y-6">
            <h2 className="text-2xl font-medium mb-4">Get in touch</h2>
            <div className="flex items-center gap-4 mb-4">
              <AiOutlineMail className="text-2xl" />
              <p className="text-[14px]"> mikerachlin91@gmail.com</p>
            </div>

            <div className="flex items-center gap-4">
              <AiOutlinePhone className="text-2xl" />
              <p className="text-[14px]">(732) 773-9154</p>
            </div>

            <div className="flex items-center gap-4">
              <GrLocation className="text-2xl" />
              <p className="text-[14px]">Lakewood, CO 80215</p>
            </div>

            <p className="text-md md:max-w-xs py-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
              deserunt perferendis, aliquid repudiandae nam voluptatibus hic
              provident molestias natus dolorem!
            </p>
          </div>

          {/* Contact Form */}
          <form
            action="https://submit-form.com/olXuRWRi"
            classNameName="space-y-6 md:w-6/12"
          >
            <div>
              <label
                for="name"
                classNameName="block mb-2 text-sm font-medium text-gray-900"
              >
                Name *
              </label>
              <input
                type="text"
                name="name"
                classNameName="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm  block w-full p-2.5 focus:outline-none"
                placeholder="First and last name"
                required
              />
            </div>
            <div>
              <label
                for="email"
                classNameName="block mb-2 text-sm font-medium text-gray-900"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                classNameName="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-sm border border-gray-300 shadow-sm focus:outline-none"
                placeholder="name@example.com"
                required
              />
            </div>
            <div classNameName="sm:col-span-2">
              <label
                for="message"
                classNameName="block mb-2 text-sm font-medium text-gray-900"
              >
                Message *
              </label>
              <p className="text-xs text-gray-500 mb-3">
                Tell me more about your project
              </p>
              <textarea
                id="message"
                rows="6"
                name="message"
                classNameName="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-sm shadow-sm border border-gray-300 focus:outline-none"
                placeholder="Enter your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-[150px] bg-gray-400 text-white uppercase p-4 mt-4 transition-all duration-300 hover:bg-gray-500 hover:border-gray-500 hover:text-white"
            >
              Contact Me
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
