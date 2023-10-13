import React from "react";
import darkImg from "../images/image-about-dark.jpg";
import lightImg from "../images/image-about-light.jpg";

const AboutSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-1  lg:grid-cols-10">
      <div className="md:col-span-1 lg:col-span-3 h-full object-cover">
        <img src={darkImg} className="w-full h-full "></img>
      </div>
      <article className="p-8 md:col-span-1 lg:p-10 lg:col-span-4  h-full ">
        <h2 className="font-semibold text-2xl md:text-xl lg:text-2xl uppercase "> About our furniture</h2>
        <p className="text-slate-900 opacity-70 mt-6 md:mt-4">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </article>

      <div className="md:col-span-1 lg:col-span-3  h-full object-cover">
        <img src={lightImg} className="w-full h-full"></img>
      </div>
    </section>
  );
};

export default AboutSection;
