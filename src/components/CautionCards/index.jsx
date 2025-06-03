"use client";
import React, { useState } from "react";
import Image from "next/image";

const data = [
  {
    icon: "/uploads/cautionCard1.svg",
    text: "Jinsiy aloqani seksologiya, fiziologiya va psixologiya nuqtayi nazaridan tushunish uchun videokurslar",
  },
  {
    icon: "/uploads/cautionCard2.svg",
    text: "Ekspertlar - psixolog, seksolog va ginekologlarga savollar berish imkoniyati",
  },
  {
    icon: "/uploads/cautionCard3.svg",
    text: "Umrbod videokurslarga kirish imkoniyati: kerakli vaqtda bilimlarga qayting",
  },
  {
    icon: "/uploads/cautionCard4.svg",
    text: "Ilmiy tadqiqotlardan olingan dolzarb va aniq ma’lumotlar",
  },
];

const accordionData = [
  {
    question: "Erkaklar va ayollar salomatligi",
    answer: "1. Anatomiyasi va funksiyasi <br> 2. Gigiyena va jinsiy yo‘l bilan yuqadigan infeksiyalar <br> 3. Urologiyaga kirish: urolog nimani davolaydi? <br> 4. Erkaklar va ayollar siydik-tanosil tizimining anatomiyasi va fiziologiyasi <br> 5. Hayz ko‘rish muammolari va PMS <br> 6. Erkaklar va ayollar uchun kontratsepsiya",
  },
  {
    question: "PIKAP XXI ASRDA: yaqinlashuv fan sifatida",
    answer: "1. Erkaklar uchun jalib etish: alfa strategiyasi va xulq-atvori <br>2. Ayollar uchun jozibadorlik: yumshoq kuch, signallar <br>3. Partnerni qanday qilib ehtiroslantirish kerak <br>4. Ideal o‘lcham qaysi?",
  },
  {
    question: "Istak kimyosi: bizni boshqaradigan gormonlar",
    answer:
      "1. Testosteron gormonlar qiroli <br> 2. Seksual fantaziyalar <br> 3. Jinsiy aloqa va hayz sikli  <br> 4. Ovqat, uyqu va stress jinsiy moyillikni qanday o‘ldiradi (yoki kuchaytiradi)?",
  },
  {
    question: "Psixologiya va seksologiya",
    answer:
      "1. Juftlikda ishonch va xavfsizlik<br> 2. Jinsiy fantaziyalar va kreativlik<br> 3. Masturbatsiya: bu normal holatmi yoki noto‘g‘rimi?<br> 4. 40 yoshdan keyingi jinsiy aloqa: agar hamma narsa o‘zgarsa, nima qilish kerak?<br> 5. Jinsiy aloqa haqida 10 ta afsona.",
  },
  {
    question: "Libidoni maksimal darajada olib chiqamiz",
    answer:
      "1. Jinsiy aloqada xavfsizlik: holatlar, xavf-xatarlar va tana signallari<br>2. Jinsiy maylni oshirish va jismoniy mashqlar<br>3. Jinsiy hayotni tezlashtirish uchun oddiy layfxaklar",
  },
  {
    question: "PRO orgazm",
    answer:
      "1. Partnerda qanday ehtirosni uyg'otiladi <br> 2. Erkaklar orgazmi: afsonalar va haqiqat <br> 3. Ayol orgazmi: klitor, qin va undan tashqari <br> 4. Ko‘p  marttalik orgazm - bu afsona emas <br> 5. Pornografiyaga qaramlik",
  },
  {
    question: "Top 10 qaynoq savollar",
    answer:
      "1. Ginekologiya<br> 2. Psixolog & seksolog<br> 3. Urologiya<br> 4. Pikaper",
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
          className="h-full w-full rounded-[28px] max-h-[600px] object-cover"
          controls
          playsInline
          poster="/uploads/prviewImg.png"
        >
          <source src="/uploads/preview.mp4" type="video/mp4" />
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
                  <div
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                    className="leading-relaxed"
                  >
                  </div>
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
