'use client';
import React from 'react';
import { AnimatedTooltip } from '../ui/animated-tooltip';
const people = [
  {
    id: 1,
    name: 'Mongo-DB',
    designation: 'Database',
    image: '/mongodb.png',
  },
  {
    id: 2,
    name: 'Express.Js',
    designation: 'Node.js Framework',
    image: '/express.png',
  },
  {
    id: 3,
    name: 'React.js',
    designation: 'Js Front-End Library',
    image: '/react.png',
  },
  {
    id: 4,
    name: 'Node.js',
    designation: 'Js Runtime environment',
    image: '/node-js.png',
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-start mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
