import React from 'react'
import { ShoppingCart } from "lucide-react";
import CartItem from './CartItem';

const CartPage = () => {
 
  return (
    <>
    <section className='section py-5 pb-10'>
      
      <div className='container w-[80%] max-w-[80%] flex gap-5'>
        <div className='leftPart w-[70%]'>
          <div className='shadow-md rounded-md bg-white '>
            <div className='py-2 px-3 border-b border-[rgba(0,0,0,0.1)]'>
              <h2>Your Cart</h2>
            <p className='mt-0'>
                There are <span className='font-bold text-primary '>2</span>Products
                in your cart
            </p>
            </div>
 
           {/* Quantity */}
           <CartItem size={1}/>
           <CartItem size={1}/>

            </div>    
        </div>
        <div className="rightPart w-[30%]">
          <div className='shadow-md rounded-md bg-white p-7'>
            <h3 className='pb-3'>
              Cart Totals
            </h3>
            <hr />
            <p className='flex items-center justify-between'>
              <span className='text-[14px] font-500'>Subtotal</span>
              <span className='text-primary font-bold'>$2500.00</span>
            </p>

            <p className='flex items-center justify-between'>
              <span className='text-[14px] font-500'>Shiping</span>
              <span className='font-bold'>Free</span>
            </p>

            <p className='flex items-center justify-between'>
              <span className='text-[14px] font-500'>Platform fee</span>
              <span className=' font-bold'>Free</span>
            </p>
             <p className='flex items-center justify-between'>  
              <span className='text-[14px] font-500'>Total</span>
              <span className=' font-bold'>$2500.00</span>
            </p>
              <button className="bg-orange-500 text-white hover:bg-orange-600 flex items-center justify-center gap-2 py-2 px-4 w-full rounded-lg">
               <ShoppingCart className="w-5 h-5" />
                  Checkout
              </button>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default CartPage