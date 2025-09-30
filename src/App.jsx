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
        <Navbar/>
        <Routes>
          <Route path="/" element={
            <>
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
              <WorkDetail/>
              <Footer/>
            </>
          } />
          <Route path="/workdetail" element={<WorkDetail />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
