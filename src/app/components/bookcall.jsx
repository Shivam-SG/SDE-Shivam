import Calendlylink from "../buttons/callbutton"; // Import the CalendlyLink component

export default function Book() {
  const url = "https://calendly.com/vivek-_ou/30min";

  return (
    <div className="bg-black md:ml-0 min-h-screen flex items-center justify-center px-2">
      <div className="flex rounded-3xl flex-col md:flex-row justify-center gap-4 w-full max-w-6xl p-2 m-9 bg-[white]/10 backdrop-filter backdrop-blur-[150px]">
        {" "}
        {/* Adjusted max-width and added gap */}
        <div className="flex-1 justify-center items-center mb-4 md:mb-0 p-6 rounded-lg shadow-lg">
          <h1 className="text-4xl mb-9 text-center mt-[14rem] font-bold text-white">
            {" "}
            Got anything in mind?
          </h1>
          <br></br>
          <div className="hidden md:block">
            {" "}
            {/* Hide CalendlyLink on medium screens and up */}
            <h1 className="text-4xl text-center font-bold text-blue-700">
              Let&apos;s do it <br></br>together!
            </h1>
          </div>
          {/* <div className="mt-8 md:hidden w-full"> 
              <Calendlylink />
            </div> */}
        </div>
        <div className="justify-center items-center flex w-full lg:w-1/2 sm:w-full md:justify-center md:w-full bg-white p-2 sm:p-6 rounded-lg shadow-lg">
          <iframe
            src={url}
            width="100%"
            height="600px"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
