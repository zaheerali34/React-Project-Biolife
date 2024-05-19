// import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Button } from "../Button/Button"

// export const Silder = () => {
//     return (
//         <div className='w-full h-[50vw] flex justify-center mt-8'>
//             <Swiper
//                 slidesPerView={4}
//                 spaceBetween={15}
//                 modules={[Pagination]}
//                 className="w-full h-full"
//             >
//                 <SwiperSlide className='w-full h-full px-4 py-4 hover:shadow-md transition'>
//                     <div className='w-full h-2/4 bg-slate-100'>
//                         <img src="./image/products/p-01.jpg" alt="" />
//                     </div>

//                     <div className='pt-[3rem] text-center cursor-pointer'>
//                         <h4 className='text-gray-500 text-sm'>Vegetabies</h4>
//                         <h3 className='text-gray-600 hover:text-green-500 font-semibold transition text-md'>Organic Hass Avocado</h3>
//                         <h2 className='font-bold'>$50.00 <span className=' font-thin text-[0.8rem]'>$95.00</span></h2>
//                         <p className='text-[0.8rem] text-gray-700 pt-2'>All products are carefull selected to ensure food safety.</p>
//                         <div className='flex items-center gap-3 pt-4'>
//                             <img src="./image/love (1).png" alt="" className='w-[1.5rem]' />
//                             <Button />
//                             <img src="./image/share.png" alt="" className='w-[1.5rem]' />
//                         </div>
//                     </div>
//                 </SwiperSlide>
                
//                 <SwiperSlide className='w-full h-full px-4 py-4 hover:shadow-md transition'>
//                     <div className='w-full h-2/4 bg-slate-100'>
//                         <img src="./image/products/p-02.jpg" alt="" />
//                     </div>

//                     <div className='pt-[3rem] text-center cursor-pointer'>
//                         <h4 className='text-gray-500 text-sm'>Vegetabies</h4>
//                         <h3 className='text-gray-600 hover:text-green-500 font-semibold transition text-md'>Organic Hass Avocado</h3>
//                         <h2 className='font-bold'>$50.00 <span className=' font-thin text-[0.8rem]'>$95.00</span></h2>
//                         <p className='text-[0.8rem] text-gray-700 pt-2'>All products are carefull selected to ensure food safety.</p>
//                         <div className='flex items-center gap-3 pt-4'>
//                             <img src="./image/love (1).png" alt="" className='w-[1.5rem]' />
//                             <Button />
//                             <img src="./image/share.png" alt="" className='w-[1.5rem]' />
//                         </div>
//                     </div>
//                 </SwiperSlide>

//                 <SwiperSlide className='w-full h-full px-4 py-4 hover:shadow-md transition'>
//                     <div className='w-full h-2/4 bg-slate-100'>
//                         <img src="./image/products/p-03.jpg" alt="" />
//                     </div>

//                     <div className='pt-[3rem] text-center cursor-pointer'>
//                         <h4 className='text-gray-500 text-sm'>Vegetabies</h4>
//                         <h3 className='text-gray-600 hover:text-green-500 font-semibold transition text-md'>Organic Hass Avocado</h3>
//                         <h2 className='font-bold'>$50.00 <span className=' font-thin text-[0.8rem]'>$95.00</span></h2>
//                         <p className='text-[0.8rem] text-gray-700 pt-2'>All products are carefull selected to ensure food safety.</p>
//                         <div className='flex items-center gap-3 pt-4'>
//                             <img src="./image/love (1).png" alt="" className='w-[1.5rem]' />
//                             <Button />
//                             <img src="./image/share.png" alt="" className='w-[1.5rem]' />
//                         </div>
//                     </div>
//                 </SwiperSlide>
                
//                 <SwiperSlide className='w-full h-full px-4 py-4 hover:shadow-md transition'>
//                     <div className='w-full h-2/4 bg-slate-100'>
//                     <img src="./image/products/p-04.jpg" alt="" />
//                     </div>

//                     <div className='pt-[3rem] text-center cursor-pointer'>
//                         <h4 className='text-gray-500 text-sm'>Vegetabies</h4>
//                         <h3 className='text-gray-600 hover:text-green-500 font-semibold transition text-md'>Organic Hass Avocado</h3>
//                         <h2 className='font-bold'>$50.00 <span className=' font-thin text-[0.8rem]'>$95.00</span></h2>
//                         <p className='text-[0.8rem] text-gray-700 pt-2'>All products are carefull selected to ensure food safety.</p>
//                         <div className='flex items-center gap-3 pt-4'>
//                             <img src="./image/love (1).png" alt="" className='w-[1.5rem]' />
//                             <Button />
//                             <img src="./image/share.png" alt="" className='w-[1.5rem]' />
//                         </div>
//                     </div>
//                 </SwiperSlide>
                
//                 <SwiperSlide className='w-full h-full px-4 py-4 hover:shadow-md transition'>
//                     <div className='w-full h-2/4 bg-slate-100'>
//                         <img src="./image/products/p-05.jpg" alt="" />
//                     </div>

//                     <div className='pt-[3rem] text-center cursor-pointer'>
//                         <h4 className='text-gray-500 text-sm'>Vegetabies</h4>
//                         <h3 className='text-gray-600 hover:text-green-500 font-semibold transition text-md'>Organic Hass Avocado</h3>
//                         <h2 className='font-bold'>$50.00 <span className=' font-thin text-[0.8rem]'>$95.00</span></h2>
//                         <p className='text-[0.8rem] text-gray-700 pt-2'>All products are carefull selected to ensure food safety.</p>
//                         <div className='flex items-center gap-3 pt-4'>
//                             <img src="./image/love (1).png" alt="" className='w-[1.5rem]' />
//                             <Button />
//                             <img src="./image/share.png" alt="" className='w-[1.5rem]' />
//                         </div>
//                     </div>
//                 </SwiperSlide>

//                 <SwiperSlide className='w-full h-full px-4 py-4 hover:shadow-md transition'>
//                     <div className='w-full h-2/4 bg-slate-100'>
//                         <img src="./image/products/p-06.jpg" alt="" />
//                     </div>

//                     <div className='pt-[3rem] text-center cursor-pointer'>
//                         <h4 className='text-gray-500 text-sm'>Vegetabies</h4>
//                         <h3 className='text-gray-600 hover:text-green-500 font-semibold transition text-md'>Organic Hass Avocado</h3>
//                         <h2 className='font-bold'>$50.00 <span className=' font-thin text-[0.8rem]'>$95.00</span></h2>
//                         <p className='text-[0.8rem] text-gray-700 pt-2'>All products are carefull selected to ensure food safety.</p>
//                         <div className='flex items-center gap-3 pt-4'>
//                             <img src="./image/love (1).png" alt="" className='w-[1.5rem]' />
//                             <Button />
//                             <img src="./image/share.png" alt="" className='w-[1.5rem]' />
//                         </div>
//                     </div>
//                 </SwiperSlide>

//                 <SwiperSlide className='w-full h-full px-4 py-4 hover:shadow-md transition'>
//                     <div className='w-full h-2/4 bg-slate-100'>
//                         <img src="./image/products/p-07.jpg" alt="" />
//                     </div>

//                     <div className='pt-[3rem] text-center cursor-pointer'>
//                         <h4 className='text-gray-500 text-sm'>Vegetabies</h4>
//                         <h3 className='text-gray-600 hover:text-green-500 font-semibold transition text-md'>Organic Hass Avocado</h3>
//                         <h2 className='font-bold'>$50.00 <span className=' font-thin text-[0.8rem]'>$95.00</span></h2>
//                         <p className='text-[0.8rem] text-gray-700 pt-2'>All products are carefull selected to ensure food safety.</p>
//                         <div className='flex items-center gap-3 pt-4'>
//                             <img src="./image/love (1).png" alt="" className='w-[1.5rem]' />
//                             <Button />
//                             <img src="./image/share.png" alt="" className='w-[1.5rem]' />
//                         </div>
//                     </div>
//                 </SwiperSlide>

//                 <SwiperSlide className='w-full h-full px-4 py-4 hover:shadow-md transition'>
//                     <div className='w-full h-2/4 bg-slate-100'>
//                         <img src="./image/products/p-08.jpg" alt="" />
//                     </div>

//                     <div className='pt-[3rem] text-center cursor-pointer'>
//                         <h4 className='text-gray-500 text-sm'>Vegetabies</h4>
//                         <h3 className='text-gray-600 hover:text-green-500 font-semibold transition text-md'>Organic Hass Avocado</h3>
//                         <h2 className='font-bold'>$50.00 <span className=' font-thin text-[0.8rem]'>$95.00</span></h2>
//                         <p className='text-[0.8rem] text-gray-700 pt-2'>All products are carefull selected to ensure food safety.</p>
//                         <div className='flex items-center gap-3 pt-4'>
//                             <img src="./image/love (1).png" alt="" className='w-[1.5rem]' />
//                             <Button />
//                             <img src="./image/share.png" alt="" className='w-[1.5rem]' />
//                         </div>
//                     </div>
//                 </SwiperSlide>

//                 <SwiperSlide className='w-full h-full px-4 py-4 hover:shadow-md transition'>
//                     <div className='w-full h-2/4 bg-slate-100'>
//                         <img src="./image/products/p-09.jpg" alt="" />
//                     </div>

//                     <div className='pt-[3rem] text-center cursor-pointer'>
//                         <h4 className='text-gray-500 text-sm'>Vegetabies</h4>
//                         <h3 className='text-gray-600 hover:text-green-500 font-semibold transition text-md'>Organic Hass Avocado</h3>
//                         <h2 className='font-bold'>$50.00 <span className=' font-thin text-[0.8rem]'>$95.00</span></h2>
//                         <p className='text-[0.8rem] text-gray-700 pt-2'>All products are carefull selected to ensure food safety.</p>
//                         <div className='flex items-center gap-3 pt-4'>
//                             <img src="./image/love (1).png" alt="" className='w-[1.5rem]' />
//                             <Button />
//                             <img src="./image/share.png" alt="" className='w-[1.5rem]' />
//                         </div>
//                     </div>
//                 </SwiperSlide>

//                 <SwiperSlide className='w-full h-full px-4 py-4 hover:shadow-md transition'>
//                     <div className='w-full h-2/4 bg-slate-100'>
//                         <img src="./image/products/p-10.jpg" alt="" />
//                     </div>

//                     <div className='pt-[3rem] text-center cursor-pointer'>
//                         <h4 className='text-gray-500 text-sm'>Vegetabies</h4>
//                         <h3 className='text-gray-600 hover:text-green-500 font-semibold transition text-md'>Organic Hass Avocado</h3>
//                         <h2 className='font-bold'>$50.00 <span className=' font-thin text-[0.8rem]'>$95.00</span></h2>
//                         <p className='text-[0.8rem] text-gray-700 pt-2'>All products are carefull selected to ensure food safety.</p>
//                         <div className='flex items-center gap-3 pt-4'>
//                             <img src="./image/love (1).png" alt="" className='w-[1.5rem]' />
//                             <Button />
//                             <img src="./image/share.png" alt="" className='w-[1.5rem]' />
//                         </div>
//                     </div>
//                 </SwiperSlide>
//             </Swiper>
//         </div>
//     )
// }
