import React from 'react'
import { BlogHome } from './BlogHome'

export const Blog = () => {
    return (
        <>
            <div className='w-full h-full py-12 px-6 flex items-start gap-4'>
                <div className='w-2/5 h-full  max-[990px]:hidden'>
                    <div className='w-full h-[3rem] border-[2px] rounded-[3rem] flex items-center justify-between px-4 gap-1'>
                        <input type="text" placeholder='Search...' className='outline-none border-none w-full' />
                        <img src="./image/search.png" alt="" className='w-6' />
                    </div>

                    <hr className='my-10' />

                    <ul className='flex items-start flex-col gap-2'>
                        <li className='text-md font-bold text-gray-800'>Categories</li>
                        <li className='hover:text-orange-500 cursor-pointer pt-4'>Beauty (30)</li>
                        <li className='hover:text-orange-500 cursor-pointer'>Fashion (50)</li>
                        <li className='hover:text-orange-500 cursor-pointer'>Food (10)</li>
                        <li className='hover:text-orange-500 cursor-pointer'>Life Style (60)</li>
                        <li className='hover:text-orange-500 cursor-pointer'>Travel (10)</li>
                    </ul>

                    <hr className='my-10' />

                    <div className='flex items-start flex-col gap-6'>
                        <h1 className='text-md font-bold text-gray-800'>Recent post</h1>
                        <div className='flex items-center gap-4 pt-6'>
                            <img src="./image/post-thumb-01.jpg" alt="" className='w-[5rem] rounded-md' />
                            <div>
                                <h1 className='text-md font-bold leading-5 hover:text-orange-500 cursor-pointer transition'>Ashwagandha: The #1 Herb in the World</h1>
                                <h2 className='text-[0.7rem] text-gray-600 pt-1'>10 May 2024 <span className='pl-3'>15 Comments</span></h2>
                            </div>
                        </div>

                        <div className='flex items-center gap-4'>
                            <img src="./image/post-thumb-02.jpg" alt="" className='w-[5rem] rounded-md' />
                            <div>
                                <h1 className='text-md font-bold leading-5 hover:text-orange-500 cursor-pointer transition'>Ashwagandha: The #1 Herb in the World</h1>
                                <h2 className='text-[0.7rem] text-gray-600 pt-1'>13 May 2024 <span className='pl-3'>06 Comments</span></h2>
                            </div>
                        </div>

                        <div className='flex items-center gap-4'>
                            <img src="./image/post-thumb-03.jpg" alt="" className='w-[5rem] rounded-md' />
                            <div>
                                <h1 className='text-md font-bold leading-5 hover:text-orange-500 cursor-pointer transition'>Ashwagandha: The #1 Herb in the World</h1>
                                <h2 className='text-[0.7rem] text-gray-600 pt-1'>16 Jun 2024 <span className='pl-3'>08 Comments</span></h2>
                            </div>
                        </div>
                    </div>

                    <hr className='my-10' />

                    <div>
                        <h1 className='text-md font-bold text-gray-800'>Latest Tweets</h1>

                        <div className=' flex items-start gap-4 pt-12'>
                            <img src="./image/post-thumb-03.jpg" alt="" className='w-[2rem] h-[2rem] rounded-full' />
                            <div>
                                <h1 className='text-[1.5vw] font-bold leading-5 hover:text-orange-500 cursor-pointer transition'>Braum J. Teran <span className='text-[1.2vw] text-gray-600 hover:text-orange-500'>@real BraumTeran</span></h1>
                                <p className='text-sm text-gray-700 pt-1'>@jakedonham President XI told me he appreciates that the U.S.</p>
                                <div className='flex text-center gap-12'>
                                    <div className='flex items-center pt-2 cursor-pointer'>
                                        <img src="./image/add-friend.png" alt="" className='w-[1rem]' />
                                        <span className='text-sm pl-1 text-gray-700 hover:text-orange-500 transition'>2.9N</span>
                                    </div>

                                    <div className='flex items-center pt-2 cursor-pointer'>
                                        <img src="./image/add-friend.png" alt="" className='w-[1rem]' />
                                        <span className='text-sm pl-1 text-gray-700 hover:text-orange-500 transition'>2.9N</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className=' flex items-start gap-4 pt-12'>
                            <img src="./image/post-thumb-03.jpg" alt="" className='w-[2rem] h-[2rem] rounded-full' />
                            <div>
                                <h1 className='text-[1.5vw] font-bold leading-5 hover:text-orange-500 cursor-pointer transition'>Braum J. Teran <span className='text-[1.2vw] text-gray-600 hover:text-orange-500'>@real BraumTeran</span></h1>
                                <p className='text-sm text-gray-700 pt-1'>@jakedonham President XI told me he appreciates that the U.S.</p>
                                <div className='flex text-center gap-12'>
                                    <div className='flex items-center pt-2 cursor-pointer'>
                                        <img src="./image/add-friend.png" alt="" className='w-[1rem]' />
                                        <span className='text-sm pl-1 text-gray-700 hover:text-orange-500 transition'>2.9N</span>
                                    </div>

                                    <div className='flex items-center pt-2 cursor-pointer'>
                                        <img src="./image/add-friend.png" alt="" className='w-[1rem]' />
                                        <span className='text-sm pl-1 text-gray-700 hover:text-orange-500 transition'>2.9N</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h3 className='text-md text-gray-700 uppercase font-bold underline pt-4 px-12 cursor-pointer hover:text-orange-500 transition'>View all</h3>
                    </div>
                </div>

                <div className='w-full h-full flex flex-col gap-12 '>
                    <BlogHome img={"./image/post-thumb-01.jpg"} />
                    <BlogHome img={"./image/post-thumb-02.jpg"} />
                    <BlogHome img={"./image/post-thumb-03.jpg"} />
                    <BlogHome img={"./image/post-thumb-04.jpg"} />
                    <BlogHome img={"./image/post-thumb-05.jpg"} />

                    <hr className='my-10' />

                    <div className='flex items-center gap-3'>
                        <div className='w-[3rem] h-[2rem] bg-red-500 rounded-[2rem] text-md text-white flex items-start justify-center pt-1 font-semibold cursor-pointer'>1</div>
                        <div className='w-[3rem] h-[2rem] border rounded-[2rem] text-md text-gray-700 hover:bg-red-500 hover:text-white cursor-pointer transitions  flex items-start justify-center pt-1 font-semibold'>2</div>
                        <div className='w-[3rem] h-[2rem] border rounded-[2rem] text-md text-gray-700  hover:bg-red-500 hover:text-white cursor-pointer transitions flex items-start justify-center pt-1 font-semibold'>3</div>
                        <span className='text-md text-gray-700'>....</span>
                        <div className='w-[3rem] h-[2rem] border  rounded-[2rem] text-md text-gray-700 hover:bg-red-500 hover:text-white cursor-pointer transitions  flex items-start justify-center pt-1 font-semibold'>20</div>
                    </div>
                </div>
            </div>

        </>
    )
}
