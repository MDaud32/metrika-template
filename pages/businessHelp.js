import React from 'react';
import Link from 'next/link';
import SocialMediaIcons from '../components/socialMediaIcons';
import { FiArrowUpCircle } from 'react-icons/fi';
import Image from 'next/image';

const BusinessHelp = () => {
  return (
    <div>
      <div className="w-screena bg-[#50b28a]">
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
            <h1 className="lg:text-6xl md:text-6xl text-left text-4xl text-white lg:w-[30rem] w-[20rem]">
              How Business Consulting Helps?
            </h1>
          </div>
          <div className="self-start ml-[-13rem]">
            <SocialMediaIcons />
          </div>
        </div>

        {/* content */}
        <div className="p-4 xl:w-[60%] lg:w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {/* card 1 */}
          <div className="rounded overflow-hidden shadow-lg bg-white">
            <Image
              className="w-full "
              src="/first.jpg"
              alt="Mountain"
              width={400}
              height={250}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Mountain</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia
              </p>
            </div>
          </div>
          {/* card 2 */}
          <div className="rounded overflow-hidden shadow-lg bg-white">
            <Image
              className="w-full"
              src="/second.jpg"
              alt="River"
              width={400}
              height={250}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">River</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia
              </p>
            </div>
          </div>

          {/* card 3 */}
          <div className="rounded overflow-hidden shadow-lg bg-white">
            <Image
              className="w-full"
              src="/third.jpg"
              alt="Forest"
              width={400}
              height={250}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Forest</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia
              </p>
            </div>
          </div>
          <div className="rounded overflow-hidden shadow-lg bg-white">
            <Image
              className="w-full"
              src="/third.jpg"
              alt="Forest"
              width={400}
              height={250}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Forest</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia
              </p>
            </div>
          </div>
          <div className="rounded overflow-hidden shadow-lg bg-white">
            <Image
              className="w-full"
              src="/third.jpg"
              alt="Forest"
              width={400}
              height={250}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Forest</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia
              </p>
            </div>
          </div>
          <div className="rounded overflow-hidden shadow-lg bg-white">
            <Image
              className="w-full"
              src="/third.jpg"
              alt="Forest"
              width={400}
              height={250}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Forest</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessHelp;
