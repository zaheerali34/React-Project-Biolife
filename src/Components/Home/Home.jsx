import React from "react";
import { SectionOne } from "../SectionOne/SectionOne";


export const Home = () => {

  return (
    <>
      <div className='w-full h-[120vh] bg-[url("./image/main-slide-01.jpg")] bg-cover bg-center bg-no-repeat absolute top-0 flex items-center justify-center'>
        <div className="box w-[50vw] h-[65vh] bg-[#ffffffb7] shadow-xl mt-[8rem] px-8 py-3 flex flex-col items-start gap-3 max-[761px]:w-[95vw] max-[761px]:h-[45vh] max-[761px]:items-center max-[761px]:text-center max-[480px]:h-[50%] max-[380px]:h-[67%]">
          <h2 className="text-[2rem] italic">Pomegranate</h2>
          <h1 className="text-[4rem] font-semibold text-zinc-700 w-[80%] leading-[65px] max-[589px]:w-full">
            Fresh Juice. 100% Organic
          </h1>
          <p className=" text-xl font-semibold">
            A blend of fresh squeezed green apple & fruits
          </p>
          <div className="flex items-center max-[380px]:flex-col gap-3">
            
          <div className='w-[10rem] p-[0.8rem] text-center bg-green-500 rounded-full text-white uppercase font-semibold cursor-pointer hover:bg-zinc-700 transition'>shop now</div>
            <button className="uppercase text-green-500 font-semibold border-[2px] border-green-500 w-[10rem] h-[3rem] rounded-full hover:bg-zinc-700 hover:border-zinc-700 hover:text-white transition">
              view lookbook
            </button>
          </div>
        </div>
      </div>
      <SectionOne />
    </>
  );
};
