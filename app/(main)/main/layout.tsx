import React from 'react'

const MainLayout = ({children}) => {
  return (
    <div className='min-h-[calc(100vh-88px)]'>
        {children}
    </div>
  )
}

export default MainLayout;