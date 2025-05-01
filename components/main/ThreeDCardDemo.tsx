'use client';

import React from 'react';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import { FaLocationArrow } from 'react-icons/fa6';
import { AnimatedTooltipPreview } from './AnimatedTooltipPreview';

interface ThreeDCardDemoProps {
  projectName: string;
  description: string;
}

export function ThreeDCardDemo({
  projectName,
  description,
}: ThreeDCardDemoProps) {
  return (
    <CardContainer className="inter-var p-[2px] group  rounded-xl bg-gradient-to-tr from-indigo-950 via-indigo-900 to-white ">
      <CardBody className="bg-blue-950 z-[3]  relative group/card  cursor-pointer dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black d w-fit h-fit rounded-xl p-6   ">
        <CardItem
          translateZ="50"
          className="text-xl font-nunito font-bold  text-white"
        >
          {projectName}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className=" text-sm text-green-300 max-w-sm mt-2 font-poppins"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-10">
          <CardItem
            translateZ={20}
            as="button"
            className="group px-4 py-2 flex w-full items-center gap-2 justify-between  rounded-xl text-white text-xl font-bold"
          >
            <div className="w-fit h-fit flex items-center justify-between  relative right-4 ">
              <AnimatedTooltipPreview />
            </div>
            <div className="flex items-center justify-center gap-1 mt-[6px]">
              <span className="text-sm font-nunito ">Check Live Site</span>
              <FaLocationArrow className="hover-group text-green-400" />
            </div>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
