import { useState } from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import Loader from './components/loader/Loader'
import ScrollToTop from 'react-scroll-to-top'

function App() {
  const [loader, setLoader] = useState(true)

  setInterval(() => {
    setLoader(false)
  }, 4000)
  return (
    <>
      {loader ? <Loader /> :
        <div className='body'>
          <Hero />
        </div>
      }

      <ScrollToTop style={{ borderRadius: '8px', }} smooth />
    </>

  )
}

export default App
