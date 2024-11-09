import React, { useState } from 'react'
import Hero from '../components/Hero'
import Card from '../components/Card'
import Testimonial from '../components/Testimonial'
import GiftPostCard from '../components/GiftPostCard'
import Services from '../components/Services'
import SideBarCart from '../components/SideBarCart'

const Home = () => {

  return (
    
    <main className='relative'>
      <Hero/>
      <div className='grid place-items-center px-10'>
      <Card />
      <Testimonial />
      </div>
      <GiftPostCard />
      <div className='grid place-items-center px-10'>
        <Services />
      </div>
    </main>
    
  )
}

export default Home