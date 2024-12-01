import React from 'react'
import quotes from '/Users/mrnt03/fcc/quotes.json'
import colors from '/Users/mrnt03/fcc/color.js'



export default function App(){

  const [randNumb, setRandNumb] = React.useState(Math.floor(Math.random() * (quotes.length + 1)))

  const [randColor, setRandColor] = React.useState(Math.floor(Math.random() * (colors.length + 1)))

  function randomizerQuote(){
        setRandNumb(Math.floor(Math.random() * (quotes.length + 1)));
        randomizerColor();
  }

  function randomizerColor(){
    setRandColor(Math.floor(Math.random() * (colors.length + 1)));
}

  return(
    <>
      <div className='container-center' style={{backgroundColor: colors[randColor],
      transition: 'background-color 1s ease-in-out'}}>
        <div id="quote-box">
        <div className="text-area">
          <p id="text" style={{color: colors[randColor],
      transition: '1s ease-in-out'}}>''{quotes[randNumb].quote}</p>
           <p id="author" className="author" style={{color: colors[randColor],
      transition: '1s ease-in-out'}}>- {quotes[randNumb].author}</p>
      </div>
      <a id="tweet-quote" href="twitter.com/intent/tweet" target = "_blank" >
           <button className = "icon" style={{backgroundColor: colors[randColor],
      transition: '1s ease-in-out'}}>
              <i class="fab fa-twitter"></i>
              </button>
              </a>
              
           <a id="tumblr">
            <button className="icon" style={{backgroundColor: colors[randColor],
      transition: '1s ease-in-out'}}>
              <i class="fab fa-tumblr"></i>
              </button>
              </a>
           <button onClick={randomizerQuote} 
           id="new-quote"
           style={{backgroundColor: colors[randColor],
            transition: '1s ease-in-out'}}
            >New Quote</button>
           
        </div>
      </div>
    </>
  )
}

