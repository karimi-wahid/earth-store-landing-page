import React from 'react'

const GetInTouchForm = () => {
  return (
    <section className='w-[70%] flex justify-center  flex-col '>
        <h1 className='text-3xl font-[600] my-10'>Get In Touch</h1>
        <form className='w-full flex flex-col bg-neutral-100 p-5 space-y-5'>
            <input type="text" placeholder='Full name' name='fullName' required className='w-full border-neutral-300 border py-3 outline-none px-3'/>
            <input type="text" placeholder='Phone Number' name='PhoneNo' required className='w-full border-neutral-300 border py-3 outline-none px-3'/>
            <input type="text" placeholder='Email' name='email' required className='w-full border-neutral-300 border py-3 outline-none px-3'/>
            <textarea name="msg" required className='w-full h-40 border-neutral-300 border py-3 outline-none px-3'></textarea>
            <button className='px-3 py-2 w-[30%] bg-green-600 text-white hover:bg-green-700 items-start'>SEND NOW</button>
        </form>
    </section>
  )
}

export default GetInTouchForm