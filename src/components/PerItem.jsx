import React from 'react'
import { FaBorderNone } from 'react-icons/fa'

export default function PerItem({items}) {
  return (
    <li className='flex bg-white mb-2 p-2 rounded-md items-center gap-2'>
        <FaBorderNone />
<img src={items.images} alt='img' className='w-[4rem] h-[4rem]'/>
<div>
<h4 className='text-stone-600 font-semibold'>{items.productName}</h4>
<h4 className='font-semibold text-stone-500'>{items.price}</h4>
</div>
    </li>
  )
}
