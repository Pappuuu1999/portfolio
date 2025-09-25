import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWork from './Components/MyWork/MyWork'
import ContactUs from './Components/ContactUs/ContactUs'
import Footer from './Components/Footer/Footer'
import WorkDetail from './Components/WorkDetail/WorkDetail'

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={
            <>
              <Navbar/>
              <Hero/>
              <About/>
              <Services/>
              <MyWork/>
              <ContactUs/>
              <Footer/>
            </>
          } />
          <Route path="/work/:category" element={
            <>
              <Navbar/>
              <WorkDetail/>
              <Footer/>
            </>
          } />
        </Routes>
      </div>
    </Router>
  )
}

export default App
