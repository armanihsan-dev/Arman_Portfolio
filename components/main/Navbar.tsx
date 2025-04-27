import { Socials } from '@/constants';
import Image from 'next/image';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa6';

const Navbar = () => {
  const shadow =
    'shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md';
  return (
    <div className=" w-full h-[65px] fixed  flex  items-center justify-between   top-0  z-50 px-20  shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md">
      <a href="#about-me" className="h-auto w-auto flex flex-row items-center">
        <Image
          src="/name-logo.svg"
          alt="logo"
          width={70}
          height={70}
          className="cursor-pointer hover:animate-slowspin"
        />
      </a>

      <div className="w-fit h-fit flex items-center justify-center ml-20 ">
        <div className="w-[500px] h-full flex flex-row items-center  justify-center md:mr-20">
          <div className="flex items-center justify-between w-full h-auto  border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-5">
        <a
          href="https://wa.me/923400197355?text=Hi,How are you? I am from your portfolio."
          target="_blank"
        >
          <FaWhatsapp className="text-gray-400 hover:text-white transition cursor-pointer w-7 h-7" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
