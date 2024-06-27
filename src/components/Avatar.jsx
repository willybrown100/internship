import React from 'react'
import { FaInstagram, FaTiktok } from 'react-icons/fa'

const Avatar = () => {
  return (
    <div className='flex bg-white p-2 rounded-md gap-2'>
        <div>
        <img src='\images\pexels-photo-106399.jpeg' className='h-[5rem] w-[5rem] rounded-md' alt='img' />
        </div>
        <div className='flex flex-col gap-2'>
        <h4 className='mb-0 text-stone-600'>name</h4>
        <h4 className='mb-0 text-stone-600'>rohit45</h4>
        <div className='flex'>
        <FaTiktok className="border rounded-md"/>
        <FaInstagram className="border rounded-md"/>
        </div>
        </div>
    </div>
  )
}

export default Avatar