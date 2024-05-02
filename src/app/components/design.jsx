"use client";
import React, { useState } from "react";
import Image from "next/image";

const Design = () => {
  return (
    <div className=" bg-black text-white pt-[120px] pb-[120px]">
      <div className="grid justify-center">
        <div className="w-full">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-center mb-20">
            What&apos;s Trending
          </h1>
        </div>

        <div className="grid grid-cols-4 gap-9 m-9">
          <div className="relative rounded-xl overflow-hidden" style={{ height: '500px' }}>
            <Image
              src="/images/book.jpeg"
              width={300}
              height={300}
              alt=""
              className="object-cover w-full h-full rounded-lg"
            />
            <div className="absolute inset-0 flex flex-col text-white p-4" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,1))' }}>
              <h1 className="relative z-10 font-bold text-xl">CASE STUDY</h1>
              <p className="relative z-10">
                Revolutionizing Talent Hiring Practices
              </p>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden">
            <Image
              src="/images/cup.jpeg"
              width={300}
              height={300}
              alt=""
              className="object-cover w-full h-full rounded-lg"
            />
            <div className="absolute inset-0 flex flex-col text-white p-4" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,1))' }}>
              <h1 className="relative z-10 font-bold text-xl">BLOGS</h1>
              <p className="relative z-10">
                Prompt Engineering vs Prompt Tuning: A Detailed Explanation
              </p>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden">
            <Image
              src="/images/pen.jpeg"
              alt=""
              width={300}
              height={300}
              className="object-cover w-full h-full rounded-lg"
            />
            <div className="absolute inset-0 flex flex-col text-white p-4" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,1))' }}>
              <h1 className="relative z-10 font-bold text-xl">AI NEWS</h1>
              <p className="relative z-10">
                META Unveils Groundbreaking Enhancements to Its AI with Llama 3
                Release
              </p>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden">
            <Image
              src="/images/space.jpeg"
              alt=""
              width={300}
              height={300}
              className="object-cover w-full h-full rounded-lg"
            />
            <div className="absolute inset-0 flex flex-col text-white p-4" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,1))' }}>
              <h1 className="relative z-10 font-bold text-xl">TRENDS</h1>
              <p className="relative z-10">
                Prompt Engineering vs Prompt Tuning: A Detailed Explanation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
