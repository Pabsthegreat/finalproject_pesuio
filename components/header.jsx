"use client";
import React from "react";

const Header = () => {
    return(
        <div className="w-screen h-4 sm:h-12 md:h-20 lg:h-16 grid grid-cols-5 divide-x-2 ">
            <div className="border-rounded align-middle justify-center flex border-black">IMG</div>
            <div className="flex col-span-3 justify-center">
                <input content="text" placeholder="Searchh For anything in Bargain" size={15}></input>
            </div>
            <div className="border-rounded align-middle justify-center flex border-black">Pro</div>
        </div>
    )

}
export default Header;