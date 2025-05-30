"use client";
import React from "react";
import "./style.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules"; // добавили Autoplay

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const BonusCards = () => {
  return (
    <section className="container py-20">
      <div className="text-center mb-12">
        <h2 className="text-white text-3xl md:text-4xl font-bold uppercase leading-tight">
          bepul bonus video materiallar
        </h2>
      </div>

      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[EffectCoverflow, Pagination, Autoplay]} // добавили Autoplay сюда
        className="mySwiper w-full h-full"
      >
        {[...Array(6)].map((_, idx) => (
          <SwiperSlide key={idx}>
            <img src="uploads/bonus3.svg" alt={`Slide ${idx + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BonusCards;
