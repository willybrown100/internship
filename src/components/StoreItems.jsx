import React from 'react'
import Avatar from './Avatar'
import { useQuery } from '@tanstack/react-query'
import { getData } from '../services/productApi'
import PerItem from './PerItem'
import { Link } from 'react-router-dom'

export default function StoreItems() {
const {data=[],isLoading} = useQuery({
    queryKey:["products"],
    queryFn:getData,
    
})
console.log(data)

  return (
    <div className='flex mt-8 flex-col gap-y-4'>
  <Avatar/>
 <ul>
    {isLoading&&<p>loading...</p>}
{data.map((items)=><PerItem items={items} key={items.id}/>)}
    </ul>      
<Link to="/form" className='bg-violet-600 p-2 text-center rounded-md text-white font-semibold capitalize'>  add products</Link>

    </div>
  )
}
