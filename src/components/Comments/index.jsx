"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const reviews = [
  {
    name: "Камрон",
    audio: "uploads/audio1.ogg",
    ageInfo: "28 yosh (5 yildan beri turmushda)",
    avatar: "uploads/avatar1.png",
  },
  {
    name: "Жавохир",
    audio: "uploads/audio2.ogg",
    ageInfo: "34 yosh (10 yildan beri turmushda)",
    avatar: "uploads/avatar2.jpg",
  },
  {
    name: "Азамат",
    audio: "uploads/audio3.ogg",
    ageInfo: "26 yosh (1 yildan beri turmushda)",
    avatar: "uploads/avatar3.jpg",
  },
  {
    name: "Махмуд",
    audio: "uploads/audio4.ogg",
    ageInfo: "32 yosh (4 yildan beri turmushda)",
    avatar: "uploads/avatar4.jpg",
  },
  {
    name: "Nilufar",
    audio: "uploads/audio5.ogg",
    ageInfo: "40 yosh (15 yildan beri turmushda)",
    avatar: "uploads/avatar5.jpg",
  },
  {
    name: "Aziza",
    audio: "uploads/audio6.ogg",
    ageInfo: "26 yosh",
    avatar: "uploads/avatar6.jpg",
  },
];

export default function Comments() {
  return (
    <section className="container py-24">
      <div className="mb-14 flex flex-col items-center sm:flex-row sm:justify-between max-sm:gap-8">
        <h2 className="w-full text-4xl text-center font-bold text-white">
          Kursni yakunlaganlarning fikr-mulohazalari
        </h2>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        breakpoints={{
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          640: { slidesPerView: 1 },
        }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide
            key={index}
            className="group bg-[#911D00] border border-[#ff00007f] rounded-2xl p-6 transition-all duration-500"
          >
            <div className="flex items-center mb-4 gap-2 text-white">
              {Array(5)
                .fill(0)
                .map((_, idx) => (
                  <svg
                    key={idx}
                    className="w-5 h-5"
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                      fill="currentColor"
                    />
                  </svg>
                ))}
            </div>

            <audio controls className="w-full mb-4">
              <source src={review.audio} type="audio/ogg" />
              Your browser does not support the audio element.
            </audio>

            <div className="flex items-center gap-5">
              <img
                className="rounded-full object-cover w-12 h-12"
                src={review.avatar}
                alt={review.name}
              />
              <div>
                <h5 className="text-white font-medium">{review.name}</h5>
                <span className="text-sm leading-6 text-white">
                  {review.ageInfo}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
