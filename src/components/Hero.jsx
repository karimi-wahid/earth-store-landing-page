import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className='flex justify-center items-center flex-col space-y-5 bg-center bg-cover md:h-screen h-[70vh]'   
    style={{   
      backgroundImage: `url('https://images.pexels.com/photos/6872132/pexels-photo-6872132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,   
      backgroundRepeat: 'no-repeat',   
      backgroundSize: 'cover'   
    }}>
        <h1 className='text-8xl tracking-widest text-green-800'>EARTH</h1>
        <p className='text-2xl font-[500] uppercase lg:tracking-[15px]'>Multipurpose Store</p>
        <button className='px-5 w-40 py-3 bg-green-700 text-white hover:bg-green-800 hover:text-white'>
            <Link to='#'>
            SHOP NOW
            </Link>
        </button>
    </section>
  )
}

export default Hero