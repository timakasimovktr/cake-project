"use client";
import React from "react";
import "./style.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Toaster, toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

const HeaderBanner = () => {
  const router = useRouter();
  const [is18Plus, setIs18Plus] = React.useState(false);

  const handleAgeConfirmation = () => {
    localStorage.setItem("ageConfirmed", "true");
    setIs18Plus(false);

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
      <Toaster theme="dark" position="bottom-center" richColors />
      <Dialog open={is18Plus}>
        <DialogContent className="pt-10 px-4 sm:px-10 rounded-[28px] text-white bg-black border border-white/10 max-w-[90%] sm:max-w-md mx-auto">
          <DialogHeader className="text-center mb-6">
            <DialogTitle className="text-xl sm:text-2xl text-center">
              Siz 18 yoshga to‘lganingizni tasdiqlaysizmi?
            </DialogTitle>
            <DialogDescription className="text-center text-2xl sm:text-3xl mt-4 text-red-500">
              18+
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <div className="w-full flex flex-col gap-4 items-center">
              <Button
                onClick={handleAgeConfirmation}
                type="button"
                className="text-[14px] sm:text-[18px] cursor-pointer rounded-[16px] w-full py-4 sm:py-[30px] bg-red-900"
              >
                Ha, men 18 yoshga to‘lganman
              </Button>
              <Button
                onClick={() =>
                  (window.location.href = "https://www.google.com")
                }
                type="button"
                className="text-[14px] sm:text-[18px] cursor-pointer rounded-[16px] w-full py-4 sm:py-[30px] bg-[#2d2d2d]"
              >
                Yo'q men 18 yoshga to‘lmaganman
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="headerBannerWrapper container pt-20 px-4">
        <div className="pageTitleWrapper w-full pt-10 pb-10 sm:pb-15 text-center">
          <h1 className="pageTitle text-4xl md:text-7xl font-bold text-white uppercase leading-tight">
            Jinsiy Hayot <br /> qo‘llanmasi
          </h1>
          {/* <button
            className="btn my-8 sm:my-20"
            onClick={() => router.push("/payment")}
          >
            Kursni sotib olish
          </button> */}
        </div>

        <div className="headerBannerCards flex flex-col md:flex-row gap-4 md:gap-2 mb-12">
          <div className="bannerCard">
            <h3>25+ darslarimiz</h3>
            <p>
              Jinsiy aloqa haqida bilimlarni oling va o'z mahoratingizni
              oshiring
            </p>
          </div>
          <div className="bannerCard">
            <h3>4+ mutaxassislar</h3>
            <p>
              Sizni guru qiladigan,o'zinig ishidagi eng yaxshi mutaxassislar
            </p>
          </div>
          <div className="bannerCard">
            <h3>7300+ fikrlar</h3>
            <p>
              Jinsiy aloqa turli yo'nalishlarda video kurslar orqali o'rganasiz
            </p>
          </div>
          <div className="bannerCard">
            <h3>3200+ o'quvchilar</h3>
            <p>
              Kursni tamomlagandan so'ng, siz jinsiy aloqa bo'yicha mutaxassis
              bo'lasiz
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderBanner;
