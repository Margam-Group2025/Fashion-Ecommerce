import React, { createContext, useContext } from 'react';
import Drawer from '@mui/material/Drawer';
import { MyContext } from '../App';
import { IoCloseSharp } from "react-icons/io5";
import CartPanel from '../components/CartPanel';


const Footer = () => {
  const Context = useContext(MyContext);
  
  return (
    <>
    <footer className="bg-gray-900 text-gray-300 px-8 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5  gap-6">
        {/* Services */}
        <div>
          <h6 className="text-orange-500 text-lg font-semibold mb-4 ">Our Services</h6>
          <ul className="space-y-2">
            <li><a className="hover:text-white transition">Return & Cancellation</a></li>
            <li><a className="hover:text-white transition">My Account</a></li>
            <li><a className="hover:text-white transition">Exchange Policy</a></li>
            <li><a className="hover:text-white transition">Shipping</a></li>
            <li><a className="hover:text-white transition">Payment Options</a></li>

          </ul>
        </div>

        {/* Company */}
        <div>
          <h6 className="text-orange-500 text-lg font-semibold mb-4">Company</h6>
          <ul className="space-y-2">
            <li><a className="hover:text-white transition">About us</a></li>
            <li><a className="hover:text-white transition">Contact us</a></li>
            <li><a className="hover:text-white transition">Our Store</a></li>
            <li><a className="hover:text-white transition">Blog</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h6 className="text-orange-500 text-lg font-semibold mb-4">Legal</h6>
          <ul className="space-y-2">
            <li><a className="hover:text-white transition">Terms of use</a></li>
            <li><a className="hover:text-white transition">Privacy policy</a></li>
            <li><a className="hover:text-white transition">Cookie policy</a></li>
          </ul>
        </div>
        
         {/* Best Sellers */}
        <div>
          <h6 className="text-orange-500 text-lg font-semibold mb-4">Best Sellers</h6>
          <ul className="space-y-2">
            <li><a className="hover:text-white transition">Banarasi</a></li>
            <li><a className="hover:text-white transition">Kanjeevaram</a></li>
            <li><a className="hover:text-white transition">Sambalpuri</a></li>
           <li><a className="hover:text-white transition">Bandhani</a></li>
            <li><a className="hover:text-white transition">Chanderi</a></li>

          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h6 className="text-orange-500 text-lg font-semibold mb-4">Newsletter</h6>
          <label className="block mb-2 text-sm">Enter your email address</label>
          <div className="flex">
            <input
              type="email"
              placeholder="username@site.com"
              className="w-full px-4 py-2 rounded-l-md bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none"
            />
            <button className="bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-r-md text-white font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-4">
        <div className="flex items-center gap-2 text-sm">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-orange-500"
          >
            <path d="M12 0l3.09 6.26L22 7.27l-5 4.87L18.18 20 12 16.91 5.82 20 7 12.14 2 7.27l6.91-1.01z" />
          </svg>
          <span>© {new Date().getFullYear()} - All rights reserved</span>
        </div>

        {/* Socials */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-white">
            <svg width="24" height="24" fill="currentColor" className="text-gray-400">
              <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
 
            </svg>
          </a>
          <a href="#" className="hover:text-white">
            <svg width="24" height="24" fill="currentColor" className="text-gray-400">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a href="#" className="hover:text-white">
            <svg width="24" height="24" fill="currentColor" className="text-gray-400">
              <path  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>

            </svg>
          </a>
        </div>
      </div>
    </footer>

    {/* cart panel */}
        <Drawer open={Context.openCartPanel} 
        onClose={Context.toggleCartPanel(false)}
         anchor={'right'}
         className='cartPanel'> 
            <div className='flex items-center justify-between py-3 px-4 gap-3 border-b border-[rgba(0,0,0,0.2)]'>
              <h4>Shoping Cart(1)</h4>
              <IoCloseSharp  className="text-[20px] cursor-pointer" onClick={Context.toggleCartPanel(false)}/>
            </div>
            <CartPanel/>
          </Drawer>
    </>
  );
};

export default Footer;
