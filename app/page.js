import React from 'react'
const RootPageMainD = () => {
  return (
    <div className="min-h-[calc(100vh-144px)]">
      <div className="relative border-2 md:left-[42%] md:top-72 bg-green-300 h-64 w-64 rounded-full">Hii
        <div className="absolute border-2 top-36 left-32 h-64 w-64 bg-yellow-200 rounded-full"></div>
        <div className="absolute border-2 top-36 right-32 h-64 w-64 bg-red-400 rounded-full"></div>
        <div className="absolute border-2 bottom-36 left-32 h-64 w-64 bg-orange-300 rounded-full"></div>
        <div className="absolute border-2 bottom-36 right-32 h-64 w-64 bg-blue-300 rounded-full"></div>
        
      </div>
    </div>
  )
}

export default RootPageMainD;