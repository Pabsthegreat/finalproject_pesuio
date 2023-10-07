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
        <div className=" rounded-lg shadow-sm min-h-[50px] flex col-span-4 justify-center items-center" ><h1 className="font-semibold text-3xl text-white"> Iphone 11</h1></div>
        <div className= "shadow-sm min-h-[50px] col-span-2 row-span-4 flex h-64 sm:h-24 lg:h-72 md:h-80 justify-center"><img src = "/Iphone 3.jpeg"/></div>

        <div className= " rounded-lg shadow-sm min-h-[50px] col-span-2 row-span-4  grid h-64 sm:h-24 lg:h-72 md:h-80 grid-cols-3 gap-2 place-content-start bg-black">
          <div className='text-gray-200'>
            <h1 className = " font-bold text-5xl">Amazon</h1>
            <p>Price:$200</p>
            <p>Deals:50% on Exchange</p>
            <p>Delivery:7 Days</p>
            <p>Exchange Offer Avaiable</p>
            <Link href="https://www.amazon.in/New-Apple-iPhone-11-64GB/dp/B08L8C1NJ3" className="text-blue-700">Click here to order from Amazon</Link>
          </div>

          <div className='text-gray-200'>
            <h1 className = "font-bold text-5xl">Flipkart</h1>
            <p>Price:$200</p>
            <p>Deals:Big Billion Days 50% Off</p>
            <p>Delivery:9 Days</p>
            <p>Exchange Offer Avaiable</p>
            <Link href="https://www.flipkart.com/apple-iphone-11-black-64-gb/p/itm4e5041ba101fd" className="text-blue-700">Click here to order from Flipkart</Link>
          </div>

          <div className='text-gray-200'>
            <h1 className = "font-bold text-5xl">Ebay</h1>
            <p>Price:$250</p>
            <p>Deals:Clearance Sale</p>
            <p>Delivery:8 Days</p>
            <p>Exchange Offer Avaiable</p>
            <Link href="https://www.ebay.com/b/iPhone-11/9355/bn_7116334163" className="text-blue-700">Click here to order from eBay</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Prodphone;