import React from 'react'
import Image from 'next/image';

const Header = () => {
  return (
    <div className='flex rounded-sm h-20 bg-gradient-to-r from-purple-500 to-pink-500 relative'>
      <div className='flex-initial absolute w-16 h-16 text-sm top-0 mx-1 my-2 right-0 p-2 bg-orange-400 rounded-full items-end'>
        <Image src="/static/images/logo-g.jpeg" className='rounded-full' fill={true}></Image>
      </div>
    </div>
  )
}

export default Header;