import React, { useState } from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import "../Sidebar/style.css"
import {Collapse} from 'react-collapse';
import { IoIosArrowDown } from "react-icons/io";
import Button from '@mui/material/Button';
import { FaAngleUp } from "react-icons/fa6";
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import Rating from '@mui/material/Rating';


const Siderbar = () => {
  const[isOpenCategoryFilter,setIsOpenCatagoryFilter] =useState(true)
  const[isOpenAvailabilityFilter,setIsOpenAvailabilityFilter] =useState(true)
  const[isOpenSizeFilter,setIsOpenSizeFilter] =useState(true)


  return (
   <aside className='siderbar py-5 '>
     <div className='box mt-3'>
      <h3 className='mb-3 text-[16px] font-[600] flex items-center pr-5'>Shop by Category
        <Button className="w-[30px] h-[30px] !rounded-full !ml-auto !text-black" onClick={()=>setIsOpenCatagoryFilter 
          (!isOpenCategoryFilter)}>
            {
              isOpenCategoryFilter === true ? <FaAngleUp /> : <IoIosArrowDown/>
 
            }
         
          </Button>
          </h3>
      <Collapse isOpened={isOpenCategoryFilter}>
      <div className='scroll px-3 relative -left-[13px]'>
      <FormControlLabel control={<Checkbox size="small" />} label="Fashion" className='w-full'/>
      <FormControlLabel control={<Checkbox size="small" />} label="Women" className='w-full'/>
      <FormControlLabel control={<Checkbox size="small" />} label="Kids" className='w-full'/>           
      <FormControlLabel control={<Checkbox size="small" />} label="Girls" className='w-full'/>
      <FormControlLabel control={<Checkbox size="small" />} label="Saree" className='w-full'/>
      <FormControlLabel control={<Checkbox size="small" />} label="Kurtas" className='w-full'/>
      <FormControlLabel control={<Checkbox size="small" />} label="Others" className='w-full'/>
      </div>
      </Collapse>
    </div>
    <div className='box mt-3'>
      <h3 className='mb-3 text-[16px] font-[600] flex items-center pr-5'>Availability
        <Button className="w-[30px] h-[30px] !rounded-full !ml-auto !text-black" onClick={()=>setIsOpenAvailabilityFilter 
          (!isOpenAvailabilityFilter)}>
            {
              isOpenAvailabilityFilter === true ? <FaAngleUp /> : <IoIosArrowDown/>
 
            }         
          </Button>
          </h3>
      <Collapse isOpened={isOpenAvailabilityFilter}>
      <div className='scroll px-3 relative -left-[13px]'>
      <FormControlLabel control={<Checkbox size="small" />} label="Available(17)" className='w-full'/>
      <FormControlLabel control={<Checkbox size="small" />} label="In stock (10)" className='w-full'/>
      <FormControlLabel control={<Checkbox size="small" />} label="Not Available(17)" className='w-full'/>           
      
      </div>
      </Collapse>
    </div>
     <div className='box mt-3'>
      <h3 className='mb-3 text-[16px] font-[600] flex items-center pr-5'>Size
        <Button className="w-[30px] h-[30px] !rounded-full !ml-auto !text-black" onClick={()=>setIsOpenSizeFilter 
          (!isOpenSizeFilter)}>
            {
              isOpenSizeFilter === true ? <FaAngleUp /> : <IoIosArrowDown/>
 
            }
         
          </Button>
          </h3>
      <Collapse isOpened={isOpenSizeFilter}>
      <div className='scroll px-3 relative -left-[13px]'>
      <FormControlLabel control={<Checkbox size="small" />} label="Cotton (10)" className='w-full'/>
      <FormControlLabel control={<Checkbox size="small" />} label="Silk (12)" className='w-full'/>
      <FormControlLabel control={<Checkbox size="small" />} label="Model (15)" className='w-full'/>
      <FormControlLabel control={<Checkbox size="small" />} label="Chiddon (16)" className='w-full'/>
      <FormControlLabel control={<Checkbox size="small" />} label="Polyster (11)" className='w-full'/>           
      </div>
      </Collapse>
    </div>

    <div className='box mt-3'>
      <h3 className='w-full mb-3 text-[16px] font-[600] flex items-center pr-5'>
        Filter By Price
      </h3>
       <RangeSlider />
       <div className='flex pt-4 pb-2 priceRange'>
        <span >
          from: <strong className='text-dark'>Rs: {100}</strong>
        </span>
        <span className='ml-auto'>
          form: <strong className='text-dark'>Rs: {5000}</strong>
        </span>
       </div>
    </div>
    {/* rating */}
    <div className='box mt-3'>
      <h3 className='mb-3 text-[16px] font-[600] flex items-center pr-5 w-full'>
        Filter By Rating
      </h3>
      <div className='w-full'>
        <Rating name="size-small" defaultValue={5} size="small" readOnly />
      </div>
      <div className='w-full'>
        <Rating name="size-small" defaultValue={4} size="small" readOnly />
      </div>
      <div className='w-full'>
        <Rating name="size-small" defaultValue={3} size="small" readOnly />
      </div>
      <div className='w-full'>
        <Rating name="size-small" defaultValue={2} size="small" readOnly />
      </div>
      <div className='w-full'>
        <Rating name="size-small" defaultValue={1} size="small" readOnly />
      </div>
    </div>
    
   </aside>
  )
}
             
export default Siderbar