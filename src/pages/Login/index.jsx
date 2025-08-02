import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import {Link} from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";



const Login = () => {

 const [isShowPassword ,setIsShowPassword] = useState(false) 

  return (
    <>
    <section className='section py-10'>
     <div className="container">
        <div className="card shadow-md w-[500px] m-auto rounded-md bg-white p-4">
            <h3 className='text-center text-[18px] text-black'>
                Login to your account
            </h3>

            <form className="w-full mt-5">
                <div className="form-group w-full mb-5">
                 <TextField
                  type='email'
                  id="email"
                  label="Email Id" 
                  variant="outlined" 
                  className='w-full '
                  required/>
                </div>
                <div className="form-group w-full mb-5 relative">
                 <TextField 
                 type={isShowPassword === false ? "password" : "text"}
                  id="password"
                  label="Password" 
                  variant="outlined" 
                  className='w-full '
                  required/>
                  <Button className='!absolute top-[10px] right-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black'
                   onClick={()=>setIsShowPassword(!isShowPassword)}>

                    {
                        isShowPassword === false ? <FaEye className='text-[20px] opacity-75'/> :
                        <FaEyeSlash className='text-[20px] opacity-75'/>
                    }
                  </Button>
                </div>

                <a className="link cursor-pointer text-[14px] font-[600px]"> Forget Password</a>

                <div className="flex items-center w-full mt-5">

                    <button className="bg-orange-600 text-white px-4 py-2 rounded  hover:bg-red-500 w-full">Login</button>
                </div>

                <p className='text-center'>Not Registered? <Link className="link text-[14px] font-[600] text-primary" to="/register">Sign Up</Link></p>

                <p className='text-center font-[500]'>Or Continue with social account</p>

                <Button className='flex gap-3 w-full btn-lg !bg-[#f1f1f1] !text-black'>
                  <FcGoogle className='text-[20px]'/> Login with Google
                </Button>
            </form>
        </div>
     </div>
    </section>
    </>
  )
}

export default Login