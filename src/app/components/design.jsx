"use client";
import React, { useState } from "react";
import Image from "next/image";

const Design = () => {
  // const initialContent = {
  //   paragraph: (
  //     <>
  //       These problems, being so common, call for decisive and drastic
  //       solutions. The solutions, below, however, only scratch the surface of
  //       the deep underlying problems.
  //     </>
  //   ),
  //   listItems: ["Low activation and adoption", "Low Retention", "Less churn"],
  // };

  // const [content, setContent] = useState(initialContent);
  // const [thirdSVGContent, setThirdSVGContent] = useState({});
  // const [isTextBlue, setIsTextBlue] = useState(false);

  // const handleButtonClick = (svgNumber) => {
  //   setIsTextBlue(true); // Set text color to blue when button is clicked

  //   if (svgNumber === 1) {
  //     setContent({
  //       paragraph: (
  //         <>
  //           For most tech ventures, product performance is synonymous with
  //           business performance. However, despite the vitality of the
  //           product&apos;s success, the problems below couldn&apos;t be any more
  //           common.
  //         </>
  //       ),
  //       listItems: [
  //         "Low activation and adoption",
  //         "Low Retention",
  //         "Less churn",
  //       ],
  //     });
  //   } else if (svgNumber === 2) {
  //     setContent({
  //       paragraph: (
  //         <>
  //           These problems, being so common, call for decisive and drastic
  //           solutions. The solutions, below, however, only scratch the surface
  //           of the deep underlying problems.
  //         </>
  //       ),
  //       listItems: [
  //         "Hire more people",
  //         "Launch new features",
  //         "Increase the Marketing & Sales Budget",
  //         "Retarget customers",
  //       ],
  //     });
  //     setThirdSVGContent({}); // Reset third SVG content
  //   } else if (svgNumber === 3) {
  //     setThirdSVGContent({
  //       paragraph: (
  //         <>
  //           Before reallocating resources to marketing or sales, ensure your
  //           product&apos;s core is AI-enhanced for smarter performance. Our AI
  //           solutions elevate your product by
  //         </>
  //       ),
  //       listItems: [
  //         "Predictive Analytics Enhancement",
  //         "Personalized Experience Algorithms",
  //         "Data-Informed Design Insights",
  //         "Advanced Interaction Intelligence",
  //         "Insight-Driven Feature Development",
  //       ],
  //     });
  //   }
  // };

  // const [isOpenChallenges, setIsOpenChallenges] = useState(false);
  // const [isOpenCompanies, setIsOpenCompanies] = useState(false);
  // const [isOpenWhatWeDo, setIsOpenWhatWeDo] = useState(false);

  return (
    <div className="p-4 sm:p-[100px] bg-black text-white pt-[120px]">
      <div className="grid justify-center">
        <div className="w-full">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-center mb-20">
            What's Trending
          </h1>
        </div>

        <div className="grid grid-cols-4 gap-5">
          <div className="w-full relative rounded-xl h-24">
            <Image src="/images/book.jpeg" alt="" className="bg-cover absolute object-contain rounded-lg w-full" />
            <h1 className="relative">CASE STUDY</h1>
            <p className="relative">Revolutionizing Talent Hiring Practices</p>
          </div>
          <div className="w-full relative rounded-xl">
            <Image src="/images/cup.jpeg" alt="" className="bg-cover absolute object-contain rounded-lg w-full" />
            <h1 className="relative">BLOGS</h1>
            <p className="relative">Prompt Engineering vs Prompt Tuning: A Detailed Explanation</p>
          </div>
          <div className="w-full relative rounded-xl ">
            <Image src="/images/pen.jpeg" alt="" className="bg-cover absolute object-contain rounded-lg w-full" />
            <h1 className="relative">AI NEWS</h1>
            <p className="relative">META Unveils Groundbreaking Enhancements to Its AI with Llama 3 Release</p>
          </div>
          <div className="w-full relative rounded-xl">
            <Image src="/images/space.jpeg" alt="" className="bg-cover absolute object-contain rounded-lg w-full"/>
            <h1 className="relative">TRENDS</h1>
            <p className="relative">Prompt Engineering vs Prompt Tuning: A Detailed Explanation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
