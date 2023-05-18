"use client";
import React from "react";
import cards from "./cards.jpg";
import Image from "next/image";
import nftmint from "./nftmint.png";
export default function Card() {
  return (
    <div
      style={{
        backgroundImage: `url(${cards.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "260px",
        height: "300px",  
      }}
      className="ease-in duration-800 delay-50 static shadow-md shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div hover:opacity-40"
    >
      <div className="hidden ease-in duration-1000 delay-500 group-hover:contents hover:opacity-100">
        <div>
           <div className="flex  justify-center -mt-10">
            <svg
              className="bg-red-400 rounded-full p-3 "
              width="48"
              height="48"
              viewBox="0 0 61 61"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M52.9955 23C53.082 19.7765 51.895 16.5252 49.43 14.0651C44.6815 9.31165 36.9748 9.31165 32.2213 14.0651L30.5 15.7864L28.7787 14.0651C24.0252 9.31165 16.3185 9.31165 11.5651 14.0651C6.81165 18.8185 6.81165 26.5252 11.5651 31.2787L30.5 50.2135L35.2338 45.4797"
                stroke="black"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M23 32.1668H29.6668L34.6668 25.5L39.6668 38.8332L44.6668 32.1668H53"
                stroke="black"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white"> Life Insurance</h1>
          <p className="text-base text-white"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda</p>
          </div>

      </div>


      <div className="h-full ease-out duration-800 delay-200  group-hover:hidden w-full flex items-end justify-center">
        <div className="py-5 px-14 -m-10 rounded-lg absolute bg-white">
          <div className="flex justify-center -mt-10 ">
            <svg
              className="bg-red-400 rounded-full p-3 "
              width="48"
              height="48"
              viewBox="0 0 61 61"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M52.9955 23C53.082 19.7765 51.895 16.5252 49.43 14.0651C44.6815 9.31165 36.9748 9.31165 32.2213 14.0651L30.5 15.7864L28.7787 14.0651C24.0252 9.31165 16.3185 9.31165 11.5651 14.0651C6.81165 18.8185 6.81165 26.5252 11.5651 31.2787L30.5 50.2135L35.2338 45.4797"
                stroke="black"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M23 32.1668H29.6668L34.6668 25.5L39.6668 38.8332L44.6668 32.1668H53"
                stroke="black"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <h1 className="text-base text-center h-full pt-2 group-hover:hidden ">
            LIFE INSURANCE
          </h1>
        </div>
      </div>
    </div>
  );
}
