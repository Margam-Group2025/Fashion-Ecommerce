import React from 'react'
import QualityBox from '../../components/QualityBox';
import { FaShoppingCart } from 'react-icons/fa';
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompareSharp } from "react-icons/io5";
import Rating from "@mui/material/Rating";


const ProductDetailsPage = () => {
  return (
    <>
        
         <h1 className='text-[22px] font-[600] mb-2'> Onion Pink Threadwork Tissue Saree | Unveil your vibrant spirit with Koskii’s pink tissue saree</h1>
            <div className='flex items-center gap-3'>
             <span className='text-gray-400 text-13px'>
                Brands: 
                <span className='font-[500] text-black opacity-75'>The Loom</span></span>
                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                <span className='text-[13px]'>Review(5)</span>
              </div>
              <div className="flex items-center gap-4 mt-4">
               <span className="line-through text-gray-500 text-base font-medium">
                $3,500.00
              </span>
              <span className="text-red-500 font-semibold text-[18px]">$2,500.00</span>
              </div>
              <span className='text-[13px]'>In stock: <span className='text-green-600'>150 items</span></span>
              <br />
              <p className='mt-3 pr-10 mb-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam magnam minus eveniet veniam nisi, repellat blanditiis magni nesciunt, unde enim aperiam perferendis. Debitis facere porro velit id quos ipsum adipisci?</p>

             {/* size */}
              {/* <div className='flex items-center gap-3'>
                <span className='text-[16px]'>Size:</span>
                <div className='flex items-center gap-1 actions'>
                  <Button>S</Button>
                  <Button>M</Button>
                  <Button>L</Button>
                </div>
              </div> */}

              <div className='flex items-center gap-24 mt-5'>
                <div className='qtyBoxWrapper w-[8px]'>
                  <QualityBox/>
                </div>
                <button className="bg-orange-600 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-red-500">
                 <FaShoppingCart />
                     Add to Cart
                </button>
              </div>
               <div className='flex items-center gap-4 mt-5'>
                  <span className='flex items-center gap-2 text-[14px] link cursor-pointer'><FaRegHeart />Add to Wishlist</span>                 
                  <span className='flex items-center gap-2 text-[14px] link cursor-pointer'><IoGitCompareSharp  />Add to Compare</span>

               </div>
    </>
  )
}

export default ProductDetailsPage