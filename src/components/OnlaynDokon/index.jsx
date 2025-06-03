"use client";

import React, { useEffect } from "react";
import "./style.scss";
import Image from "next/image";

const OnlaynDokon = () => {
  useEffect(() => {
    // when click somewhere on the page, unmute the video
    const video = document.getElementById("autoPlayVideo");
    const enableSound = () => {
      if (video) {
        video.muted = false;
        video.volume = 1;
        video.play();
      }
      document.removeEventListener("click", enableSound);
    };
    document.addEventListener("click", enableSound);
    
    if (video) {
      video.muted = true; // Start muted
      video.volume = 0; // Set volume to 0
      video.play().catch((error) => {
        console.error("Error playing video:", error);
      });
    }
  }, []);

  return (
    <section className="container text-white">
      <div className="dokonWrapper w-full py-[30px] px-[90px] flex items-center justify-center bg-[#911D00] rounded-[28px]">
        <div className="routesWrapper dokonText w-[50%]">
          <h3
            className="
            text-3xl md:text-4xl font-bold uppercase leading-tight mb-4 text-left
          "
          >
            Qadamma-qadam instruktsiya
          </h3>
          <div className="advantageWrapper w-full">
            <div className="advantageNum">
              <Image
                src="/uploads/advantageIcon.svg"
                width={100}
                height={100}
                alt="advantage"
                className="min-w-[60px] min-h-[60px] max-w-[60px] max-h-[60px]"
              />
              <p className="overText">1</p>
            </div>
            <div className="advantageText">Ro'yhatdan otish</div>
          </div>
          <div className="advantageWrapper w-full">
            <div className="advantageNum">
              <Image
                src="/uploads/advantageIcon.svg"
                width={100}
                height={100}
                alt="advantage"
                className="min-w-[60px] min-h-[60px] max-w-[60px] max-h-[60px]"
              />
              <p className="overText">2</p>
            </div>
            <div className="advantageText">
              Kursni tanlash va to‘lovni amalga oshirish
            </div>
          </div>
          <div className="advantageWrapper w-full">
            <div className="advantageNum">
              <Image
                src="/uploads/advantageIcon.svg"
                width={100}
                height={100}
                alt="advantage"
                className="min-w-[60px] min-h-[60px] max-w-[60px] max-h-[60px]"
              />
              <p className="overText">3</p>
            </div>
            <div className="advantageText">O‘rganishni hoziroq boshlang</div>
          </div>
          <button
            className="
            py-4 px-12 bg-[#641400] text-white font-semibold rounded-lg border-2 border-[#ffffff4e] hover:bg-[#ffffff] hover:text-[#000000] transition-colors duration-300 cursor-pointer
          "
            onClick={() => (window.location.href = "/payment")}
          >
            Kursni sotib olish
          </button>
        </div>
        <div className="dokonImage w-[50%] flex items-center justify-center">
          <Image
            className="w-[500px] h-[500px]"
            src="/uploads/heartDokon.svg"
            alt="Onlayn Dokon"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default OnlaynDokon;
