// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import Sidenav from './components/Sidenav'
import CountdownTimer from './components/CountdownTimer'
import Frank from './components/Frank'
function App() {

  return (
    <div className='BodyWrapper flex justify-center'>
      <div className='block top-2 border-2 border-red-500 w-3/12'>
        <Sidenav />
      </div>
      <div className='block top-2 border-2 border-green-400 w-3/12'>
        <CountdownTimer />
      </div>
      <div>
        <Frank />
      </div>
    </div>
  )
}

export default App

