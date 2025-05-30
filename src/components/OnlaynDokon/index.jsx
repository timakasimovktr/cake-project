import React from "react";
import "./style.scss";
import Image from "next/image";

const OnlaynDokon = () => {
  return (
    <section className="container text-white py-20">
      <div className="dokonWrapper w-full py-[30px] px-[90px] flex items-center justify-center bg-[#911D00] rounded-[28px]">
        <div className="dokonText w-[50%]">
          <h3
            className="
            text-3xl md:text-4xl font-bold uppercase leading-tight mb-4
          "
          >
            Bizning onlayn do‘konimiz
          </h3>
          <p className="text-lg mb-6">
            Fotima - nikohdagi ayollar farovonligiga ixtisoslashgan psixolog
            bo‘lib, musulmon ayollarga an’anaviy qadriyatlarni saqlab qolgan
            holda o‘zlarini mehribon va dono rafiqalar sifatida namoyon etishga
            yordam beradi.
          </p>
          <button className="
            py-4 px-12 bg-[#641400] text-white font-semibold rounded-lg border-2 border-[#ffffff4e] hover:bg-[#ffffff] hover:text-[#000000] transition-colors duration-300 cursor-pointer
          ">Maxsulotlarimiz</button>
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
