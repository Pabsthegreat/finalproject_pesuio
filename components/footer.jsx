import React from 'react'
import Link from 'next/link';
const Footer = () => {
  return (
    <div className=' w-screen h-32 sm:h-32 md:h-32 lg:h-44 text-white text-center text-xs grid grid-cols-3 gap-2 bg-black place-content-end border-y-4 border-y-white'>
      <div className='text-gray-200'>
      <h1 className = "font-bold">About Bargain</h1>
      <p>More than 200k members and counting</p>
      <p>1000+ brands </p>
      </div>

      <div className='text-gray-200'>
      <h1 className = "font-bold">Contact</h1>
      <p>Customer helpline:+91 00573974XX</p>
      <p>Email to Us at bargainhelp@bargain.com</p>
      <p>Terms and Conditions</p>
      <p>Privacy</p>
      </div>

      <div className='text-gray-200'> 
      <h1 className = "font-bold">Community</h1>
      <Link href="https://about.meta.com/">Meta</Link>
      <Link href="https://about.instagram.com/">Instagram</Link>
      <Link href="https://about.x.com/">X</Link>
      </div>
    </div>
  ) 
}

export default Footer;