"use client";
import React from "react";
import "./style.scss";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const InfoCards = () => {
  return (
    <>
      <section className="container text-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold uppercase leading-tight">
            bizning akademiyamizni tamomlagandan
            <br />
            ketin nimlarni o‘rganasiz?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-7xl mx-auto">
          {[
            {
              img: "/uploads/infoCard1.svg",
              title: "Oilaviy muammolarni hal qiling",
              text: "Oila ichida uyg‘un munosabatlar qurishga zarur bo‘lgan jinsiy ko‘nikmalarni o‘zlashtiring.",
            },
            {
              img: "/uploads/infoCard2.svg",
              title: "Ichki to‘siqni yengib o‘ting",
              text: "Ichki qo‘rquvlardan xalos bo‘lib, qarshi jins bilan munosabatlarning yangi bosqichiga ko‘tariling.",
            },
            {
              img: "/uploads/infoCard3.svg",
              title: "O‘zingizga ishonch hosil qiling",
              text: "Nafaqat o‘rgangan ko‘nikmalaringizni takomillashtiring, balki hayotingizni ancha baxtliroq qilishga yordam beradigan narsalarni ham bilib oling.",
            },
            {
              img: "/uploads/infoCard4.svg",
              title: "Oilaviy muammolarni hal qiling",
              text: "Oila ichida uyg‘un munosabatlar qurishga zarur bo‘lgan jinsiy ko‘nikmalarni o‘zlashtiring.",
            },
            {
              img: "/uploads/infoCard5.svg",
              title: "Oilaviy muammolarni hal qiling",
              text: "Oila ichida uyg‘un munosabatlar qurishga zarur bo‘lgan jinsiy ko‘nikmalarni o‘zlashtiring.",
            },
            {
              img: "/uploads/infoCard6.svg",
              title: "Oilaviy muammolarni hal qiling",
              text: "Oila ichida uyg‘un munosabatlar qurishga zarur bo‘lgan jinsiy ko‘nikmalarni o‘zlashtiring.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-[20px] rounded-[28px] shadow-lg text-center flex flex-col items-center pb-[30px] bg-[#911D00]"
            >
              <div className="w-full h-full max-h-[320px] mb-6 relative">
                <Image
                  src={item.img}
                  alt="icon"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <h4 className="text-lg font-bold mb-2">{item.title}</h4>
              <p className="text-md leading-snug">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="w-full flex items-center justify-center">
          <button className="btn my-15 m-auto">Kursga yozilish</button>
        </div>
      </section>

      <section className="container my-12">
        <div className="text-white text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold uppercase leading-tight">
            bizning sertifikatlangan spikerlarimiz
          </h2>
        </div>

        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 3000 }}
          loop
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            0: { slidesPerView: 1 },
          }}
        >
          {Array.from({ length: 5 }).map((_, index) => (
            <SwiperSlide key={index} className="">
              <div className="p-1">
                <div className="bg-[#911D00] rounded-[28px] shadow-none border-none text-center gap-0 flex flex-col items-center pb-[30px]">
                  <div className="w-full h-full p-4 relative">
                    <Image
                      src={`/uploads/infoCard4.svg`}
                      alt={`speaker-${index + 1}`}
                      width={100}
                      height={100}
                      className="w-full h-full max-h-[320px] object-cover rounded-xl"
                    />
                  </div>
                  <h4 className="text-white text-lg font-bold mb-2">
                    Speaker Name {index + 1}
                  </h4>
                  <p className="text-white text-md leading-snug">
                    Brief description about the speaker and their expertise.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default InfoCards;
