import React from 'react';
import { MarqueeDemo } from './ReviewCard';

const Testimonials = () => {
  return (
    <>
      <section
        className="text-center relative  lg:bottom-[5rem]"
        id="testimonials"
      >
        <h1 className="project-title-text">
          Kind words from satisfied clients
        </h1>
        <MarqueeDemo />
      </section>
    </>
  );
};

export default Testimonials;
