import React from 'react'
import { Why } from './Why'

export const About = () => {
  return (
    <>
      <div className='w-full h-full py-12'>
        <h1 className='text-[3.5vw] font-bold text-gray-800 text-center'>Welcome to Biolife store!</h1>

        <div className='w-full flex items-center relative pt-[5rem]'>
          <img src="./image/about-us/bn01.png" alt="" className='w-[50vw]' />
          <div className='w-[50vw] h-2/4 bg-[#ffffffc9] rounded-md shadow-md py-6 px-4 absolute left-[18rem]'>
            <p className=' text-gray-700'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,</p>

            <p className='pl-4 pt-3 text-red-500 italic'>“There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.”</p>
          </div>
        </div>

        <div className='w-full h-full bg-slate-50 text-center pt-[5rem]'>
          <h1 className='text-[4vw] font-bold'>Why Choose us</h1>
          <p className='text-sm text-gray-700 italic'>Natural food is taken from the world's most modern farms with strict safety cycles</p>

          <div className='w-full h-screen flex items-center gap-4 my-6 px-6'>
            <div className="w-3/4 h-full">
              <Why />
            </div>
            <div className="w-full h-full object-cover">
              <img src="./image/about-us/bn04.jpg" alt="" />
            </div>
            <div className="w-3/4 h-full ">
              <Why />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
