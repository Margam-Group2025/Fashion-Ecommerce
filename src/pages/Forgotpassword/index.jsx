import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import {Link, useNavigate} from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { useContext } from 'react';
import { MyContext } from '../../App';

const forgotpassword = () => {

 const [isShowPassword ,setIsShowPassword] = useState(false) 
  const [isShowPassword2 ,setIsShowPassword2] = useState(false) 

 const context = useContext(MyContext);
 const history = useNavigate();


  return (
    <>
    <section className='section py-10'>
     <div className="container">
        <div className="card shadow-md w-[500px] m-auto rounded-md bg-white p-4">
            <h3 className='text-center text-[18px] text-black'>
                Forgot Password
            </h3>

            <form className="w-full mt-5">
                <div className="form-group w-full mb-5 relative">
                 <TextField
                  type={isShowPassword === false ? "password" : "text"}
                  id="Password"
                  label="New Password" 
                  variant="outlined" 
                  className='w-full '
                  name='phone'
                  required/>
                  <Button type='submit' className='!absolute top-[10px] right-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black'
                   onClick={()=>setIsShowPassword(!isShowPassword)}>

                    {
                        isShowPassword === false ? <FaEye className='text-[20px] opacity-75'/> :
                        <FaEyeSlash className='text-[20px] opacity-75'/>
                    }
                  </Button>
                </div>
                <div className="form-group w-full mb-5 relative">
                 <TextField 
                 type={isShowPassword2 === false ? "password" : "text"}
                  id="confirm_password"
                  label="Confirm Password" 
                  variant="outlined" 
                  className='w-full '
                  name='password'
                  required/>
                  <Button type='submit' className='!absolute top-[10px] right-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black'
                   onClick={()=>setIsShowPassword2(!isShowPassword2)}>

                    {
                        isShowPassword2 === false ? <FaEye className='text-[20px] opacity-75'/> :
                        <FaEyeSlash className='text-[20px] opacity-75'/>
                    }
                  </Button>
                </div>
                <div className="flex items-center w-full mt-5">

                    <button className="bg-orange-600 text-white px-4 py-2 rounded  hover:bg-red-500 w-full">Change Password</button>
                </div>
            </form>
        </div>
     </div>
    </section>
    </>
  )
}

export default forgotpassword