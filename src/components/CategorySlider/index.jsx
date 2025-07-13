import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

const HomeCatSlider = () => {
  return (
    <>
    <div className="homeCats transition-allliders py-4">
        <div className="containe transition-allr">
    <Swiper
        slidesPerView={7}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper transition-all"
      >
        <SwiperSlide>
            <div className="items py transition-all-4 py-3 lg:py-5 px-3 bg-white rounded-md text-center flex items-center justify-center flex-col">
            <img src="./public/slides/catSlide1.png" alt="slide w" className='w-[60px] transition-all ' />
            <h3 className="text-sm  transition-allfont-bold mt">Kids Wear</h3>
            </div>
        </SwiperSlide>   
         <SwiperSlide>
            <div className="items py transition-all-4 py-3 lg:py-5 px-3 bg-white rounded-md text-center flex items-center justify-center flex-col">
            <img src="./public/slides/catSlide3.png" alt="slide w" className='w-[60px] transition-all' />
            <h3 className="text-sm  transition-allfont-bold mt">Beauty</h3>
            </div>
        </SwiperSlide>   
         <SwiperSlide>
            <div className="items py transition-all-4 py-3 lg:py-5 px-3 bg-white rounded-md text-center flex items-center justify-center flex-col">
            <img src="./public/slides/catSlide4.png" alt="slide w" className='w-[60px] transition-all' />
            <h3 className="text-sm  transition-allfont-bold mt">Saree</h3>
            </div>
        </SwiperSlide>   
            <SwiperSlide>
                <div className="items py transition-all-4 py-3 lg:py-5 px-3 bg-white rounded-md text-center flex items-center justify-center flex-col">
                <img src="./public/slides/catSlide5.png" alt="slide w" className='w-[60px] transition-all' />
                <h3 className="text-sm  transition-allfont-bold mt">Kurta Sets</h3>
                </div>
            </SwiperSlide>
           
            <SwiperSlide>
                <div className="items py transition-all-4  py-3 lg:py-5 px-3 bg-white rounded-md text-center flex items-center justify-center flex-col">
                <img src="./public/slides/catSlide2.png" alt="slide w" className='w-[60px] transition-all' />
                <h3 className="text-sm  transition-allfont-bold mt">Bags</h3>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="items py transition-all-4 py-3 lg:py-5 px-4 bg-white rounded-lg text-center flex items-center justify-center flex-col">
                <img src="./public/slides/catSlide6.png" alt="slide w" className='w-[60px] transition-all' />
                <h3 className="text-sm  transition-allfont-bold mt">Western Dress</h3>
                </div>  
            </SwiperSlide>
            <SwiperSlide>
                <div className="items py transition-all-4 py-3 lg:py-5 px-3 bg-white rounded-md text-center flex items-center justify-center flex-col">
                <img src="./public/slides/catSlide7.png" alt="slide w" className='w-[60px] transition-all' />
                <h3 className="text-sm  transition-allfont-bold mt">Jewellery</h3>
                </div>
            </SwiperSlide>      
      </Swiper>
        </div>
    </div>
    </>
  )
}

export default HomeCatSlider