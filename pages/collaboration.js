import React from 'react';
import SocialMediaIcons from '../components/socialMediaIcons';
import { FiArrowUpCircle } from 'react-icons/fi';
import Link from 'next/link';

const Collaborate = () => {
  return (
    <div className="w-screen h-screen  bg-[#d9912a]">
      {/* logo arrowicon social media icon */}
      <div className="flex lg:w-[80%] w-full p-6 mx-auto flex-row justify-between items-center text-center pt-12">
        <div className=" flex lg:flex-row flex-col gap-4 items-center">
          <div className="lg:text-4xl text-5xl text-white mt-2 self-start">
            <Link href="/">
              <a>
                <FiArrowUpCircle className="lg:mt-2 " />
              </a>
            </Link>
          </div>
          <h1 className="lg:text-6xl text-left md:text-6xl text-4xl text-white">
            SANDIIP PORWAL
          </h1>
        </div>
        <div className="self-start lg:ml-[-2rem] ml-[-12rem]">
          <SocialMediaIcons />
        </div>
      </div>

      {/* content */}
      <div className="mx-auto my-auto flex flex-col justify-center items-center text-left mt-20 lg:mt-40 gap-10">
        <h1 className="text-3xl lg:text-6xl text-white font-semibold underline">
          Collaborate With Me
        </h1>
        <button className="px-6 py-4 bg-violet-800 text-white my-8 rounded-md text-xl font-semibold cursor-pointer ">
          We Will Help Your Get There.
        </button>{' '}
      </div>
    </div>
  );
};

export default Collaborate;
