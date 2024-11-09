import React from 'react'
import InfoSection from '../components/InfoSection'
import GetInTouchForm from '../components/GetInTouchForm'
import TalkToUs from '../components/TalkToUs'

const Contact = () => {
  return (
    <div>
        <InfoSection label={'Contact Us'} />
        <div className='grid grid-cols-1 lg:grid-cols-2 place-items-center gap-5 bg-neutral-100'>
        <GetInTouchForm />
        <TalkToUs />
        </div>
    </div>
  )
}

export default Contact