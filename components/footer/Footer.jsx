import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className='flex flex-col items-center justify-center lg:flex-row lg:justify-center h-16 p-5 bg-gradient-to-r from-purple-500 to-pink-500'>
      <div className='flex flex-col lg:flex-row lg:items-center lg:space-x-6'>
        <Link href="https://www.youtube.com/channel/UCDFpwbMB8Owgk0QRBEchNVw" className='text-white hover:underline'>
          Youtube
        </Link>
        <Link href="https://www.instagram.com/sharma_gautam_26/" className='text-white hover:underline'>
          Instagram
        </Link>
      </div>
    </div>
  );
}

export default Footer;
