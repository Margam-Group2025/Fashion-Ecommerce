import React from 'react'
import Link from '@mui/material/Link'

const OfferHeader = () => {
  return (
    <header className='bg-pink-300'>
        <div className="top-strip py-2 border-t-[1px] border-gray-250 border-b-[1px]">
            <div className="container ">
                <div className='flex items-center justify-between'>
                    <div className='coll w-[50%]'>
                        <p className='text-[14px] font-[500] '>Get up to 30% off new season styles , limited offer</p>
                    </div>
                    <div className='col2 flex align-items-center justify-end '>
                        <ul className='flex items-center gap-4'>
                            <li className='list-none'>
                                <Link to="#" className='text-[13px]  font-[500] transition'>Help Center</Link>
                            </li>
                            <li className='list-none'>
                                <Link to="#" className='text-[13px]  font-[500] transition'>Order Tracking</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
         
  )
}


export default OfferHeader