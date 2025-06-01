"use client";
import React, { useState } from "react";
import Image from "next/image";

const data = [
  {
    icon: "/uploads/cautionCard1.svg",
    text: "Jinsiy aloqani biologiya, fiziologiya va psixologiya nuqtayi nazaridan tushunish uchun videokurslar",
  },
  {
    icon: "/uploads/cautionCard2.svg",
    text: "ekspertlar - psixolog, seksolog va ginekologlarga savollar berish imkoniyati",
  },
  {
    icon: "/uploads/cautionCard3.svg",
    text: "umrbod videokurlarga kirish imkoniyati: kerakli vaqtda bilimlarga qayting",
  },
  {
    icon: "/uploads/cautionCard4.svg",
    text: "ilmiy tadqiqotlardan olingan dolzarb va aniq ma’lumotlar",
  },
];

const accordionData = [
  {
    question: "Material Tailwind nima?",
    answer:
      "Material Tailwind — bu Tailwind CSS uchun tayyor komponentlar va zamonaviy dizaynlar kutubxonasi.",
  },
  {
    question: "Qanday ishlatiladi?",
    answer:
      "Siz komponentlarni import qilib, Tailwind loyihangizda bevosita ishlatishingiz mumkin.",
  },
  {
    question: "U bilan nimalar qilsa bo'ladi?",
    answer:
      "Zamonaviy va javob beruvchi saytlar yaratish juda tez va oson bo'ladi.",
  },
];

const CautionCards = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="container text-white pb-12 px-4">
      <div className="mb-16">
        <video
          id="autoPlayVideo"
          className="h-full w-full rounded-[28px] max-h-[500px] object-cover"
          controls
          autoPlay
          loop
          playsInline
        >
          <source
            src="https://media.geeksforgeeks.org/wp-content/uploads/20190616234019/Canvas.move_.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase leading-tight">
          JINSIY ALOQA HAQIDA EHTIYOTKORLIK BILAN,
          <br className="hidden sm:block" />
          ILMIY ASOSDA GAPLASHAMIZ
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {data.map((item, index) => (
          <div
            key={index}
            className="p-5 rounded-[28px] shadow-lg text-center flex flex-col items-center bg-[#911D00]"
          >
            <div className="w-full mb-4 relative">
              <Image
                src={item.icon}
                alt="icon"
                width={100}
                height={100}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-base leading-snug">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="w-full flex items-center justify-center py-8 relative z-10">
        {/* Dekoratsiyalar (отключены на мобилках) */}
        <div className="absolute inset-0 pointer-events-none z-0 hidden sm:block animate-float-slow">
          <Image
            src={"/uploads/moduleTriangle.svg"}
            className="absolute top-0 left-[-70px] w-[100px] md:w-[200px] opacity-40 animate-float-left"
            width={200}
            height={200}
            alt="Decorative Triangle Left"
          />
          <Image
            src={"/uploads/moduleCube.svg"}
            className="absolute bottom-0 right-[-100px] w-[100px] md:w-[200px] rotate-180 opacity-40 animate-float-right"
            width={200}
            height={200}
            alt="Decorative Triangle Right"
          />
        </div>

        <div className="w-full max-w-7xl rounded-3xl bg-[#911D00] p-4 sm:p-10 shadow-xl relative z-10">
          <h2 className="text-white text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-8">
            KURS JADVALI
          </h2>
          <div className="space-y-4">
            {accordionData.map((item, index) => (
              <div
                key={index}
                className="bg-[#F73100]/30 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center py-4 px-4 text-white text-left"
                >
                  <span className="font-semibold text-sm sm:text-base">
                    <span className="text-[#FFD6D6]">{index + 1} - MODUL</span>{" "}
                    {item.question}
                  </span>
                  <span
                    className={`transition-transform duration-300 transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.586l3.71-4.356a.75.75 0 111.14.976l-4.25 5a.75.75 0 01-1.14 0l-4.25-5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  className={`text-white text-sm px-4 transition-all duration-300 overflow-hidden ${
                    openIndex === index ? "max-h-40 pt-2 pb-4" : "max-h-0"
                  }`}
                >
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CautionCards;
