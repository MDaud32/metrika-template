import React from 'react';
import Link from 'next/link';
import SocialMediaIcons from '../components/socialMediaIcons';
import { FiArrowUpCircle } from 'react-icons/fi';
import Image from 'next/image';

const OurTeam = () => {
  return (
    <div>
      <div className="w-screena lg:h-screen bg-[#50b28a]">
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

        {/* content */}
        <div className="p-4 xl:w-[60%] lg:w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {/* card 1 */}

          {/* card 2 */}

          {/* card 3 */}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
