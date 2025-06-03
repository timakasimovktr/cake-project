"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const bonusImgs = {
  bonus3: "/uploads/bonus3.svg",
  bonus1: "/uploads/bonus1.svg",
  bonus2: "/uploads/bonus2.svg",
  bonus4: "/uploads/bonus4.svg",
};

const BonusCards = () => {
  return (
    <section className="py-20 w-full px-4 md:px-0">
      <div className="text-center mb-12">
        <h2 className="text-white text-3xl md:text-4xl font-bold uppercase leading-tight">
          bepul bonus materiallar
        </h2>
      </div>

      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
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
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="w-full max-w-6xl mx-auto"
      >
        {Object.entries(bonusImgs).map(([key, imgSrc], index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <img
              src={imgSrc}
              alt={`Bonus ${index + 1}`}
              className="rounded-xl max-h-[300px] object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BonusCards;
