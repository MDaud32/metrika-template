import React from 'react';
import SocialMediaIcons from '../components/socialMediaIcons';
import { FiArrowUpCircle } from 'react-icons/fi';
import Link from 'next/link';

const Contact = () => {
  return (
    <div className="w-screen py-4 bg-[#d8457a]">
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
        <div className="self-start ml-[-4rem]">
          <SocialMediaIcons />
        </div>
      </div>

      {/* content */}
      <div className="lg:w-[80%]  w-[90%] mx-auto my-auto flex flex-col justify-center items-center text-left">
        <div className=" text-white  flex text-left font-semibold mt-10">
          <p className="text-5xl justify-start">
            Want to Grow your Business with better Digital Marketing Results.
          </p>
        </div>
        <button className="px-6 py-4 bg-yellow-500 my-8 rounded-md text-xl font-semibold cursor-pointer underline">
          We Will Help Your Get There.
        </button>
        <div className=" text-white font-semibold my-10">
          <p className="text-5xl">Schedule Appointment</p>
        </div>
        {/* <div className="justify-end self-end text-right">
          <p className="lg:mt-[-4rem] mt-[-3rem]  border-t-2 text-gray-300">
            Mark Nikson, General director
          </p>
        </div> */}
        <div className="flex w-[80%] flex-col md:flex-row lg:flex-row text-white text-2xl mt-5 gap-4">
          <p>
            Whether it is slow revenue or you are unsure where to start with
            digital marketing or how to re-energise your digital marketing?
            Whatever your requirements or budget, our talented team of digital
            experts at Sandiip Porwal Digital Marketing Consultancy is here and
            ready to help you. We offer a first free consultation followed by a
            brainstorming session pre-signup for a fee and then once you sign up
            for our digital marketing services you have with you a
            performance-driven digital agency as marketing partner Schedule an
            appointment and lets take your business to the next level!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
