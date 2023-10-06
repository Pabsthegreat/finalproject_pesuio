import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const Prod = () => {

  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 h-screen bg-black'>
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white object-cover'>
          <Link href='/categories/products/product'><p className='font-bold text-2xl px-2 pt-4'>iPhone 8</p></Link>
          <img src="/Iphone 1.jpeg" alt='iphone image' className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'/>

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
          <Link href='/categories/products/product'><p className='font-bold text-2xl px-2 pt-4'>iPhone 6</p></Link>
          <img src="/Iphone 3.jpeg" height="160" width="200" alt='iphone image' className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'/>


        </div>
        
      </div>
    </div>
  );
};

export default Prod;