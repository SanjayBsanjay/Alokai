import React from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Banner from '../Components/Banner'
import Footer from '../Components/Footer'
import ScrollToTopButton from '../Components/ScrollToTopButton'

const Home = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <Banner/>
        <ScrollToTopButton />
        <Footer/>
    </div>
  )
}

export default Home