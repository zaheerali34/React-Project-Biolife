import React from 'react'
import { About } from './About'


export const Why = () => {
    return (
        <div className='flex items-start flex-col gap-12'>
            <div className='flex items-start gap-3'>
                <img src="./image/add-friend.png" alt="" className='w-[4vw] pt-5' />
                <div className='flex items-start flex-col text-start'>
                    <h2 className='text-[3rem] font-bold text-[#95cb34]'>01</h2>
                    <h3 className='text-[#95cb34] italic'>Always Fresh</h3>
                    <p className='text-sm pt-2'>Natural products are kept in the best condition to ensure always fresh</p>
                </div>
            </div>

            <div className='flex items-start gap-3'>
                <img src="./image/add-friend.png" alt="" className='w-[4vw] pt-5' />
                <div className='flex items-start flex-col text-start'>
                    <h2 className='text-[3rem] font-bold text-[#ff4f63]'>02</h2>
                    <h3 className='text-[#ff4f63] italic'>Overall Healthy</h3>
                    <p className='text-sm pt-2'>Natural products are kept in the best condition to ensure always fresh</p>
                </div>
            </div>

            <div className='flex items-start gap-3'>
                <img src="./image/add-friend.png" alt="" className='w-[4vw] pt-5' />
                <div className='flex items-start flex-col text-start'>
                    <h2 className='text-[3rem] font-bold text-[#3b7f17]'>03</h2>
                    <h3 className='text-[#3b7f17] italic'>Encironmental Safety</h3>
                    <p className='text-sm pt-2'>Natural products are kept in the best condition to ensure always fresh</p>
                </div>
            </div>
        </div>
    )
}
