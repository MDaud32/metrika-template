import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="w-full bg-gray-200">
      {/* logo and social links */}
      <div className="flex flex-col lg:justify-evenly justify-center items-center lg:py-16">
        <div className="text-2xl self-end pb-7 lg:m-4">social media links</div>
        <h1 className="text-4xl lg:text-6xl ">Metrika</h1>
      </div>

      {/* mobile */}
      <div className="flex flex-wrap lg:justify-center text-center pt-12 gap-[1px]">
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
