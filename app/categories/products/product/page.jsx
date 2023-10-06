import React from "react";
import Link from "next/link";
import Image from "next/image";
const Prodphone = () => {
  return (
    <>
      <div className=" p-10 grid grid-cols-4 gap-2 grid-flow-row-dense place h-screen bg-black">
        {/* <div className="flex row-span-3 col-span-1 border-2 border-black object-cover">
          <Image src = "/Shoes 1.jpeg" height={500} width={200} alt="shoe"/>
        </div>

        <div className="flex col-span-3 border-black border-2 justify-center">
          <p>Titlefgsfghwtrhsrthetrhethr</p>
        </div> */}
        <div className=" rounded-lg shadow-sm min-h-[50px] flex col-span-4 justify-center items-center" ><h1 className="font-semibold text-3xl text-white"> Iphone 6</h1></div>
        <div className= "shadow-sm min-h-[50px] col-span-2 row-span-4 flex h-64 sm:h-24 lg:h-72 md:h-80 justify-center"><img src = "/Iphone 3.jpeg"/></div>

        <div className= " rounded-lg shadow-sm min-h-[50px] col-span-2 row-span-4  grid h-64 sm:h-24 lg:h-72 md:h-80 grid-cols-3 gap-2 place-content-start bg-black">
          <div className='text-gray-200'>
            <h1 className = "font-bold">Amazon</h1>
            <p>Price:$200</p>
            <p>Deals:Big Billion Days 50% Off</p>
            <p>Delivery:7 Days</p>
            <p>Exchange Offer Avaiable</p>
            <Link href="https://about.meta.com/" className="text-blue-700">Click here to order from Amazon</Link>
          </div>

          <div className='text-gray-200'>
          <h1 className = "font-bold">Flipkart</h1>
            <p>Price:$200</p>
            <p>Deals:Big Billion Days 50% Off</p>
            <p>Delivery:7 Days</p>
            <p>Exchange Offer Avaiable</p>
            <Link href="https://about.meta.com/" className="text-blue-700">Click here to order from Flipkart</Link>
          </div>

          <div className='text-gray-200'>
            <h1 className = "font-bold">Ebay</h1>
            <p>Price:$250</p>
            <p>Deals:Big Billion Days 50% Off</p>
            <p>Delivery:7 Days</p>
            <p>Exchange Offer Avaiable</p>
            <Link href="https://about.x.com/" className="text-blue-700">Click here to order from eBay</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Prodphone;