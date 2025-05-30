'use client';
import React from "react";
import "./style.scss";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const HeaderBanner = () => {
  const [is18Plus, setIs18Plus] = React.useState(false);

  const handleAgeConfirmation = () => {
    localStorage.setItem("ageConfirmed", "true");
    setIs18Plus(false);
  };

  React.useEffect(() => {
    const checkAge = () => {
      const ageConfirmed = localStorage.getItem("ageConfirmed");
      if (!ageConfirmed) {
        setIs18Plus(true);
      }
    };

    checkAge();
  }, []);

  return (
    <header>
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 1,
        }}
      >
        <source src="/uploads/headerBanner.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Dialog open={is18Plus}>
        <DialogContent className="pt-[50px] rounded-[28px] text-white bg-black border-white/10">
          <DialogHeader className="text-center mb-6">
            <DialogTitle className="text-2xl text-center">Siz 18 yoshga to‘lganingizni tasdiqlaysizmi?</DialogTitle>
            <DialogDescription className="text-center text-3xl mt-4 text-red-500">
              18+
            </DialogDescription>
          </DialogHeader>
          
          <DialogFooter>
            <Button onClick={() => handleAgeConfirmation()} type="button" className="text-[24px] cursor-pointer rounded-[16px] w-full py-[30px] bg-red-900">Ha, men 18 yoshga to‘lganman</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="headerBannerWrapper container">
        <nav className="w-full z-20 top-0 start-0 ">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto "
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 ">
                <li>
                  <span className="text-white text-lg font-medium">
                    +988(88) 188 77 77
                  </span>
                </li>
              </ul>
            </div>
            <a
              href="https://flowbite.com/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <Image
                src="/uploads/logo.svg"
                width={120}
                height={42}
                className="h-8"
                alt="Flowbite Logo"
              />
            </a>
            <div className="flex  space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button
                type="button"
                className="border border-white text-white hover:bg-[#e10000] hover:border-[#e10000] transition-[3] cursor-pointer focus:ring-4 focus:outline-none focus:ring-[#FF4D00]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
              >
                Ro'yxatdan o'tish
              </button>
            </div>
          </div>
        </nav>
        <div className="pageTitleWrapper w-full pt-30 pb-10">
          <h1 className="pageTitle text-7xl font-bold text-white uppercase">
            Jinsiy hayot qo‘llanmasi
          </h1>
          <h2 className="pageSubTitle text-5xl font-bold text-white mt-6 uppercase">
            Lazzat kaliti
          </h2>
          <button className="btn my-20">Kursga yozilish</button>
        </div>

        <div className="headerBannerCards flex gap-2 mb-12">
          <div className="bannerCard">
            <h3>30 + kurslar</h3>
            <p>jonli modellarda va manekenlar, onlayn</p>
          </div>
          <div className="bannerCard">
            <h3>15 ta murabbiy</h3>
            <p>
              sizni guru qiladigan,o'zinig ishidagi eng yaxshi mutaxassislar
            </p>
          </div>
          <div className="bannerCard">
            <h3>3k + mashg'ulotlar</h3>
            <p>jinsiy aloqa turli yo'nalishlarda akademiyamida o'rganasiz</p>
          </div>
          <div className="bannerCard">
            <h3>3k + o'quvchilar</h3>
            <p>
              bizning kurslarimizdan keyin ular yanada muvaffaqiyatli bo'lishdi
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderBanner;
