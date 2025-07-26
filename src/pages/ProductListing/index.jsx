import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import ProductItems from '../../components/ProductItems';
import ProductItemsListView from '../../components/ProductItemsListView';
import Button from '@mui/material/Button';
import { IoMdMenu } from "react-icons/io";
import { GrGrid } from "react-icons/gr";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Pagination from '@mui/material/Pagination';



const ProductListing = () => {
  const [itemView,setItemView]=useState('grid');
   const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <section className='py-5 pb-0'>
      <div className='container'>
       <Breadcrumbs aria-label="breadcrumb">
             <Link underline="hover" color="inherit" href="/" className='link'>
               Home
              </Link>
              <Link
                 underline="hover"
                 color="inherit"
                 href="/"
                 className='link transition'
                >
                Fashion
              </Link>
              </Breadcrumbs>
              </div>
          <div className='bg-white p-2 mt-4'>
            <div className="container flex gap-3">
             <div className='sidebarWrapper w-[20%] h-full bg-white p-3'>
           <Sidebar/>
          </div>
       
       <div className='rightContent w-[80%] p-3'>
        <div className='bg-[#9491892e] p-2 w-full mb-3 rounded-md flex items-center 
        justify-between'>

        {/* Grid and List   */}

          <div className='col1 flex items-center gap-1 '>
          <Button className={`!W-[40PX] !h-[40px] !min-w-[40px] !rounded-full !text-[#000]
             ${itemView === 'list' && 'active'}`}
          onClick={()=>setItemView('list')}> 
          <IoMdMenu  className='text-[rgba(0,0,0,0.7)] text-[20px]'/>
            </Button>

             <Button className={`!W-[40PX] !h-[40px] !min-w-[40px] !rounded-full !text-[#000]
             ${itemView === 'grid' && 'active'}`}
             onClick={()=>setItemView('Grid')}> 
              <GrGrid className='text-[rgba(0,0,0,0.7)]'/>
            </Button>
            <span className='text-[14px] font-[500] '>There are 40 Products.</span>
          </div>
           
            <div className='col2 ml-auto flex items-center justify-end pr-4 gap-3'>
            <span className='text-[14px] font-[500] '>Sort By:</span> 
           <div>
     
       {/* Sort BY */}
        <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className='!bg-white !text-[12px] !text-[#000] !capitalize !border !border-black '
      >
        Popularity
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
          },
        }}
      >
         <MenuItem onClick={handleClose} className='!text-[12px] !text-[#000] !capitalize'>Popularity</MenuItem>
        <MenuItem onClick={handleClose} className='!text-[12px] !text-[#000] !capitalize'>Name, A to Z</MenuItem>
        <MenuItem onClick={handleClose} className='!text-[12px] !text-[#000] !capitalize'>Name, Z to A</MenuItem>
        <MenuItem onClick={handleClose} className='!text-[12px] !text-[#000] !capitalize'>highest to lowest</MenuItem>
        <MenuItem onClick={handleClose} className='!text-[12px] !text-[#000] !capitalize'>lowest to highest</MenuItem>
         <MenuItem onClick={handleClose} className='!text-[12px] !text-[#000] !capitalize'>Latest Products</MenuItem>

      </Menu>
    </div>     
      </div>
        </div>
           <div className={`grid ${itemView=== 'grid' ? 'grid-cols-4 md:grid-cols-4' : 'grid-cols-1 md:grid-cols-1'} gap-4`}>
            {
              itemView === "grid" ?
              <>
              <ProductItems/>
              <ProductItems/>
              <ProductItems/>
              <ProductItems/>
              <ProductItems/>
              <ProductItems/>
              <ProductItems/>
              <ProductItems/>
              </>
              :
              <>
              <ProductItemsListView/>
              <ProductItemsListView/>
              <ProductItemsListView/>
              <ProductItemsListView/>
              <ProductItemsListView/>
              <ProductItemsListView/>
              <ProductItemsListView/>
              <ProductItemsListView/>
              </>
            }
             
           </div>
          <div className='flex items-center justify-center mt-10'>
           <Pagination count={10} showFirstButton showLastButton />
            </div>          
       </div>
        </div>
        </div>
    </section>
  )
}

export default ProductListing