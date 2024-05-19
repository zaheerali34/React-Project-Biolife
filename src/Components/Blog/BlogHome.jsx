import React from 'react'
import { Blog } from './Blog'

export const BlogHome = ({img}) => {
  return (
    <>
        <div className='flex items-center gap-4 max-md:flex-col'>
            <img src={img} alt="" className='object-cover rounded-md max-[990px]:w-full'/>
            <div className='text-center'>
                <h1 className='text-xl font-bold hover:text-orange-500 cursor-pointer'>Ashwagandha: #1 Herb Anxiety</h1>
                <h2 className='font-bold text-gray-800 pt-2'>ORGANIC <span className='text-[0.8rem] text-gray-600 font-semibold'>/ 20 Nov, 2018Posted By: Braum J.Teran</span></h2>
                <p className='text-sm pt-4 text-gray-800'>Did you know that red-staining foods are excellent lymph-movers? In fact, many plants that were historically used as dyes.</p>
                
                <div className='flex items-center justify-around pt-4'>
                <button className='text-md uppercase font-semibold text-gray-700 border-[2px] px-4 py-2 rounded-3xl border-gray-400 hover:bg-red-500 hover:text-white hover:border-red-500 transition'>read more</button>

                <div className='w-[1.5rem] relative'>
                  <img src="./image/love (1).png" alt="" />
                  <div className='w-[0.7rem] h-[0.7rem] bg-slate-400 hover:bg-red-500 transition cursor-pointer text-white rounded-full text-[0.7rem] flex items-center justify-center p-[10px] absolute -top-2 left-[1.1rem]'>23</div>
                </div>

                <div className='w-[1.5rem] relative'>
                  <img src="./image/love (1).png" alt="" />
                  <div className='w-[0.7rem] h-[0.7rem] bg-slate-400 hover:bg-red-500 transition cursor-pointer text-white rounded-full text-[0.7rem] flex items-center justify-center p-[10px] absolute -top-2 left-[1.1rem]'>17</div>
                </div>
                </div>
           </div>
        </div>
    </>
  )
}
