import React from 'react';
import { RiFacebookCircleLine } from 'react-icons/ri';
import { TiSocialTwitterCircular } from 'react-icons/ti';
import { TiSocialGooglePlusCircular } from 'react-icons/ti';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { AiOutlineBehance } from 'react-icons/ai';
import Link from 'next/link';

const SocialMediaIcons = () => {
  return (
    <div className="flex flex-row items-center justify-center text-gray-400">
      <Link href="/facebook.com">
        <a className="text-[3rem] hover:text-gray-800">
          <RiFacebookCircleLine />
        </a>
      </Link>
      <Link href="/twitter.com">
        <a className="text-[3.4rem] hover:text-gray-800">
          <TiSocialTwitterCircular />
        </a>
      </Link>
      <Link href="/google.com">
        <a className="text-[3.4rem] hover:text-gray-800">
          <TiSocialGooglePlusCircular />
        </a>
      </Link>
      <Link href="/linkedin.com">
        <a className="text-[3.5rem] hover:text-gray-800">
          <TiSocialLinkedinCircular />
        </a>
      </Link>
      {/* <Link href="/behance.com">
        <a className="text-[3.3rem] hover:text-gray-800">
          <AiOutlineBehance />
        </a>
      </Link> */}
    </div>
  );
};

export default SocialMediaIcons;
