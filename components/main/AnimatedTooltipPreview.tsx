'use client';
import React from 'react';
import { AnimatedTooltip } from '../ui/animated-tooltip';
const people = [
  {
    id: 1,
    name: 'Mongo-DB',
    designation: '',
    image: '/mongodb.png',
  },
  {
    id: 2,
    name: 'Express.Js',
    designation: '',
    image: '/express.png',
  },
  {
    id: 3,
    name: 'React.js',
    designation: '',
    image: '/react-js-logo.png',
  },
  {
    id: 4,
    name: 'Node.js',
    designation: '',
    image: '/node-js.png',
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center  justify-start mt-3 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
