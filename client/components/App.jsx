import React from 'react'
import { Route, Link } from 'react-router-dom'
import News from './News'
import Forms from './Forms'
import Other from './Other'

const App = () => {
  return (
    <>
      <header>
        <div className='container-header'>
          <div className='container-banner'>
            <img
              className='slytherin-crest'
              src='/images/slytherin_crest.png'
            />
            <h1>The Daily Vibration</h1>
            <img
              className='slytherin-crest'
              src='/images/slytherin_crest.png'
            />
          </div>
          <nav>
            <div className='nav-item-container'>
              <Link to='/news/business'>Business</Link>
            </div>
            <div className='nav-item-container'>
              <Link to='/news/tech'>Tech</Link>
            </div>
            <div className='nav-item-container'>
              <Link to='/news/politics'>Politics</Link>
            </div>
            <div className='nav-item-container'>
              <Link to='/news/food'>Food</Link>
            </div>
            <div className='nav-item-container'>
              <Link to='/news/health'>Health</Link>
            </div>
          </nav>
        </div>
      </header>
      <Route path='/' component={Forms} />
      <Route exact path='/' component={News} />
      <Route exact path='/news/:id' component={Other} />
    </>
  )
}

export default App
