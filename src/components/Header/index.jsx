import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { RiShoppingCart2Line } from "react-icons/ri";
import Tooltip from "@mui/material/Tooltip";
import Search from "../Search";
import Navigation from "./Navigation";
import OfferHeader from "./OfferHeader";
import { IoGitCompareOutline  } from "react-icons/io5";
import { MyContext } from "../../App";
import { FaRegUserCircle } from "react-icons/fa";
import Button from "@mui/material/Button";
import { IoBagCheckOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { MdLogout } from "react-icons/md";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const context = useContext(MyContext)
  
  return (
    <>
      <OfferHeader />
      <header className="bg-white">
        <div className="header py-4 border-b border-gray-200 ">
          <div className="container flex items-center justify-between">
            {/* Logo */}
        <div className="col1 w-[25%] flex items-center pl-4">
        <Link to="/" className="block">
        <img 
         src="logo1.png" 
         alt="Mohe Piya Logo" 
         className="max-w-[140px] lg:max-w-[200px]"
        />
        </Link>
         </div>

            {/* Search */}
            <div className="col2 w-[40%] mb-3 mt-2 ">
              <Search />
            </div>
            {/* Actions */}
            <div className="col3 w-[35%] flex items-center pl-11">
              <ul className="flex items-center justify-end gap-5">
                {
                  context.isLogin == false ? 

                 (<li className="list-none pl-5">
                  <Link to="/login" 
                  className="text-[14px] link font-[500] transition">
                    Login
                  </Link>
                  <span className="mx-1 text-gray-500 ">|</span>
                  <Link to="/register" 
                  className="text-[14px] link font-[500] transition">
                    Register
                  </Link>
                </li>

                 ) :(
                  <>
                   <div className="myAccountWarp flex items-center gap-3">
                    <Button className="!w-[30px] !h-[40px] !min-w-[40px] !rounded-full !bg-[#f1f1f1]">
                      <FaRegUserCircle className="text-[20px] text-[rgba(0,0,0,0.7)]"
                      onClick={handleClick}/></Button>
                    <div className="info flex flex-col">
                      <h4 className="text-[14px] font-[400] text-left justify-start mb-0 capitalize">Jone Deo</h4>
                      <span className="text-[13px] capitalize text-left justify-start">Jone@gmail.com</span>
                      </div>  
                   </div>
              <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              slotProps={{
               paper: {
             elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
                },
              },
            },
          }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
             anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          > 
            <Link to="/myAccount" className="w-full block">
            <MenuItem onClick={handleClose} className="flex gap-2 ">
             <FaRegUserCircle /> My Account
            </MenuItem>
            </Link>
             <Link to="/my-orders" className="w-full block">
            <MenuItem onClick={handleClose} className="flex gap-2 ">
             <IoBagCheckOutline  /> Orders
            </MenuItem>
            </Link>
             <Link to="/my-list" className="w-full block">
            <MenuItem onClick={handleClose}  className="flex gap-2 ">
             <FaRegHeart /> My List 
            </MenuItem>
            </Link>
             <Link to="/my-logout" className="w-full block">
            <MenuItem onClick={handleClose}  className="flex gap-2 ">
             <MdLogout  /> Logout
            </MenuItem>
            </Link>
            </Menu>
                  </>
                 )
                
                }
                

                {/* Wishlist */}
                <li>
                  <Tooltip title="Wishlist">
                    <IconButton aria-label="Like">
                      <StyledBadge badgeContent={5} color="error">
                        <FaRegHeart />
                      </StyledBadge>
                    </IconButton>
                  </Tooltip>
                </li>

                 {/* Compare */}
                <li>
                  <Tooltip title="Compare">
                    <IconButton aria-label="Cart">
                      <StyledBadge badgeContent={2} color="error">
                        <IoGitCompareOutline  />
                      </StyledBadge>
                    </IconButton>
                  </Tooltip>
                </li>

                {/* Cart */}
                <li>
                  <Tooltip title="Cart">
                    <IconButton aria-label="Cart" onClick={()=>context.setOpenCartPanel(true)}>
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
        <Navigation />
      </header>
    </>
  );
};

export default Header;
