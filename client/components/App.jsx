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
            <img className='slytherin-crest' src='/images/slytherin_crest.png' />
            <h1>The Daily Vibration</h1>
            <img className='slytherin-crest' src='/images/slytherin_crest.png' />
          </div>
          <nav>
            <div className='nav-item-container'>Business</div>
            <div className='nav-item-container'>Tech</div>
            <div className='nav-item-container'>Politics</div>
            <div className='nav-item-container'>Food</div>
            <div className='nav-item-container'>Health</div>
          </nav>
        </div>
      </header>
      <Forms />
      <Route path='/' component={News} />
    </>
  )
}

export default App
