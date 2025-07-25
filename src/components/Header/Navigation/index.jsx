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
                <Link to="/" className=" link transition text-[16px] font-[500] hover:text-orange-500 active:text-orange-500">Home</Link>
              </li>
              <li className='list-none relative'>
                <Link to="/" className="link transition text-[16px] font-[500] hover:text-orange-500 active:text-orange-500">

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
         <div className="relative group">
      {/* Main Nav Item */}
      <button className=" px-4 py-2 font-semibold text-Black hover:text-orange-600">
        Clothing
      </button>

      {/* Dropdown Content */}
      <div className="absolute left-1/2 top-full -translate-x-1/2 z-50 hidden group-hover:flex bg-white w-[800px] shadow-lg border-t border-gray-200 p-6 gap-8 text-sm text-gray-700">
         <div className="flex gap-6 divide-x divide-gray-200 w-full">

        {/* KURTAS */}
        <div className='pr-6'>
          <h4 className="font-bold mb-2">KURTAS</h4>
          <ul>
            <li className="hover:text-orange-600 text-slate-800 cursor-pointer">All Kurtas</li>
            <li className="hover:text-orange-600 text-slate-800 cursor-pointer">Straight</li>
            <li className="hover:text-orange-600 text-slate-800 cursor-pointer">A-line</li>
            <li className="hover:text-orange-600 text-slate-800 cursor-pointer">Gathered</li>
            <li className="hover:text-orange-600 text-slate-800 cursor-pointer">Anarkali</li>
            <li className="hover:text-orange-600 text-slate-800 cursor-pointer">Kaftan</li>
          </ul>
        </div>
       {/* SAREES */}
        <div className='pl-6 pr-6'>
          <h4 className="font-bold text-orange-600 mb-2">SAREES</h4>
          <ul>
            <li className="hover:text-orange-600 text-slate-800 cursor-pointer">All Sarees</li>
            <li className="hover:text-orange-600 text-slate-800 cursor-pointer">Woven</li>
            <li className="hover:text-orange-600 text-slate-800 cursor-pointer">Printed</li>
            <li className="hover:text-orange-600 text-slate-800 cursor-pointer">Embroidered</li>
            <li className="hover:text-orange-600 text-slate-800 cursor-pointer">Hand Painted</li>
          </ul>
        </div>

        {/* SETS */}
        <div className='pl-6 pr-6'>
          <h4 className="font-bold mb-2">SETS</h4>
          <ul>
            <li className="hover:text-orange-600 text-slate-800 cursor-pointer">Lehenga Sets</li>
            <li className="hover:text-orange-600 text-slate-800 cursor-pointer">Sharara Sets</li>
            <li className="hover:text-orange-600 text-slate-800 cursor-pointer">Sleepwear/Nightwear</li>
            <li className="hover:text-orange-600 text-slate-800 cursor-pointer">Loungewear</li>
          </ul>
        </div>

        {/* MIX & MATCH */}
        <div className='pl-6 pr-6'>
          <h4 className="font-bold text-orange-600 mb-2">MIX & MATCH</h4>
          <ul>
            <li className="hover:text-orange-600 text-slate-800 cursor-pointer">Bottoms</li>
            <li className="hover:text-orange-600 text-slate-800 cursor-pointer">Blouses</li>
            <li className="hover:text-orange-600 text-slate-800 cursor-pointer">Jackets</li>
            <li className="hover:text-orange-600 text-slate-800 cursor-pointer">Scarfs & Shawls</li>
            <li className="hover:text-orange-600 text-slate-800 cursor-pointer">Dupattas</li>
            <li className="hover:text-orange-600 text-slate-800 cursor-pointer">Skirts</li>
          </ul>
        </div>
         {/* DRESSES */}
        <div className='pl-6 pr-6'>
          <h4 className="font-bold mb-2">DRESSES</h4>
          <ul>
            <li className="hover:text-orange-600 text-slate-800 cursor-pointer">All Dresses</li>
            <li className="hover:text-orange-600 text-slate-800 cursor-pointer">Short</li>
            <li className="hover:text-orange-600 text-slate-800 cursor-pointer">Midi</li>
            <li className="hover:text-orange-600 text-slate-800 cursor-pointer">Long</li>
            <li className="hover:text-orange-600 text-slate-800 cursor-pointer">Ready-to-ship</li>
            <li className="hover:text-orange-600 text-slate-800 cursor-pointer">Maternity Dresses</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
                <li className='list-none'>
                    <Link to="/" className="link transition text-[16px] font-[500] hover:text-orange-500 active:text-orange-500">Saree</Link> 
                </li>
                <li className='list-none'>
                    <Link to="/" className="link transition text-[16px] font-[500] hover:text-orange-500 active:text-orange-500">Explore</Link> 
                </li>
                <li className='list-none relative'>
                    <Link to="/" className="link transition text-[16px] font-[500] hover:text-orange-500 active:text-orange-500">Occasion</Link> 
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
                    <Link to="/" className="link transition text-[16px] font-[500] hover:text-orange-500 active:text-orange-500">New Arrivals</Link>
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