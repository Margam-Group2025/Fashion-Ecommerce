import React from 'react'
import Search from '../Search'
import Navigation from './Navigation'
import { Link } from 'react-router-dom'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { RiShoppingCart2Line } from "react-icons/ri";
import { GoGitCompare } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';
// import FashionShowcase from '../FashionShowcase';



const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
  },
}));
const Header = () => {
  return (
    <header className='bg-white'>
        <div className="top-strip py-2 border-t-[1px] border-gray-250 border-b-[1px]">
            <div className="container">
                <div className='flex items-center justify-between'>
                    <div className='coll w-[50%]'>
                        <p className='text-[14px] font-[500]'>Get up to 30% off new season styles , limited offer</p>
                    </div>

                    <div className='col2 flex align-items-center justify-end '>
                        <ul className='flex items-center gap-4'>
                            <li className='list-none'>
                                <Link to="#" className='text-[13px] link font-[500] transition'>Help Center</Link>
                            </li>
                            <li className='list-none'>
                                <Link to="#" className='text-[13px] link font-[500] transition'>Order Tracking</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className='header py-4 border-b-[1px] border-gray-250'>
           <div className='container flex items-center justify-between'>
            <div className='col1 w-[25%]'>
                <Link to={"/"}>Mohe piya Logo</Link>
            </div>
             <div className="col2 w-[45%]">
                <Search/>
             </div>
             <div className="col3 w-[30%]flex items-center">
                <ul className='flex items-center gap-2'>
                    <li className='list-none'>
                        <Link to="/login" className='text-[14px] link font-[500] transition'>Login</Link>|
                         <Link to="/register" className='text-[14px] link font-[500] transition'>Register</Link>
                    </li>
                    <li>
                        <Tooltip title="Compare">
                        <IconButton aria-label="compare">
                        <StyledBadge badgeContent={2} color="error">
                            <GoGitCompare  />
                        </StyledBadge>
                       </IconButton>
                           </Tooltip>
                    </li>
                    <li>
                         <Tooltip title="Wishlist">
                        <IconButton aria-label="Like">
                        <StyledBadge badgeContent={5} color="error">
                            <FaRegHeart />
                        </StyledBadge>
                       </IconButton>
                       </Tooltip>
                    </li>
                      <li>
                         <Tooltip title="Cart">
                        <IconButton aria-label="Cart">
                        <StyledBadge badgeContent={2} color="error">
                            <RiShoppingCart2Line />
                        </StyledBadge>
                       </IconButton>
                       </Tooltip>
                    </li>
                </ul>

             </div>
           </div>
        </div>
        <Navigation/>
        {/* <FashionShowcase/> */}
    </header>
  )
}

export default Header