import { Socials } from '@/constants';
import Image from 'next/image';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <div className="w-full h-[65px]  flex flex-wrap items-center justify-between px-4 md:px-10 lg:px-20 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md fixed top-0 z-50">
      <a href="#about-me" className="flex items-center">
        <Image
          src="/name-logo.svg"
          alt="logo"
          width={50}
          height={50}
          className="cursor-pointer hover:animate-slow-spin"
        />
      </a>

      <div className=" md:flex items-center justify-center ml-0 md:ml-10">
        <div
          id="navLinks"
          className="flex gap-5  text-[10px] font-['Poppins'] lg:text-[16px] bg-[#0300145e] border border-[#7042f861] px-4 py-2 rounded-full text-gray-200"
        >
          <a href="#about-me" className="cursor-pointer">
            About
          </a>
          <a href="#skills" className="cursor-pointer">
            Skills
          </a>
          <a href="#projects" className="cursor-pointer">
            Projects
          </a>
          <a href="#testimonials" className="cursor-pointer">
            Testimonials
          </a>
        </div>
      </div>

      <div className="flex gap-5 mt-2 md:mt-0">
        <a
          href="https://wa.me/923400197355?text=Hi,How are you? I am from your portfolio."
          target="_blank"
        >
          <FaWhatsapp className="text-gray-300 hover:text-white transition cursor-pointer w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
