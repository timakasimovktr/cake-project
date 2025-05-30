import React from "react";
import "./style.scss";
import Image from "next/image";

const PaymentIcons = () => {
  return (
    <section className="container text-white py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold uppercase leading-tight">
          Hoziroq to‘lovni amalga oshiring
        </h2>
      </div>

      <div className="paymentOptions container mx-auto flex flex-wrap justify-center gap-6">
        <div className="paymentOption">
          <Image
            src="/uploads/payme.svg"
            alt="Payment Method 1"
            width={150}
            height={150}
          />
        </div>
        <div className="paymentOption">
          <Image
            src="/uploads/click.svg"
            alt="Payment Method 2"
            width={150}
            height={150}
          />
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <button className="btn my-15 m-auto">To‘lovni amalga oshirish</button>
      </div>
    </section>
  );
};

export default PaymentIcons;
