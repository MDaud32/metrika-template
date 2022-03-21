import React, { useRef, useState } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';

const KnowledgeCenter = () => {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <div className="w-[500px]">
        {data.map((item, i) => (
          <div key={i} className="bg-[#f0ebe1] mb-3 py-3 px-20">
            <div
              className="text-black flex justify-between items-center"
              onClick={() => toggle(i)}>
              <h1>{item.question}</h1>
              <span>{selected === i ? '-' : '+'}</span>
            </div>
            <div className="max-h-0 overflow-hidden">{item.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const data = [
  {
    question: 'Question 1',
    answer:
      'loreml   flsfdkjsalkjfdsdf salsf slajfdlsjdfljsadlkfjsldfj lskdjf l kls jdfjsljfls',
  },
  {
    question: 'Question 2',
    answer:
      'loreml   flsfdkjsalkjfdsdf salsf slajfdlsjdfljsadlkfjsldfj lskdjf l kls jdfjsljfls',
  },
  {
    question: 'Question 3',
    answer:
      'loreml   flsfdkjsalkjfdsdf salsf slajfdlsjdfljsadlkfjsldfj lskdjf l kls jdfjsljfls',
  },
  {
    question: 'Question 4',
    answer:
      'loreml   flsfdkjsalkjfdsdf salsf slajfdlsjdfljsadlkfjsldfj lskdjf l kls jdfjsljfls',
  },
  {
    question: 'Question 5',
    answer:
      'loreml   flsfdkjsalkjfdsdf salsf slajfdlsjdfljsadlkfjsldfj lskdjf l kls jdfjsljfls',
  },
  {
    question: 'Question 6',
    answer:
      'loreml   flsfdkjsalkjfdsdf salsf slajfdlsjdfljsadlkfjsldfj lskdjf l kls jdfjsljfls',
  },
];

export default KnowledgeCenter;
