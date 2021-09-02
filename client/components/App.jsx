import React from 'react'
import { Route } from 'react-router-dom'
import News from './News'
import Forms from './Forms'

const App = () => {
  return (
    <>
      <header>
        <div className='container-header'>
          <div className='container-banner'>
            <img className='sqlytherin-crest' src='/images/slytherin_crest.png' />
            <h1>The Daily Vibration</h1>
            <img className='slytherin-crest' src='/images/slytherin_crest.png' />
          </div>
        </div>
      </header>
      <Forms />
      <Route path='/' component={News} />
    </>
  )
}

export default App
