import React from 'react'
import './style.css';
import { IoSearch } from 'react-icons/io5';
const Search = () => {
  return (
    <div className='searchBox w-[100%] bg-[#e5e5e5] rounded-5 relative p-2'>
     <input type="text" placeholder='Search for Products...' 
     className='w-full h-[35px] focus:outline-none bg-inherit p-2 text-[15px]' />
     <button className='!absolute top-[8px] right-[5px] z-50 !w-[37px] !min-w-[37px] h-[37px] !rounded-full !text-black'>
      <IoSearch className='text-[22px] text-[#4e4e4e]' />
     </button>
    </div>
  )
}

export default Search ;