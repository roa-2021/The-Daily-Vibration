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
            <Link to='/news/business'>Business</Link>
            <Link to='/news/tech'>Tech</Link>
            <Link to='/news/politics'>Politics</Link>
            <Link to='/news/food'>Food</Link>
            <Link to='/news/health'>Health</Link>
          </nav>
        </div>
      </header>
      <div className="container-main">
        <Route path='/' component={Forms} />
        <Route exact path='/' component={News} />
        <Route exact path='/news/:id' component={Other} />
      </div>
    </>
  )
}

export default App
