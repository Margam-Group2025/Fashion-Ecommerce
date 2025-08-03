import React from 'react'
import { Link } from 'react-router-dom'

const CartPage = () => {
  return (
    <>
    <section className='section py-5'>
      <div className='container w-[80%] max-w-[80%] flex'>
        <div className='leftPart w-[75%]'>
            <h2>Your Cart</h2>
            <p className='mt-0'>
                There are <span className='font-bold text-primary '>2</span>Products
                in your cart
            </p>

        <div className='shadow-md rounded-md p-5 bg-white'>
            <div className="cartItem w-full p-3 flex items-center gap-4">
             <div className='img w-[20%]'>
                <Link to="/product/5989">
                <img src="/slides/item1.webp" alt="" className='w-full'/>
                </Link>
                </div>               
            </div>
            </div>    
        </div>
      </div>
    </section>
    </>
  )
}

export default CartPage