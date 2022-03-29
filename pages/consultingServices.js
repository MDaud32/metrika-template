import React from 'react';
import Link from 'next/link';
import SocialMediaIcons from '../components/socialMediaIcons';
import PageChange from '../components/pageChange';

const OurTeam = () => {
  return (
    <div className=" flex flex-col lg:flex-row ">
      <div className="lg:w-1/2 lg:h-screen text-black bg-gray-400 ">
        <div className="flex flex-row gap-1 lg:gap-0 justify-center items-center mt-10">
          <div className="lg:text-3xl text-3xl lg:mr-[-10rem] lg:ml-[4.5rem] text-white justify-end mt-1">
            <Link href="/">
              <a>
                <PageChange target={'/services'} />
              </a>
            </Link>
          </div>
          <h1 className="lg:text-3xl text-3xl text-center font-light justify-center md:text-left text-white lg:mx-auto whitespace-nowrap">
            SANDIIP PORWAL
          </h1>
        </div>
        <dir className="">
          <p className="lg:text-5xl text-3xl md:text-5xl justify-center lg:my-36 my-14 lg:ml-24 md:w-[25rem] lg:w-[30rem] flex md:text-left text-left ml-3 md:mx-auto mx-auto font-light">
            Degital Marketing Services
          </p>
        </dir>
        <div className="w-full">
          <button className="flex mx-auto justify-center lg:px-6 px-3 py-4 bg-yellow-500 mt-[3rem] mb-[2rem] rounded-md text-xl font-semibold cursor-pointer">
            Know more about Sandiip Porwal
          </button>
        </div>
      </div>
      {/* <div className="justify-end self-end text-right">
          <p className="lg:mt-[-4rem] mt-[-3rem]  border-t-2 text-gray-300">
            Mark Nikson, General director
          </p>
        </div> */}
      <div className="lg:w-1/2 ">
        <div className="flex justify-end mt-1">
          <SocialMediaIcons />
        </div>
        <div className="mx-auto lg:w-[90%] md:w-[90%] flex-row flex flex-wrap px-1 lg:justify-center text-center pt-6 pb-6 gap-[3.3px] lg:gap-3 md:gap-4 lg:mt-4 mt-8">
          <div className="flex flex-col justify-center text-center bg-gray-400 h-[8rem] w-[62%] lg:h-[8rem] md:h-[10rem] lg:w-[17.7rem] md:w-[60%] ">
            <p
              className={
                'px-8 md:font-normal lg:text-2xl text-left text-white'
              }>
              Search Engine Optimization
            </p>
          </div>
          <div className="flex flex-col justify-center text-left border-2 bg-white h-[8rem] lg:h-[8rem] md:h-[10rem] w-[37%] lg:w-[10rem]">
            <p className={'px-2 md:font-normal lg:text-2xl'}>
              Online Reputation Managment
            </p>
          </div>
          <div className="flex flex-col justify-center text-left border-2 bg-white h-[8rem] lg:h-[8rem] md:h-[10rem] lg:w-[10rem] w-[37%] text-gray-300">
            <p className={'px-8 md:font-normal lg:text-2xl text-black'}>
              Services
            </p>
          </div>
          <div className="flex flex-col justify-center text-center bg-gray-400 h-[8rem] lg:h-[8rem] md:h-[10rem] md:w-[60%] lg:w-[17.7rem] w-[62%]">
            <p className={'px-2 md:font-normal lg:text-2xl text-white'}>
              Google Ads Compaigns
            </p>
          </div>
          <div className="flex flex-col justify-center text-left bg-gray-400 h-[8rem] lg:h-[8rem] lg:w-[9rem] w-[32.7%] md:h-[10rem]">
            <p className={'px-2 md:font-normal lg:text-xl text-white'}>
              Shedule Meeting
            </p>
          </div>
          <div className="flex flex-col justify-center text-left bg-white h-[8rem] lg:h-[8rem] md:h-[10rem] lg:w-[9rem] border-2 w-[32.7%]">
            <p className={'px-2 md:font-normal lg:text-xl'}>Knowledge Center</p>
          </div>
          <div className="flex flex-col justify-center text-left bg-gray-400 lg:h-[8rem] md:h-[10rem] lg:w-[9rem] w-[32.7%] md:w-[30%]">
            <p className={'px-2 md:font-normal lg:text-xl text-white'}>
              Collaboration With Me
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
