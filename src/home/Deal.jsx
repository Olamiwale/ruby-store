import React from 'react'
import DealW from '../assets/dealW.png'



export default function Deal() {
  return (
    <div className='bg-red-500 mt-5 md:flex items-center justify-between lg:px-[100px] md:px-[50px] px-10 py-10 '>
      <div>

        <div>
            <p className=' lg:text-[40px] md:text-[30px] font-bold uppercase text-black'>deal of the week</p>
        <p className='lg:text-4xl md:text-3xl font-semibold py-4 md:flex hidden'>Brand New High Quality Leather Bag </p> 
        
        </div>
       

         <div className='bg-white md:py-3 rounded-lg shadow-black px-6 flex justify-between w-[300px] items-center mt-8 shadow-lg mb-10'>
            <div className='flex flex-col justify-center items-center font-normal'>
                <p className='md:text-3xl'>05</p>
                <p>Days</p>
            </div>
            <div className='flex flex-col justify-center items-center font-normal'>
                <p  className='md:text-3xl '>12</p>
                <p>Hours</p>
            </div>
            <div className='flex flex-col justify-center items-center font-normal'>
                <p className='md:text-3xl'>25</p>
                <p>Minutes</p>
            </div>

            <div className='flex flex-col justify-center items-center font-normal'>
                <p className='md:text-3xl'>25</p>
                <p>Seconds</p>
            </div>
          
         </div>

         <button className='font-semibold uppercase p-4 mt-10 bg-red-600 text-white md:flex hidden'>Get 50% oFF</button>
      </div>

      <div className='justify-center flex'>
        <img src={DealW} alt='deal-of-week' className='lg:w-[300px] md:w-[250px] w-[250px]' />
      </div>

      <button className='font-semibold uppercase p-4 mt-10 bg-red-600 md:hidden text-white'>Get 50% oFF</button>

      
    </div>
  )
}
