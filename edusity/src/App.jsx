import React, { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Program from './components/Programs/Program'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import axios from "axios";

const App = () => {

 

  return (
    <div >
      <Navbar/>
      <Hero/>
      <Title head1 = "Our Program" head2="What we offer"/>
      <Program/>
      <About/>
      <Title head1 = "Gallery" head2="Campus Photos"/>
      <Campus/>
      <Title head1 = "Testimonials" head2 = "What student Says"/>
      <Testimonials/>
      <Title head1 = "Contact Us" head2="Get in Touch"/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
