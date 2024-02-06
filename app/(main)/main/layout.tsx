import React from 'react'

const MainLayout = ({children}) => {
  return (
    <div className='h-[calc(100vh-144px)] overflow-hidden overflow-y-auto bg-gradient-to-r from-purple-300 to-pink-300'>
        {children}
    </div>
  )
}

export default MainLayout;