import React from 'react'
import { contactUs } from '../constants'


const TalkToUs = () => {
  return (
    
    <div className='w-2/4 my-10 space-y-5'>
        <h1 className='text-2xl font-[600]]'>Talk To Us</h1>
        {contactUs.map((item, index) => ( 
        <div className='flex items-center gap-5' key={index}>
            {item.icon}
            <p>
                <span className='text-neutral-500  text-xl block'>{item.type}</span>
                <span className='text-2xl text-green-600'>{item.connect}</span>
            </p>
        </div>
        ))}
    </div>
  )
}

export default TalkToUs