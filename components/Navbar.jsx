"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  return (
    <>
    <div className=" w-screen h-fit grid grid-cols-12 bg-black grid-flow-row-dense">
      <div className='text-gray-200 flex col-span-1'>
            <Link href="/" className="text-white"><h1>Home</h1></Link>
      </div>

      <div className='text-gray-200 flex col-span-1'>
        <Link href="/about" className="text-white"><h1>About</h1></Link>
      </div>
    </div>
    </>
  );

};

export default Navbar;