"use client";
import React from "react";
import "./style.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
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

      <Dialog open={is18Plus}>
        <DialogContent className="pt-[50px] rounded-[28px] text-white bg-black border-white/10">
          <DialogHeader className="text-center mb-6">
            <DialogTitle className="text-2xl text-center">
              Siz 18 yoshga to‘lganingizni tasdiqlaysizmi?
            </DialogTitle>
            <DialogDescription className="text-center text-3xl mt-4 text-red-500">
              18+
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <div
              className={
                "w-full flex flex-col gap-4 sm:justify-center items-center"
              }
            >
              <Button
                onClick={() => handleAgeConfirmation()}
                type="button"
                className="text-[18px] cursor-pointer rounded-[16px] w-full py-[30px] bg-red-900"
              >
                Ha, men 18 yoshga to‘lganman
              </Button>
              <Button
                onClick={() =>
                  (window.location.href = "https://www.google.com")
                }
                type="button"
                className="text-[18px] cursor-pointer rounded-[16px] w-full py-[30px] bg-[#2d2d2d]"
              >
                Yo'q men 18 yoshga to‘lmaganman
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="headerBannerWrapper container pt-20 px-4">
        <div className="pageTitleWrapper w-full pt-10 pb-0 sm:pb-10 text-center">
          <h1 className="pageTitle text-4xl md:text-7xl font-bold text-white uppercase leading-tight">
            J Hayot qo‘llanmasi
          </h1>
          <button
            className="btn my-8 sm:my-20"
            onClick={() => router.push("/payment")}
          >
            Kursni sotib olish
          </button>
        </div>

        <div className="headerBannerCards flex flex-col md:flex-row gap-4 md:gap-2 mb-12">
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
