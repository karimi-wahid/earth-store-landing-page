import React from 'react'
import { servicesData } from '../constants';

const Services = () => {
  return (
    <section className='h-full md:h-[40vh] grid grid-cols-1 md:grid-cols-3 place-items-center my-10'>
        {servicesData.map((service, index) => (
        <div className='p-10 flex items-center gap-5' key={index}>
            <div className='bg-green-700 rounded-full p-2 text-white'>
                {service.icon}
            </div>
            <div>
                <h1 className='text-[16px] font-[600]'>{service.title}</h1>
                <p className='text-[14px] text-neutral-600'>{service.text}</p>
            </div>
        </div>
        ))}
    </section>
  )
}

export default Services