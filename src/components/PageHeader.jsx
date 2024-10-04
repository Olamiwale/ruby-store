import React from 'react'
import Himg from '../assets/pageH-bg.png'

export default function PageHeader() {
  return (
    <div className="relative w-full mb-4">
  <img
    src={Himg}
    alt="page-header-img"
    className="w-full object-cover lg:h-[400px] md:h-[300px] h-[200px]"
  />

  <div className="absolute inset-0 flex items-center justify-center bg-red-400 bg-opacity-40">
    <p className="text-white text-[20px] md:text-[50px] font-bold"> <i>Welcome to our Amazing Store </i></p>
  </div>
</div>

  )
}
