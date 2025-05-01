import React from 'react';
import ProjectCard from '../sub/ProjectCard';
import { ThreeDCardDemo } from './ThreeDCardDemo';

const Projects = () => {
  return (
    <div
      className="flex relative   bottom-[150rem] lg:bottom-[10rem] flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px]  font-poppins text-white project-title-text">
        A small selection of recent projects
      </h1>
      <div className="h-full w-full flex relative justify-between  bottom-14 flex-col md:flex-row gap-10 px-10">
        <ThreeDCardDemo
          projectName="Expense Tracker"
          description="text-[40px] font-poppins font-semibold text-transparent"
        />
        <ThreeDCardDemo
          projectName="Expense Tracker"
          description="text-[40px] font-poppins font-semibold text-transparent"
        />
        <ThreeDCardDemo
          projectName="Expense Tracker"
          description="text-[40px] font-poppins font-semibold text-transparent"
        />
      </div>
    </div>
  );
};

export default Projects;
