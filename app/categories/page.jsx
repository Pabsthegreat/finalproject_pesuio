import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const categories = () => {

  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 h-screen bg-black'>
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white object-cover'>
          <Link href='/categories/products'><p className='font-bold text-2xl px-2 pt-4'>iPhones</p></Link>
          <img src="https://9to5mac.com/wp-content/uploads/sites/6/2023/09/iphone-15-pro-wallpaper-2.webp" height="160" width="200" alt='iphone image' className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'/>

        </div>
      </div>

      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <Link href='/categories/products'><p className='font-bold text-2xl px-2 pt-4'>Samsung</p></Link>
          <img src="https://www.samsung.com/global/galaxy/main/images/banner_galaxy-z-fold.png" height="160" width="200" alt='iphone image' className='max-h-[160px] md:max-h-[200px] w-full object-fit rounded-xl'/>


        </div>
      </div>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <Link href='/categories/products'><p className='font-bold text-2xl px-2 pt-4'>Redmi</p></Link>
          <img src="https://images.pexels.com/photos/16632913/pexels-photo-16632913/free-photo-of-close-up-of-redmi-cellphone.jpeg?auto=compress&cs=tinysrgb&w=600" height="160" width="200" alt='iphone image' className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'/>


        </div>
        
      </div>
    </div>
  );
};

export default categories;