import React from 'react'
const RootPageMainD = () => {
  return (
    <div className="min-h-[calc(100vh-144px)] overflow-auto">
      <div className="relative border-2 md:left-[42%] md:top-36 bg-green-300 h-48 w-48 rounded-full text-center animate-bounce">
      <div className='absolute top-20 left-16 w-16 animate-ping text-black font-bold'>
        Welcome
      </div> 
        <div className="absolute border-2 top-28 left-32 h-36 w-36 bg-yellow-200 rounded-full text-center p-2">Skill</div>
        <div className="absolute border-2 top-28 right-32 h-36 w-36 bg-red-400 rounded-full text-center p-2">Experience</div>
        <div className="absolute border-2 bottom-32 left-32 h-36 w-36 bg-orange-300 rounded-full text-center p-2">My Blogs</div>
        <div className="absolute border-2 bottom-32 right-32 h-36 w-36 bg-blue-300 rounded-full text-center p-2 hover:animate-spin">Projects</div>
        </div>
    </div>
  );
};

export default RootPageMainD;