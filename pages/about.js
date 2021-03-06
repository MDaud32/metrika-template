import React from 'react';
import SocialMediaIcons from '../components/socialMediaIcons';
import { AiFillSignal } from 'react-icons/ai';
import Link from 'next/link';
import PageChange from '../components/pageChange';

const About = () => {
  return (
    // {/* logo arrowicon social media icon */}
    // {/* <div className="flex lg:w-[80%] p-6 mx-auto flex-row justify-between items-center text-center py-12"></div> */}

    // {/* content */}
    <div className=" flex flex-col lg:flex-row ">
      <div className="lg:w-1/2 lg:h-screen text-black bg-gray-400 p-10">
        <div className="flex flex-row gap-1 lg:gap-[3rem] justify-center items-center ">
          <div className="lg:text-3xl text-3xl lg:mr-[-10rem] lg:ml-[2rem] text-white justify-end mt-1">
            <Link href="/">
              <a>
                <PageChange target={'/consultingServices'} />
              </a>
            </Link>
          </div>
          <h1 className="lg:text-3xl text-3xl text-center font-light justify-center md:text-left text-white lg:mx-auto whitespace-nowrap">
            SANDIIP PORWAL
          </h1>
        </div>
        <p className="lg:text-5xl text-3xl md:justify-center font-light lg:justify-center lg:my-44 my-14 lg:ml-24  lg:w-[24rem] flex md:text-left text-center ml-6mx-auto">
          About Degital Marketing Expert
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
      <div className="flex lg:h-screen h-1/2 w-[100%] lg:px-8 px-6 lg:mt-0 mt-[1rem] justify-start bg-white lg:w-1/2 flex-col md:flex-col lg:flex-col text-2xl gap-8">
        <div className="self-end lg:my-6 ">
          <SocialMediaIcons />
        </div>
        <p className="">
          <span className="lg:text-[1.8rem] text-2xl font-semibold">
            About Sandiip Porwal Digital Marketing Consultancy
          </span>
          <br /> <br />
          The mission is simple and clear. To demystify & simplify the digital
          marketing to help our clients scale their business with digital
          branding, content marketing, digital design and tech expertise that
          ensure last mile delivery. Essentially we help businesses increase
          awareness, and revenue by utilizing our digital marketing expertise
          and a team that has a clear sight of our clients business goals.
        </p>
        <div className="mx-auto">
          <button className="px-6 py-4 bg-yellow-500 mt-[3rem] mb-[2rem] rounded-md text-xl font-semibold cursor-pointer">
            Know more about Sandiip Porwal
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
