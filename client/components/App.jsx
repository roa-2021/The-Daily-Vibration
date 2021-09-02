import React from 'react'
import { Route } from 'react-router'
import News from './News'
import Forms from './Forms'

const App = () => {
  const slytherinCrest = <img className="slytherin-crest" src='/images/slytherin_crest.png' />
  return (
    <>
      <h1>{slytherinCrest}The Daily Vibration{slytherinCrest}</h1>
      <Forms />
      <Route path='/' component={News}/>

    </>
  )
}

export default App
