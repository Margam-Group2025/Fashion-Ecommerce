import React from 'react'
import { ShoppingCart } from "lucide-react";
import MyList from './MyList';
import AccountSidebar from '../../components/AccountSidebar';

const MyWishList = () => {
 
  return (
    <>
    <section className='py-10 w-full'>
        <div className='container flex gap-5'>
          <div className='col1 w-[20%]'>
           <AccountSidebar/>
            </div>

          {/* col2 */}
          <div className="col2 w-[60%]">
            <div className='shadow-md rounded-md bg-white '>
            <div className='py-2 px-3 border-b border-[rgba(0,0,0,0.1)]'>
              <h2>My Wishlist</h2>
            <p className='mt-0'>
                There are <span className='font-bold text-primary '>2</span>Products
                in your Wishlist
            </p>
            </div>
 
           {/* Quantity */}
           <MyList />
           <MyList />
           <MyList />
           <MyList />

            </div>  
          </div>
        </div>
    </section>
    </>
  )
}

export default MyWishList
