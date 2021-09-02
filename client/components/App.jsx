import React from 'react'
import { Route } from 'react-router'
import News from './News'

const App = () => {
  return (
    <>
      <h1>The Daily Vibration</h1>
      <Route path='/' component={News}/>
    </>
  )
}

export default App
