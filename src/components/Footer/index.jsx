import React from "react";

const Footer = () => {
  return (
    <div className="container text-white">
      <div className="flex flex-wrap items-center justify-center @max-[924px]:rounded-2xl rounded-full gap-y-2 gap-x-10 px-5 py-3.5 shadow-2xs border border-black/10 dark:border-transparent dark:bg-dark-surface">
        <p className="mb-0">
          <small>
            Copyright © <span id="copyright-year">2025</span> Aurora Agency
          </small>
        </p>
        <ul className="flex flex-wrap gap-1 items-center list-none">
          <li className="flex bg-primary dark:bg-primary-variant rounded-full transition-transform duration-200 hover:scale-110">
            <a
              className="r-exclude-a p-2"
              href="https://t.me/inogdami"
              title="https://t.me/inogdami"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="800px"
                height="800px"
                viewBox="0 0 32 32"
                fill="none"
                className="w-6 h-6"
              >
                <circle
                  cx="16"
                  cy="16"
                  r="14"
                  fill="url(#paint0_linear_87_7225)"
                />
                <path
                  d="M22.9866 10.2088C23.1112 9.40332 22.3454 8.76755 21.6292 9.082L7.36482 15.3448C6.85123 15.5703 6.8888 16.3483 7.42147 16.5179L10.3631 17.4547C10.9246 17.6335 11.5325 17.541 12.0228 17.2023L18.655 12.6203C18.855 12.4821 19.073 12.7665 18.9021 12.9426L14.1281 17.8646C13.665 18.3421 13.7569 19.1512 14.314 19.5005L19.659 22.8523C20.2585 23.2282 21.0297 22.8506 21.1418 22.1261L22.9866 10.2088Z"
                  fill="white"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_87_7225"
                    x1="16"
                    y1="2"
                    x2="16"
                    y2="30"
                    gradientUnits="userSpaceOnUse"
                  >
                  </linearGradient>
                </defs>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
