import React from 'react';
import Link from 'next/link';
import SocialMediaIcons from '../components/socialMediaIcons';
import { FiArrowUpCircle } from 'react-icons/fi';

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
                  <FiArrowUpCircle />
                </a>
              </Link>
            </div>
            <h1 className="lg:text-6xl md:text-6xl text-left text-4xl text-white">
              SANDIIP PORWAL
            </h1>
          </div>
          <div className="self-start ml-[-13rem]">
            <SocialMediaIcons />
          </div>
        </div>

        {/* content */}
        <div className="p-4  mx-auto grid">
          <section className="text-gray-800">
            <div className="container mx-auto flex flex-col p-6">
              <h2 className="py-4 text-5xl text-gray-100 font-bold text-center">
                How Digital Marketing Consulting Helps Your Business?
              </h2>
              <div className="text-2xl text-white w-[70%] mx-auto my-8">
                Sandiip Porwal is a Digital Marketing Branding expert is the
                business of providing business critical digital marketing
                solutions to drive influence and increase market share. My
                clients are Entrepreneurs, Small and Mid-Size Business,
                Corporates and Traditional and Digital Marketing Agencies who
                are short on capacity. The mission, since inception, is to serve
                quality with an unparalleled level of service. The Digital
                Marketing Success Process
              </div>
              <div className="divide-y divide-coolGray-700">
                <div className="grid justify-center  p-8 mx-auto space-y-8 lg:space-y-0">
                  <div className="flex flex-col justify-center max-w-3xl text-center mx-auto">
                    <span className="text-xl font-bold md:text-2xl">
                      1. RESEARCH Business,Competition, Catalysts
                    </span>
                  </div>
                </div>
                <div className="grid justify-center  p-8 mx-auto space-y-8 lg:space-y-0">
                  <div className="flex items-center justify-center lg:col-span-1 col-span-full"></div>
                  <div className="flex flex-col justify-center max-w-3xl text-center">
                    <span className="text-xl font-bold md:text-2xl">
                      2. DEVELOP Strategy, Solutions & Plan Explicabo eaque
                    </span>
                  </div>
                </div>
                <div className="grid justify-center  p-8 mx-auto space-y-8 lg:space-y-0">
                  <div className="flex items-center justify-center lg:col-span-1 col-span-full"></div>
                  <div className="flex flex-col justify-center max-w-3xl text-center">
                    <span className="text-xl font-bold md:text-2xl">
                      3. DEPLOY Digital Strategy and Monitor
                    </span>
                  </div>
                </div>
                <div className="grid justify-center  p-8 mx-auto space-y-8 lg:space-y-0">
                  <div className="flex items-center justify-center lg:col-span-1 col-span-full"></div>
                  <div className="flex flex-col justify-center max-w-3xl text-center">
                    <span className="text-xl font-bold md:text-2xl">
                      4. ANALYSE, Interpret, and Deploy Optimisations
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BusinessHelp;
