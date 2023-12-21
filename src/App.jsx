import { useState } from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import Loader from './components/loader/Loader'

function App() {
  const [loader, setLoader] =useState(true)

  setInterval(()=>{
    setLoader(false)
  }, 4000)
  return (
    <>
    {loader? <Loader/>:
    <div className='body'>
      <Hero/>
    </div>        
    }
    </>

  )
}

export default App
