import React from 'react'
import { Form } from './Form'

export const Contact = () => {
  return (
    <div className='flex items-start gap-6 px-6 max-md:flex-col max-md:items-center max-md:text-center'>
      <div className='w-3/5'>
        <h1 className='text-[3vw] font-semibold text-gray-800'>Our Contact</h1>
        <p className='text-sm pt-10 text-gray-700'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. </p>

        <div className='pt-8 flex items-start flex-col gap-2 max-md:items-center'>
          <h3 className='text-md font-bold text-gray-700'>Addess: <span className='text-sm font-semibold text-gray-600'>7563 St. Vicent Place, Glasgow, Greater Newyork NH7689, UK</span></h3>
          <h3 className='text-md font-bold text-gray-700'>Phone: <span className='text-sm font-semibold text-gray-600'>(800) 123 456789</span></h3>
          <h3 className='text-md font-bold text-gray-700'>Email: <span className='text-sm font-semibold text-gray-600'>Organic@example.com</span></h3>
          <h3 className='text-md font-bold text-gray-700'>Store Open: <span className='text-sm font-semibold text-gray-600'>8am - 08pm, Mon - Sat</span></h3>
        </div>

        <div className='w-[1.5rem] flex items-start gap-6 pt-8 max-md:ml-[4.5rem]'>
          <img src="./image/share.png" alt="" />
          <img src="./image/share.png" alt="" />
          <img src="./image/share.png" alt="" />
          <img src="./image/share.png" alt="" />
        </div>
      </div>

      <Form />
    </div>
  )
}
