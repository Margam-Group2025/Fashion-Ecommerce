import React from 'react'
import TextField from '@mui/material/TextField';
import { ShoppingCart } from "lucide-react";

const CheckOut = () => {
  return (
    <section className='py-10'>
        <div className="container flex gap-5">
           <div className="leftCol w-[70%]">
            <div className="card bg-white shadow-md p-5 rounded-md w-full">
                <h1>Billing Details</h1>
                <form className="w-full mt-5">
                  <div className='flex items-center gap-5 pb-5'>
                    <div className="col w-[50%]">
                      <TextField
                          type="fullname"
                          label="Full Name" 
                          variant="outlined"  
                          required/>
                    </div>
                    <div className="col w-[50%]">
                      <TextField
                          type="email"
                          label="Email" 
                          variant="outlined"  
                          />
                    </div>
                  </div>
                  <h6 className='text-[14px]'>Street Address*</h6>
                  <div className='flex items-center gap-5 pb-5 mt-3'>
                    <div className='col w-[100%] gap-3'>
                      <TextField
                          label="House Number and Street Name" 
                          variant="outlined"
                          className='w-full'  
                          size='small'
                          required/>
                    </div>
                  </div>
                   <div className='flex items-center gap-5 pb-5'>
                    <div className='col w-[100%] gap-3'>
                      <TextField
                          label="Apartment suite,unit,etc.(optional)" 
                          variant="outlined"
                          className='w-full'  
                          size='small'
                          />
                         </div>
                         </div>
                  <h6 className='text-[14px]'>Town/City*</h6>
                  <div className='flex items-center gap-5 pb-5 mt-3'>
                    <div className='col w-[100%] gap-3'>
                      <TextField
                          label="City" 
                          variant="outlined"
                          className='w-full'  
                          size='small'
                          />
                    </div>
                  </div>
                   <h6 className='text-[14px]'>State/Country*</h6>
                  <div className='flex items-center gap-5 pb-5 mt-3'>
                    <div className='col w-[100%] gap-3'>
                      <TextField
                          label="State" 
                          variant="outlined"
                          className='w-full'  
                          size='small'
                          />
                    </div>
                  </div>
                  <h6 className='text-[14px]'>Postcode/ZIP*</h6>
                  <div className='flex items-center gap-5 pb-5 mt-3'>
                    <div className='col w-[100%] gap-3'>
                      <TextField
                          label="ZIP Code" 
                          variant="outlined"
                          className='w-full'  
                          size='small'
                          />
                    </div>
                     <div className='col w-[100%] gap-3'>
                      <TextField
                          label="Phone Number" 
                          variant="outlined"
                          className='w-full'  
                          size='small'
                          />
                    </div>
                    <div className='col w-[100%] gap-3'>
                      <TextField
                          label="Email Address" 
                          variant="outlined"
                          size='small'
                          />
                    </div>
                  </div>
                  
                </form>
            </div>
           </div>
           {/* rightcol */}
           <div className="rightCol w-[30%]">
            <div className="card shadow-md bg-white p-5 rounded-md">
              <h2 className='mb-4'>Your Order</h2>
              <div className="flex items-center py-3 justify-between border-t border-b border-[rgba(0,0,0,0.1)] ">
                <span className='font-[600] text-[14px]'>Product</span>
                <span className='font-[600] text-[14px]'>Subtotal</span>
              </div>
              <div className='scroll max-h-[250px] overflow-y-scroll overflow-x-hidden'>
              <div className="flex items-center justify-between py-2">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md">
                    <img src="/catloge/catslide2.jpeg" alt="" className='w-full'/>
                    </div>
                    <div className="info ">
                      <h4 className='text-[14px]'>A Line saree</h4>
                      <span className='text-[13px]'>Qty : 1</span>
                    </div>
                   </div>
                   <span className='text-[14px] font-[600]'>$1400.00</span>
                </div>
                <div className="flex items-center justify-between py-2">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md">
                    <img src="/catloge/catslide2.jpeg" alt="" className='w-full'/>
                    </div>
                    <div className="info ">
                      <h4 className='text-[14px]'>A Line saree</h4>
                      <span className='text-[13px]'>Qty : 1</span>
                    </div>
                   </div>
                   <span className='text-[14px] font-[600]'>$1400.00</span>
                </div>
                <div className="flex items-center justify-between py-2">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md">
                    <img src="/catloge/catslide2.jpeg" alt="" className='w-full'/>
                    </div>
                    <div className="info ">
                      <h4 className='text-[14px]'>A Line saree</h4>
                      <span className='text-[13px]'>Qty : 1</span>
                    </div>
                   </div>
                   <span className='text-[14px] font-[600]'>$1400.00</span>
                </div>
                <div className="flex items-center justify-between py-2">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md">
                    <img src="/catloge/catslide2.jpeg" alt="" className='w-full'/>
                    </div>
                    <div className="info ">
                      <h4 className='text-[14px]'>A Line saree</h4>
                      <span className='text-[13px]'>Qty : 1</span>
                    </div>
                   </div>
                   <span className='text-[14px] font-[600]'>$1400.00</span>
                </div>
                <div className="flex items-center justify-between py-2">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md">
                    <img src="/catloge/catslide2.jpeg" alt="" className='w-full'/>
                    </div>
                    <div className="info ">
                      <h4 className='text-[14px]'>A Line saree</h4>
                      <span className='text-[13px]'>Qty : 1</span>
                    </div>
                   </div>
                   <span className='text-[14px] font-[600]'>$1400.00</span>
                </div>
                <div className="flex items-center justify-between py-2">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md">
                    <img src="/catloge/catslide2.jpeg" alt="" className='w-full'/>
                    </div>
                    <div className="info ">
                      <h4 className='text-[14px]'>A Line saree</h4>
                      <span className='text-[13px]'>Qty : 1</span>
                    </div>
                   </div>
                   <span className='text-[14px] font-[600]'>$1400.00</span>
                </div>
                <div className="flex items-center justify-between py-2">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md">
                    <img src="/catloge/catslide2.jpeg" alt="" className='w-full'/>
                    </div>
                    <div className="info ">
                      <h4 className='text-[14px]'>A Line saree</h4>
                      <span className='text-[13px]'>Qty : 1</span>
                    </div>
                   </div>
                   <span className='text-[14px] font-[600]'>$1400.00</span>
                </div>
                <div className="flex items-center justify-between py-2">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md">
                    <img src="/catloge/catslide2.jpeg" alt="" className='w-full'/>
                    </div>
                    <div className="info ">
                      <h4 className='text-[14px]'>A Line saree</h4>
                      <span className='text-[13px]'>Qty : 1</span>
                    </div>
                   </div>
                   <span className='text-[14px] font-[600]'>$1400.00</span>
                </div>
                <div className="flex items-center justify-between py-2">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md">
                    <img src="/catloge/catslide2.jpeg" alt="" className='w-full'/>
                    </div>
                    <div className="info ">
                      <h4 className='text-[14px]'>A Line saree</h4>
                      <span className='text-[13px]'>Qty : 1</span>
                    </div>
                   </div>
                   <span className='text-[14px] font-[600]'>$1400.00</span>
                </div>
                </div>
                <button className="bg-orange-500 text-white hover:bg-orange-600 flex items-center justify-center gap-2 py-2 px-4 w-full rounded-lg mt-3">
               <ShoppingCart className="w-5 h-5" />
                  Checkout
              </button>
              </div>
             </div>
             </div>
    </section>
  )
}

export default CheckOut