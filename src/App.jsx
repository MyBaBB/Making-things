// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import Sidenav from './components/Sidenav'
import CountdownTimer from './components/CountdownTimer'

function App() {

  return (
    <div className=' BodyWrapper flex justify-center align-top flex-col'>
      <div className='block top-2 border-2  border-red-500 w-fit' >
        <Sidenav />
      </div>
      <div className='block top-2 border-2 border-green-400 w-fit '>
        <CountdownTimer />
      </div>
    </div>
  )
}

export default App

