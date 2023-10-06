import React from "react";
import Link from "next/link";
import Image from "next/image";
const Home = () => {
  return (
    <>
      <h1 className="text-3xl font-semibold">Home</h1>
      <div className="text-sm grid w-screen h-60 sm:h-32 md:h-60 lg:h-72 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 divide-x-2 divide-y-2 place-items-center content-center">
        <div className = "flex justify-center content-center rounded-full w-1/2 h-1/2 object-contain"><Link href = "/categories/iphone"><Image src = "/Electronics 2.jpeg" width = {500} height = {200} alt = 'pic1'/></Link></div>
        <div className = "flex justify-center items-center rounded-full w-1/2 h-1/2 object-contain"><Link href = "/categories/iphone"><Image src = "/Electronics 3.jpeg" width = {500} height = {200} alt = 'pic1'/></Link></div>
        <div className= "flex justify-center items-center rounded-full w-1/2 h-1/2 object-contain"><Link href = "/categories/iphone"><Image src = "/Electronics 1.jpeg" width = {500} height = {200} alt = 'pic1'/></Link></div>
        <div className= "flex justify-center items-center rounded-full w-1/2 h-1/2 object-contain fit"><Link href = "/categories/iphone"><Image src = "/Fashion 2.jpeg" width = {500} height = {200} alt = 'pic1'/></Link></div>
      </div>
    </>
  );
};

export default Home;