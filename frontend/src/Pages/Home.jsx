import React from 'react'
import Hero from '../Components/Hero'
import Mostpicked from '../Components/Mostpicked'
import PopularRooms from '../Components/PopularRooms'

const Home = () => {
  return (
    <div className='py-24'>
      <Hero />
      <Mostpicked />
      <PopularRooms />
    </div>
  )
}

export default Home