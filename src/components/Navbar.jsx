import React, {useState} from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

  const [nav, setNav] = useState(false)
  const [shadow, setShadow] = useState(false)

  const toggle = () => {
    setNav(!nav)
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  })

  return (
    <nav className={!shadow ? 'sticky z-50 top-0 bg-gradient-to-r from-gray-300 to-gray-200 w-full py-8' : 'sticky z-50 bg-gradient-to-r from-gray-300 to-gray-200 w-full top-0 shadow-lg shadow-black/30 py-8'}>
      <div className='flex justify-between m-auto lg:w-[800px] md:w-[600px] items-center'>
        <p className='font-extrabold mx-[30px]'>MapByRuby</p>
       <ul className='md:flex space-x-10 hidden text-xl font-semibold'>
        <Link to='/'>  <li className='cursor-pointer'>Home</li>
        </Link>
      
        <Link to='/shop'>
         <li className='cursor-pointer'>Shop</li>
        </Link>

        <Link to='/about'>
          <li className='cursor-pointer'>About</li>
        </Link>
       
      
        <Link to='/contact'> <li className='cursor-pointer'>Contact</li>
        </Link>
       
       </ul>

       <div className='flex md:hidden bg-red-600 p-2 cursor-pointer mx-[30px]' onClick={toggle}>
        {!nav ? <div>Open</div> : <div>Close</div> }
       </div> 

       <div className={nav ? 'fixed bg-red-400 top-[10%] left-0 w-full' : 'hidden'}>
        <ul className='space-y-5 p-5'>
        <li className='cursor-pointer'>Home</li>
        <li className='cursor-pointer'>Shop</li>
        <li className='cursor-pointer'>About</li>
        <li className='cursor-pointer'>Contact</li>
       </ul>
       </div>

       



       
      </div>
    </nav>
  )
}
