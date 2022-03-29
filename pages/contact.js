import React from 'react';
import SocialMediaIcons from '../components/socialMediaIcons';
import { AiFillSignal } from 'react-icons/ai';
import Link from 'next/link';
import PageChange from '../components/pageChange';

const Contact = () => {
  return (
    <div className=" flex flex-col lg:flex-row ">
      <div className="lg:w-1/2 lg:h-screen text-black bg-gray-400 p-10">
        <div className="flex flex-row gap-1 lg:gap-[3rem] justify-center items-center ">
          <div className="lg:text-3xl text-3xl lg:mr-[-10.4rem] lg:ml-[2rem] text-white justify-end mt-1">
            <Link href="/">
              <a>
                <PageChange target={'/knowledgeCenter'} />
              </a>
            </Link>
          </div>
          <h1 className="lg:text-3xl text-3xl text-center font-light justify-center md:text-left text-white lg:mx-auto whitespace-nowrap">
            SANDIIP PORWAL
          </h1>
        </div>
        {/* <p className="lg:text-4xl text-3xl md:justify-center lg:justify-center font-semibold lg:my-44 my-14 lg:ml-16  lg:w-[24rem] flex md:text-left text-center ml-6mx-auto">
          About Degital Marketing Expert
        </p> */}
        <div className="flex flex-col justify-center mx-auto lg:mt-28 mt-10 lg:mb-12 lg:w-[25rem] text-left">
          <p className="lg:text-4xl text-3xl font-light">
            Want to Grow your Business with better Digital Marketing Results.
          </p>
          <button className="px-6 py-4 bg-yellow-500 my-8 rounded-md text-xl font-semibold cursor-pointer underline">
            We Will Help Your Get There.
          </button>
        </div>
        <div>
          <AiFillSignal size={80} color={'black'} className={'mx-auto'} />
        </div>
      </div>
      {/* <div className="justify-end self-end text-right">
          <p className="lg:mt-[-4rem] mt-[-3rem]  border-t-2 text-gray-300">
            Mark Nikson, General director
          </p>
        </div> */}
      <div className="lg:w-1/2 w-[90%] mx-auto my-auto flex flex-col justify-center items-center text-left pb-8">
        <div className="self-end">
          <SocialMediaIcons />
        </div>
        <div className=" lg:my-6 my-4 text-center">
          <p className="text-4xl">Schedule Appointment</p>
        </div>
        {/* <div className="justify-end self-end text-right">
          <p className="lg:mt-[-4rem] mt-[-3rem]  border-t-2 text-gray-300">
            Mark Nikson, General director
          </p>
        </div> */}
        <div className="flex w-[80%] flex-col md:flex-row lg:flex-row text-lg lg:text-lg lg:mt-2 mt-2">
          <p>
            Whether it is slow revenue or you are unsure where to start with
            digital marketing or how to re-energise your digital marketing?
            <br />
            <br />
            Whatever your requirements or budget, our talented team of digital
            experts at Sandiip Porwal Digital Marketing Consultancy is here and
            ready to help you.
            <br />
            <br />
            We offer a first free consultation followed by a brainstorming
            session pre-signup for a fee and then once you sign up for our
            digital marketing services you have with you a performance-driven
            digital agency as marketing partner.
            <br />
            Schedule an appointment and lets take your business to the next
            level!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
