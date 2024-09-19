import React from "react";

function Home() {
  return (
    <div className="min-h-full">
      <div className="relative">
      <div className="flex justify-center">
        <video autoPlay loop muted playsinline className="opacity-20 w-[100%] h-auto">
          <source src="/assets/bg.mp4" type="video/mp4"></source>
          Your browser does not support the video tag.
        </video>
      </div>
      <div>
          <h1 className="absolute left-[130px] top-[200px] text-6xl text-white font-serif">
            Smart Utility Society
          </h1>
        </div>
        <div>
          <p className="absolute left-[130px] top-[275px] text-white text-2xl font-light">
            solve your all daily problem with 1 click
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
