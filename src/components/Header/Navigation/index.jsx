import React ,{useState}from 'react'
import Button from '@mui/material/Button';
import { CgMenuLeftAlt } from "react-icons/cg";
import { TfiAngleDown } from "react-icons/tfi";
import { Link } from 'react-router-dom';
import { GoRocket } from "react-icons/go";
import CategoryPanels from './CategoryPanels';


const Navigation = () => {
  const [openPanels, setOpenPanels] =React.useState(false);

  const openCategoryPanel =() =>{
      setOpenPanels(true);
  }
  return ( 
    <>
    <nav className='py-2'>
        <div className='container flex items-center justify-end '>
        <div className="col1 w-[30%]">
           <Button className='!text-black gap-2' onClick={openCategoryPanel}>
               <CgMenuLeftAlt  className='text-[18px]'/> Shop By Categories
               <TfiAngleDown className='text-[18px]' />
           </Button>
        </div>
        <div className="col2 w-[65%]">
            <ul className='flex items-center gap-6 nav'>
              <li className='list-none'>
                <Link to="/" className=" link transition text-[16px] font-[500] hover:text-pink-500 active:text-pink-500">Home</Link>
              </li>
              <li className='list-none relative'>
                <Link to="/" className="link transition text-[16px] font-[500] hover:text-pink-500 active:text-pink-500">

                Fashion</Link>
                <div className='submenu absolute top-[120%] left-0 min-w-[100px] bg-white shadow-md opacity-0 transition-all'>
                  <ul>
                       <li className='list-none w-full !text-left !justify-start !rounded-none'>
                        <Link className='w-full link-danger'>
                         <Button className='!text-[rgba(31,30,30,0.9)]'>Women</Button>
                         </Link>
                      </li>
                       <li className='list-none w-full !text-left !justify-start !rounded-none'>
                        <Link className='w-full '>
                         <Button className='!text-[rgba(0,0,0,0.8)] '>Girls</Button>
                          </Link>
                      </li>                       
                       <li className='list-none w-full !text-left !justify-start !rounded-none'>
                        <Link className='w-full link-danger'>
                         <Button className='!text-[rgba(0,0,0,0.8)] '>Kids</Button>
                         </Link>
                      </li> 
                  </ul>
                </div>
              </li>
                <li className='list-none'>
                    <Link to="/" className="link transition text-[16px] font-[500] hover:text-pink-500 active:text-pink-500">Bags</Link> 
                </li>
                <li className='list-none'>
                    <Link to="/" className="link transition text-[16px] font-[500] hover:text-pink-500 active:text-pink-500">Beauty</Link> 
                </li>
                <li className='list-none'>
                    <Link to="/" className="link transition text-[16px] font-[500] hover:text-pink-500 active:text-pink-500">Explore</Link> 
                </li>
                <li className='list-none relative'>
                    <Link to="/" className="link transition text-[16px] font-[500] hover:text-pink-500 active:text-pink-500">Occasion</Link> 
                    <div className='submenu absolute top-[120%] left-0 min-w-[100px] bg-white shadow-md opacity-0 transition-all'>
                  <ul>
                       <li className='list-none w-full !text-left !justify-start !rounded-none'>
                        <Link className='w-full link-danger'>
                         <Button className='!text-[rgba(31,30,30,0.9)] '>Haldi</Button>
                         </Link>
                      </li>
                       <li className='list-none w-full !text-left !justify-start !rounded-none'>
                        <Link className='w-full link-danger'>
                         <Button className='!text-[rgba(0,0,0,0.8)] '>Mehendi</Button>
                          </Link>
                      </li>                       
                       <li className='list-none w-full !text-left !justify-start !rounded-none'>
                        <Link className='w-full link-danger'>
                         <Button className='!text-[rgba(0,0,0,0.8)] '>Wedding</Button>
                         </Link>
                      </li>
                       <li className='list-none w-full !text-left !justify-start !rounded-none'>
                        <Link className='w-full link-danger'>
                         <Button className='!text-[rgba(0,0,0,0.8)] '>Engagement</Button>
                         </Link>
                      </li>
                      
                      <li className='list-none w-full !text-left !justify-start !rounded-none'>
                        <Link className='w-full link-danger'>
                         <Button className='!text-[rgba(0,0,0,0.8)] '>Sangeet</Button>
                         </Link>
                      </li>
                      
                      <li className='list-none w-full !text-left !justify-start !rounded-none'>
                        <Link className='w-full link-danger'>
                         <Button className='!text-[rgba(0,0,0,0.8)] '>Dewali</Button>
                         </Link>
                      </li>
                    
                  </ul>
                </div>
                </li>
                 <li className='list-none relative'>
                    <Link to="/" className="link transition text-[16px] font-[500] hover:text-pink-500 active:text-pink-500">New Arrivals</Link>
                    <div className='submenu absolute top-[120%] left-0 min-w-[100px] bg-white shadow-md opacity-0 transition-all'>
                  <ul>
                       <li className='list-none w-full !text-left !justify-start !rounded-none'>
                        <Link className='w-full link-danger'>
                         <Button className='!text-[rgba(31,30,30,0.9)] '>Sarees</Button>
                         </Link>
                      </li>
                       <li className='list-none w-full !text-left !justify-start !rounded-none'>
                        <Link className='w-full link-danger'>
                         <Button className='!text-[rgba(0,0,0,0.8)] '>Lehengas</Button>
                          </Link>
                      </li>                       
                       <li className='list-none w-full !text-left !justify-start !rounded-none'>
                        <Link className='w-full link-danger'>
                         <Button className='!text-[rgba(0,0,0,0.8)] '>Salwear Dress</Button>
                         </Link>
                      </li> 
                  </ul>
                </div> 
              </li>
            </ul>
        </div>
        <div className="col3 w-[15%]">
             <p className='text-[13px] font-[500] flex items-center gap-3 mb-0 mt-0'>
               <GoRocket  className='text-[18px]' /> Free Delivary on 1st Order</p>
        </div>
        </div>
    </nav>
    
      <CategoryPanels openPanels={openPanels} setOpenPanels={setOpenPanels} />
      </>
  )
}

export default Navigation