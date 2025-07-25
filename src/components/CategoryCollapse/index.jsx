import React,{useState} from 'react'
import Button from '@mui/material/Button';
import { FaRegSquarePlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FiMinusSquare } from "react-icons/fi";
const index = () => {
    const [submenuIndex , setSubmenuIndex] = useState(null);
     const [innerSubmenuIndex , setInnerSubmenuIndex] = useState(null);

      const openSubmenu = (index) => {
    if (submenuIndex === index) {
      setSubmenuIndex(null);
    }else{
      setSubmenuIndex(index);
    }
  }
  const openInnerSubmenu = (index) => {
    if ( innerSubmenuIndex=== index) {
      setInnerSubmenuIndex(null);
    }else{
      setInnerSubmenuIndex(index);
    }
  }
  return (
    <>
        <div className='scroll'>
          <ul className='w-full'>
            <li className='list-none flex items-center relative flex-col'>
              <Link to="/" className='w-full'>
              <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.7)] '>
                Fashion
                </Button>
              </Link>
              {
                submenuIndex === 0 ? (
                  <FiMinusSquare 
                className='absolute top-[10px] right-[15px] cursor-pointer' 
                onClick={()=>openSubmenu(0)}/>
                ):(
                  
                <FaRegSquarePlus 
                className='absolute top-[10px] right-[15px] cursor-pointer' 
                onClick={()=>openSubmenu(0)}/>
                )
              }
                {
                submenuIndex === 0 && 
                
              <ul className='submenu  w-full pl-3 '>
                <li className='list-none relative '>
                  <Link to='/' className='w-full'>
                   <Button className='link w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.7)] '>
                Apparel
                </Button>
                  </Link>
               {
                innerSubmenuIndex === 0 ? (
                  <FiMinusSquare 
                className='absolute top-[10px] right-[15px] cursor-pointer' 
                onClick={()=>openInnerSubmenu(0)}/>
                ):(
                  
                <FaRegSquarePlus 
                className='absolute top-[10px] right-[15px] cursor-pointer' 
                onClick={()=>openInnerSubmenu(0)}/>
                )
              }
                
                {
                innerSubmenuIndex === 0 &&

                <ul className='inner_submenu  w-full pl-3 '>
                <li className='list-none relative mb-1'>
                   <Link to="/" className=' link w-full !text-left !justify-start !px-3 transition text-[14px]'>
                Women's Wear</Link>
                </li>
                <li className='list-none relative mb-1'>
                   <Link className=' link w-full !text-left !justify-start !px-3 transition text-[14px]'>
                Girls Wear</Link>
                </li>
                <li className='list-none relative mb-1'>
                   <Link className=' link w-full !text-left !justify-start !px-3 transition text-[14px]'>
                Kids Wear</Link>
                </li>
                <li className='list-none relative mb-1'>
                   <Link className=' link w-full !text-left !justify-start !px-3 transition text-[14px]'>
                Best Suits Sets</Link>
                </li>
              </ul>
                }
              </li>
              </ul>
       }
            </li>

            {/* // Repeat similar structure for other categories */}
                        {/* // Repeat similar structure for other categories */}

            <li className='list-none flex items-center relative flex-col'>
              <Link to="/" className='w-full'>
              <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.7)] '>
                SAREES
                </Button>
              </Link>
              {
                submenuIndex === 1 ? (
                  <FiMinusSquare 
                className='absolute top-[10px] right-[15px] cursor-pointer' 
                onClick={()=>openSubmenu(1)}/>
                ):(
                  
                <FaRegSquarePlus 
                className='absolute top-[10px] right-[15px] cursor-pointer' 
                onClick={()=>openSubmenu(1)}/>
                )
              }
                {
                submenuIndex === 1 && 
                
              <ul className='submenu  w-full pl-3 '>
                <li className='list-none relative '>
                  <Link to='/' className='w-full'>
                   <Button className='link w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.7)] '>
                By Material
                </Button>
                  </Link>
               {
                innerSubmenuIndex === 1 ? (
                  <FiMinusSquare 
                className='absolute top-[10px] right-[15px] cursor-pointer' 
                onClick={()=>openInnerSubmenu(1)}/>
                ):(
                  
                <FaRegSquarePlus 
                className='absolute top-[10px] right-[15px] cursor-pointer' 
                onClick={()=>openInnerSubmenu(1)}/>
                )
              }
                {
                innerSubmenuIndex === 1 &&

                <ul className='inner_submenu w-full pl-3 '>
                <li className='list-none relative mb-1'>
                   <Link to="/" className=' link w-full !text-left !justify-start !px-3 transition text-[14px]'>
                  Art Silk Sarees</Link>
                </li>
                <li className='list-none relative mb-1'>
                   <Link className=' link w-full !text-left !justify-start !px-3 transition text-[14px]'>
                Satin Sarees</Link>
                </li>
                <li className='list-none relative mb-1'>
                   <Link className=' link w-full !text-left !justify-start !px-3 transition text-[14px]'>
                Banarasi Sarees</Link>
                </li>
                <li className='list-none relative mb-1'>
                   <Link className=' link w-full !text-left !justify-start !px-3 transition text-[14px]'>
                Net Sarees</Link>
                </li>
                <li className='list-none relative mb-1'>
                   <Link className=' link w-full !text-left !justify-start !px-3 transition text-[14px]'>
                Pure Silk Sarees</Link>
                </li>
                <li className='list-none relative mb-1'>
                   <Link className=' link w-full !text-left !justify-start !px-3 transition text-[14px]'>
                Cotton Sarees</Link>
                </li>
              </ul>
                }
              </li>
              </ul>
       }
            </li>
            {/* Repeat similar structure for other categories */}
              <li className='list-none flex items-center relative flex-col'>
              <Link to="/" className='w-full'>
              <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.7)] '>
                  DRESS MATERIALS
                </Button>
              </Link>
              {
                submenuIndex === 2 ? (
                  <FiMinusSquare 
                className='absolute top-[10px] right-[15px] cursor-pointer' 
                onClick={()=>openSubmenu(2)}/>
                ):(
                  
                <FaRegSquarePlus 
                className='absolute top-[10px] right-[15px] cursor-pointer' 
                onClick={()=>openSubmenu(2)}/>
                )
              }
                {
                submenuIndex === 2 && 
                
              <ul className='submenu  w-full pl-3 '>
                <li className='list-none relative '>
                  <Link to='/' className='w-full'>
                   <Button className='link w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.7)] '>
                BESTSELLERS
                </Button>
                  </Link>
               {
                innerSubmenuIndex === 2 ? (
                  <FiMinusSquare 
                className='absolute top-[10px] right-[15px] cursor-pointer' 
                onClick={()=>openInnerSubmenu(2)}/>
                ):(
                  
                <FaRegSquarePlus 
                className='absolute top-[10px] right-[15px] cursor-pointer' 
                onClick={()=>openInnerSubmenu(2)}/>
                )
              }
                
                {
                innerSubmenuIndex === 2 &&

                <ul className='inner_submenu w-full pl-3 '>
                <li className='list-none relative mb-1'>
                   <Link to="/" className=' link w-full !text-left !justify-start !px-3 transition text-[14px]'>
                Printed Dress </Link>
                </li>
                <li className='list-none relative mb-1'>
                   <Link className=' link w-full !text-left !justify-start !px-3 transition text-[14px]'>
                Threadwork Dress </Link>
                </li>
                <li className='list-none relative mb-1'>
                   <Link className=' link w-full !text-left !justify-start !px-3 transition text-[14px]'>
                Floral Dress</Link>
                </li>
                <li className='list-none relative mb-1'>
                   <Link className=' link w-full !text-left !justify-start !px-3 transition text-[14px]'>
                Summer Dress</Link>
                </li>
              </ul>
                }
              </li>
              </ul>
       }
            </li>
          </ul>
        </div>

    </>
  )
}

export default index