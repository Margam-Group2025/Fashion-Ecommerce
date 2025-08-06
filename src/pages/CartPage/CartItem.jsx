import MenuItem from '@mui/material/MenuItem';
import React, { useState } from 'react'
import { GoTriangleDown } from "react-icons/go";
import Menu from '@mui/material/Menu';
import { Link } from 'react-router-dom'
import { IoMdClose } from "react-icons/io";
import Rating from "@mui/material/Rating";


const CartItem = (props) => {
    const [qtyanchorEl, setQtyAnchorEl] = useState(null);
      const [selectedIndex, setSelectedIndex] =useState(props.size);
      const openQty = Boolean(qtyanchorEl);
      
      const handleClickQty = (event) => {
        setQtyAnchorEl(event.currentTarget);
      };
      const handleCloseQty = (value) => {
       setQtyAnchorEl(null);
        if(value !== null){
          setSelectedIndex(value)
        }else{

        }
      };
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
                    <div className='flex items-center gap-4 mt-2'>
                      <div className='relative'>
                     <span className='flex items-center justify-center bg-[#f1f1f1] text-[11px] font-[600] py-1 px-2 rounded-md cursor-pointer'
                     onClick={handleClickQty}
                     >
                      Qty: {selectedIndex} <GoTriangleDown/>
                      </span> 
                  
                   <Menu
                    id="basic-menu"
                    anchorEl={qtyanchorEl}
                    open={openQty}
                    onClose={()=>handleCloseQty(null)}
                    slotProps={{
                    list: {
                   'aria-labelledby': 'basic-button',
                    },
                    }}
                  >
                  <MenuItem onClick={()=>handleCloseQty('2')}>2</MenuItem>
                  <MenuItem onClick={()=>handleCloseQty('3')}>3</MenuItem>
                  <MenuItem onClick={()=>handleCloseQty ('4')}>4</MenuItem>
                   </Menu>
                   </div>
                   </div>
                <div className="mt-1 flex items-center gap-4">
                   <span className="text-black font-semibold text-[14px]">$2,500.00</span>              
                 <span className="line-through price text-[14px] font-[600] text-gray-500">
                  $3,500.00
                  </span>
                   <span className="text-green-600 font-semibold text-[14px]">%55 OFF</span>
                   </div>
                 </div>                      
             </div>
             </>
        )
      }

export default CartItem