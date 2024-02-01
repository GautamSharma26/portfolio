import React from 'react'

const MainLayout = ({children}) => {
  return (
    <div className='h-[calc(100vh-144px)] overflow-hidden overflow-y-auto bg-stone-950'>
        {children}
    </div>
  )
}

export default MainLayout;