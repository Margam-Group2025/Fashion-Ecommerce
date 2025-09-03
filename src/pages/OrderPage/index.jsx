import React, { useState } from 'react'
import AccountSidebar from '../../components/AccountSidebar'
import { FaAngleDown } from "react-icons/fa6";
import Button from '@mui/material/Button';
import Badge from '../../components/Badge';
import { FaAngleUp } from "react-icons/fa6";

const OrderPage = () => {
    const [isOpenOrderdProduct , setIsOpenOrderdProduct] = useState(null)

    const isShowOrderdProduct=(index)=>{
        if(isOpenOrderdProduct === index){
            setIsOpenOrderdProduct(null)
        }
        else{
            setIsOpenOrderdProduct(index)
        }
    }
  return (
    <>
    <section className='py-10 w-full'>
        <div className='container flex gap-5'>
          <div className='col1 w-[20%]'>
           <AccountSidebar/>                                                       
            </div>

          {/* col2 */}
          <div className="col2 w-[80%]">
            <div className='shadow-md rounded-md bg-white '>
            <div className='py-2 px-3 border-b border-[rgba(0,0,0,0.1)]'>
              <h2>My Orders</h2>
            <p className='mt-0'>
                There are <span className='font-bold text-primary '>2</span>{" "}Products
                in your Order
            </p>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
             <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
           <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                </th>
                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                    Order Id
                </th>
                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                    Payment Id
                </th>
                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                    Products
                </th>
                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                    Name
                </th>
                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                    Phone Number
                </th>
                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                  Address  
                </th>
                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                    Pincode
                </th>
                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                   Total Amount 
                </th>
                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                    Email
                </th>
                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                    User Id
                </th>
                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                    Order Status
                </th>
                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                    Date
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
            <td className='px-6 py-4 font-[500]'>
              <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white "
                onClick={()=>isShowOrderdProduct(0)} >
                {
                   isOpenOrderdProduct === 0 ? <FaAngleUp className='text-[16px] text-[rgba(0,0,0,0.7)]'/>
                   : <FaAngleDown className='text-[16px] text-[rgba(0,0,0,0.7)]'/> 
                }                
               </Button>

            </td>
            <td className='px-6 py-4 font-[500]'>
                4656yufdds4568
            </td>
            <td className='px-6 py-4 font-[500]'>
                56356426577
            </td>
            <td className='px-6 py-4 font-[500]'>
                Pink Saree
            </td>
            <td className='px-6 py-4 font-[500]'>
                Srabani Malik
            </td>
            <td className='px-6 py-4 font-[500]'>
               635289633 
            </td>
            <td className='px-6 py-4 font-[500]'>
                LIG-509 Bhubaneswar
            </td>
            <td className='px-6 py-4 font-[500]'>
                750036
            </td>
            <td className='px-6 py-4 font-[500]'>
               1400 
            </td>
            <td className='px-6 py-4 font-[500]'>
                sibani@gmail.com
            </td>
            <td className='px-6 py-4 font-[500]'>
                5656DD!2
            </td>
            <td className='px-6 py-4 font-[500]'>
              <Badge status="delivered" />                
            </td>
            <td className='px-6 py-4 font-[500]'>
                08.08.2025
            </td>
            </tr>
               {
                isOpenOrderdProduct === 0 &&
                   <tr>
               <td className='bg-[#f1f1f1]' ColSpan="6">
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg ">
             <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
           <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>

                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                    Product Id
                </th>
                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                    Product Title
                </th>
                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                    Image
                </th>
                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                    Quantity
                </th>
                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                     Price
                </th>
                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                  Sub Total  
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
            <td className='px-6 py-4 font-[500]'>
             665ffdredrfvbhg
            </td>
            <td className='px-6 py-4 font-[500]'>
                Pink Saree
            </td>
            <td className='px-6 py-4 font-[500]'>
                <img src="/slides/item1.webp" alt="" 
                className='w-[50px] h-[50px] object-cover rounded-md'/>
            </td>
            <td className='px-6 py-4 font-[500]'>
                1
            </td>
            <td className='px-6 py-4 font-[500]'>
                1400
            </td>
            <td className='px-6 py-4 font-[500]'>
               1400 
            </td>
            </tr>

            <tr>
               <td className='bg-[#f1f1f1]' ColSpan="12">
                
                </td> 
            </tr>
         </tbody>
        </table>
         </div>
        </td> 
        </tr>
               }
            
         </tbody>
        </table>
       </div>

        </div>
        </div>
        </div>
      </div> 
    </section>
    </>
  )
}

export default OrderPage