import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const Prod = () => {

  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 h-screen bg-black'>
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white object-cover'>
          <Link href='/categories/products/product'><p className='font-bold text-2xl px-2 pt-4'>iPhone 11</p></Link>
          <img src="https://images.squarespace-cdn.com/content/v1/5e949a92e17d55230cd1d44f/da04bad0-28c9-4f79-aa4d-9f3df122a3b7/LandscapeiPhone1.png?format=1500w" alt='iphone image' className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'/>

        </div>
      </div>

      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <Link href='/categories/products/product'><p className='font-bold text-2xl px-2 pt-4'>iPhone 7</p></Link>
          <img src="/Iphone 2.jpeg" height="160" width="200" alt='iphone image' className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'/>


        </div>
      </div>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <Link href='/categories/products/product'><p className='font-bold text-2xl px-2 pt-4'>iPhone SE</p></Link>
          <img src="https://images.pexels.com/photos/2825349/pexels-photo-2825349.jpeg?auto=compress&cs=tinysrgb&w=600" height="160" width="200" alt='iphone image' className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'/>


        </div>
        
      </div>
    </div>
  );
};

export default Prod;