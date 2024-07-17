import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Photos from './Components/Photos/Photos'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Photos/>
      <About/>
      <Contact/>
    </div>
  )
}

export default App
