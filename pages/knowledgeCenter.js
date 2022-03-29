import React, { useState } from 'react';
import Link from 'next/link';
import { AiFillSignal } from 'react-icons/ai';
import SocialMediaIcons from '../components/socialMediaIcons';
import PageChange from '../components/pageChange';

const KnowledgeCenter = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className=" flex flex-col lg:flex-row ">
      <div className="lg:w-1/2 lg:h-screen text-black bg-gray-400 p-10">
        <div className="flex flex-row gap-1 lg:gap-[3rem] justify-center items-center ">
          <div className="lg:text-3xl text-3xl lg:mr-[-10rem] lg:ml-[2rem] text-white justify-end mt-1">
            <Link href="/">
              <a>
                <PageChange target={'/collaboration'} />
              </a>
            </Link>
          </div>
          <h1 className="lg:text-3xl text-3xl text-center font-light justify-center md:text-left text-white lg:mx-auto whitespace-nowrap">
            SANDIIP PORWAL
          </h1>
        </div>
        <p className="lg:text-5xl text-3xl md:justify-center lg:justify-center font-light lg:my-32 my-14 lg:ml-24  lg:w-[24rem] flex md:text-left text-center ml-6mx-auto">
          Knowledge Center
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
      <div className="flex flex-col lg:w-1/2">
        <div className="flex justify-end">
          <SocialMediaIcons />
        </div>
        <div className="flex flex-col lg:h-screen justify-center items-center">
          <div className=" w-[90%] my-16">
            {data.map((item, i) => (
              <div key={i} className="bg-[#f0ebe1] mb-3 py-3 px-8">
                <div
                  className="text-black flex justify-between items-center cursor-pointer"
                  onClick={() => toggle(i)}>
                  <h1>{item.question}</h1>
                  <span>{selected === i ? '-' : '+'}</span>
                </div>
                <div className={selected === i ? 'content show' : 'content'}>
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    question: 'Watch Videos',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid itaque, ipsam pariatur illo ullam recusandae ad dolor sunt saepe, incidunt aut assumenda, dicta ipsa vero magni quam quaerat quisquam ab!',
  },
  {
    question: 'Manage Your Account And Setting',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid itaque, ipsam pariatur illo ullam recusandae ad dolor sunt saepe, incidunt aut assumenda, dicta ipsa vero magni quam quaerat quisquam ab!',
  },
  {
    question: 'Join and Manage Youtubr Premium',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid itaque, ipsam pariatur illo ullam recusandae ad dolor sunt saepe, incidunt aut assumenda, dicta ipsa vero magni quam quaerat quisquam ab!',
  },
  {
    question: 'Create And Grow Your Channel',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid itaque, ipsam pariatur illo ullam recusandae ad dolor sunt saepe, incidunt aut assumenda, dicta ipsa vero magni quam quaerat quisquam ab!',
  },
  {
    question: 'Monitise With the Youtube Partner Programme',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid itaque, ipsam pariatur illo ullam recusandae ad dolor sunt saepe, incidunt aut assumenda, dicta ipsa vero magni quam quaerat quisquam ab!',
  },
  {
    question: 'Policy, Safety and Copyright',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid itaque, ipsam pariatur illo ullam recusandae ad dolor sunt saepe, incidunt aut assumenda, dicta ipsa vero magni quam quaerat quisquam ab!',
  },
];

export default KnowledgeCenter;
