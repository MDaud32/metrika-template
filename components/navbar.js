import React from 'react';
import Link from 'next/link';
import SocialMediaIcons from './socialMediaIcons';

const Navbar = () => {
  return (
    <div className="w-full bg-gray-200">
      {/* logo and social links */}
      <div className="flex flex-col lg:justify-evenly justify-center items-center lg:py-16">
        <div className="text-2xl lg:ml-[50rem] pb-7 lg:m-4 lg:">
          <SocialMediaIcons />
        </div>
        <h1 className="text-4xl lg:text-6xl lg:ml-[-50rem] lg:mt-[-7rem] ">
          Metrika
        </h1>
      </div>

      {/* mobile */}
      <div className="flex flex-wrap lg:justify-center lg:hidden text-center pt-12 gap-[1px]">
        <Link href="/about">
          <a className="bg-green-500 py-12 px-6 w-[49.8%] ">About</a>
        </Link>
        <Link href="/ourTeam">
          <a className="bg-green-700 py-12 px-6 w-[49.9%] ">OurTeam</a>
        </Link>
        <Link href="/resume">
          <a className="bg-orange-700 py-8 w-full">Resume</a>
        </Link>
        <Link href="/ourWorks">
          <a className=" bg-blue-400 py-24 w-full ">Our Works</a>
        </Link>
        <Link href="/contact">
          <a className="bg-pink-600 py-8 w-full">Contacts</a>
        </Link>
        <Link href="/blog">
          <a className="bg-orange-800 py-12 w-[49.8%]">Blog</a>
        </Link>
        <Link href="/feedback">
          <a className="bg-yellow-700 py-12 w-[49.9%]">Feedback</a>
        </Link>
      </div>

      {/* DeskTop */}
      <div
        className={
          'p-10 hidden lg:flex justify-center items-center mx-auto lg:mt-6'
        }>
        <div className={'flex'}>
          <div className={'flex flex-col justify-center'}>
            <div className={'flex gap-6'}>
              <p
                className={'bg-gray-800 p-14 px-12 text-center align-baseline'}>
                our team
              </p>
              <p className={'bg-red-600 p-14'}>about</p>
            </div>
            <div
              className={
                'bg-amber-500 w-[21rem] h-[10rem] mt-8 py-7 text-center justify-center'
              }>
              resume
            </div>
          </div>
          <div
            className={
              'ml-10 bg-teal-400 w-80 h-84 flex text-center justify-center py-24'
            }>
            our works
          </div>
          <div>
            <div className={'ml-10'}>
              <div
                className={
                  'bg-amber-500 w-[21.5rem] h-[10rem] py-7 justify-center text-center'
                }>
                Contacts
              </div>
              <div className={'flex gap-6 mt-8'}>
                <p className={'bg-gray-800 p-14 px-[4rem]'}>Blog</p>
                <p className={'bg-red-600 p-12 px-12'}>FeedBack</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* paragraph */}
      <div className="my-8 mx-4 bg-gray-300 p-3 text-center text-gray-500 rounded-xl">
        <p>
          Duis tincidunt erat quam. Etiam placerat sapien elit. Pellentesque
          egestas ornare sagittis. Sed augue lorem, dignissim eget bibendum
          vitae, scelerisque eget justo. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos.
        </p>
      </div>

      <footer className="text-center text-lg text-gray-500">
        Copyright © Metrika inc., 2022
      </footer>
    </div>
  );
};

export default Navbar;
