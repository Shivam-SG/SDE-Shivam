"use client";
import React, { useState } from "react";
import Image from "next/image";

const Design = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className=" bg-black text-white pt-[120px] pb-[120px]">
      <div className="grid justify-center">
        <div className="w-full">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-center mb-20">
            What&apos;s Trending
          </h1>
        </div>

        <div className="grid grid-cols-4 gap-9 m-9">
          <div
            className="relative rounded-xl overflow-hidden"
            style={{ height: "500px" }}
            onMouseEnter={() => setHovered(0)}
            onMouseLeave={() => setHovered(null)}
          >
            <Image
              src="/images/book.jpeg"
              width={300}
              height={300}
              alt=""
              className="object-cover w-full h-full rounded-lg"
            />
            <div
              className="absolute inset-0 flex flex-col text-white p-4"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,1))",
              }}
            >
              <h1 className="relative z-10 font-bold text-xl">CASE STUDY</h1>
              <p className="relative z-10"> 
                Revolutionizing Talent Hiring Practices
              </p>
            </div>
            {hovered === 0 && (
              <div className="absolute inset-0 flex flex-col text-white p-4 bg-[black]/10 backdrop-filter backdrop-blur-[150px]">
                <div className="topblur rounded-3xl absolute w-8 h-8 min-w-[15rem] min-h-[15rem] top-[1rem] border bg-blue-700 filter blur-[100px] z-0" />
                <h1 className="font-bold text-xl">CASE STUDY</h1>
                <p>Revolutionizing Talent Hiring Practices</p>
                <p className="mt-[8rem]">
                  Discover how our AI Recruiter Agent revolutionizes the
                  staffing industry with predictive analytics and humanized
                  interactions, enhancing recruitment precision and efficiency.
                </p>
              </div>
            )}
          </div>

          <div
            className="relative rounded-xl overflow-hidden"
            style={{ height: "500px" }}
            onMouseEnter={() => setHovered(1)}
            onMouseLeave={() => setHovered(null)}
          >
            <Image
              src="/images/cup.jpeg"
              width={300}
              height={300}
              alt=""
              className="object-cover w-full h-full rounded-lg"
            />
            <div
              className="absolute inset-0 flex flex-col text-white p-4"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,1))",
              }}
            >
              <h1 className="relative z-10 font-bold text-xl">BLOGS</h1>
              <p className="relative z-10">
                Prompt Engineering vs Prompt Tuning: A Detailed Explanation
              </p>
            </div>
            {hovered === 1 && (
              <div className="absolute inset-0 flex flex-col text-white p-4 bg-[white]/10 backdrop-filter backdrop-blur-[150px]">
              <div className="topblur rounded-3xl absolute w-8 h-8 min-w-[15rem] min-h-[15rem] top-[1rem] border bg-blue-700 filter blur-[100px] z-0" />
                <h1 className="font-bold text-xl">BLOGS</h1>
                <p>
                  Prompt Engineering vs Prompt Tuning: A Detailed Explanation
                </p>
                <p className="mt-[8rem]">
                  Explore the intricacies of prompt engineering and prompt
                  tuning in AI, uncovering how these NLP techniques refine
                  language model interactions for superior outcomes.
                </p>
              </div>
            )}
          </div>

          <div
            className="relative rounded-xl overflow-hidden"
            style={{ height: "500px" }}
            onMouseEnter={() => setHovered(2)}
            onMouseLeave={() => setHovered(null)}
          >
            <Image
              src="/images/pen.jpeg"
              width={300}
              height={300}
              alt=""
              className="object-cover w-full h-full rounded-lg"
            />
            <div
              className="absolute inset-0 flex flex-col text-white p-4"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,1))",
              }}
            >
              <h1 className="relative z-10 font-bold text-xl">AI NEWS</h1>
              <p className="relative z-10">
                META Unveils Groundbreaking Enhancements to Its AI with Llama 3
                Release
              </p>
            </div>
            {hovered === 2 && (
              <div className="absolute inset-0 flex flex-col text-white p-4 bg-[white]/10 backdrop-filter backdrop-blur-[150px]">
              <div className="topblur rounded-3xl absolute w-8 h-8 min-w-[15rem] min-h-[15rem] top-[1rem] border bg-blue-700 filter blur-[100px] z-0" />
                <h1 className="font-bold text-xl">AI NEWS</h1>
                <p>
                  META Unveils Groundbreaking Enhancements to Its AI with Llama
                  3 Release
                </p>
                <p className="mt-[8rem]">
                  Meta launches Llama 3 AI, boasting advanced reasoning and
                  coding, set to revolutionize AI interactions and integration
                  across its platforms.
                </p>
              </div>
            )}
          </div>

          <div
            className="relative rounded-xl overflow-hidden"
            style={{ height: "500px" }}
            onMouseEnter={() => setHovered(3)}
            onMouseLeave={() => setHovered(null)}
          >
            <Image
              src="/images/space.jpeg"
              width={300}
              height={300}
              alt=""
              className="object-cover w-full h-full rounded-lg"
            />
            <div
              className="absolute inset-0 flex flex-col text-white p-4"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,1))",
              }}
            >
              <h1 className="relative z-10 font-bold text-xl">TRENDS</h1>
              <p className="relative z-10">
                Prompt Engineering vs Prompt Tuning: A Detailed Explanation
              </p>
            </div>
            {hovered === 3 && (
              <div className="absolute inset-0 flex flex-col text-white p-4 bg-[white]/10 backdrop-filter backdrop-blur-[150px]">
              <div className="topblur rounded-3xl absolute w-8 h-8 min-w-[15rem] min-h-[15rem] top-[1rem] border bg-blue-700 filter blur-[100px] z-0" />
                <h1 className="font-bold text-xl">TRENDS</h1>
                <p>
                  Prompt Engineering vs Prompt Tuning: A Detailed Explanation
                </p>
                <p className="mt-[8rem]">
                  In a market crowded with established AI assistants like
                  OpenAI's ChatGPT, Microsoft's Copilot, and Anthropic's Claude,
                  we are poised to redefine the landscape," Zuckerberg shared
                  with The Verge. "With these enhancements, Meta AI is set to
                  become a major contender in the AI assistant space.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
