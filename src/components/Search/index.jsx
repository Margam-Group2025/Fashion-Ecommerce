import React from 'react'
import './style.css';
import { IoSearch } from 'react-icons/io5';
const Search = () => {
  return (
    <div className='searchBox w-[100%] bg-[#f6e6ec]  border-[#E80071] rounded-5 relative p-2'>
     <input type="text" placeholder='Search on Mohe Piya' 
     className='w-full h-[35px] focus:outline-none bg-inherit p-2 text-[15px]' />
     <button className='!absolute top-[8px] right-[5px] z-50 !w-[37px] !min-w-[37px] h-[37px] !rounded-full !text-black'>
      <IoSearch className='text-[22px] text-[#292828]' />
     </button>
    </div>
  )
}

export default Search ;