import React from 'react';
import SocialMediaIcons from '../components/socialMediaIcons';
import { FiArrowUpCircle } from 'react-icons/fi';
import Link from 'next/link';
import Footer from '../components/footer';

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
            SANDIIP PORWAL
          </h1>
        </div>
        <div className="self-start ml-[-12rem]">
          <SocialMediaIcons />
        </div>
      </div>

      {/* content */}
      <div className="lg:w-[80%] w-[90%] mx-auto my-auto flex flex-col justify-center items-center text-left">
        <div className=" text-white font-semibold my-20">
          <p className="lg:text-5xl text-3xl">About Degital Marketing Expert</p>
        </div>
        {/* <div className="justify-end self-end text-right">
          <p className="lg:mt-[-4rem] mt-[-3rem]  border-t-2 text-gray-300">
            Mark Nikson, General director
          </p>
        </div> */}
        <div className="flex w-[80%] flex-col md:flex-row lg:flex-row text-white text-2xl mt-5 gap-4">
          <p>
            <span className="lg:text-[1.8rem] text-2xl text-gray-200">
              About Sandiip Porwal Digital Marketing Consultancy
            </span>
            <br /> <br />
            The mission is simple and clear. To demystify & simplify the digital
            marketing to help our clients scale their business with digital
            branding, content marketing, digital design and tech expertise that
            ensure last mile delivery. Essentially we help businesses increase
            awareness, and revenue by utilizing our digital marketing expertise
            and a team that has a clear sight of our clients business goals.
          </p>
        </div>
        <button className="px-6 py-4 bg-yellow-500 mt-[5rem] rounded-md text-xl font-semibold cursor-pointer">
          Know more about Sandiip Porwal
        </button>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
