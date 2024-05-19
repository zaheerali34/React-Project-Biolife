import React from 'react'
import { Products } from './Products'

export const Shop = () => {
  return (
    <>
      <div className='w-full h-full flex items-start gap-2 px-6 py-6'>
        <div className='w-2/5 h-full'>
          <div className='w-full'>
            <h2 className='text-md font-bold pb-6 text-gray-800'>Departements</h2>
            <h3 className=' text-gray-600 text-sm hover:text-orange-500 cursor-pointer'>Organic Food</h3>
            <h3 className=' text-gray-600 text-sm py-2 hover:text-orange-500 cursor-pointer'>Fresh Fruit</h3>
            <h3 className=' text-gray-600 text-sm hover:text-orange-500 cursor-pointer'>Dried Fruits</h3>
          </div>

          <hr className='w-full my-6' />

          <div className='w-full'>
            <h2 className='text-md font-bold pb-6 text-gray-800'>Shipping & Pickup</h2>
            <h3 className=' text-gray-600 text-sm hover:text-orange-500 cursor-pointer'>Show all</h3>
            <h3 className=' text-gray-600 text-sm py-2 hover:text-orange-500 cursor-pointer'>2- Day shipping</h3>
            <h3 className=' text-gray-600 text-sm hover:text-orange-500 cursor-pointer'>Shop to Home</h3>
            <h3 className=' text-gray-600 text-sm hover:text-orange-500 cursor-pointer pt-2'>Free Pickup</h3>
          </div>

          <hr className='w-full my-6' />

          <div className='flex items-start flex-col gap-4'>
            <h2 className='text-md font-bold'>Price</h2>
            <div className='flex items-center gap pt-4'>
              <label>$</label>
              <input type="number" className='w-[4rem] h-8 border-[2px] rounded-2xl outline-none pl-2 text-sm' />
              <label>to $</label>
              <input type="number" className='w-[4rem] h-8 border-[2px] rounded-2xl outline-none pl-2 text-sm' />

              <button className='w-[4rem] p-[0.3rem] text-center bg-red-500 rounded-full text-white uppercase font-semibold cursor-pointer hover:bg-zinc-700 transition'>Go</button>
            </div>

            <div className='flex flex-col items-start gap-2'>
              <div className='flex items-center gap-2'>
                <input type="checkbox" id='checkOne' className='' />
                <label htmlFor='checkOne' className='hover:text-red-400 font-semibold text-md'>$0 - $5</label>
              </div>

              <div className='flex items-center gap-2'>
                <input type="checkbox" id='checkTwo' className='' />
                <label htmlFor='checkTwo' className='hover:text-red-400 font-semibold text-md'>$5 - $10</label>
              </div>

              <div className='flex items-center gap-2'>
                <input type="checkbox" id='checkThere' className='' />
                <label htmlFor='checkThere' className='hover:text-red-400 font-semibold text-md'>$10 - $15</label>
              </div>
            </div>
          </div>

          <hr className='w-full my-6' />

          <div className='w-full'>
            <h1 className='text-md font-bold'>Popular Size</h1>

            <div className='flex items-center gap-2 pt-8'>
              <input type="checkbox" id='Check_One' />
              <label htmlFor="Check_One" className='font-semibold text-md hover:text-red-500'>Boz</label>
            </div>

            <div className='flex items-center gap-2 pt-2'>
              <input type="checkbox" id='Check_Two' />
              <label htmlFor="Check_Two" className='font-semibold text-md hover:text-red-500'>16oz</label>
            </div>

            <div className='flex items-center gap-2 pt-2'>
              <input type="checkbox" id='Check_There' />
              <label htmlFor="Check_There" className='font-semibold text-md hover:text-red-500'>5oz</label>
            </div>

            <div className='flex items-center gap-2 pt-2'>
              <input type="checkbox" id='Check_fouer' />
              <label htmlFor="Check_fouer" className='font-semibold text-md hover:text-red-500'>20oz</label>
            </div>
          </div>

          <hr className='w-full my-6' />

          <div className='w-full'>
            <h1 className='text-md font-bold'>Recently Viewed</h1>

            <div className='flex items-center gap-2 pt-8'>
              <img src="./image/p-1.jpg" alt="" className='w-[4rem] rounded-md' />
              <div>
                <span className='text-sm text-gray-700'>Fresh Fruit</span>
                <h2 className='text-md font-bold hover:text-red-500 transition cursor-pointer'>National Fresh Fruit</h2>
                <h2 className='text-md font-bold'>£85.00 <span className='text-sm font-normal text-gray-700'>£95.00</span></h2>
              </div>
            </div>

            <div className='flex items-center gap-2 pt-4'>
              <img src="./image/p-2.jpg" alt="" className='w-[4rem] rounded-md' />
              <div>
                <span className='text-sm text-gray-700'>Fresh Fruit</span>
                <h2 className='text-md font-bold hover:text-red-500 transition cursor-pointer'>National Fresh Fruit</h2>
                <h2 className='text-md font-bold'>£85.00 <span className='text-sm font-normal text-gray-700'>£95.00</span></h2>
              </div>
            </div>

            <div className='flex items-center gap-2 pt-4'>
              <img src="./image/p-3.jpg" alt="" className='w-[4rem] rounded-md' />
              <div>
                <span className='text-sm text-gray-700'>Fresh Fruit</span>
                <h2 className='text-md font-bold hover:text-red-500 transition cursor-pointer'>National Fresh Fruit</h2>
                <h2 className='text-md font-bold'>£85.00 <span className='text-sm font-normal text-gray-700'>£95.00</span></h2>
              </div>
            </div>
          </div>

          <hr className='w-full my-6' />

          <div className='w-full'>
            <h1 className='text-md font-bold'>Product Tags</h1>

            <div className='w-full flex items-center gap-4'>
              <div className='w-3/4 h-8 bg-gray-50 shadow-md rounded-2xl text-center text-sm text-gray-700 flex items-center justify-center'>Fresh Fruit</div>
              <div className='w-full h-8 bg-gray-50 shadow-md rounded-2xl flex items-center text-sm text-gray-700 justify-center'>National Food</div>
              <div className='w-2/4 h-8 bg-gray-50 shadow-md rounded-2xl text-center text-sm text-gray-700 flex items-center justify-center'>Hot</div>
            </div>
          </div>

        </div>

        <div className='w-full h-full'>
          <Products />
        </div>
      </div>
    </>
  )
}
