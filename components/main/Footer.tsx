import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa6';
import Image from 'next/image';

import { FaXTwitter } from 'react-icons/fa6';
import { IoLogoInstagram } from 'react-icons/io5';
import { IoLogoGithub } from 'react-icons/io5';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    {
      icon: <FaLinkedinIn />,
      url: 'https://www.linkedin.com/in/arman-ihsan-procodrr-5a790430a/',
    },
    { icon: <IoLogoInstagram />, url: 'https://www.instagram.com/armanihan5/' },
    { icon: <IoLogoGithub />, url: 'https://github.com/armanihsan-dev' },
  ];
  return (
    <div
      id="footer"
      className="text-sm relative  lg:bottom-8 font-['Nunito'] flex flex-col text-white/80 items-center justify-center gap-5 py-6"
    >
      <div className="top-text text-center ">
        <h1 className="colorful-text">
          Ready to take your digital presence to the next level ?
        </h1>
        <p className="text-[12px] lg:text-lg ">
          Reach out me today and let's discuss how i can help you achieve you
          goals.
        </p>
      </div>
      <div className=" flex flex-col lg:flex-row w-full items-center   justify-between gap-6 px-[4rem]">
        <div className="flex items-center justify-between ">
          {' '}
          <Image
            src="/name-logo.svg"
            alt="Name Logo"
            width={112}
            height={56}
            className="w-28 h-14 "
          />
          <p className="text-[8px] lg:text-[14px] w-full text-justify">
            Arman Ihsan © <span>{currentYear}</span>. All rights reserved
          </p>
        </div>
        <div className="flex gap-4 lg:pr-7">
          {' '}
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
