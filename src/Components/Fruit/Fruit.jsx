import React from "react";
import { Button } from "../Button/Button";

export const Fruit = () => {
  return (
    <>
      <div className="px-6 mt-[4rem] max-[990px]:relative max-[990px]:top-[140vh] max-md:text-center max-md:items-center">
        <div className='w-[18rem] bg-[url("./image/bg_bold-title.png")] bg-cover bg-center bg-no-repeat'>
          <h1 className="text-white text-4xl font-bold text-center py-4">
            Fruit juice
          </h1>
        </div>

        <div className="flex items-center flex-col gap-5 max-md:flex-row max-[500px]:flex-col">
          <div className="flex items-start mt-12 max-md:w-[30vw] max-md:flex-col max-md:text-center max-md:items-center">
            <img src="./image/f-1.jpg" alt="" className="w-[11rem]" />

            <div className="ml-4 flex flex-col items-start gap-[10px]">
              <div className="flex justify-between w-full max-md:flex-col">
                <h1 className=" text-[1.3rem] font-semibold max-md:text-[1rem]">
                  Fish Stew With Rice Recipe
                </h1>

                <h2 className="font-bold text-2xl">
                  $9.00
                  <span className="text-gray-400 text-sm pl-3 line-through">
                    $29.00
                  </span>
                </h2>
              </div>
              <div className="flex items-center gap-2 max-md:hidden">
                <img src="./image/start.png" alt="" className="w-4" />
                <img src="./image/start.png" alt="" className="w-4" />
                <img src="./image/start.png" alt="" className="w-4" />
                <img src="./image/start.png" alt="" className="w-4" />
                <span>(04 Reviews)</span>
              </div>

              <div className="w-full border-t-[1px] border-zinc-600 border-dashed"></div>

              <p className="text-gray-700 max-md:hidden">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
                impedit facilis architecto, et sit obcaecati?
              </p>

              <div className="flex gap-2">
                <div className="max-md:w-full max-md:rounded-none max-md:text-black">
                  <Button />
                </div>
                <div className="flex max-md:hidden">
                  <img src="./image/start.png" alt="" />
                  <img src="./image/start.png" alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-start mt-12 max-md:w-[30vw] max-md:flex-col max-md:text-center max-md:items-center">
            <img src="./image/f-2.jpg" alt="" className="w-[11rem]" />

            <div className="ml-4 flex flex-col items-start gap-[10px]">
              <div className="flex justify-between w-full max-md:flex-col">
                <h1 className=" text-[1.3rem] font-semibold max-md:text-[1rem]">
                  Fish Stew With Rice Recipe
                </h1>

                <h2 className="font-bold text-2xl">
                  $9.00
                  <span className="text-gray-400 text-sm pl-3 line-through">
                    $29.00
                  </span>
                </h2>
              </div>
              <div className="flex items-center gap-2 max-md:hidden">
                <img src="./image/start.png" alt="" className="w-4" />
                <img src="./image/start.png" alt="" className="w-4" />
                <img src="./image/start.png" alt="" className="w-4" />
                <img src="./image/start.png" alt="" className="w-4" />
                <span>(04 Reviews)</span>
              </div>

              <div className="w-full border-t-[1px] border-zinc-600 border-dashed"></div>

              <p className="text-gray-700 max-md:hidden">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
                impedit facilis architecto, et sit obcaecati?
              </p>

              <div className="flex gap-2">
                <div className="max-md:w-full max-md:rounded-none max-md:text-black">
                  <Button />
                </div>
                <div className="flex max-md:hidden">
                  <img src="./image/start.png" alt="" />
                  <img src="./image/start.png" alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-start mt-12 max-md:w-[30vw] max-md:flex-col max-md:text-center max-md:items-center">
            <img src="./image/f-3.jpg" alt="" className="w-[11rem]" />

            <div className="ml-4 flex flex-col items-start gap-[10px]">
              <div className="flex justify-between w-full max-md:flex-col">
                <h1 className=" text-[1.3rem] font-semibold max-md:text-[1rem]">
                  Fish Stew With Rice Recipe
                </h1>

                <h2 className="font-bold text-2xl">
                  $9.00
                  <span className="text-gray-400 text-sm pl-3 line-through">
                    $29.00
                  </span>
                </h2>
              </div>
              <div className="flex items-center gap-2 max-md:hidden">
                <img src="./image/start.png" alt="" className="w-4" />
                <img src="./image/start.png" alt="" className="w-4" />
                <img src="./image/start.png" alt="" className="w-4" />
                <img src="./image/start.png" alt="" className="w-4" />
                <span>(04 Reviews)</span>
              </div>

              <div className="w-full border-t-[1px] border-zinc-600 border-dashed"></div>

              <p className="text-gray-700 max-md:hidden">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
                impedit facilis architecto, et sit obcaecati?
              </p>

              <div className="flex gap-2">
                <div className="max-md:w-full max-md:rounded-none max-md:text-black">
                  <Button />
                </div>
                <div className="flex max-md:hidden">
                  <img src="./image/start.png" alt="" />
                  <img src="./image/start.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
