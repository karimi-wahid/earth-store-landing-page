import { BiCartAdd } from 'react-icons/bi'
import {cardPosters} from '../constants/index'

const ShopCard = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-0 my-10 z-50'>
        {cardPosters.map((poster, index) => (
        <div className='w-full relative' key={index}>
            <div className='overflow-hidden w-[95%]'>
        <img src={poster.imgUrl}
        className='md:h-[250px] w-[90%] relative hover:scale-125 duration-200' />
        </div>
            <div>
                <p className='font-[12px] text-neutral-500 mt-2 lg:mt-0'>{poster.type}</p>
                <h1 className='font-semibold'>{poster.title}</h1>
                <p className='text-neutral-600'>${poster.price}</p>
            </div>
            <BiCartAdd size={50} className='absolute top-0 right-16 cursor-pointer md:right-10 hover:bg-green-600  p-2 rounded-full hover:text-white text-green-600'/>
        </div>
        ))}
    </section>
  )
}

export default ShopCard