import React from 'react';
import Link from 'next/link';
import SocialMediaIcons from './socialMediaIcons';
import { TiArrowDownThick } from 'react-icons/ti';

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
          <a className="bg-[#50b2a2] py-12 px-6 w-[49.5%] ">
            About Sandiip Porwal
          </a>
        </Link>
        <Link href="/ourTeam">
          <a className="bg-[#50b28a] py-12 px-6 w-[49.8%] ">
            Digital Consulting Services
          </a>
        </Link>
        <Link href="/resume">
          <a className="bg-[#c85141] py-8 w-full text-gray-300">Services</a>
        </Link>
        <Link href="/ourWorks">
          <a className=" bg-[#0fa2cb] py-24 w-full">
            How Business Consulting Helps?
          </a>
        </Link>
        <Link href="/contact">
          <a className="bg-[#d8457a] py-8 w-full">Shedule Meeting</a>
        </Link>
        <Link href="/blog">
          <a className="bg-[#d8733b] py-12 w-[49.5%]">
            Knowledge Center page with Q&A
          </a>
        </Link>
        <Link href="/feedback">
          <a className="bg-[#d9912a] py-12 w-[49.8%]">Collaboration With Me</a>
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
              <Link href="/about">
                <a className="bg-[#50b2a2] lg:w-[9.8rem] md:h-[8rem] md:w-[7rem] justify-end text-center flex flex-col">
                  About Sandiip Porwal
                </a>
              </Link>
              <Link href="/ourTeam">
                <a
                  className={
                    'flex flex-col justify-end text-center bg-[#50b28a] lg:w-[9.8rem] md:w-[7rem] md:h-[8rem]'
                  }>
                  Digital Consulting Services
                </a>
              </Link>
            </div>
            <div
              className={
                'flex flex-col bg-[#c85141] lg:w-[21rem] lg:h-[10rem] md:w-[15.4rem] md:h-[7rem] md:mt-8 text-left justify-end'
              }>
              <Link href="resume">
                <a>Services</a>
              </Link>
            </div>
          </div>
          <div
            className={
              'ml-6 bg-[#0fa2cb] lg:w-80 md:w-[15rem] md:h-[17rem] lg:h-[20rem] flex flex-col text-left justify-end'
            }>
            <Link href="ourWorks">
              <a>How Business Consulting Helps?</a>
            </Link>
          </div>
          <div>
            <div className={'ml-6'}>
              <div
                className={
                  'flex flex-col bg-[#d8457a] lg:w-[21rem] md:w-[15.4rem] md:h-[7rem] lg:h-[10rem]  justify-end text-left'
                }>
                <Link href="/contact">
                  <a>Shedule Meeting</a>
                </Link>
              </div>
              <div className={'flex lg:gap-8 lg:mt-8 md:mt-8 md:gap-5'}>
                <Link href="/blog">
                  <a
                    className={
                      'flex flex-col justify-end text-left bg-[#d8733b]      lg:w-[9.5rem] md:w-[7rem] md:h-[8rem]'
                    }>
                    Knowledge Center page with Q&A
                  </a>
                </Link>
                <Link href="/feedback">
                  <a
                    className={
                      'bg-[#d9912a] lg:w-[9.5rem] md:w-[7rem] md:h-[8rem] flex flex-col justify-end text-left'
                    }>
                    Collaboration With Me
                  </a>
                </Link>
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
