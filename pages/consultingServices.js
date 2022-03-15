import React from 'react';
import Link from 'next/link';
import SocialMediaIcons from '../components/socialMediaIcons';
import { FiArrowUpCircle } from 'react-icons/fi';
import Image from 'next/image';

const OurTeam = () => {
  return (
    <div>
      <div className="w-screena bg-[#50b2a2]">
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
            <h1 className="lg:text-6xl md:text-6xl text-4xl text-white lg:w-[10rem]">
              Digital Consulting Services
            </h1>
          </div>
          <div className="self-start ml-[-3rem]">
            <SocialMediaIcons />
          </div>
        </div>

        {/* content */}
        <div className="w-screen">
          <section className="flex flex-row text-center justify-center pt-20 lg:pt-[30px] pb-10 lg:pb-20 ">
            <div className="container">
              <div className="flex flex-wrap justify-center items-center">
                <div className="w-full md:w-1/2 xl:w-1/3 px-4">
                  <div className="bg-white rounded-lg overflow-hidden mb-10">
                    <Image
                      src="/first.jpg"
                      alt="image"
                      className="w-full"
                      width={450}
                      height={300}
                    />
                    <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                      <h3>
                        <Link href="/">
                          <a
                            className="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        ">
                            50+ Best creative website themes & templates
                          </a>
                        </Link>
                      </h3>
                      <p className="text-base text-body-color leading-relaxed mb-7">
                        Lorem ipsum dolor sit amet pretium consectetur
                        adipiscing elit. Lorem consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-1/2 xl:w-1/3 px-4">
                  <div className="bg-white rounded-lg overflow-hidden mb-10">
                    <Image
                      src="/second.jpg"
                      alt="image"
                      className="w-full"
                      width={450}
                      height={300}
                    />
                    <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                      <h3>
                        <Link href="/">
                          <a
                            className="
                          font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        ">
                            The ultimate UX and UI guide to card design
                          </a>
                        </Link>
                      </h3>
                      <p className="text-base text-body-color leading-relaxed mb-7">
                        Lorem ipsum dolor sit amet pretium consectetur
                        adipiscing elit. Lorem consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-1/2 xl:w-1/3 px-4">
                  <div className="bg-white rounded-lg overflow-hidden mb-10">
                    <Image
                      src="/third.jpg"
                      alt="image"
                      className="w-full"
                      width={450}
                      height={300}
                    />
                    <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                      <h3>
                        <Link href="/">
                          <a
                            className="
                          font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        ">
                            The ultimate UX and UI guide to card design
                          </a>
                        </Link>
                      </h3>
                      <p className="text-base text-body-color leading-relaxed mb-7">
                        Lorem ipsum dolor sit amet pretium consectetur
                        adipiscing elit. Lorem consectetur adipiscing elit.
                      </p>
                    </div>
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

export default OurTeam;
