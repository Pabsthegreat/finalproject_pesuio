import React from "react";

const Home = () => {
  return (
    <>
      <h1 className="text-3xl font-semibold">Home</h1>
      <div className="text-sm grid w-screen h-60 sm:h-32 md:h-60 lg:h-72 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 divide-x-2 divide-y-2">
        <div className = "flex justify-center items-center rounded-full">Pic 1</div>
        <div className = "flex justify-center items-center rounded-full">Pic 1</div>
        <div className="flex justify-center items-center rounded-full">Pic 1</div>
        <div className="flex justify-center items-center rounded-full">Pic 1</div>
      </div>
    </>
  );
};

export default Home;