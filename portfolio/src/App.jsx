import React from 'react'
import Header from './components/Header/header'
import Nav from './components/Nav/nav'
import About from './components/About/about'
import Experience from './components/Experience/experience'
import Portfolio from './components/portfoilio/portfolio'
import Testimonial from './components/Testimonial/testimonial'
import Contact from './components/Contact/contact'
import Footer from './components/Footer/footer'


const app = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  )
}

export default app