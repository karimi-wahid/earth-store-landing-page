import React from 'react'
import { BiSearch } from 'react-icons/bi'
import Card from '../components/Card'
import ShopCard from '../components/ShopCard'

const Shop = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 my-10 pt-10 px-5 gap-5'>
        <div className='col-span-1 md:border-r border-neutral-400'>
            <form className='flex items-center mb-10'>
                    <input type="text" placeholder='Search Products...'
                    className='py-2 px-2 outline-none border-neutral-300 border mr-3' />
                    <button className='px-3 py-2 bg-green-600 text-white'><BiSearch size={20} /></button>
                
            </form>
            <div className='text-green-600'>
                <h1 className='text-xl mb-5'>Categories</h1>
                <p>PostCards (5)</p>
                <p>Posters (5)</p>
            </div>
        </div>
        <div className='col-span-2'>
            <h1 className='text-4xl font-semibold mb-10 text-green-600'>Shop</h1>
            <div className='w-full flex justify-between items-center text-neutral-500'>
                <p>Showing all 12 results</p>
                <select name="" id="" className='outline-none'>
                    <option value="default">Default sorting</option>
                    <option value="lowToHigh">sort price low to high</option>
                    <option value="highToLow">sort price high to low</option>
                </select>
            </div>
            <ShopCard />
        </div>
    </div>
  )
}

export default Shop