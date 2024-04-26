import React from 'react';
import {Button} from "../Button/Button"
import { SectionFruit } from '../SectionFruit/SectionFruit';

export const Organic = () => {
  return (
    <>
        <div className='flex items-center justify-between px-6 pt-12 max-[990px]:mt-[130rem] max-[990px]:flex-col'>
            <div className='w-full'>
                <img src="./image/thumb-bn-special-02.jpg" alt="" />
            </div>

            <div className='flex items-center flex-col gap-3 text-center'>
                <h3 className='text-3xl font-semibold text-gray-500 italic'>Organic</h3>
                <h2 className='text-2xl font-bold'>Special Offer</h2>
                <h2 className='text-2xl font-bold'><span className=' text-gray-500'>Organic Heaven Made Easy</span>Healthy, Happy Life</h2>
                <h3 className='font-bold'>National Fresh Fruit Production</h3>
                <h2 className='text-2xl font-bold'>£85.00</h2>
                <Button />
            </div>
        </div>

        <SectionFruit />
    </>
  )
}
