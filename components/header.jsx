"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
    return(
        <div className="w-screen h-4 sm:h-12 md:h-20 lg:h-16 grid grid-cols-5 place-items-center">
            <div className= "border-rounded align-middle justify-center flexobject-cover h-1/2 w-1/12 rounded-full"><Link href = "/"><Image src = "/logo.jpeg" width = {500} height = {500} alt = 'pic1'/></Link></div>
            <div className= "flex col-span-3 justify-center">
                <input content="text" placeholder="Search For anything in Bargain" width={40} size={100} className="rounded-lg  text-lg"></input>
            </div>
            <div className="border-rounded align-middle justify-center flex border-black">
            </div>
        </div>
    )

}
export default Header;