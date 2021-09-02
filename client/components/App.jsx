import React from 'react'
import { Route } from 'react-router'
import News from './News'
import Forms from './Forms'


const App = () => {
  return (
    <>
      <h1>The Daily Vibration</h1>
      <Forms />
      <Route path='/' component={News}/>

    </>
  )
}

export default App
