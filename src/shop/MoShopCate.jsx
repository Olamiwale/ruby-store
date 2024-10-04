import React from 'react'

export default function MoShopCate() {
  return (
    
          <div className='lg:w-1/3 md:w-1/3 md:hidden block bg-gray-200 p-4 shadow-sm '>
       <div className='flex justify-center'>
          <input 
          type='text'
           className='p-3 w-full shadow-lg rounded-md' 
          placeholder='Search' />
       </div>

       <ul className='flex space-x-5 mt-10 p-2'>
        <li className='bg-slate-200  p-4 shadow-lg shadow-gray-400 hover:bg-yellow-300 rounded-md'>All Products</li>
        <li className='bg-slate-200  p-4 shadow-lg shadow-gray-400 hover:bg-yellow-300 rounded-md'>Native Gown</li>
        <li className='bg-slate-200  p-4 shadow-lg shadow-gray-400 hover:bg-yellow-300 rounded-md'>Shoe</li>
        <li className='bg-slate-200  p-4 shadow-lg shadow-gray-400 hover:bg-yellow-300 rounded-md'>Bag</li>
        <li className='bg-slate-200  p-4 shadow-lg shadow-gray-400 hover:bg-yellow-300 rounded-md'>Wig</li>
      
      
       </ul>
    </div>
    
  )
}
