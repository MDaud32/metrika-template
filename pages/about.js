import React from 'react';
import SocialMediaIcons from '../components/socialMediaIcons';
import { FiArrowUpCircle } from 'react-icons/fi';
import Link from 'next/link';

const About = () => {
  return (
    <div className="w-screen lg:h-screen bg-[#50b2a2]">
      {/* logo arrowicon social media icon */}
      <div className="flex lg:w-[80%] p-6 mx-auto flex-row justify-between items-center text-center py-12">
        <div className=" flex lg:flex-row flex-col gap-7 items-center">
          <div className="lg:text-4xl text-5xl text-white mt-2 self-start">
            <Link href="/">
              <a>
                <FiArrowUpCircle className="" />
              </a>
            </Link>
          </div>
          <h1 className="lg:text-6xl md:text-6xl text-4xl text-white whitespace-nowrap">
            About Us
          </h1>
        </div>
        <div className="self-start ml-[-2rem]">
          <SocialMediaIcons />
        </div>
      </div>

      {/* content */}
      <div className="lg:w-[80%]  w-[90%] mx-auto my-auto flex flex-col justify-center items-center text-left">
        <div className=" text-white my-20">
          <p className="text-2xl">
            Duis tincidunt erat quam. Etiam placerat sapien elit. Pellentesque
            egestas ornare sagittis. Sed augue lorem, dignissim eget bibendum
            vitae, scelerisque eget justo. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
          </p>
        </div>
        <div className="justify-end self-end text-right">
          <p className="lg:mt-[-4rem] mt-[-3rem]  border-t-2 text-gray-300">
            Mark Nikson, General director
          </p>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row text-white text-lg mt-10 gap-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            neque diam, luctus at laoreet in, auctor ut tellus. Etiam enim
            lacus, ornare et tempor et, rhoncus rhoncus sem. Cras in velit ante,
            eget pellentesque sem.
          </p>
          <p>
            Praesent rhoncus nunc vitae metus condimentum viverra. Fusce sed est
            orci, vel condimentum felis. Suspendisse ullamcorper vulputate
            sagittis. Quisque ullamcorper euismod diam at bibendum. Duis
            tincidunt erat quam. Etiam placerat sapien.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
