import React from 'react'
import {projectData} from '../data'

console.log(projectData)

export default function Banner() {


  return (
    <div>

    <div className='justify-center items-center flex flex-col'>
        
          <p className='py-10 text-3xl font-bold'>Buy EveryThing From Us</p>  
        <ul className='flex flex-wrap space-x-20'>

            <li  className='shadow-lg shadow-gray-500 bg-yellow-300 w-20 md:w-40 flex justify-center p-4 font-medium '>Cloth</li>
            <li className='bg-yellow-300 shadow-lg shadow-gray-500  p-4 w-20 md:w-40 flex justify-center font-medium'>Bag</li>
            <li className='bg-yellow-300 shadow-lg shadow-gray-500 p-4 w-20 md:w-40 flex justify-center font-medium'>Wig</li>
            <li className='bg-yellow-300 shadow-lg shadow-gray-500 p-4 w-20 md:w-40 flex justify-center font-medium'>Shoe</li>
        </ul>
    </div>

    <div className='flex max-w-[1000px] m-auto justify-center p-10 items-center mt-20 gap-5 flex-wrap'>
        {projectData.map((items, id) => (
            <div key={id} className='bg-gray-200 shadow-lg p-[2px] flex flex-col justify-center items-center'>
                
                  <img 
                src={items.imgUrl} 
                className='w-[200px] h-[200px]' 
                alt={items.name} /> 

                <div className='flex '>
                 <p className='p-4'>{items.name}</p>    
                 <p className='p-4 font-bold'>$ {items.price}</p>    
                </div>

                
               
                
            </div>
        ))}
    </div>

    <div className='justify-center mt-10 flex items-center'>
       <button className='bg-blue-600 uppercase font-bold p-4 px-10 rounded-md text-gray-200'>Browse More Collection</button> 
    </div>

    

    </div>
  )
}
