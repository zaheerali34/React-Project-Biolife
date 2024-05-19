import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import { Maun } from './Maun';

export const Header = () => {

  return (
    <>
      <header className='w-full h-[12rem] bg-[url("./image/bg_header-01.png")] bg-cover bg-center bg-no-repeat z-40 relative mt-4 flex items-center justify-between px-12'>
        <div className="w-[10rem]">
          <Link to={"/"}>
            <img src="./image/logo.png" alt="" />
          </Link>
        </div>

        <div className='w-1/2 h-12 flex items-center justify-between gap-1 mx-12 bg-white px-4 border-2 border-gray-300 rounded-full'>
          <input type="text" placeholder='Search here...' className=' border-none outline-none w-full text-sm' />
          <img src="./image/search.png" alt="" className='w-5' />
        </div>

        <nav className='flex'>
          <ul className='flex items-center gap-5 cursor-pointer'>
            <Link to={"/"}>
              <li className='font-semibold text-md hover:text-green-500 transition'>Home</li>
            </Link>

            <Link to={"/about"}>
              <li className='font-semibold text-md hover:text-green-500 transition'>About</li>
            </Link>

            <Link to={"/shop"}>
              <li className='font-semibold text-md hover:text-green-500 transition'>Shop</li>
            </Link>

            <Link to={"/blog"}>
              <li className='font-semibold text-md hover:text-green-500 transition'>Blog</li>
            </Link>
            <Link to={"/contact"}>
              <li className='font-semibold text-md hover:text-green-500 transition'>Contact</li>
            </Link>
          </ul>

          <div className='w-[1.5rem] cursor-pointer ml-[5rem]'>
            <img src="./image/shopping-cart.png" alt="" />
          </div>
        </nav>
      </header>
      <Maun />
      <Outlet />
    </>
  )
}
