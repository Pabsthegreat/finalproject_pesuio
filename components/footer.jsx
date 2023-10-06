import React from 'react'

const Footer = () => {
  return (
    <div className=' w-screen h-14 sm:h-14 md:h-12 lg:h-44 border-t-4 border-black text-slate-800 text-center text-xs grid grid-cols-3 gap-2 divide-x-2 divide-y-2'>
      
      <span>
      <p>About Bargain</p>
      <p>More than 200k members and counting</p>
      <p>1000+ brands </p>
      </span>

      <span>
      <p>Help & Contact</p>
      <p>Customer helpline:+91 00573974XX</p>
      <p>Terms and privacy</p>
      </span>

      <span> 
      <p> Community bold</p>
      <p>Meta</p>
      <p>Instagram</p>
      <p>X</p>
      </span>
    </div>
  ) 
}

export default Footer