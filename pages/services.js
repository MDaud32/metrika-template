import React from 'react';
import Link from 'next/link';
import SocialMediaIcons from '../components/socialMediaIcons';
import Image from 'next/image';
import PageChange from '../components/pageChange';

const Services = () => {
  return (
    <div>
      <div className="w-screen md:h-screen bg-[#c85141]">
        {/* logo arrowicon social media icon */}
        <div className="flex lg:w-[80%] p-6 mx-auto flex-row justify-between items-center text-center py-12">
          <div className="flex flex-row gap-7 lg:gap-0 justify-center items-center mt-10">
            <div className="lg:text-3xl text-2xl lg:mr-[8rem] lg:ml-[4.5rem] text-white justify-end mt-1">
              <Link href="/">
                <a>
                  <PageChange target={'/businessHelp'} />
                </a>
              </Link>
            </div>
            <h1 className="lg:text-3xl text-3xl text-center justify-center md:text-left text-white lg:mx-auto whitespace-nowrap">
              SANDIIP PORWAL
            </h1>
          </div>
          <div className="self-start ml-[-3rem]">
            <SocialMediaIcons />
          </div>
        </div>

        {/* content */}
        <div className="flex flex-col">
          {/* card 1 */}
          <div className="p-4 xl:w-[60%] lg:w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
