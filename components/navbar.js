import React from 'react';
import Link from 'next/link';
import SocialMediaIcons from './socialMediaIcons';
import { GoBook } from 'react-icons/go';
import { AiOutlineCustomerService } from 'react-icons/ai';
import { ImArrowDown } from 'react-icons/im';
import { IoMdPhotos } from 'react-icons/io';
import { AiOutlineContacts } from 'react-icons/ai';
import { BsPencilFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className="bg-gray-50 h-screen w-full">
      {/* logo and social links */}
      <div className="flex flex-col lg:justify-evenly justify-center items-center lg:pt-10">
        <div className="text-2xl lg:ml-[55rem] pb-7 lg:m-4 lg:self-center md:self-end self-end">
          <SocialMediaIcons />
        </div>
        <h1 className="text-4xl font-light lg:text-6xl lg:ml-[-52rem] lg:mt-[-7rem]">
          Metrika
        </h1>
      </div>

      {/* mobile */}
      <div className="flex flex-wrap px-1 lg:justify-center lg:hidden md:hidden text-center pt-8 gap-[4px] h-screen">
        <Link href="/about">
          <a className="flex flex-col justify-end text-left bg-[#50b2a2] h-[10rem] w-[49.3%] ">
            <div className={'flex flex-col gap-6 '}>
              <GoBook size={'60'} color={'white'} className={'mx-auto'} />
              <p className={'px-2 lg:font-semibold md:font-normal  text-white'}>
                About sandip porwal
              </p>
            </div>
          </a>
        </Link>
        <Link href="/consultingServices">
          <a className="flex flex-col justify-end text-left bg-[#50b28a] h-[10rem] w-[49.3%] ">
            <div className={'flex flex-col gap-6 '}>
              <AiOutlineCustomerService
                size={'60'}
                className={'mx-auto text-white'}
              />
              <p className={'px-2 lg:font-semibold md:font-normal text-white'}>
                Digital Consulting Services
              </p>
            </div>
          </a>
        </Link>
        <Link href="/services">
          <a className="flex flex-col justify-end text-left bg-[#c85141] h-[10rem] w-full text-gray-300">
            <div className={'flex flex-col gap-3 '}>
              <ImArrowDown size={'70'} color={'white'} className={'mx-auto'} />
              <p className={'px-2 text-2xl text-white'}>Services</p>
            </div>
          </a>
        </Link>
        <Link href="/businessHelp">
          <a className="flex flex-col justify-end text-left bg-[#0fa2cb] h-[16rem] w-full">
            <div className={'flex flex-col gap-16 '}>
              <IoMdPhotos size={'90'} color={'white'} className={'mx-auto'} />
              <p className={'px-2 text-2xl text-white'}>
                How Business Consulting Helps
              </p>
            </div>
          </a>
        </Link>
        <Link href="/contact">
          <a className="flex flex-col justify-end text-left bg-[#d8457a] h-[10rem] w-full">
            <div className={'flex flex-col gap-3 '}>
              <AiOutlineContacts
                size={'80'}
                color={'white'}
                className={'mx-auto'}
              />
              <p className={'px-2 text-2xl text-white'}>Shedule Meeting</p>
            </div>
          </a>
        </Link>
        <Link href="/knowledgeCenter">
          <a className="flex flex-col justify-end text-left bg-[#d8733b] h-[11rem] w-[49.3%]">
            <div className={'flex flex-col gap-6 '}>
              <BsPencilFill size={'60'} color={'white'} className={'mx-auto'} />
              <p
                className={
                  'px-2 text-lg lg:font-semibold md:font-normal text-white'
                }>
                Knowledge Center
              </p>
            </div>
          </a>
        </Link>
        <Link href="/collaboration">
          <a className="flex flex-col justify-end text-left bg-[#d9912a] h-[11rem] w-[49.3%]">
            <div className={'flex flex-col gap-6 '}>
              <AiOutlineMail
                size={'60'}
                color={'white'}
                className={'mx-auto'}
              />
              <p className={'px-2 lg:font-semibold md:font-normal text-white'}>
                Collaborate With Me
              </p>
            </div>
          </a>
        </Link>
      </div>

      {/* DeskTop */}

      <div
        className={
          'p-10 hidden lg:flex md:flex justify-center items-center lg:mx-auto lg:mt-[4rem] md:w-screen'
        }>
        <div className={'flex'}>
          <div className={'flex flex-col justify-center'}>
            <div className={'flex lg:gap-6 md:gap-5'}>
              <Link href="/about">
                <a>
                  <div
                    className={
                      'bg-[#50b2a2] lg:w-[9.5rem] flex flex-col justify-end md:h-[9.5rem] md:w-[7rem] hover:cursor-pointer hover:bg-gray-900'
                    }>
                    <div className={'flex flex-col gap-2 '}>
                      <GoBook
                        size={'60'}
                        color={'white'}
                        className={'mx-auto'}
                      />
                      <p
                        className={
                          'px-2 lg:font-semibold md:font-normal text-white'
                        }>
                        About sandip porwal
                      </p>
                    </div>
                  </div>
                </a>
              </Link>
              <Link href="/consultingServices">
                <a>
                  <div
                    className={
                      'bg-[#50b28a] lg:w-[9.5rem] flex flex-col justify-end md:h-[9.5rem] md:w-[7rem] hover:cursor-pointer hover:bg-gray-900'
                    }>
                    <div className={'flex flex-col gap-2 '}>
                      <AiOutlineCustomerService
                        size={'60'}
                        color={'white'}
                        className={'mx-auto'}
                      />
                      <p
                        className={
                          'px-2 lg:font-semibold md:font-normal text-white '
                        }>
                        Digital Consulting Services
                      </p>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div
              className={
                'flex flex-col bg-[#c85141] lg:w-[20.5rem] lg:h-[10rem] md:w-[15.4rem] md:h-[7rem] md:mt-8 text-left justify-end hover:bg-gray-900'
              }>
              <Link href="/services">
                <a>
                  <div className={'flex flex-col md:gap-1 lg:gap-6 '}>
                    <ImArrowDown
                      size={'60'}
                      color={'white'}
                      className={'mx-auto'}
                    />
                    <p className={'px-2  text-xl md:font-normal text-white '}>
                      Services
                    </p>
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div
            className={
              'ml-6 bg-[#0fa2cb] lg:w-80 md:w-[18rem] md:h-[19rem] lg:h-[21.5rem] flex flex-col text-left justify-end hover:bg-gray-900'
            }>
            <Link href="/businessHelp">
              <a>
                <div className={'flex flex-col gap-20 '}>
                  <IoMdPhotos
                    size={'90'}
                    color={'white'}
                    className={'mx-auto'}
                  />
                  <p className={'px-2 text-3xl md:font-normal text-white '}>
                    How Business Consulting Helps?
                  </p>
                </div>
              </a>
            </Link>
          </div>
          <div>
            <div className={'ml-6'}>
              <div
                className={
                  'flex flex-col bg-[#c8457a] lg:w-[20.5rem] lg:h-[10rem] md:w-[15.4rem] md:h-[7rem]  text-left justify-end hover:bg-gray-900'
                }>
                <Link href="/contact">
                  <a>
                    <div className={'flex flex-col md:gap-1 lg:gap-6 '}>
                      <AiOutlineContacts
                        size={'70'}
                        color={'white'}
                        className={'mx-auto md:pt-2'}
                      />
                      <p className={'px-2  text-xl md:font-normal text-white '}>
                        Shedule Meeting
                      </p>
                    </div>
                  </a>
                </Link>
              </div>
              <div className={'flex lg:gap-6 lg:mt-8 md:mt-8 md:gap-5'}>
                <Link href="/knowledgeCenter">
                  <a>
                    <div
                      className={
                        'bg-[#d8733b] lg:w-[9.5rem] flex flex-col justify-end md:h-[9.5rem] md:w-[7rem] hover:cursor-pointer hover:bg-gray-900'
                      }>
                      <div className={'flex flex-col lg:gap-6 md:gap-1 '}>
                        <BsPencilFill
                          size={'60'}
                          color={'white'}
                          className={'mx-auto'}
                        />
                        <p
                          className={
                            'px-2 lg:font-semibold md:font-normal text-white'
                          }>
                          Knowledge Center
                        </p>
                      </div>
                    </div>
                  </a>
                </Link>
                <Link href="/collaboration">
                  <a>
                    <div
                      className={
                        'bg-[#d9912a] lg:w-[9.5rem] flex flex-col justify-end md:h-[9.5rem] md:w-[7rem] hover:cursor-pointer hover:bg-gray-900'
                      }>
                      <div className={'flex flex-col gap-2 '}>
                        <AiOutlineMail
                          size={'60'}
                          color={'white'}
                          className={'mx-auto'}
                        />
                        <p
                          className={
                            'px-2 lg:font-semibold md:font-normal text-white'
                          }>
                          Collaboration With Me
                        </p>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
