import React from 'react'
import { testimonialData } from '../constants'

const Testimonial = () => {
  return (
    <section className='my-10'>
        <h1 className='text-2xl font-[600] mb-5'>What Our Customers Says</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
            {testimonialData.map((person,index) => (
            <div className='w-[350px] p-5' key={index}>
                <p className='text-neutral-600 mb-5'><span className='text-4xl text-green-600'> &quot; </span><br />{person.text}</p>
                <img src={person.imgUrl} alt={person.name}
                className='rounded-full mb-3' />
                <h1 className='text-[14px] font-[600]'>{person.name}</h1>
            
            </div>
            ))}
        </div>
    </section>
  )
}

export default Testimonial