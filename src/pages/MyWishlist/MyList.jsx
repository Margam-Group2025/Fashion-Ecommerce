import MenuItem from '@mui/material/MenuItem';
import React, { useState } from 'react'
import { GoTriangleDown } from "react-icons/go";
import Menu from '@mui/material/Menu';
import { Link } from 'react-router-dom'
import { IoMdClose } from "react-icons/io";
import Rating from "@mui/material/Rating";


const MyList = () => {
    
  return (
    <>
          <div className="cartItem w-full p-3 flex items-center gap-4 pb-5 border-b border-[rgba(0.0.0.0,1)]">
             <div className='img w-[20%]'>
                <Link to="/product/5989">
                <img src="/slides/item1.webp" alt="" className='w-full group-hover:scale-105 transition-all'/>
                </Link>
                </div>
                <div className="info w-[85%] relative">
                  <IoMdClose className='cursor-pointer absolute top-[0px] right-[0px] text-[22px] link transition-all'/>
                  <span className='text-[13px]'>Brand Name</span>
                  <h3 className='text-[15px]'> 
                    <Link className='link'>Pink Silk Saree
                    </Link>
                    </h3> 
                      <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                <div className="mt-1 flex items-center gap-4">
                   <span className="text-black font-semibold text-[14px]">$2,500.00</span>              
                 <span className="line-through price text-[14px] font-[600] text-gray-500">
                  $3,500.00
                  </span>
                   <span className="text-green-600 font-semibold text-[14px]">%55 OFF</span>
                   </div>
                      <button className="bg-orange-600 text-white px-4 py-2 rounded  hover:bg-red-500 w-[150px] mt-1">Add to cart</button>

                 </div>                      
             </div>
             </>
        )
      }

export default MyList