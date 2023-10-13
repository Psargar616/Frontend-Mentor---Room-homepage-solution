import React, { useState } from "react";
import arrow from "../images/icon-arrow.svg";
import leftArr from "../images/icon-angle-left.svg";
import rightArr from "../images/icon-angle-right.svg";

const ImagesArray = [
  {
    id: 1,
    title: "Discover innovative ways to decorate",
    desc: " We provide unmatched quality, comfort, and style for property owners across the country.Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    mobileImg: "./images/mobile-image-hero-1.jpg",
    descImg: "./images/desktop-image-hero-1.jpg",
  },
  {
    id: 2,
    title: "We are available all across the globe",
    desc: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    mobileImg: "./images/mobile-image-hero-2.jpg",
    descImg: "./images/desktop-image-hero-2.jpg",
  },
  {
    id: 3,
    title: "Manufactured with the best materials",
    desc: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology  to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    mobileImg: "./images/mobile-image-hero-3.jpg",
    descImg: "./images/desktop-image-hero-3.jpg",
  },
];

const DisplayImages = () => {
  const [items, setItems] = useState(ImagesArray);
  const [slideNo, setslideNo] = useState(1);

  const gotoNextSlide = () => {

    if(slideNo !== items.length){
      setslideNo(slideNo + 1)
    }else if(slideNo === items.length){
      setslideNo(1)
    }

  }

  const gotoPreviousSlide = () => {
    
    if(slideNo !== 1){
      setslideNo(slideNo - 1)
    }else if(slideNo === 1){
      setslideNo(items.length)
    }
  }
  return (
    <>
      {items.map((item, index) => (
        <article key={item.id} className={slideNo === index + 1 ? "grid sm:grid-cols-1  lg:grid-cols-10 w-full" : "hidden"}>
          {/* image div */}
          <div className="w-full  sm:col-span-1 lg:col-span-6 object-cover ">
            {/* using picture to set different images for mobile and desktop */}
            <picture className="w-[100%] object-cover">
              <source
                media="(min-width : 768px)"
                srcSet={item.descImg}
                alt={item.title}
                className="w-[100%] object-cover h-full"
              />
              <img src={item.mobileImg} alt={item.title}  className="w-[100%] object-cover h-full"/>
            </picture>
          </div>
          {/* desc div */}
          <div className="w-[100%]  p-8 lg:p-12 sm:col-span-1 lg:col-span-4   relative  flex justify-center items-start  flex-col">
            <h1 className="text-4xl ">{item.title}</h1>
            <p className="text-slate-900  opacity-70 my-6">{item.desc}</p>
            <button className="flex items-center uppercase gap-4 tracking-[0.5rem] hover:opacity-70 xs:mb-4 lg:mb-4 xl:mb-0">
              Shop Now
              <img src={arrow} alt="arrow icon" />
            </button>

            <ul className="absolute lg:bottom-0 lg:left-0 xs:bottom-0 xs:right-0 flex">
              <li className="bg-black ">
                <button className="bg-black w-full h-full hover:bg-neutral-700 cursor-pointer transition-all duration-200 " onClick={gotoPreviousSlide}>
                  <img src={leftArr} className="py-2 px-4 lg:py-4 lg:px-7  xl:py-5 xl:px-8 " />
                </button>
              </li>
              <li className="bg-black ">
                <button className="bg-black w-full h-full hover:bg-neutral-700  cursor-pointer transition-all duration-200" onClick={gotoNextSlide}>
                  <img src={rightArr} className="py-2 px-4 lg:py-4 lg:px-7 xl:py-5 xl:px-8  " />
                </button>
              </li>
            </ul>
          </div>
        </article>
      ))}
    </>
  );
};

export default DisplayImages;
