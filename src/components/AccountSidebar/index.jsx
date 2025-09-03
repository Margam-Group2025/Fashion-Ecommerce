import React from 'react'
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import Button from '@mui/material/Button';
import { FaRegHeart } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import {Form, NavLink } from "react-router-dom"
const AccountSidebar = () => {
  return (
    <>
     <div className='card bg-white shadow-md rounded-md sticky top-10px'>
                <div className='w-full p-3 flex items-center justify-center flex-col'>
                    <div className='w-[110px] h-[110px] rounded-full overflow-hidden mb-4 relative'>
                        <img src="https://plus.unsplash.com/premium_photo-1682089810582-f7b200217b67?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D"
                         alt="" className='w-full h-full object-cover'/>
                    <div className='overlay w-[100%] h-[100%] absolute top-0 left-0 z-50 bg-[rgba(0,0,0,0.7)] flex items-center justify-center cursor-pointer'>
                    <FaCloudUploadAlt className='text-[#fff] text-[25px] '/>
                     <input type="file" className='absolute top-0 left-0 w-full h-full opacity-0'/>
                    </div>
                   </div>                    
                    <h1>Srabani Malik</h1>
                    <h6 className='text-[13px] font-[500]'>sibani@gmail.com</h6>
                  </div>
                    <ul className='list-none pb-5 bg-[rgb(255,254,254)] myAccountTabs'>
                        <li className='w-full'>
                         <NavLink to="/myAccount" exact={true} activeClassName="isActive">
                            <Button className="flex items-center !justify-start !text-left !py-3 !px-5 !text-[rgba(0,0,0,0.7)] !rounded-none w-full gap-2"> <FaUserAlt className='text-[17px]'/>
                            My Profile </Button>
                              </NavLink>
                        </li>
                       <li className='w-full'>
                         <NavLink to="/my-list" exact={true} activeClassName="isActive">
                            <Button className="flex items-center !justify-start !text-left !py-3 !px-5 !text-[rgba(0,0,0,0.7)] !rounded-none w-full gap-2"> <FaRegHeart className='text-[17px]'/>
                            My WishList </Button>
                              </NavLink>
                        </li>
                        <li className='w-full'>
                         <NavLink to="/my-order" exact={true} activeClassName="isActive">
                            <Button className="flex items-center !justify-start !text-left !py-3 !px-5 !text-[rgba(0,0,0,0.7)] !rounded-none w-full gap-2"> <IoBagCheckOutline className='text-[17px]'/>
                            My Order </Button>
                            </NavLink>
                        </li>
                          <li className='w-full'>
                           <NavLink to="/logout" exact={true} activeClassName="isActive">
                            <Button className="flex items-center !justify-start !text-left !py-3 !px-5 !text-[rgba(0,0,0,0.7)] !rounded-none w-full gap-2"> <MdLogout className='text-[17px]'/>
                            Logout </Button>
                        </NavLink>

                        </li>
                    </ul>
                </div>
    </>
  )
}

export default AccountSidebar