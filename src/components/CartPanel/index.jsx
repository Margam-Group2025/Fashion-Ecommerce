import React from 'react'
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

const CartPanel = () => {
  return (
       <>
          <div className='scroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden py-3 px-4'>
              <div className="cartItems w-full flex items-center gap-4 border-b border[rgba(0,0,0,0.1)]">
                <div className='img w-[30%]'>
                  <Link to="/product/9090" className='block group'>
                  <img src="/slides/item1.webp" alt="" className='w-full group-hover:scale-105'/>
                </Link>              
                 </div>
                
                <div className='info w-[70%] pr-5 relative'>
                  <h4 className='text-[16px] font-[500]'>
                    <Link to="/product/9090" className='transition-all'>                  
                      Pink silk Saree
                      </Link> 
                  </h4>
                  <p className='flex items-center gap-5 mt-2 mb-2'>
                    <span>
                        Qty: <span>2</span>
                        </span>
                        <span className='text-primary font-bold'>Price : $25
                    </span>
                  </p>
                   <RiDeleteBinLine className='absolute top-[10px] right-[10px] cursor-pointer text-[20px] link translate-all'/>

                </div>
       
              </div>
              <div className="cartItems w-full flex items-center gap-4 border-b border[rgba(0,0,0,0.1)]">
                <div className='img w-[30%]'>
                  <Link to="/product/9090" className='block group'>
                  <img src="/slides/item1.webp" alt="" className='w-full group-hover:scale-105'/>
                </Link>     
                </div>
    
                <div className='info w-[70%] pr-5 relative'>
                  <h4 className='text-[16px] font-[500]'>                   
                      Pink silk Saree
                  </h4>
                  <p className='flex items-center gap-5 mt-2 mb-2'>
                    <span>
                        Qty: <span>2</span>
                        </span>
                        <span className='text-primary font-bold'>Price : $25
                    </span>
                  </p>
                   <RiDeleteBinLine className='absolute top-[10px] right-[10px] cursor-pointer text-[20px] link translate-all'/>

                </div>
       
              </div>
              </div>

              <br />
              <br />
              <div className="buttonSec absolute w-full bottom-[10px] left-[10px] overflow-hidden">
              <div className="bottomInfo py-3 px-4 w-full border-t border-[rgba(0,0,0,0.1)] flex items-center justify-between flex-col">
                <div className='flex items-center justify-between w-full'>
                  <span className='text-[14px] font-[600]'>1 items</span>
                  <span className='text-primary font-bold'>$1700.00</span>
                </div>
                <div className='flex items-center justify-between w-full'>
                  <span className='text-[14px] font-[600]'>Shipping</span>
                  <span className='text-primary font-bold'>$100</span>
                </div>
                <div className='className="bottomInfo py-3 px-0 w-full border-t border-[rgba(0,0,0,0.1)] flex items-center justify-between flex-col'>
                 <div className='flex items-center justify-between w-full'>
                  <span className='text-[14px] font-[600]'>Total (tax excl.)</span>
                  <span className='text-primary font-bold'>$20.00</span>
                  </div>
                  <div className='flex items-center justify-between w-full'>
                  <span className='text-[14px] font-[600]'>Total (tax incl.)</span>
                  <span className='text-primary font-bold'>$20.00</span>
                  </div>
                  <div className='flex items-center justify-between w-full'>
                  <span className='text-[14px] font-[600]'>Taxs:</span>
                  <span className='text-primary font-bold'>$17.00</span>
                  </div>
                </div>

              <div className="flex items-center justify-between gap-8 py-3">
              <Link to="/cart" className="w-full block">
               <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-red-500 w-full">
                   VIEW CART
                </button>
                  </Link>
                <Link to="/checkout" className="w-full block">
               <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-red-500 w-full">
                  CHECKOUT
                </button>
                  </Link>
                </div>
               </div> 
               </div>            
       </>
  )
}

export default CartPanel
