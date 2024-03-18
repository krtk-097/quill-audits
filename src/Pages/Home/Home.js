import React from 'react'
import './home.css'
import Navbar from '../../Components/Resources/NavbarSection/Navbar'
import HeroSection from '../../Components/Resources/HeroSection/HeroSection'

const LandingPage = () => {
  return (
    <div className='landing-page-container lg:px-32'>
    <Navbar/>
    <hr className='bg-white opacity-20 h-0.5 hidden md:block' />
    <HeroSection/>
    </div>
  )
}

export default LandingPage