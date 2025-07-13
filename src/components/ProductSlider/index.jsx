import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import ProductItems from '../ProductItems';
const ProductSlider = (Props) => {
  return (
    <div className='productSlider py-3'>
        <Swiper
                slidesPerView={Props.items ? 5 : 4}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper transition-all"
              >
                <SwiperSlide>
                    <ProductItems />
                </SwiperSlide>
                 <SwiperSlide>
                    <ProductItems />
                </SwiperSlide>
                 <SwiperSlide>
                    <ProductItems />
                </SwiperSlide>
                 <SwiperSlide>
                    <ProductItems />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductItems />
                </SwiperSlide>
                 <SwiperSlide>
                    <ProductItems />
                </SwiperSlide>
                 <SwiperSlide>
                    <ProductItems />
                </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default ProductSlider