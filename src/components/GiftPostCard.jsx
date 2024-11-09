import React from 'react'
import { Link } from 'react-router-dom'

const GiftPostCard = () => {
  return (
    <section className='flex justify-center items-center flex-col space-y-5 bg-center bg-cover h-[50vh] md:h-[60vh] text-center'   
    style={{   
      backgroundImage: `url('https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Contact-Banner.jpg')`,   
      backgroundRepeat: 'no-repeat',   
      backgroundSize: 'cover'   
    }}>
        <h1 className='text-2xl md:text-4xl uppercase text-green-800'>Give the Gift of a Postcard</h1>
        <p className='uppercase'>Give the gift of a lasting memory with a postcard</p>
        <button className='px-5 py-3 bg-green-700 text-white hover:bg-green-800 hover:text-white'>
            <Link to='#'>
            PURCHASE A POSTCARD
            </Link>
        </button>
    </section>
  )
}

export default GiftPostCard