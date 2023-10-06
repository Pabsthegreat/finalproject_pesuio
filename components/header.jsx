"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
const Header = () => {
    return(
        <div className="w-screen h-4 sm:h-12 md:h-20 lg:h-16 grid grid-cols-5 place-items-center border-black divide-cyan-100 divide-x-2">
            <div className="align-middle justify-center flex content-center rounded-full w-1/12 h-1/12 object-contain"><Link href = "/"><Image src = "/Shoes 2.jpeg" width = {500} height = {200} alt = 'pic1'/></Link></div>
            <div className="flex col-span-3 justify-center">
                <input content="text" placeholder="Searchh For anything in Bargain" size={15}></input>
            </div>
            <div className="border-rounded align-middle justify-center flex border-black">Pro</div>
        </div>
    )

}
export default Header;