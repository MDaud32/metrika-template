import React from 'react';
import SocialMediaIcons from '../components/socialMediaIcons';
import { FiArrowUpCircle } from 'react-icons/fi';
import Link from 'next/link';

const Collaborate = () => {
  return (
    <div className="w-screen lg:h-screen  bg-[#d9912a]">
      {/* logo arrowicon social media icon */}
      <div className="flex lg:w-[80%] w-full p-6 mx-auto flex-row justify-between items-center text-center py-12">
        <div className=" flex lg:flex-row flex-col gap-4 items-center">
          <div className="lg:text-4xl text-5xl text-white mt-2 self-start">
            <Link href="/">
              <a>
                <FiArrowUpCircle className="lg:mt-2 " />
              </a>
            </Link>
          </div>
          <h1 className="lg:text-6xl lg:w-[20rem] w-[10rem] text-left md:text-6xl text-4xl text-white">
            Collaboration With Me
          </h1>
        </div>
        <div className="self-start lg:ml-[-2rem] ml-[-12rem]">
          <SocialMediaIcons />
        </div>
      </div>

      {/* content */}
      <div className="w-full mx-auto my-auto flex flex-col justify-center items-center text-left mt-[6rem]">
        {/* form */}

        <div className="flex lg:flex-row md:flex-col flex-col gap-12">
          <div className=" flex lg:w-1/3 w-full flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end gap-8">
            <div className="w-full">
              <input
                type="text"
                id="full-name"
                name="full-name"
                placeholder="Your Name*"
                className="lg:w-[25rem] md:w-[25rem] w-[18rem] placeholder-[#d9912a] h-[4rem] bg-gray-100 bg-opacity-50 border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-[#e21b1b] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className=" w-full">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email*"
                className="lg:w-[25rem] md:w-[25rem] w-[18rem] placeholder-[#d9912a] h-[4rem] bg-gray-100 bg-opacity-50 border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>

          <div>
            <div className="w-full flex lg:flex-col md:flex-row flex-row ">
              <textarea
                type="text"
                id="full-name"
                name="full-name"
                placeholder="Any Comment*"
                className="lg:w-[25rem] md:w-[25rem] w-[18rem] lg:ml-8 justify-center mx-auto placeholder-[#d9912a] h-[10rem] bg-gray-100 bg-opacity-50 border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="flex justify-end items-end mt-8">
              <button className="text-white justify-end items-end self-end flex  bg-indigo-500 mr-[2rem] border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaborate;
