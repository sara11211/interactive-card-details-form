import React from 'react'

const CardsLayout = ({children}) => {
  return (
    <div className="h-full w-full bg-[url('../src/assets/images/bg-main-mobile.png')] bg-no-repeat">
        {children}
    </div>
  )
}

export default CardsLayout