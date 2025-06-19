'use client';

import React from 'react';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import { FaLocationArrow } from 'react-icons/fa6';
import { AnimatedTooltipPreview } from './AnimatedTooltipPreview';
import { cn } from '@/lib/utils';

interface ThreeDCardDemoProps {
  projectName: string;
  description: string;
  imageSrc: string;
  people: any;
  projectUrl: string;
}

export function ThreeDCardDemo({
  projectName,
  description,
  imageSrc,
  people,
  projectUrl,
}: ThreeDCardDemoProps) {
  return (
    <CardContainer
      className={cn(
        'inter-var group perspective-[1000px] w-[24rem] font-nunito  h-[31rem]'
      )}
    >
      <CardBody className="relative group/card bg-gradient-to-br group from-slate-950 via-slate-900 to-indigo-950 w-full h-full  rounded-2xl p-3 border border-slate-700/30 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-700 overflow-hidden backdrop-blur-sm">
        {/* Animated background gradient */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-purple-500/10 via-blue-500/5 to-emerald-500/10" />

        {/* Shimmer effect */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover/card:opacity-100 transition-all duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/card:translate-x-full"
          style={{ animation: 'shimmer 2s ease-in-out infinite' }}
        />

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          <div className="absolute top-6 left-6 w-2 h-2 bg-purple-400/40 rounded-full animate-pulse" />
          <div className="absolute top-16 right-8 w-1 h-1 bg-emerald-400/50 rounded-full animate-ping" />
          <div className="absolute bottom-20 left-12 w-1.5 h-1.5 bg-blue-400/40 rounded-full animate-bounce" />
          <div className="absolute bottom-32 right-16 w-1 h-1 bg-purple-300/30 rounded-full animate-pulse delay-1000" />
        </div>

        {/* Enhanced title with better gradient */}
        <CardItem
          translateZ="60"
          className="text-3xl font-bold bg-gradient-to-r from-white via-gray-100 to-purple-200 bg-clip-text text-transparent  tracking-tight leading-tight"
        >
          {projectName}
        </CardItem>

        {/* Enhanced description with improved typography */}
        <CardItem
          as="p"
          translateZ="70"
          className="text-base text-slate-300/90 max-w-sm mt-4  leading-relaxed tracking-wide"
        >
          {description}
        </CardItem>

        {/* Enhanced image with advanced effects */}
        <CardItem
          translateZ="120"
          className="w-full mt-6 overflow-hidden rounded-xl border border-slate-600/20 shadow-xl shadow-black/30"
        >
          <div className="relative h-56 w-full overflow-hidden group/image">
            <img
              src={imageSrc}
              className="h-full w-full object-cover transition-all duration-700 group-hover/card:scale-110 group-hover/image:brightness-110 filter group-hover/card:saturate-110"
              alt="project thumbnail"
            />
            {/* Multi-layer overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-emerald-500/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-indigo-500/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />

            {/* Hover indicator with pulsing effect */}
            <div className="absolute top-4 right-4 opacity-0 group-hover/card:opacity-100 transition-all duration-300 transform translate-y-2 group-hover/card:translate-y-0">
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse shadow-lg shadow-purple-400/50" />
            </div>

            {/* Corner accent lines */}
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-emerald-400/30 opacity-0 group-hover/card:opacity-100 transition-all duration-500 delay-200" />
            <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-purple-400/30 opacity-0 group-hover/card:opacity-100 transition-all duration-500 delay-300" />
          </div>
        </CardItem>

        {/* Enhanced action section with better layout */}
        <div className="flex justify-between items-center mt-8 ">
          <CardItem translateZ={50} as="div" className="w-full">
            <div className="flex items-center justify-between">
              {/* Team avatars with improved styling */}

              <div className="w-fit h-fit flex items-center justify-between relative">
                <AnimatedTooltipPreview people={people} />
              </div>

              <div className="flex items-center justify-center gap-2">
                <span className="text-sm font-nunito text-white">
                  Check Live Site
                </span>
                <a href={projectUrl}>
                  <FaLocationArrow className="text-emerald-300 group-hover:text-2xl group-hover:text-green-400 transition-all" />
                </a>
              </div>
            </div>
          </CardItem>
        </div>

        {/* Enhanced corner accents with animated gradients */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-purple-500/15 via-purple-400/5 to-transparent rounded-2xl opacity-60 group-hover/card:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-emerald-500/15 via-emerald-400/5 to-transparent rounded-2xl opacity-60 group-hover/card:opacity-100 transition-opacity duration-700" />

        {/* Additional corner details */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400/40 rounded-full opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 delay-200" />
        <div className="absolute bottom-4 left-4 w-2 h-2 bg-emerald-400/40 rounded-full opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 delay-300" />
      </CardBody>
    </CardContainer>
  );
}
