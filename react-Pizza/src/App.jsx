import React from 'react'
import Navbar from './navbar'
import Hero from './hero'
import About from './about'
import Types from './types'
import Footer from './footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Types />
      <Footer />
    </div>
  )
}

export default App