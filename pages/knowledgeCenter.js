import React, { useState } from 'react';
import Link from 'next/link';
import { FiArrowUpCircle } from 'react-icons/fi';
import SocialMediaIcons from '../components/socialMediaIcons';

const KnowledgeCenter = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="bg-[#d8733b]">
      <div className="flex lg:w-[80%] p-6 mx-auto flex-row justify-between items-center text-center py-12">
        <div className=" flex lg:flex-row flex-col gap-7 items-center">
          <div className="lg:text-4xl text-5xl text-white mt-2 self-start">
            <Link href="/">
              <a>
                <FiArrowUpCircle className="" />
              </a>
            </Link>
          </div>
          <h1 className="lg:text-6xl md:text-6xl text-4xl text-white whitespace-nowrap">
            SANDIIP PORWAL
          </h1>
        </div>
        <div className="self-start ml-[-12rem]">
          <SocialMediaIcons />
        </div>
      </div>

      <div className="flex text-center justify-center text-white lg:text-5xl md:text-6xl text-4xl font-semibold lg:mb-[-4rem] mb-[-3rem] md:mb-[-9rem] md:mt-[4rem] mt-[3rem]  ">
        Knowledge Center
      </div>

      <div className="flex h-screen w-screen justify-center items-center">
        <div className="lg:w-[600px] md:w-[600px] w-[90%] ">
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
