"use client";
import React from "react";

const info = {
  logo: {
    src: "uploads/logo.svg",
    alt: "blocks for shadcn/ui",
    url: "http://t.me/J_Hayot_support",
  },

  tagline: "Biz bilan birga bo'ling!",

  menuItems: [
    {
      title: "Yangiliklar",
      links: [
        { text: "5 та нарса — эркаклар...", url: "https://telegra.ph/5-ta-narsa--ehrkaklar-%D2%B3ayotida-kech-yoki-tez-uchrajdi-06-02" },
        { text: "3 та савол — сизни...", url: "https://telegra.ph/3-ta-savol--sizni-%D2%9Bandaj-ehrkak-ehkaningizni-k%D1%9Ersatadi-06-02" },
        { text: "3 марта эркаклар...", url: "https://telegra.ph/3-marta-ehrkaklar-%D1%9Ezini-j%D1%9E%D2%9Botadigan-vaziyat-06-02" },
      ],
    },
    {
      title: "Ishtimoiy tarmoqlar",
      links: [
        { text: "Telegram", url: "http://t.me/J_Hayot_support" },
        { text: "Instagram", url: "https://www.instagram.com/jinsiy__hayot?igsh=anpjNjRqaHE1bzF3" },
      ],
    },
  ],
  copyright: "© 2025 Aurora Agency. All rights reserved.",
  bottomLinks: [
    { text: "Telegram", url: "http://t.me/J_Hayot_support" },
    { text: "Instagram", url: "https://www.instagram.com/jinsiy__hayot?igsh=anpjNjRqaHE1bzF3" },
  ],
};

const Footer = () => {
  return (
    <section className="py-10 text-white bg-[#600e0e]">
      <div className="container">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            <div className="col-span-2 mb-8 lg:mb-0">
              <div className="flex items-center gap-2 lg:justify-start">
                <a href="https://shadcnblocks.com">
                  <img
                    src={info.logo.src}
                    alt={info.logo.alt}
                    title={info.logo.title}
                    className="h-10"
                  />
                </a>
              </div>
              <p className="mt-4 font-bold">{info.tagline}</p>
            </div>
            {info.menuItems.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="space-y-4 text-white">
                  {section?.links?.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-white/70 transition-colors duration-200"
                    >
                      <a href={link.url}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium text-white md:flex-row md:items-center">
            <p>{info.copyright}</p>
            <ul className="flex gap-4">
              {info.bottomLinks.map((link, linkIdx) => (
                <li key={linkIdx} className="underline hover:text-white">
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
