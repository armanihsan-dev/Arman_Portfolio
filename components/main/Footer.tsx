import Link from 'next/link';
import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa6';
import Image from 'next/image';
import { Socials } from '@/constants';
import { FaXTwitter } from 'react-icons/fa6';
import { IoLogoInstagram } from 'react-icons/io5';
import { IoLogoGithub } from 'react-icons/io5';
import { li } from 'motion/react-client';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    {
      icon: <FaLinkedinIn />,
      url: 'https://www.linkedin.com/in/arman-ihsan-procodrr-5a790430a/',
    },
    { icon: <FaXTwitter />, url: 'Profile Not found   ' },
    { icon: <IoLogoInstagram />, url: 'https://www.instagram.com/armanihan5/' },
    { icon: <IoLogoGithub />, url: 'https://github.com/armanihsan-dev' },
  ];
  return (
    <div className="w-full h-full z-50  relative bottom-12 bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="text-sm  flex flex-col items-center justify-center gap-5">
        <p>
          Arman Ihsan © <span>{currentYear}</span>. All rights reserved
        </p>
        <div>
          <Image
            src="/name-logo.svg"
            alt="Name Logo"
            width={112}
            height={56}
            className="w-28 h-14"
          />
        </div>
        <div className=" flex items-center justify-center gap-4 ">
          {socialLinks.map((social, index) => {
            return (
              <li key={index} className="list-none">
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  {React.cloneElement(social.icon, {
                    className:
                      'w-6 h-6 text-gray-400 hover:text-white cursor-pointer hover:scale-110 transition-transform',
                  })}
                </a>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
