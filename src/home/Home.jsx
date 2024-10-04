import React from 'react'
import HomeMb from '../assets/homeMobile.png';
import homeBg from '../assets/home-bgg.png';
import backG from '../assets/pageH-bg.png';
import Banner from './Banner'
import Deal from './Deal'


/*  */



export default function Home() {
  return (
    <div className="bg-cover bg-center w-full" > 
    <div className='h-screen md:mt-[-30px] flex flex-col md:flex-row justify-center items-center px-10 bg-gradient-to-r from-gray-300 to-gray-200 w-full' >


      <div className='md:flex'>
         <section className='w-full flex justify-center flex-col items-center space-y-10'>
        
        <div className='flex justify-center flex-col items-center space-y-6'>
          <p className='text-[60px]'><i>Let Style You</i></p>
          <p className='lg:text-3xl font-extralight flex text-center md:text-2xl'>Style is a way who say you are without having to speak</p>
        </div>

        <div>
          <input 
          className='bg-gray-200 p-4 w-[400px] text-center rounded-full' 
          type='text' 
          placeholder='Search for your favourite design' />
        </div>
      </section>




      <section className='w-full flex justify-center space-x-10 pt-20'>

        <img src={homeBg} className='md:w-[350px] w-40' alt='home-bg'/>
        <img src={HomeMb} className='md:w-[350px] w-40 md:hidden' alt='home-bg'/>
        <img src={HomeMb} className='md:w-[350px] w-40 md:hidden' alt='home-bg'/>
       
        
      </section>
      </div>

     
     
    </div>
    
     <Banner />
     <Deal />
    </div>
  )
}
