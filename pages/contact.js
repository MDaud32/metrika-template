import React from 'react';
import SocialMediaIcons from '../components/socialMediaIcons';
import { FiArrowUpCircle } from 'react-icons/fi';
import Link from 'next/link';

const Contact = () => {
  return (
    <div className="w-screen h-screen bg-[#d8457a]">
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
            Contact Us
          </h1>
        </div>
        <div className="self-start ml-[-4rem]">
          <SocialMediaIcons />
        </div>
      </div>

      {/* content */}
      <div className="lg:w-[80%]  w-[80%] mx-auto my-auto flex flex-col justify-center items-center text-left">
        <div className="flex flex-col md:flex-row lg:flex-row text-white text-lg mt-[10rem] gap-12">
          <div>
            <h1>Address</h1>
            <p className="w-[20rem]">
              49 Archdale, 2B Charleston, New York City, USA
            </p>
          </div>
          <div>
            <h1>Phone</h1>
            <p>Support: +777 (100) 1234 (10am - 6pm)</p>
            <p>Director: +777 (100) 1243 (6am - 11pm)</p>
          </div>
          <div>
            <h1>Email</h1>
            <p>Support: support@example.com </p>
            <p>Director: chief@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
