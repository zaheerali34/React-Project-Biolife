import React from "react";

export const Footer = () => {
  return (
    <>
      <div className="w-full h-full bg-slate-100 py-12 mt-[6rem] max-[990px]:mt-[75rem]">
        <div className="flex items-start justify-between gap-6 px-6 max-md:flex-col">
          <div className="w-full h-full flex flex-col items-start gap-6 max-md:text-center max-md:items-center">
            <img src="./image/logo.png" alt="" />
            <div className="flex items-center mr-2">
              <img src="./image/call.png" alt="" className="w-[2rem]" />
              <div className="ml-[0.7rem]">
                <h2 className="font-bold">Got Questions ?</h2>
                <h2 className="font-bold w-[15rem]">
                  (700) 9001-1909 (900) 689 -66
                </h2>
              </div>
            </div>
            <h2 className="font-bold">Contact info</h2>
            <div className="flex items-center gap-4">
              <img src="./image/location.png" alt="" className="w-[1.5rem]" />
              <p className="text-sm w-full">
                7563 St. Vicent Place, Glasgow, Greater Newyork NH7689, UK
              </p>
            </div>

            <div className="flex items-center gap-6 w-[1.5rem] max-md:mr-[10rem]">
              <img src="./image/icon-facebook.svg" alt="" />
              <img src="./image/icon-instagram.svg" alt="" />
              <img src="./image/icon-twitter.svg" alt="" />
              <img src="./image/icon-youtube.svg" alt="" />
              <img src="./image/tiktok.png" alt="" />
            </div>
          </div>

          <div className="flex items-start justify-between w-full gap-8 max-md:flex-col max-md:text-center">
          <div className="w-full h-full">
            <h1 className="text-xl font-bold">My Account</h1>
            <ul className="flex items-start flex-col gap-3 pt-7 max-md:items-center">
              <li className="text-gray-600 text-sm hover:text-green-500 cursor-pointer transition">
                Sign in
              </li>
              <li className="text-gray-600 text-sm hover:text-green-500 cursor-pointer transition">
                View card
              </li>
              <li className="text-gray-600 text-sm hover:text-green-500 cursor-pointer transition">
                My Wishlist
              </li>
              <li className="text-gray-600 text-sm hover:text-green-500 cursor-pointer transition">
                Track My Order
              </li>
              <li className="text-gray-600 text-sm hover:text-green-500 cursor-pointer transition">
                Help
              </li>
              <li className="text-gray-600 text-sm hover:text-green-500 cursor-pointer transition">
                Our Blog
              </li>
            </ul>
          </div>

          <div className="w-full h-full">
            <h1 className="text-xl font-bold">Why Buy From Us</h1>
            <ul className="flex items-start flex-col gap-3 pt-7 max-md:items-center">
              <li className="text-gray-600 text-sm hover:text-green-500 cursor-pointer transition">
                Shipping & Returns
              </li>
              <li className="text-gray-600 text-sm hover:text-green-500 cursor-pointer transition">
                Secure Shopping
              </li>
              <li className="text-gray-600 text-sm hover:text-green-500 cursor-pointer transition">
                International Shipping
              </li>
              <li className="text-gray-600 text-sm hover:text-green-500 cursor-pointer transition">
                Track My Order
              </li>
              <li className="text-gray-600 text-sm hover:text-green-500 cursor-pointer transition">
                Affiliates
              </li>
              <li className="text-gray-600 text-sm hover:text-green-500 cursor-pointer transition">
                Group Sales
              </li>
              <li className="text-gray-600 text-sm hover:text-green-500 cursor-pointer transition">
                Shipping & Returns
              </li>
            </ul>
          </div>

          <div className="w-full h-full">
            <h1 className="text-xl font-bold">Information</h1>
            <ul className="flex items-start flex-col gap-3 pt-7 max-md:items-center">
              <li className="text-gray-600 text-sm hover:text-green-500 cursor-pointer transition">
                Our Blog
              </li>
              <li className="text-gray-600 text-sm hover:text-green-500 cursor-pointer transition">
                About Our Shop
              </li>
              <li className="text-gray-600 text-sm hover:text-green-500 cursor-pointer transition">
                Secure Shopping
              </li>
              <li className="text-gray-600 text-sm hover:text-green-500 cursor-pointer transition">
                Delivery infomation
              </li>
              <li className="text-gray-600 text-sm hover:text-green-500 cursor-pointer transition">
                Privacy Policy
              </li>
              <li className="text-gray-600 text-sm hover:text-green-500 cursor-pointer transition">
                Our Sitemap
              </li>
            </ul>
          </div>
          </div>

        </div>

        <div className="w-full h-[1px] bg-slate-400 mt-[2rem]"></div>

        <div className="flex items-center justify-center flex-col pt-[2rem]">
          <div className="flex items-center gap-4">
            <img src="./image/gmail.png" alt="" className="w-[3.5rem]" />
            <div>
              <h2 className="font-bold text-[1.3rem]">Sign up for our newsletter</h2>
              <p className="text-gray-700 pt-1">Sign up our Newsletter for Exclusive Discount codes</p>
            </div>
          </div>

          <form className="w-[45vw] h-12 bg-white mt-6 rounded-3xl flex items-center justify-between max-md:w-3/4">
            <input type="email" name="email" placeholder="Enter Your Email" className="px-6  border-none outline-none bg-none"/>
            <button className="w-[6rem] h-full bg-green-500 hover:bg-slate-700 transition rounded-e-3xl text-white uppercase font-bold max-md:text-[0.8rem]">Sign Up</button>
          
          </form>

          <div className="w-full flex items-center justify-between px-6 mt-12">
            <h3 className=" text-blue-600 hover:text-blue-400 transition cursor-pointer">Templates Hub</h3>
            <img src="./image/payment.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
