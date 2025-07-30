import React, { useState } from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const ProductZoom = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [zoomSliderBig, setZoomSliderBig] = useState(null);
  const [zoomSliderSml, setZoomSliderSml] = useState(null);

  const goto = (index) => {
    setSlideIndex(index);
    if (zoomSliderSml && zoomSliderBig) {
      zoomSliderSml.slideTo(index);
      zoomSliderBig.slideTo(index);
    }
  };

  return (
    <div className="flex gap-3">
      {/* Thumbnail Slider */}
      <div className="slider w-[20%]">
        <Swiper
          onSwiper={setZoomSliderSml}
          direction="vertical"
          slidesPerView={4}
          spaceBetween={8}
          navigation={true}
          modules={[Navigation]}
          className="zoomProductSlider h-[450px]"
        >
          <SwiperSlide>
            <div
              className={`item rounded-md overflow-hidden cursor-pointer group 
                ${slideIndex === 0 ? 'opacity-1' : 'opacity-30'}`} 
              onClick={() => goto(0)}
            >
              <img
                src="/slides/items2.webp"
                alt="slide"
                className="w-full transition-all group-hover:scale-105"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`item rounded-md overflow-hidden cursor-pointer group 
                ${slideIndex === 1 ? 'opacity-1' : 'opacity-30'}`} 
              onClick={() => goto(1)}
            >
              <img
                src="/slides/items3.webp"
                alt="slide"
                className="w-full transition-all group-hover:scale-105"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`item rounded-md overflow-hidden cursor-pointer group 
                ${slideIndex === 2 ? 'opacity-1' : 'opacity-30'}`} 
              onClick={() => goto(1)}
            >
              <img
                src="/slides/items3.webp"
                alt="slide"
                className="w-full transition-all group-hover:scale-105"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Zoom Slider */}
      <div className="zoomContainer w-[75%] h-[450px] overflow-hidden">
        <Swiper
          onSwiper={setZoomSliderBig}
          slidesPerView={1}
          spaceBetween={8}
          navigation={false}
          modules={[Navigation]}
        >
          <SwiperSlide>
            <InnerImageZoom
              src="/slides/items2.webp"
              zoomScale={1}
              zoomSrc="/slides/items2.webp"
              width={300}
              height={320}
            />
          </SwiperSlide>
          <SwiperSlide>
            <InnerImageZoom
              src="/slides/items3.webp"
              zoomScale={1}
              zoomSrc="/slides/items3.webp"
              width={300}
              height={320}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ProductZoom;
