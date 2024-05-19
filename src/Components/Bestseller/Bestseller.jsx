import React from 'react'
import { Organic } from '../Organic/Organic';

export const Bestseller = () => {
    return (
        <>
            <div className='w-full h-full pt-[5rem] px-12 flex items-center justify-center flex-col gap-4'>
                <h3 className='text-[1.2vw] font-serif italic'>All the best item for You</h3>
                <h1 className='text-3xl font-bold text-zinc-800'>Bestseller Products</h1>
            </div>
           
            <Organic />
        </>
    )
}
