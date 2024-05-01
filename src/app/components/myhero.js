"use client";
import { TypeAnimation } from "react-type-animation";
import Mobilenavbar from "./mobilenavbar"; // Import the Mobilenavbar component
import Calendlylink from "../buttons/callbutton"; // Import the CalendlyLink component
import Image from "next/image";
import heroImage from "../../../public/images/hero-image.png";
import React, { useState } from "react";

const Mysvg = () => {
  return (
    <svg
      fill="#000000"
      viewBox="0 0 24 24"
      id="research"
      data-name="Flat Line"
      xmlns="http://www.w3.org/2000/svg"
      className="icon flat-line mx-1 -ml-1"
      width={30}
      height={25}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <circle
          id="secondary"
          cx="8"
          cy="10"
          r="3"
          style={{ fill: "#2ca9bc", strokeWidth: 2 }}
        ></circle>
        <path
          id="primary"
          d="M17,12v5m-4,0V15M3,15l2.83-2.83M8,7a3,3,0,1,0,3,3A3,3,0,0,0,8,7Z"
          style={{
            fill: "none",
            stroke: "#000000",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
          }}
        ></path>
        <path
          id="primary-2"
          data-name="primary"
          d="M8,3H20a1,1,0,0,1,1,1V20a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V17"
          style={{
            fill: "none",
            stroke: "#000000",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
          }}
        ></path>
      </g>
    </svg>
  );
};

export default function HeroSection() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <div className="bg-black relative">
  <div className="topblur rounded-3xl absolute w-8 h-8 min-w-[15rem] min-h-[15rem] top-[12rem] left-[10vw] border bg-purple-500 filter blur-[100px] z-0" />
  <div className="bottomblur absolute w-1 h-1 min-w-[15rem] min-h-[150px] bottom-[-28px] right-[10vw] border-[6px] bg-green-300 filter blur-[100px] z-0" />
  <div className="container max-w-screen-xl mx-auto px-4 bg-black">
    {/* Heading and Navbar button */}
    <div className="flex justify-center">
      <div className="grid text-center">
        {/* Content */}
        <div className="text-white mt-[12rem]">
          <h6 className="text-[18px] bg-gradient-to-r from-purple-600 to-white text-transparent bg-clip-text">
            Start your AI journey with us
          </h6>
          <h1 className="text-[48px]">Your Go-To Consultancy For</h1>
          <h4 className="text-[48px] text-blue-700">AI Solution</h4>
        </div>
        <div className="w-full mt-10 mb-[12rem] flex ml-[5rem] gap-4 md:flex-row py-0 px-6 md:justify-start justify-between items-center lg:gap-6 md:gap-6">
          <div className="w-full md:w-auto ">
            <Calendlylink />
          </div>
          <button className=" border border-gray-500 text-white font-bold py-4 px-6 rounded-lg inline-flex items-center gap-3 text-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl cursor-pointer">
            <Mysvg />
            <span>See case studies</span>
          </button>
        </div>
      </div>
    </div>
    {/* Mobile Navbar */}
    {isNavbarOpen && (
      <Mobilenavbar closeNavbar={() => setIsNavbarOpen(false)} />
    )}
  </div>
</div>

  );
}
