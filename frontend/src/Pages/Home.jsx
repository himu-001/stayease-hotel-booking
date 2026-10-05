import React from 'react'
import Hero from '../Components/Hero'
import Mostpicked from '../Components/Mostpicked'
import PopularRooms from '../Components/PopularRooms'
import Testimonials from '../Components/Testimonials'
import { NewsLetter } from '../Components/NewsLetter'

const Home = () => {
  return (
    <div className='py-24'>
      <Hero />
      <Mostpicked />
      <PopularRooms />
      <Testimonials />
      <NewsLetter />
    </div>
  )
}

export default Home