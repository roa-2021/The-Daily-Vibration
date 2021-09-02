import React from 'react'
import { Route } from 'react-router'
import News from './News'
import Forms from './Forms'

const App = () => {
  return (
    <>
      <header>
        <div>
          <img className='slytherin-crest' src='/images/slytherin_crest.png' />
          <h1>The Daily Vibration</h1>
          <img className='slytherin-crest' src='/images/slytherin_crest.png' />
        </div>
      </header>
      <Forms />
      <Route path='/' component={News} />
    </>
  )
}

export default App
