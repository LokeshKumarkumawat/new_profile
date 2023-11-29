import Image from "next/image";
import React from "react";
import wave from "../assets/images/wave.svg"


const Footer = () => {
  return (
    // <div className=" relative bg-[#1B1D1E] flex items-center justify-center h-80">
    // <div className=" relative bg-[#4B1D1E] flex items-center justify-center h-80">

    // </div>


<footer className="bg-[#1B1D1E] text-white py-3">
<div className="gap-7 sm:gap-16 items-start  xl:w-[1280px]  mx-auto w-full pt-24  px-3 xs:px-6 ss:px-8 sm:px lg:px-32 mx-auto flex flex-wrap  justify-between">
  <div className="">
    <h4 className="text-lg font-semibold mb-1">company</h4>
    <ul>
      <li><a href="#" className="text-gray-400 hover:text-white">about us</a></li>
      <li><a href="#" className="text-gray-400 hover:text-white">our services</a></li>
      <li><a href="#" className="text-gray-400 hover:text-white">privacy policy</a></li>
      <li><a href="#" className="text-gray-400 hover:text-white">visit website</a></li>
    </ul>
  </div>
  <div className="">
    <h4 className="text-lg font-semibold mb-1">get help</h4>
    <ul>
      <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
      <li><a href="#" className="text-gray-400 hover:text-white">shipping</a></li>
      <li><a href="#" className="text-gray-400 hover:text-white">returns</a></li>
      <li><a href="#" className="text-gray-400 hover:text-white">order status</a></li>
      <li><a href="#" className="text-gray-400 hover:text-white">payment options</a></li>
    </ul>
  </div>
  <div className="">
    <h4 className="text-lg font-semibold mb-1">online shop</h4>
    <ul>
      <li><a href="#" className="text-gray-400 hover:text-white">download</a></li>
      <li><a href="#" className="text-gray-400 hover:text-white">changelog</a></li>
      <li><a href="#" className="text-gray-400 hover:text-white">github</a></li>
      <li><a href="#" className="text-gray-400 hover:text-white">all version</a></li>
    </ul>
  </div>
  <div className="">
    <h4 className="text-lg font-semibold mb-1">follow us</h4>
    <div className="flex">
      <a href="#" className="text-white hover:text-gray-900 bg-white bg-opacity-20 rounded-full w-10 h-10 flex items-center justify-center mr-2">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="#" className="text-white hover:text-gray-900 bg-white bg-opacity-20 rounded-full w-10 h-10 flex items-center justify-center mr-2">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="#" className="text-white hover:text-gray-900 bg-white bg-opacity-20 rounded-full w-10 h-10 flex items-center justify-center mr-2">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="#" className="text-white hover:text-gray-900 bg-white bg-opacity-20 rounded-full w-10 h-10 flex items-center justify-center">
        <i className="fab fa-linkedin-in"></i>
      </a>
    </div>
  </div>
</div>
</footer>
  );
};

export default Footer;
