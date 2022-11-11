import React from 'react';

const ContactPage = () => {
  return (
    <section class="bg-white py-10 md:py-36">
      <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 class="mb-16 text-[30px] tracking-tight font-bold text-center text-gray-900 md:text-4xl">
          Contact for Booking and Rates
        </h2>
        <form action="https://submit-form.com/olXuRWRi" class="space-y-6">
          <div>
            <label
              for="name"
              class="block mb-2 text-sm font-medium text-gray-900"
            >
              Name *
            </label>
            <input
              type="text"
              name="name"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm  block w-full p-2.5 focus:outline-none"
              placeholder="First and last name"
              required
            />
          </div>
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-sm border border-gray-300 shadow-sm focus:outline-none"
              placeholder="name@example.com"
              required
            />
          </div>
          <div class="sm:col-span-2">
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900"
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
              class="block p-2.5 w-fuxll text-sm text-gray-900 bg-gray-50 rounded-sm shadow-sm border border-gray-300 focus:outline-none"
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
    </section>
  );
};

export default ContactPage;
