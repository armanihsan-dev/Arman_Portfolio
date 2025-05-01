import React from 'react';
import { MarqueeDemo } from './ReviewCard';

const Testimonials = () => {
  return (
    <>
      <section
        className="text-center relative bottom-[160rem] lg:bottom-[15rem]"
        id="testimonials"
      >
        <h1 className="colorful-text">Kind words from satisfied clients</h1>
        <MarqueeDemo />
      </section>
    </>
  );
};

export default Testimonials;
