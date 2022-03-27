import React from 'react';
import Link from 'next/link';
import SocialMediaIcons from '../components/socialMediaIcons';
import PageChange from '../components/pageChange';
import { AiFillSignal } from 'react-icons/ai';

const BusinessHelp = () => {
  return (
    <div className=" flex flex-col lg:flex-row ">
      <div className="lg:w-1/2 lg:h-screen text-black bg-gray-400 p-10">
        <div className="flex flex-row gap-1 lg:gap-[3rem] justify-center items-center ">
          <div className="lg:text-3xl text-3xl lg:mr-[-8.5rem] lg:ml-[2rem] text-white justify-end mt-1">
            <Link href="/">
              <a>
                <PageChange target={'/contact'} />
              </a>
            </Link>
          </div>
          <h1 className="lg:text-3xl text-3xl text-center justify-center md:text-left text-white lg:mx-auto whitespace-nowrap">
            SANDIIP PORWAL
          </h1>
        </div>
        <p className="lg:text-4xl text-3xl md:justify-center lg:justify-center font-semibold lg:my-28 my-14 lg:ml-16  lg:w-[25rem] flex md:text-left text-center ml-6mx-auto">
          How Digital Marketing Consulting Helps Your Business?
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
      <div className="lg:w-1/2 mx-auto grid p-3">
        <div className="flex justify-end">
          <SocialMediaIcons />
        </div>
        <section className="text-gray-800">
          <div className="lg:text-xl md:text-lg text-md lg:w-[90%] md:[70%] w-[95%] mx-auto my-4">
            Sandiip Porwal is a Digital Marketing Branding expert is the
            business of providing business critical digital marketing solutions
            to drive influence and increase market share. My clients are
            Entrepreneurs, Small and Mid-Size Business, Corporates and
            Traditional and Digital Marketing Agencies who are short on
            capacity. The mission, since inception, is to serve quality with an
            unparalleled level of service. The Digital Marketing Success Process
          </div>
          <div className="divide-y divide-coolGray-700">
            <div className="grid justify-center p-4 mx-auto space-y-2 lg:space-y-0">
              <div className="flex flex-col justify-center max-w-3xl text-center mx-auto">
                <span className="text-lg font-semibold">
                  1. RESEARCH Business,Competition, Catalysts
                </span>
              </div>
            </div>
            <div className="grid justify-center p-4 mx-auto space-y-2 lg:space-y-0">
              <div className="flex items-center justify-center lg:col-span-1 col-span-full"></div>
              <div className="flex flex-col justify-center max-w-3xl text-center">
                <span className="text-lg font-semibold">
                  2. DEVELOP Strategy, Solutions & Plan Explicabo eaque
                </span>
              </div>
            </div>
            <div className="grid justify-center p-4 mx-auto space-y-2 lg:space-y-0">
              <div className="flex items-center justify-center lg:col-span-1 col-span-full"></div>
              <div className="flex flex-col justify-center max-w-3xl text-center">
                <span className="text-lg font-semibold">
                  3. DEPLOY Digital Strategy and Monitor
                </span>
              </div>
            </div>
            <div className="grid justify-center p-4 mx-auto space-y-2 lg:space-y-0">
              <div className="flex items-center justify-center lg:col-span-1 col-span-full"></div>
              <div className="flex flex-col justify-center max-w-3xl text-center">
                <span className="text-lg font-semibold">
                  4. ANALYSE, Interpret, and Deploy Optimisations
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BusinessHelp;
