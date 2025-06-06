"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const HeaderNavigation = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    const token = Cookies.get("access_token");
    setIsLoggedIn(!!token);
  }, []);

  return (
    <nav className="headerBannerWrapperNav w-full z-[1000] top-0 start-0 py-4 px-2 sm:px-4 sm:py-5 fixed bg-[#000000]/80 border-gray-200 dark:bg-gray-900">
      <div
        className="w-full flex-col md:flex-row flex flex-wrap items-center justify-between mx-auto"
      >
        <div className="items-center justify-between hidden w-full md:flex md:w-auto">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
            <li>
              <span className="text-white text-lg font-medium">
                Biz bilan bog'laning
              </span>
            </li>
          </ul>
        </div>
        <a href="/" className="flex items-center justify-center space-x-3 rtl:space-x-reverse">
          <Image
            src="/uploads/logo.svg"
            width={120}
            height={42}
            className="h-8"
            alt="Logo"
          />
        </a>
        <div className="flex mt-4 md:mt-0 space-x-3 justify-center md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="border bg-[#303030] me-2 border-[#454545] text-white hover:opacity-70 transition-[3] cursor-pointer focus:ring-4 focus:outline-none focus:ring-[#FF4D00]/50 font-medium rounded-lg text-xs md:text-sm px-3 py-1 md:py-2.5 text-center "
            onClick={() => {
              if(Cookies.get("access_token")){
              router.push("https://cabinet.jinsiy-hayot.org/?token=" + Cookies.get("access_token"));
              } else {
                router.push("/login");
              }
            }}
          >
            Shaxsiy kabinet
          </button>

          {isLoggedIn ? (
            <button
              type="button"
              className="hidden md:flex border bg-[#720000] border-[#e10000] text-white hover:opacity-70 transition-[3] cursor-pointer focus:ring-4 focus:outline-none focus:ring-[#FF4D00]/50 font-medium rounded-lg text-xs md:text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
              onClick={() => {
                Cookies.remove("access_token");
                router.push("/");
                setIsLoggedIn(false);
              }}
            >
              Platformadan chiqish
            </button>
          ) : (
            <button
              type="button"
              className="border bg-[#e10000] border-[#e10000] text-white hover:opacity-70 transition-[3] cursor-pointer focus:ring-4 focus:outline-none focus:ring-[#FF4D00]/50 font-medium rounded-lg text-xs md:text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
              onClick={() => router.push("/login")}
            >
              Platformaga kirish
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default HeaderNavigation;
