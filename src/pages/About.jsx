import React from 'react'
import {cardPosters} from '../constants/index'
import InfoSection from '../components/InfoSection'
import Mission from '../components/Mission'
import GiftPostCard from '../components/GiftPostCard'
import Card from '../components/Card'

const About = () => {
  return (
    <div>
        <InfoSection label={"Who Are We ?"}/>
        <div className='flex items-center justify-center px-5'>
        <Card cardPosters={cardPosters}/>
        </div>
        <Mission />
        <GiftPostCard />
    </div>
  )
}

export default About