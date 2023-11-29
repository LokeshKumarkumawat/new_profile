import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import p1 from "../assets/images/p1.png";
import ziz from "../assets/images/ziz.png";
import Image from "next/image";
import Link from "next/link";
import imageData from "./data";

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const SliderProject = () => {
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    navClass: ["owl-prev", "owl-next"],
    navText: [
      '<i class="fas fa-angle-left"></i>',
      '<i class="fas fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <ul id="owl-carousel-ul"  className="owl-carousel  owl-loaded owl-drag">
      <OwlCarousel
        className="owl-theme"
        // loop
        margin={4}
        nav={true}
        navText={[
          '<i class="fa-solid fa-arrow-left"></i>',
          '<img src="/images/Arrow_right.png" />',
        ]}
        dots={false}
        animateIn={true}
        {...options}
      >
        {imageData.map((image) => (

          <div className="flex  flex-col md:flex-row gap-5 sm:gap-6 text-slate-400 ">
            <div className="flex  border-b-4 border-indigo-500 shadow-md shadow-indigo-500/50 flex-col  bg-[#181A1B] justify-center gap-3 items-center py-0 px-0 rounded flex-1  ">
              <li key={image.id}>

                <Link href={`/image/${image.id}`}>

                {/* <img src={image.imageUrl} alt={image.title} /> */}
                 
                  <Image

                    className="cursor-pointer w-full object-cover  rounded-md  h-48 sm:h-56  "
                    src={image.imageUrl}
                    alt={image.title}
                    height={300}
                    width={300}
                    onError={(e) => console.error("Image load error:", e)}

                  />

                </Link>

                

              </li>
            </div>
          </div>

        ))}
      </OwlCarousel>
    </ul>
  );
};

export default SliderProject;
