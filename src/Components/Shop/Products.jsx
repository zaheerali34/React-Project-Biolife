import React from 'react'
import { Button } from "../Button/Button"

export const Products = () => {
    return (
        <div className='w-full flex items-center gap-4'>
            <div className='w-full h-full py-6 bg-zinc-50 hover:shadow-md text-center px-4'>
                <img src="./image/products/p-01.jpg" alt="" className='w-[20vw]' />

                <span>Fresh Fruit</span>
                <h1>National Fresh Fruit</h1>
                <h3>£85.00 <span>£95.00</span></h3>
                <h4>3-Day Shipping</h4>
                <p>All products are carefully selected to ensure food safety.</p>

                <div className='w-full flex items-center justify-between px-4'>
                    <img src="./image/love (1).png" alt="" className='w-[1.5rem]' />
                    <Button />
                    <img src="./image/love (1).png" alt="" className='w-[1.5rem]' />
                </div>
            </div>

            <div className='w-full h-full py-6 bg-zinc-50 hover:shadow-md text-center px-4'>
                <img src="./image/products/p-01.jpg" alt="" className='w-[20vw]' />

                <span>Fresh Fruit</span>
                <h1>National Fresh Fruit</h1>
                <h3>£85.00 <span>£95.00</span></h3>
                <h4>3-Day Shipping</h4>
                <p>All products are carefully selected to ensure food safety.</p>

                <div className='w-full flex items-center justify-between px-4'>
                    <img src="./image/love (1).png" alt="" className='w-[1.5rem]' />
                    <Button />
                    <img src="./image/love (1).png" alt="" className='w-[1.5rem]' />
                </div>
            </div>

            <div className='w-full h-full py-6 bg-zinc-50 hover:shadow-md text-center px-4'>
                <img src="./image/products/p-01.jpg" alt="" className='w-[20vw]' />

                <span>Fresh Fruit</span>
                <h1>National Fresh Fruit</h1>
                <h3>£85.00 <span>£95.00</span></h3>
                <h4>3-Day Shipping</h4>
                <p>All products are carefully selected to ensure food safety.</p>

                <div className='w-full flex items-center justify-between px-4'>
                    <img src="./image/love (1).png" alt="" className='w-[1.5rem]' />
                    <Button />
                    <img src="./image/love (1).png" alt="" className='w-[1.5rem]' />
                </div>
            </div>
        </div>
    )
}
