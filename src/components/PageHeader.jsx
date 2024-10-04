import React from 'react'


export default function PageHeader({title, img}) {
  return (
    <div className="relative w-full mb-4">
  <img
    src={img}
    alt="page-header-img"
    className="w-full object-cover lg:h-[400px] md:h-[300px] h-[200px]"
  />

  <div className="absolute inset-0 flex items-center justify-center">
    <p className="text-white text-[20px] md:text-[50px] font-bold"> <i>{title} </i></p>
  </div>
</div>

  )
}
