import React from 'react'
import InfoSection from '../components/InfoSection'
import Mission from '../components/Mission'
import GiftPostCard from '../components/GiftPostCard'
import Card from '../components/Card'

const About = () => {
  return (
    <div>
        <InfoSection label={"Who Are We ?"}/>
        <Card />
        <Mission />
        <GiftPostCard />
    </div>
  )
}

export default About