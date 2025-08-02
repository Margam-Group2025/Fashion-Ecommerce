import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { RiShoppingCart2Line } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";
import Search from "../Search";
import Navigation from "./Navigation";
import OfferHeader from "./OfferHeader";
import { IoGitCompareOutline  } from "react-icons/io5";


const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = () => {
  
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
            <div className="col2 w-[45%] mb-3 mt-2 ">
              <Search />
            </div>
            {/* Actions */}
            <div className="col3 w-[30%] flex items-center pl-11">
              <ul className="flex items-center justify-end gap-5">
                {/* Auth Links */}
                <li className="list-none pl-5">
                  <Link to="/login" className="text-[14px] link font-[500] transition">
                    Login
                  </Link>
                  <span className="mx-1 text-gray-500 ">|</span>
                  <Link to="/register" className="text-[14px] link font-[500] transition">
                    Register
                  </Link>
                </li>

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
        <Navigation />
      </header>
    </>
  );
};

export default Header;
