import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

const HomeSlider = () => {
  return (
    <div className="homesliders py-2">
      <div className="container">
        <Swiper
          spaceBetween={10}
          navigation={true}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 25000,
            disableOnInteraction: false,
          }}
          className="slider"
        >
          <SwiperSlide>
            <div className="items overflow-hidden rounded-[20px]">
              <img
                src="/slides/slide1.webp"
                alt="Slide 1"
                className="w-full h-full object-fill"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="items overflow-hidden rounded-[20px]">
              <img
                src="/slides/slide 3.webp"
                alt="Slide 3"
                className="w-full h-full object-fill"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="items overflow-hidden rounded-[20px]">
              <img
                src="/slides/slide4.webp"
                alt="Slide 4"
                className="w-full h-full object-fill"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSlider;
