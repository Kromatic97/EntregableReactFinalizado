import React from 'react'

const QuotesUsers = ({randomQuote, randomColor}) => {

  const objectStyle={
    color:randomColor
  }
 

  return (
    <div className='card' style={objectStyle}>
      <p className='card__quote'>{randomQuote.quote}</p>
    </div>
  )
}

export default QuotesUsers