import React from 'react';
import Link from 'next/link';
import SocialMediaIcons from '../components/socialMediaIcons';
import { FiArrowUpCircle } from 'react-icons/fi';

const OurTeam = () => {
  return (
    <div>
      <div className="w-screen pb-20 bg-[#50b28a]">
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
            <h1 className="lg:text-6xl md:text-6xl text-left text-4xl font-semibold text-white">
              SANDIIP PORWAL
            </h1>
          </div>
          <div className="self-start ml-[-14rem]">
            <SocialMediaIcons />
          </div>
        </div>

        <div className="flex justify-center text-center text-6xl font-semibold text-white my-20">
          <h1>Digital Marketing Services</h1>
        </div>

        {/* content */}
        <div className=" lg:w-[90%] md:w-[85%] mx-auto flex flex-wrap px-1 lg:justify-center text-center pt-12 gap-[3.3px] lg:gap-7 md:gap-4">
          <div className="flex flex-col justify-center text-center bg-gray-400 h-[8rem] w-[62%] lg:h-[12rem] md:h-[10rem] lg:w-[60%] md:w-[60%] ">
            <p className={'px-2 lg:font-semibold md:font-normal text-white'}>
              Search Engine Optimization
            </p>
          </div>
          <div className="flex flex-col justify-center text-center bg-white h-[8rem] lg:h-[12rem] md:h-[10rem] w-[37%] ">
            <p className={'px-2 lg:font-semibold md:font-normal text-black'}>
              Online Reputation Managment
            </p>
          </div>
          <div className="flex flex-col justify-center text-center bg-white h-[8rem] lg:h-[12rem] md:h-[10rem] w-[37%] text-gray-300">
            <p className={'px-2 text-lg text-black'}>Services</p>
          </div>
          <div className="flex flex-col justify-center text-center bg-gray-400 h-[8rem] lg:h-[12rem] md:h-[10rem] md:w-[60%] lg:w-[60%]  w-[62%]">
            <p className={'px-2 text-2xl text-white'}>Google Ads Compaigns</p>
          </div>
          <div className="flex flex-col justify-center text-center bg-gray-400 h-[8rem] lg:h-[12rem] lg:w-[32%] w-[33%] md:h-[10rem]">
            <p className={'px-2 text-lg text-white'}>Shedule Meeting</p>
          </div>
          <div className="flex flex-col justify-center text-center bg-white h-[8rem] lg:h-[12rem] md:h-[10rem] lg:w-[31%] w-[32%]">
            <p className={'px-2 lg:font-semibold md:font-normal text-black'}>
              Knowledge Center
            </p>
          </div>
          <div className="flex flex-col justify-center text-center bg-gray-400 h-[8rem] lg:h-[12rem] md:h-[10rem] lg:w-[31%]  w-[33%] md:w-[30%]">
            <p className={'px-2 lg:font-semibold md:font-normal text-white'}>
              Collaboration With Me
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
