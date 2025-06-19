import React from 'react';
import ProjectCard from '../sub/ProjectCard';
import { ThreeDCardDemo } from './ThreeDCardDemo';
const projectOne = [
  {
    id: 1,
    name: 'React.js',
    designation: '',
    image: '/react-js-logo.png',
  },
  {
    id: 2,
    name: 'JavaScript',
    designation: '',
    image: '/js.png',
  },
  {
    id: 3,
    name: 'Redux-Toolkit',
    designation: '',
    image: '/redux.png',
  },
  {
    id: 4,
    name: 'Tailwind-Css',
    designation: '',
    image: '/tailwind.png',
  },
];
const projectThird = [
  {
    id: 1,
    name: 'React.js',
    designation: '',
    image: '/react-js-logo.png',
  },
  {
    id: 2,
    name: 'TypeScript',
    designation: '',
    image: '/ts.png',
  },
  {
    id: 3,
    name: 'AppWrite',
    designation: '',
    image: '/appwrite.png',
  },
  {
    id: 4,
    name: 'Tailwind-Css',
    designation: '',
    image: '/tailwind.png',
  },
];

const Projects = () => {
  return (
    <div
      className="flex relative  flex-col items-center justify-center lg:py-24 "
      id="projects"
    >
      <h1 className="text-[40px] project-title-text">
        A small selection of recent projects
      </h1>
      <div className="h-full w-full  flex  relative justify-between   bottom-14 flex-col  overflow-hidden">
        <div className="border-r w-[50%] relative mt-11 flex ">
          <figure className="self-start ml-10 ">
            <ThreeDCardDemo
              projectName="Flavoroo"
              description="Browse, customize, and order your favorite pizzas in seconds ."
              imageSrc="/flavoroo.png"
              people={projectOne}
              projectUrl={'https://flavoroo.vercel.app/'}
            />
          </figure>
        </div>

        <div className="border-l w-[50%] self-end">
          {' '}
          <ThreeDCardDemo
            projectName="Expense Tracker"
            description="Monitor your income and expenses to stay financially on track."
            imageSrc="/expense-tracker.png"
            people={projectOne}
            projectUrl={'https://budget-wow.vercel.app/'}
          />
        </div>
        <div className="border-r w-[50%]">
          <ThreeDCardDemo
            projectName="Tourvistoo"
            description="Explore destinations, book trips, and plan your next adventure with ease"
            imageSrc="/tourvistoo.png"
            people={projectThird}
            projectUrl={'https://tourvistoo.vercel.app/'}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
