import React from 'react'
import { Link } from 'react-router-dom'

export default function FormContainer() {
  const className = "max-w-[1120px]  w-[90vw] py-[1rem] m-auto";
  return (
    <div className={`${className}`}>
<div className='bg-yellow-100 text-center p-4 mb-4 rounded-md'>your store isnt live yet. no worries! you can now renew your subscription <button className='text-violet-300'>here</button></div>
    <div className='flex items-center gap-3'>
      <Link to="thumbnail" className='font-semibold'>thumbnail</Link>
      <Link to="checkoutPage" className='font-semibold' >checkout page</Link>
      <Link to="option"  className='font-semibold'>options</Link>
    </div>
    
<form className='mt-6'>
  <div className='flex flex-col'>
<label className='flex gap-2 mb-4 font-semibold'>
  <span className='w-[1.5rem] h-[1.5rem] grid place-items-center bg-violet-300   rounded-full'>1</span>
  <span>select image</span>
  </label>
<div className='border grid place-content-center w-[600px] p-4 border-stone-300 rounded-md'>
<p className='text-center mb-0 text-stone-500 font-semibold text-sm capitalize'>drag your images here</p>
  <input type='file' accept='image/*' id='file-input'  className='m-auto ' />
</div>
  </div>


  <div className='flex flex-col'>
<div className='flex gap-2 mb-4 font-semibold'>
  <span className='w-[1.5rem] h-[1.5rem] grid place-items-center bg-violet-300   rounded-full'>1</span>
  <span>write description</span>
  </div>
<div className='flex w-[600px] flex-col gap-2'>
<label className=' mb-0 text-stone-500 font-semibold text-sm capitalize'>description title</label>
  <input type='text'  id='' placeholder='personalized video response'  className='bg-stone-200 p-2 rounded-md' />
</div>
  </div>
</form>
    
    </div>
  )
}
