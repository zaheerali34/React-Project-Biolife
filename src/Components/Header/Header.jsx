import React, { useRef } from 'react'
import { Home } from "../Home/Home"

export const Header = () => {
  const ref = useRef();

  const header = (()=> {
    ref.current
  })

  return (
   <>
     <header ref={header} className='w-full h-[12rem] bg-[url("./image/bg_header-01.png")] bg-cover bg-center bg-no-repeat z-50 relative mt-4 flex items-center justify-between px-12'>
      <div className="w-[10rem]">
        <img src="./image/logo.png" alt="" />
      </div>

      <nav className='flex'>
        <ul className='flex items-center gap-5 cursor-pointer'>
          <li className='font-semibold text-md hover:text-green-500 transition'>Home</li>
          <li className='font-semibold text-md hover:text-green-500 transition'>About</li>
          <li className='font-semibold text-md hover:text-green-500 transition'>Shop</li>
          <li className='font-semibold text-md hover:text-green-500 transition'>Blog</li>
          <li className='font-semibold text-md hover:text-green-500 transition'>Contact</li>
        </ul>

        <div className='w-[1.5rem] cursor-pointer ml-[5rem]'>
        <img src="./image/shopping-cart.png" alt="" />
      </div>
      </nav>
    </header>
    <Home />
   </>
  )
}
