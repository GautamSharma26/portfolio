import React from 'react'

const MainLayout = ({children}) => {
  return (
    <div className='min-h-[calc(100vh-144px)]'>
        {children}
    </div>
  )
}

export default MainLayout;