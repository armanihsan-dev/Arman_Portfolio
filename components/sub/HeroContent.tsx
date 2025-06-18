'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { HoverBorder } from '../main/HoverBorder';
import { ShimmerButton } from '../magicui/shimmer-button';
import { AnimatedTooltipPreview } from '../main/AnimatedTooltipPreview';

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-6 lg:px-20 mt-36 w-full z-[20] "
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start ">
        <motion.div
          variants={slideInFromTop}
          className="flex items-center justify-start "
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Arman Ihsan khan</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 font-poppins  relative  text-justify lg:text-4xl font-bold text-white max-w-[600px] w-full h-auto"
        >
          <span>
            Focused on
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {' '}
              building projects
            </span>
            <span className="ml-2">that stand out and perform</span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className=" text-[12px] text-justify lg:text-[14px] text-gray-400 my-5 max-w-[600px] font-nunito"
        >
          Hi , I&apos;m React developer and aspiring full stack MERN developer,
          focused on building responsive and dynamic web apps.
        </motion.p>
        {/* <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-spointer rounded-lg max-w-[200px]"
        > */}
        <a href="#contact-form">
          <div className="relative p-1 rounded-full  ">
            <ShimmerButton
              className="relative z-10 rounded-full bg-black animate-spin-slow shimmer-border "
              shimmerColor="#e5e5e5"
            >
              Let's Connect
            </ShimmerButton>
          </div>
        </a>

        {/* </motion.a> */}
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
