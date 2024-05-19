import React from "react";
import { Articles } from "../Articles/Articles";

export const SectionFruit = () => {
  return (
    <>
      <div className='w-full h-screen bg-[url("./image/bn-promotion-6.png")] mt-[5rem] flex items-center justify-center'>
        <div className="w-[75vh] pt-[4rem]">
          <img src="./image/bn-promotion-6-child-01.png" alt="" className="img" />
        </div>

        <div className="w-[25rem] h-[60vh]  bg-[#0000002c] shadow-xl absolute text-center flex items-center justify-center flex-col gap-6 max-[450px]:w-[85vw]">
            <h4 className="text-3xl text-white">Sumer Fruit</h4>
            <h1 className="text-[3.5rem] leading-[60px] text-white font-bold w-[20rem]">100% PURE NATURAL FRUIT JUICE</h1>    
            <button className="uppercase text-white font-semibold border-[2px] border-white  w-[10rem] h-[3rem] rounded-full hover:bg-green-500 hover:border-green-500 hover:text-white transition">
                shop now
            </button>
        </div>
      </div>

      <Articles />
    </>
  );
};
