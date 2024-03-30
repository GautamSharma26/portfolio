import React from 'react'

const layout = ({children}) => {
  return (
    <div className='h-[calc(100vh-144px)] bg-gray-900 flex flex-col items-center justify-center overflow-hidden overflow-y-auto'>{children}</div>
  )
}

export default layout