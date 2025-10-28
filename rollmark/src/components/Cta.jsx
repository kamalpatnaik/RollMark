import React from "react";

const Cta = () => {
  return (
    <div
      className="relative z-20 flex items-center overflow-hidden bg-cover bg-center min-h-screen"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply')",
      }}
    >
      <div className="container relative flex flex-col sm:flex-row px-6 py-16 mx-auto backdrop-blur-sm rounded-xl">
        {/* Text Section */}
        <div className="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5 text-white">
          <span className="w-20 h-2 mb-12 bg-white"></span>
          <h1 className="flex flex-col text-6xl font-black leading-none uppercase font-bebas-neue sm:text-8xl">
            Be on
            <span className="text-5xl sm:text-7xl text-blue-400">Time</span>
          </h1>
          <p className="text-sm sm:text-base mt-4">
            Dimension of reality that makes change possible and understandable.
            An indefinite and homogeneous environment in which natural events
            and human existence take place.
          </p>
          <div className="flex mt-8">
            <a
              href="#"
              className="px-6 py-3 mr-4 text-white uppercase bg-blue-600 border-2 border-transparent rounded-lg text-md hover:bg-blue-700 transition"
            >
              Get started
            </a>
          </div>
        </div>

        {/* Empty div kept for structure balance */}
        <div className="relative hidden sm:block sm:w-1/3 lg:w-3/5"></div>
      </div>
    </div>
  );
};

export default Cta;
