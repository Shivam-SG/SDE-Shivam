import React from "react";

const ServicesData = [
  {
    id: 1,
    span: "Phase 1",
    img: "images/swirl.png ",
    name: "Discovery and Feasibility",
    description:
      "Assessing AI's potential to innovate and validating the initial concept with a POC.",
  },
  {
    id: 2,
    span: "Phase 2",
    img: "images/swirl.png",
    name: "Data Preparation and Research",
    description:
      "Curating and refining data sets to lay the groundwork for tailored AI solutions.",
  },
  {
    id: 3,
    span: "Phase 3",
    img: "images/swirl.png ",
    name: "Model Development and Strategy",
    description:
      "Crafting and training bespoke AI models, strategizing for integration and scalability.",
  },
  {
    id: 4,
    span: "Phase 4",
    img: "images/swirl.png",
    name: "MVP Creation",
    description:
      "Building a functional Minimum Viable Product that embodies the AI solution for user feedback.",
  },
  {
    id: 5,
    span: "Phase 5",
    img: "images/swirl.png",
    name: "Quality Assurance",
    description:
      "Testing and refining the AI MVP, prioritizing performance, and user-centric enhancements.",
  },
  {
    id: 6,
    span: "Phase 6",
    img: "images/swirl.png",
    name: "Deployment and Evaluation",
    description:
      "Launching the AI product with ongoing evaluation and optimization for peak performance.",
  },
];

const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10 relative bg-black ">
        <div className="topblur rounded-3xl absolute w-8 h-8 min-w-[15rem] min-h-[15rem] top-[12rem] left-[10vw] border bg-purple-500 filter blur-[100px] z-0" />
        <div className="bottomblur absolute w-1 h-1 min-w-[15rem] min-h-[150px] top-[24rem] right-[10vw] border-[6px] bg-green-300 filter blur-[100px] z-0" />
        <div className="topblur rounded-3xl absolute w-8 h-8 min-w-[15rem] min-h-[15rem] top-[50rem] left-[10vw] border bg-purple-500 filter blur-[100px] z-0" />
        <div className="bottomblur absolute w-1 h-1 min-w-[15rem] min-h-[150px] top-[68rem] right-[10vw] border-[6px] bg-green-300 filter blur-[100px] z-0" />

        <div className="topblur rounded-3xl absolute w-8 h-8 min-w-[15rem] min-h-[15rem] top-[90rem] left-[10vw] border bg-purple-500 filter blur-[100px] z-0" />
        <div className="bottomblur absolute w-1 h-1 min-w-[15rem] min-h-[150px] top-[110rem] right-[10vw] border-[6px] bg-green-300 filter blur-[100px] z-0" />
        <div className="topblur rounded-3xl absolute w-8 h-8 min-w-[15rem] min-h-[15rem] top-[135rem] left-[10vw] border bg-purple-500 filter blur-[100px] z-0" />
        <div className="bottomblur absolute w-1 h-1 min-w-[15rem] min-h-[150px] top-[158rem] right-[10vw] border-[6px] bg-green-300 filter blur-[100px] z-0" />

        <div className="topblur rounded-3xl absolute w-8 h-8 min-w-[15rem] min-h-[15rem] top-[185rem] left-[10vw] border bg-purple-500 filter blur-[100px] z-0" />
        <div className="bottomblur absolute w-1 h-1 min-w-[15rem] min-h-[150px] top-[198rem] right-[10vw] border-[6px] bg-green-300 filter blur-[100px] z-0" />

        <div className="container mx-auto w-3/5">
          <div class="mb-auto text-center bg-[white]/10 h-[420px] flex justify-center  rounded-xl  relative backdrop-filter backdrop-blur-[150px]">
            <img
              src="/images/swirl.png"
              alt=""
              class="absolute m-auto inset-0 w-[15rem] h-[15rem] object-contain transition-transform transform group-hover:scale-105 duration-300"
            />
            <h1 class="text-3xl lg:text-5xl font-bold whitespace-nowrap md:text-center flex justify-center items-center relative z-[1] bg-gradient-to-r from-purple-900 to-white text-transparent bg-clip-text">
              Here's How We Make Our <br /> Products Grow
            </h1>
          </div>

          <div className="relative mt-9 flex justify-center items-center">
            <div className="grid justify-center">
              {ServicesData.map((service, index) => (
                <button
                  key={service.id}
                  className="flex bg-[white]/10 rounded-2xl mb-5 bg- relative shadow-xl h-[420px] justify-center items-center backdrop-filter backdrop-blur-[150px]"
                >
                  <div className="mt-5 h-[432px] w-[240px] flex items-center justify-center overflow-hidden mx-auto">
                    <img
                      src={service.img}
                      alt=""
                      className="max-h-full max-w-full animate-bounce animate-move-left-to-right"
                    />
                  </div>
                  <div
                    className={`p-5 text-center flex flex-col justify-between flex-grow ${
                      index % 2 === 0 ? "order-last" : "order-first"
                    }`}
                  >
                    <div>
                      <span className="mt-1 mb-9 text-3xl font-bold text-blue-500 z-[1] bg-gradient-to-r from-purple-900 to-white text-transparent bg-clip-text uppercase">
                        {service.span}
                      </span>
                      <h1 className="text-3xl text-white mb-1 mt-9">
                        {service.name}
                      </h1>
                    </div>
                    <p className="text-white text-sm mt-1">
                      {service.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
