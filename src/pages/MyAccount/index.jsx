import React from 'react'
import TextField from '@mui/material/TextField';
import AccountSidebar from '../../components/AccountSidebar';

const MyAccount = () => {
  return (
    <section className='py-10 w-full'>
        <div className='container flex gap-5'>
          <div className='col1 w-[20%]'>
           <AccountSidebar/>
            </div>

          {/* col2 */}
          <div className="col2 w-[60%]">
            <div className="card bg-white p-5 shadow-md rounded-md">
              <h2 className='pb-3'>My Profile</h2>
              <hr />

             <form className='mt-5 '>
              <div className='flex items-center gap-5 '>
               <div className='w-[50%]'>
               <TextField
                 label="Full Name"
                 variant="outlined"
                 size="small"
                 className="w-full"
                />
               </div>
               <div className='w-[50%]'>
               <TextField
                 label="Email"
                 variant="outlined"
                 size="small"
                 className="w-full"
                />
               </div>
               
              </div> 
              <div className='flex items-center gap-5 mt-3'>
               <div className='w-[50%]'>
               <TextField
                 label="Phone no"
                 variant="outlined"
                 size="small"
                 className="w-full"
                />
               </div>
              </div>

              <br />
              <div className="flex items-center gap-4">
                  <button className="bg-orange-600 text-white px-4 py-2 rounded  hover:bg-red-500 w-[100px]">Login</button>
                  <button className=" bg-slate-50 text-[rgba(0,0,0,0.7)] px-2 py-2 rounded border-2 border-orange-500 hover:bg-red-500 w-[100px]">Cancel</button>

              </div>
            </form>
            </div>
          </div>
        </div>
    </section>
  )
}

export default MyAccount