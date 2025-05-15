import React from "react";
import {FaEye, FaRegHeart} from 'react-icons/fa'
import { RiShoppingCartLine } from "react-icons/ri";
import Rating from "../Rating";

const FeeatureProducts = () => {
  return (
    <div className="w-[85%] flex flex-wrap mx-auto">
      <div className="w-full">
        <div className="text-center flex justify-center items-center flex-col text-4xl text-slate-600 font-bold relative pb-[45px]">
          <h2>Feature Products</h2>
          <div className="w-[100px] h-[2px] bg-[#059473] mt-4"></div>
        </div>
      </div>

      <div className="w-full grid grid-cols-4 md-lg:grid-cols-3 md-lg:grid-cols-3 md:grid-cols-2 sm:grid-cols gap-6">
        {[1, 2, 3, 4, 5, 6].map((p, i) => (
          <div
            key={i}
            className="border group transition-all duration-500 hover:shadow-md hover:-mt-3"
          >
            <div className="relative overflow-hidden">
              <div className="flex justify-center items-center absolute text-center w-[38px] h-[38px] rounded-full bg-red-500 font-semibold text-xs left-2 top-2">
                8%
              </div>
              <img className="sm:w-ful h-[240px]" src={`http://localhost:3000/images/products/${i + 1}.webp`} alt="" />
              <ul className="flex transition-all duration-700 -bottom-10 justify-center items gap-2 absolute w-full group-hover:bottom-3">
              <li className="w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#059473] hover:text-white hover:rotate-[720deg] transition-all">
                <FaRegHeart /></li>                
              <li className="w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#059473] hover:text-white hover:rotate-[720deg] transition-all">
                <FaEye /></li>                
              <li className="w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#059473] hover:text-white hover:rotate-[720deg] transition-all">
                <RiShoppingCartLine /></li>                
              </ul>
            </div>

            <div className="py-3 text-slate-600 px-2">
              <h2 className="fonto-bold">Product Name</h2>
              <div className="flex justify-start items-center gap-3">
                <span className="text-lg font-semibold">$656</span>
                  <Rating ratings={4.5}/>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeeatureProducts;
