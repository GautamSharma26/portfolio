import React from 'react'
import Link from 'next/link'
const RootPageMainD = () => {
  return (
    <div className="min-h-[calc(100vh-144px)] overflow-auto">
      <div className="relative border-2 left-[42%] md:top-42 bg-green-300 md:h-48 md:w-48 lg:top-[120px] md:rounded-full sm:rounded-full sm:top-[260px] sm:w-32 sm:h-32 text-center">
        <div className='absolute md:top-20 md:left-16 md:w-16 sm:top-12 sm:left-6 animate-ping text-black font-bold'>
          Welcome
        </div>
        <Link href="/main">
        <div className="absolute border-2 md:top-28 md:left-32 md:h-36 md:w-36 sm:h-20 sm:w-20 sm:top-20 sm:left-20 bg-yellow-200 rounded-full text-center p-2 break-word">Skills</div></Link>
        <div className="absolute border-2 md:top-28 md:right-32 md:h-36 md:w-36 sm:h-20 sm:w-20 sm:top-20 sm:right-20 bg-red-400 rounded-full text-center p-2 break-words">Experience</div>
        <div className="absolute border-2 md:bottom-32 md:left-32 md:h-36 md:w-36 sm:h-20 sm:w-20 sm:bottom-20 sm:left-20 bg-orange-300 rounded-full text-center p-2">My Blogs</div>
        <div className="absolute border-2 md:bottom-32 md:right-32 md:h-36 md:w-36 sm:h-20 sm:w-20 sm:bottom-20 sm:right-20 bg-blue-300 rounded-full text-center p-2 hover:animate-spin break-words">Projects</div>
      </div>
    </div>
  );
};

export default RootPageMainD;