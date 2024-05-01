"use client";
import React, { useState } from "react";
import Image from "next/image";

const Design = () => {


  return (
    <div className="p-4 sm:p-[100px] bg-black text-white pt-[120px]">
      <div className="grid justify-center">
        <div className="w-full">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-center mb-20">
            What&apos;s Trending
          </h1>
        </div>

        <div className="grid grid-cols-4 gap-5">
          <div className="w-full relative rounded-xl h-24">
            <Image src="/images/book.jpeg" width={300} height={300} alt="" className="bg-cover absolute object-contain rounded-lg" />
            <h1 className="relative">CASE STUDY</h1>
            <p className="relative">Revolutionizing Talent Hiring Practices</p>
          </div>
          <div className="w-full relative rounded-xl">
            <Image src="/images/cup.jpeg" width={300} height={300} alt="" className="bg-cover absolute object-contain rounded-lg" />
            <h1 className="relative">BLOGS</h1>
            <p className="relative">Prompt Engineering vs Prompt Tuning: A Detailed Explanation</p>
          </div>
          <div className="w-full relative rounded-xl ">
            <Image src="/images/pen.jpeg" alt="" width={300} height={300} className="bg-cover absolute object-contain rounded-lg" />
            <h1 className="relative">AI NEWS</h1>
            <p className="relative">META Unveils Groundbreaking Enhancements to Its AI with Llama 3 Release</p>
          </div>
          <div className="w-full relative rounded-xl">
            <Image src="/images/space.jpeg" alt="" width={300} height={300} className="bg-cover absolute object-contain rounded-lg"/>
            <h1 className="relative">TRENDS</h1>
            <p className="relative">Prompt Engineering vs Prompt Tuning: A Detailed Explanation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
