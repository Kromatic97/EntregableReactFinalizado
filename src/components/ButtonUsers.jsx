import React from 'react'

const ButtonUsers = ({randomColor, getRandomAll}) => {
  
  const objectBgStyle={
    backgroundColor:randomColor
  }
  
  return (
    <div className='btn__container'>
      <button onClick={getRandomAll} style={objectBgStyle} className='card__btn'>&gt;</button>
    </div>
  )
}

export default ButtonUsers