import React from "react";
import { Organic } from "../Organic/Organic";
import { Bestseller } from "../Bestseller/Bestseller";

export const SectionOne = () => {
  return (
    <>
      <div className="mt-[87vh] w-full h-[70vh] flex items-center max-[990px]:flex-wrap">
        <div className='w-full h-full bg-[url("./image/banner-grid-01.jpg")] bg-center bg-cover relative max-[990px]:h-[100vh] max-[990px]:w-[100%]'>
          <div className='w-full h-[4rem] bg-[url("./image/bn_grid_01.png")] bg-center bg-cover absolute bottom-[1rem] cursor-pointer'>
            <h2 className=" text-2xl font-bold text-white text-center py-3">
              Fruit Juice
            </h2>
          </div>
        </div>

        <div className="w-full h-full max-[990px]:w-full  max-[990px]:h-[100vh]">
          <div className='w-full h-1/2 bg-[url("./image/banner-grid-02.jpg")] bg-center bg-cover relative'>
            <div className='w-full h-[4rem] bg-[url("./image/bn_grid_02.png")] bg-center bg-cover absolute bottom-[1rem] cursor-pointer'>
              <h2 className=" text-2xl font-bold text-white text-center py-3">
                Strawberry
              </h2>
            </div>
          </div>
          <div className='w-full h-1/2 bg-[url("./image/banner-grid-03.jpg")] bg-center bg-cover relative'>
            <div className='w-full h-[4rem] bg-[url("./image/bn_grid_03.png")] bg-center bg-cover absolute bottom-[1rem] cursor-pointer'>
              <h2 className=" text-2xl font-bold text-white text-center py-3">
                Blueberries
              </h2>
            </div>
          </div>
        </div>

        <div className="w-full h-full  max-[990px]:w-full max-[990px]:h-[100vh]">
          <div className='w-full h-1/2 bg-[url("./image/banner-grid-04.jpg")] bg-center bg-cover relative'>
            <div className='w-full h-[4rem] bg-[url("./image/bn_grid_04.png")] bg-center bg-cover absolute bottom-[1rem] cursor-pointer'>
              <h2 className=" text-2xl font-bold text-white text-center py-3">
                Raspberries
              </h2>
            </div>
          </div>
          <div className='w-full h-1/2 bg-[url("./image/banner-grid-05.jpg")] bg-center bg-cover relative'>
            <div className='w-full h-[4rem] bg-[url("./image/bn_grid_05.png")] bg-center bg-cover absolute bottom-[1rem] cursor-pointer'>
              <h2 className=" text-2xl font-bold text-white text-center py-3">
                Our Berries
              </h2>
            </div>
          </div>
        </div>

        <div className='w-full h-full bg-[url("./image/banner-grid-06.jpg")] bg-center bg-cover relative '>
          <div className='w-full h-[4rem] bg-[url("./image/bn_grid_06.png")] bg-center bg-cover absolute bottom-[1rem] cursor-pointer '>
            <h2 className=" text-2xl font-bold text-white text-center py-3">
              Pomegranate
            </h2>
          </div>
        </div>
      </div>
    <Bestseller />
    </>
  );
};
