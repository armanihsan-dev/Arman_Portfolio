'use client';
import React from 'react';
import { AnimatedTooltip } from '../ui/animated-tooltip';

export function AnimatedTooltipPreview({ people }: any) {
  return (
    <div className="flex flex-row items-center  justify-start mt-3 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
