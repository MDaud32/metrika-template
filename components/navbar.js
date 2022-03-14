import React from 'react';
import Link from 'next/link';
import SocialMediaIcons from './socialMediaIcons';

const Navbar = () => {
  return (
    <div className="w-full bg-gray-200">
      {/* logo and social links */}
      <div className="flex flex-col lg:justify-evenly justify-center items-center lg:pt-10">
        <div className="text-2xl lg:ml-[55rem] pb-7 lg:m-4 lg:self-center md:self-end self-end">
          <SocialMediaIcons />
        </div>
        <h1 className="text-4xl lg:text-6xl lg:ml-[-50rem] lg:mt-[-7rem] mt-8 ">
          Metrika
        </h1>
      </div>

      {/* mobile */}
      <div className="flex flex-wrap lg:justify-center lg:hidden md:hidden text-center pt-12 gap-[2px] h-screen ">
        <Link href="/about">
          <a className="bg-[#50b2a2] py-12 px-6 w-[49.5%] ">About</a>
        </Link>
        <Link href="/ourTeam">
          <a className="bg-[#50b28a] py-12 px-6 w-[49.8%] ">OurTeam</a>
        </Link>
        <Link href="/resume">
          <a className="bg-[#c85141] py-8 w-full">Resume</a>
        </Link>
        <Link href="/ourWorks">
          <a className=" bg-[#0fa2cb] py-24 w-full ">Our Works</a>
        </Link>
        <Link href="/contact">
          <a className="bg-[#d8457a] py-8 w-full">Contacts</a>
        </Link>
        <Link href="/blog">
          <a className="bg-[#d8733b] py-12 w-[49.5%]">Blog</a>
        </Link>
        <Link href="/feedback">
          <a className="bg-[#d9912a] py-12 w-[49.8%]">Feedback</a>
        </Link>
      </div>

      {/* DeskTop */}
      <div
        className={
          'p-10 hidden lg:flex md:flex justify-center items-center lg:mx-auto lg:mt-[-2rem] md:w-screen md:h-screen'
        }>
        <div className={'flex'}>
          <div className={'flex flex-col justify-center'}>
            <div className={'flex lg:gap-6 md:gap-5'}>
              <p
                className={
                  'bg-[#50b2a2] lg:p-14 lg:px-12 md:px-7 md:h-32 text-center align-baseline'
                }>
                our team
              </p>
              <p className={'bg-[#50b28a] lg:p-14 md:px-9 md:py-9 md:h-32'}>
                about
              </p>
            </div>
            <div
              className={
                'bg-[#c85141] lg:w-[21rem] lg:h-[10rem] md:w-[16rem] md:h-[8rem] md:mt-8 lg:mt-8 lg:py-10 text-center justify-center'
              }>
              resume
            </div>
          </div>
          <div
            className={
              'ml-10 bg-[#0fa2cb] lg:w-80 md:w-60 md:h-68 lg:h-84 flex text-center justify-center py-24'
            }>
            our works
          </div>
          <div>
            <div className={'ml-10'}>
              <div
                className={
                  'bg-[#d8457a] lg:w-[21rem] md:w-[16rem] md:h-[8rem] lg:h-[10rem] lg:py-7 justify-center text-center'
                }>
                Contacts
              </div>
              <div className={'flex lg:gap-8 lg:mt-8 md:mt-8 md:gap-5 '}>
                <p
                  className={
                    'bg-[#d8733b] lg:p-14 lg:px-14 md:px-10 md:h-32 text-center align-baseline'
                  }>
                  Blog
                </p>
                <p className={'bg-[#d9912a] lg:p-12 md:px-7 md:py-8 md:h-32'}>
                  FeedBack
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="text-center text-lg text-gray-500">
        Copyright © Metrika inc., 2022
      </footer>
    </div>
  );
};

export default Navbar;
