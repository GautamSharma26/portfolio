import React from 'react'
const Explayout = ({children}) => {
  return (
    <div className='h-[calc(100vh-144px)] overflow-hidden overflow-y-auto'>
        {children}
    </div>
  )
}

export default Explayout