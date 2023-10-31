import React from 'react'
import QuoteGenerator from './QuoteGenerator/QuoteGenerator'

const App = () => {
const URL = `https://api.adviceslip.com/advice`

  return (
    <div className='flex w-full h-[100vh] justify-center items-center'>
      <QuoteGenerator url={URL}/>
    </div>
  )
}

export default App