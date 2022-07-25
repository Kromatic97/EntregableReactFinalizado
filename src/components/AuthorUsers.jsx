import React from 'react'

const AuthorUsers = ({randomQuote, randomColor}) => {

  const objectStyle={
    color:randomColor
  }

  return (
    <div className='card' style={objectStyle}>
      
      <h3 className='card__author'>{randomQuote.author}</h3>
    </div>
  )
}

export default AuthorUsers