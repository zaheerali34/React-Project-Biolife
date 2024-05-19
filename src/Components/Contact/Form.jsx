import React from 'react'
import { Button } from "../Button/Button"

export const Form = () => {
  return (
    <div className='w-full'>
      <form className='flex item-center flex-col gap-4'>
          <input type="text" placeholder='Your Number' className='w-full h-[3rem] pl-4 border-[1px] rounded-md outline-none text-sm' />
          <input type="text" placeholder='Email Address' className='w-full h-[3rem] pl-4 border-[1px] rounded-md outline-none text-sm' />
          <input type="text" placeholder='Phon Number' className='w-full h-[3rem] pl-4 border-[1px] rounded-md outline-none text-sm' />
          <textarea cols="30" rows="8" placeholder='Leave Message' className='w-full  p-4 border-[1px] rounded-md outline-none text-sm' ></textarea>

          <div className='w-[10rem] p-[0.8rem] text-center bg-red-500 rounded-full text-white uppercase font-semibold cursor-pointer hover:bg-zinc-700 transition'>send message</div>
      </form>
    </div>
  )
}
