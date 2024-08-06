import React from 'react'

const CardsLayout = ({children}) => {
  return (
    <div className="relative h-full w-full bg-[url('../src/assets/images/bg-main-mobile.png')] bg-no-repeat flex justify-center items-center">
        {children}
    </div>
  )
}

export default CardsLayout