import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-row lg:h-16 p-5 bg-gradient-to-r from-purple-500 to-pink-500'>
      <div className='relative left-[40%]'><Link href="https://www.youtube.com/channel/UCDFpwbMB8Owgk0QRBEchNVw">Youtube</Link></div>
      <div className='relative left-[50%]'><Link href="https://www.instagram.com/sharma_gautam_26/">Instagram</Link></div>
    </div>
  )
}

export default Footer;