import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/css/effect-coverflow";

// import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import carrusel1 from '/carrusel1.png';
import carrusel2 from '/carrusel2.png';
import carrusel3 from '/carrusel3.png';
import './carrusel.scss';
const Carrusel = () => {
  return (
    <div className="container">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        loop={false}
        slidesPerView={5}
        spaceBetween={15}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '', clickable: true }}
        initialSlide={2}
        className="swiper_container"
      >
        
        <SwiperSlide className="swiper-slide" >
          <img className="carrusel-image" src={carrusel1} alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img className="carrusel-image" src={carrusel2} alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img className="carrusel-image" src={carrusel3} alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img className="carrusel-image" src={carrusel1} alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img className="carrusel-image" src={carrusel3} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Carrusel