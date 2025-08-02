import React, { useState } from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import ProductZoom from '../../components/ProductZoom';
import Link from '@mui/material/Link';
import Rating from "@mui/material/Rating";
import QualityBox from '../../components/QualityBox';
import { FaShoppingCart } from 'react-icons/fa';
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompareSharp } from "react-icons/io5";
import TextField from '@mui/material/TextField';
import ProductSlider from '../../components/ProductSlider';
import ProductDetailsPage from '../../components/ProductDetailsPage';

const ProductDetails = () => {

  const [activeTab , setActiveTab] = useState(0)
  return (
    <>
    <div className='py-5 '>
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
              <Link
                 underline="hover"
                 color="inherit"
                 className='link transition'
                >
                Silk Saree
              </Link>
              </Breadcrumbs>
          </div>
           </div>

    <section className='bg-white py-5'>
        <div className='container flex gap-8'>
            <div className='productZoomContainer w-[30%]'>
                <ProductZoom/>             
            </div>

           {/* product details section */}
          <div className='productContent w-[60%]'>
             <ProductDetailsPage/>
          </div>
        </div>
       <div className='container pt-10'>
        <div className='flex items-center gap-8'>
          <span className={` text-[20px] cursor-pointer font-[500] ${activeTab === 0 && 'text-primary'}`}
          onClick={()=>setActiveTab(0)}>
          Description</span>
          <span className={` text-[20px] cursor-pointer font-[500] ${activeTab === 1 && 'text-primary'}`}
           onClick={()=>setActiveTab(1)}>
           Product Details</span>
           <span className={` text-[20px] cursor-pointer font-[500] ${activeTab === 2 && 'text-primary'}`}
           onClick={()=>setActiveTab(2)}>
           Review(5)</span>

        </div>
        {/* decription details */}
        {
          activeTab === 0 && 
          <div className='shadow-xl w-full py-5 px-8 rounded-md'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis odit, quidem maxime magni quibusdam fugit delectus, cumque excepturi a sequi ad numquam error modi, pariatur nam. Perferendis totam iusto natus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis odit, quidem maxime magni quibusdam fugit delectus, cumque excepturi a sequi ad numquam error modi, pariatur nam. Perferendis totam iusto natus.

          </p>
          <h4><b>Lightweight Design</b></h4>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quis quas quia consequatur, itaque inventore dolorum, vero, modi iste ipsam eligendi temporibus quam animi eius assumenda corrupti culpa aperiam a.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos placeat nostrum fugit et recusandae velit? Incidunt possimus quo, nihil, magnam nobis facilis at mollitia blanditiis sapiente unde nostrum fugit nesciunt.
          </p>

          <h4><b>Lightweight Design</b></h4>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quis quas quia consequatur, itaque inventore dolorum, vero, modi iste ipsam eligendi temporibus quam animi eius assumenda corrupti culpa aperiam a.
          </p>

          <h4><b>Lightweight Design</b></h4>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quis quas quia consequatur, itaque inventore dolorum, vero, modi iste ipsam eligendi temporibus quam animi eius assumenda corrupti culpa aperiam a.
          </p>

          <h4><b>Lightweight Design</b></h4>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quis quas quia consequatur, itaque inventore dolorum, vero, modi iste ipsam eligendi temporibus quam animi eius assumenda corrupti culpa aperiam a.
          </p>
        </div>
        }
        
        {/* Product Details */}
        {
          activeTab === 1 &&   
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
       <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Products
                </th>
                <th scope="col" class="px-6 py-3">
                    All details
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Saree Length
                </th>
                <td class="px-6 py-4">
                    5.5 meters
                </td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   Blouse Piece Length
                </th>
                <td class="px-6 py-4">
                    0.80 meters
                </td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Design
                </th>
                <td class="px-6 py-4">
                    Theadworks
                </td>   
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Color
                </th>
                <td class="px-6 py-4">
                    pink
                </td>
            </tr>
            <tr>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   Fabric
                </th>
                <td class="px-6 py-4">
                    Tissue
                </td>
            </tr>
        </tbody>
    </table>
      </div>
        }

        {activeTab === 2 && (
          <div className='shadow-md w-[80%] py-5 px-8 rounded-md'>
           <div className='w-full productReviewContainer'>
            <h2 className='text-[18px]'>Customer Question & answers</h2>

            <div className='scroll w-full max-h-[300px] overflow-scroll overflow-x-hidden mt-5'>
              <div className='review pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between'>
                <div className='info w-[60%] flex items-center gap-2 mt-3'>
                  <div className='img w-[80px] h-[80px] overflow-hidden rounded-full'>
                    <img src="https://www.fujitsu.com/global/Images/Srinita_1_tcm100-3656043.jpg" alt=""
                    className='w-full' />
                  </div>
                  <div className='w-[80%]'> 
                    <h4 className='text-[16px] '>Raghab Panda</h4>
                   <h5 className='text-[16px] mb-0'>2025.03.14</h5>
                   <p className='mb-0 mt-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio expedita ex eum quis? Eius harum veritatis corrupti adipisci qui. Beatae, impedit.</p>
                  </div>
                </div>
                <div>
                  <Rating name="half-rating-read"
                   defaultValue={4}
                   readOnly />
                </div>
              </div>
                <div className='review pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between'>
                <div className='info w-[60%] flex items-center gap-2 mt-3'>
                  <div className='img w-[80px] h-[80px] overflow-hidden rounded-full'>
                    <img src="https://www.fujitsu.com/global/Images/Srinita_1_tcm100-3656043.jpg" alt=""
                    className='w-full' />
                  </div>
                  <div className='w-[80%]'> 
                    <h4 className='text-[16px] '>Raghab Panda</h4>
                   <h5 className='text-[16px] mb-0'>2025.03.14</h5>
                   <p className='mb-0 mt-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio expedita ex eum quis? Eius harum veritatis corrupti adipisci qui. Beatae, impedit.</p>
                  </div>
                </div>
                <div>
                  <Rating name="half-rating-read"
                   defaultValue={4}
                   readOnly />
                </div>
              </div>
                <div className='review pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between'>
                <div className='info w-[60%] flex items-center gap-2 mt-3'>
                  <div className='img w-[80px] h-[80px] overflow-hidden rounded-full'>
                    <img src="https://www.fujitsu.com/global/Images/Srinita_1_tcm100-3656043.jpg" alt=""
                    className='w-full' />
                  </div>
                  <div className='w-[80%]'> 
                    <h4 className='text-[16px] '>Raghab Panda</h4>
                   <h5 className='text-[16px] mb-0'>2025.03.14</h5>
                   <p className='mb-0 mt-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio expedita ex eum quis? Eius harum veritatis corrupti adipisci qui. Beatae, impedit.</p>
                  </div>
                </div>
                <div>
                  <Rating name="half-rating-read"
                   defaultValue={4}
                   readOnly />
                </div>
              </div>
                <div className='review pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between'>
                <div className='info w-[60%] flex items-center gap-2 mt-3'>
                  <div className='img w-[80px] h-[80px] overflow-hidden rounded-full'>
                    <img src="https://www.fujitsu.com/global/Images/Srinita_1_tcm100-3656043.jpg" alt=""
                    className='w-full' />
                  </div>
                  <div className='w-[80%]'> 
                    <h4 className='text-[16px] '>Raghab Panda</h4>
                   <h5 className='text-[16px] mb-0'>2025.03.14</h5>
                   <p className='mb-0 mt-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio expedita ex eum quis? Eius harum veritatis corrupti adipisci qui. Beatae, impedit.</p>
                  </div>
                </div>
                <div>
                  <Rating name="half-rating-read"
                   defaultValue={4}
                   readOnly />
                </div>

              </div>

              <br />
              <div className='reviewForm bg-[#fafafa] p-4 rounded-md'>
                <h2 className='text-[18px]'>Add a review</h2>

                <form className="w-full">
                  <TextField 
                  id='outlined-multiline-flexible'
                  label='write a review...'
                  className='w-full'
                  multiline
                  rows={5}
                  />
                </form>
                <br />
                <Rating name="half-rating-read"
                   defaultValue={4}
                    />
                <div className='flex items-center md-5'>
                  <button className="bg-orange-600 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-orange-500">
                    SUBMIT REVIEW
                  </button>
                </div>
              </div>
            </div>
           </div>
          </div>
        )}
        
        </div> 
       <div className='container'>
         <h2 className='text-[20px] font-[600] mt-7'>Related Products</h2>
         <ProductSlider items={6}/>
       </div>
    </section>

    </> 
  )
}

export default ProductDetails