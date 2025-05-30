import React from "react";
import "./style.scss";
import Image from "next/image";

const advantages = [
  {
    id: 1,
    text: "Nima uchun seksuallik mukammal tana va murakkab erotik usullar haqida emasligini tushunib yetamiz",
  },
  {
    id: 2,
    text: "O‘zimizni o‘rganamiz va istaklarimiz hamda afzalliklarimizni anglab yetamiz",
  },
  {
    id: 3,
    text: "Tanamiz bilan aloqa o‘rnatamiz va undan uyalishni to‘xtatamiz",
  },
  {
    id: 4,
    text: "O‘zimizga ham, sherigimizga ham ko‘proq zavq bera boshlaymiz",
  },
  {
    id: 5,
    text: "Jinsiy aloqa haqidagi afsonalar va stereotiplarni yo‘q qilamiz",
  },
];

const OurAdvantages = () => {
  return (
    <section className="container text-white py-20">
      <div className="advantagesWrapper relative">
        <h3>Jinsiy hayot akademiyasi bu?</h3>
        <p>
          Biz erkak va ayol o'rtasidagi an'anaviy uyg'un munosabatlar
          falsafasini o'rganadigan va targ'ib qiladigan hamjamiyatmiz.
          Maqsadimiz - O'zbekistonda tug'ilishni ko'paytirish. Biz o'zaro
          munosabatlardagi muammolarni hal qilishga va har kim o'z baxtini
          topishi mumkin bo'lgan muhitni yaratishga yordam beramiz. Sifatli seks
          - bu jumboq. Biz uni tashkil etuvchi barcha jihatlarni ko'rib
          chiqamiz:
        </p>

        {advantages.map((advantage) => (
          <div className="advantageWrapper w-full" key={advantage.id}>
            <div className="advantageNum">
              <Image
                src="/uploads/advantageIcon.svg"
                width={100}
                height={100}
                alt="advantage"
              />
              <p className="overText">{advantage.id}</p>
            </div>
            <div className="advantageText">{advantage.text}</div>
          </div>
        ))}

        <Image src={"/uploads/heart.svg"} className="absolute top-[35%] right-[-50px] w-[300px]" width={100} height={100} alt="Heart Image" />

        <div className="advantagesBtnWrapper w-full relative mt-10">
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              borderRadius: "24px",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          >
            <source src="/uploads/headerBanner.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button type="button z-2 absolute" className="btn">
            Kursga yozilish
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurAdvantages;
