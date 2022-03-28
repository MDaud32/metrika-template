import React from 'react';
import SocialMediaIcons from '../components/socialMediaIcons';
import { AiFillSignal } from 'react-icons/ai';
import Link from 'next/link';
import PageChange from '../components/pageChange';

const Collaborate = () => {
  return (
    <div className=" flex flex-col lg:flex-row ">
      <div className="lg:w-1/2 lg:h-screen text-black bg-gray-400 p-10">
        <div className="flex flex-row gap-1 lg:gap-[3rem] justify-center items-center ">
          <div className="lg:text-3xl text-3xl lg:mr-[-8.5rem] lg:ml-[2rem] text-white justify-end mt-1">
            <Link href="/">
              <a>
                <PageChange target={'/about'} />
              </a>
            </Link>
          </div>
          <h1 className="lg:text-3xl text-3xl text-center justify-center md:text-left text-white lg:mx-auto whitespace-nowrap">
            SANDIIP PORWAL
          </h1>
        </div>
        <p className="lg:text-4xl text-3xl md:justify-center lg:justify-center font-semibold lg:my-28 my-14 lg:ml-16  lg:w-[25rem] flex md:text-left text-center ml-6mx-auto">
          Collaboration With Me
        </p>
        <div>
          <AiFillSignal size={80} color={'black'} className={'mx-auto'} />
        </div>
      </div>
      {/* <div className="justify-end self-end text-right">
          <p className="lg:mt-[-4rem] mt-[-3rem]  border-t-2 text-gray-300">
            Mark Nikson, General director
          </p>
        </div> */}
      <div>
        <div className="flex justify-end">
          <SocialMediaIcons />
        </div>
        <div className="mx-auto  my-auto flex flex-col justify-center items-center text-left mt-20 lg:mt-40 gap-10">
          <h1 className="text-3xl lg:text-6xl text-white font-semibold underline">
            Collaborate With Me
          </h1>
          <button className="px-6 py-4 bg-violet-800 text-white my-12 rounded-md text-xl font-semibold cursor-pointer underline lg:ml-10">
            We Will Help Your Get There.
          </button>
        </div>
      </div>
    </div>
  );
};

export default Collaborate;
