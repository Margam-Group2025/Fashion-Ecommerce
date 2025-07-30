import React from "react";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import { MdZoomOutMap } from "react-icons/md";
import { IoMdGitCompare } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";
import Button from "@mui/material/Button";
import { FaShoppingCart } from 'react-icons/fa';
import "./style.css";

const ProductItems = () => {
  return (
    <div className="productItems shadow-lg rounded-md overflow-hidden border border-[hsla(0,0%,0%,0.1)]">
      <div className="group relative w-full h-[220px] bg-white overflow-hidden">
        <Link to="/" className="block w-full h-full relative">
          <img
            src="/slides/items3.webp"
            alt="Product"
            className="w-full h-full object-cover transition-opacity duration-500"
          />
          <img
            src="/slides/items2.webp"
            alt="Product Hover"
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        </Link>

        <span className="absolute top-2 left-2 z-10 bg-green-500 text-white rounded px-2 py-[2px] text-xs font-semibold">
          10%
        </span>

        {/* Hover buttons */}
        <div className="absolute -top-40 group-hover:top-2 right-2 z-20 transition-all duration-300 flex flex-col gap-2">
          {[IoMdGitCompare, MdZoomOutMap, FaRegHeart].map((Icon, idx) => (
            <Button
              key={idx}
              size="small"
              className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white !text-black hover:!bg-primary hover:text-white group/button"
            >
              <Icon className="text-[18px] group-hover/button:text-white" />
            </Button>
          ))}
        </div>
      </div>

      {/* Info section */}
      <div className="info p-3 py-4">
        <h6 className="text-sm font-medium">
          <Link to="/" className="link">Brand Name</Link>
        </h6>

        <h3 className="mt-2 text-base font-semibold text-[rgba(0,0,0,0.8)]">
          <Link to="/" className="link hover:underline">
            Baby Pink Silk saree
          </Link>
        </h3>
         <p className="text-[14px] ">
         Crafted from premium silk
         </p>
        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />

        <div className="mt-1 flex items-center gap-4">
          <span className="line-through text-gray-500 text-base font-medium">
            $3,500.00
          </span>
          <span className="text-red-500 font-semibold">$2,500.00</span>
        </div>
         <button className="bg-orange-600 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-red-500">
          <FaShoppingCart />
           Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItems;
