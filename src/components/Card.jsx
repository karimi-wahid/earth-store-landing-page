import { cardPosters } from "../constants"

const Card = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-0 my-10 z-50'>
        {cardPosters.map((poster, index) => (
        <div className='w-full' key={index}>
        <img src={poster.imgUrl}
        className='md:h-[400px] w-[90%]' />
            <div>
                <p className='font-[12px] text-secondary mt-2 lg:mt-0'>{poster.type}</p>
                <h1 className='font-semibold'>{poster.title}</h1>
                <p className='text-secondary'>${poster.price}</p>
            </div>
        </div>
        ))}
    </section>
  )
}

export default Card