import { useState } from 'react'
import quotes from './json/quotes.json'
import colors from './utils/colors'
import './App.css'
import QuotesUsers from './components/QuotesUsers'
import AuthorUsers from './components/AuthorUsers'
import ButtonUsers from './components/ButtonUsers'

function App() {

  const getRandomElement = arr => {
  const indexRandom = Math.floor(Math.random() * arr.length)
  return arr[indexRandom]
 
  }
 
  let quoteRandom = getRandomElement(quotes);
  let colorRandom = getRandomElement(colors);


     const [randomQuote, setRandomQuote] = useState(quoteRandom)
     const [randomColor, setRandomColor]= useState(colorRandom)

  
     const objectBgStyle = {
     backgroundColor:randomColor
     }

     const getRandomAll = () => {
       quoteRandom = getRandomElement(quotes);
       colorRandom = getRandomElement(colors);

       setRandomQuote(quoteRandom)
       setRandomColor(colorRandom)
     } 


  return (
    <div className="App" style={objectBgStyle}>
      <div className="container">
      <QuotesUsers randomQuote={randomQuote} randomColor={randomColor} getRandomAll={getRandomAll}/>
      <AuthorUsers randomQuote={randomQuote} randomColor={randomColor} getRandomAll={getRandomAll}/>
      <ButtonUsers randomColor={randomColor} getRandomAll={getRandomAll}/>
      </div>
      
    </div>
  )
}

export default App
