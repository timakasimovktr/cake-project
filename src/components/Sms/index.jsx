"use client";
import React from "react";
import Image from "next/image";
import "./style.scss";
import { toast } from "sonner";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const Sms = () => {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = React.useState(36000);
  const [phoneField, setPhoneField] = React.useState("+998 ");

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = () => {
    const hours = Math.floor(timeLeft / 3600)
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((timeLeft % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (timeLeft % 60).toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  const formatUzPhone = (value) => {
    const digits = value.replace(/\D/g, "");
    const trimmed = digits.startsWith("998") ? digits.slice(3) : digits;
    return (
      "+998 " +
      trimmed.replace(/^(\d{2})(\d{3})(\d{2})(\d{0,2}).*/, "$1 $2 $3 $4").trim()
    );
  };

  const requestMsg = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value.trim();
    const phone = form.phone.value.trim();

    if (!name || !phone) {
      toast.error("Iltimos, barcha maydonlarni to'ldiring.");
      return;
    }

    if (!/^\+998 \d{2} \d{3} \d{2} \d{2}$/.test(phone)) {
      toast.error(
        "Telefon raqami noto'g'ri formatda. Iltimos, qayta tekshiring."
      );
      return;
    }

    const purePhone = phone.replace(/\D/g, ""); // только цифры
    const sentPhonesCookie = Cookies.get("alreadySentPhone");
    const sentPhones = sentPhonesCookie ? sentPhonesCookie.split(",") : [];

    if (sentPhones.includes(purePhone)) {
      toast.error("Bu raqamdan allaqachon so‘rov yuborilgan.");
      return;
    }

    const requestData = {
      name,
      surname: name,
      phoneNumber: phone,
      sms: "Jinsiy Hayot qo‘llanmasi",
    };

    const crmData = {
      leads: [
        {
          name,
          phone: purePhone,
          date: new Date().toISOString(),
          comments: "https://jinsiy-hayot.org",
        },
      ],
    };

    const crmAuth = btoa("int_user:2y82FzMiK3rV");

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/sms`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Xatolik yuz berdi, qayta urinib ko'ring.");
        }

        // Добавляем номер в куки
        const updatedPhones = [...sentPhones, purePhone];
        Cookies.set("alreadySentPhone", updatedPhones.join(","), {
          expires: 1,
        });

        return response.json();
      })
      .then(() => {
        fetch("https://digitaleuphoria.uz/CRM/hs/webhook/post", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${crmAuth}`,
          },
          body: JSON.stringify(crmData),
        }).catch((err) => {
          console.error("CRM so‘rovida xatolik:", err);
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Xatolik yuz berdi, qayta urinib ko'ring.");
      })
      .finally(() => {
        form.name.value = "";
        setPhoneField("+998 ");
        form.reset();
        router.push("/thankyou");
      });
  };

  return (
    <section className="container text-white px-4 sm:px-6 lg:px-8 mb-20">
      <div className="w-full flex flex-col bg-[#911D00] rounded-[28px]">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 py-8 px-6 md:px-16 bg-[#FF1100] rounded-t-[28px]">
          <p className="text-[24px] md:text-[30px] font-medium line-through">
            800 000 so'm
          </p>
          <h3 className="text-[30px] md:text-[40px] font-bold text-center">
            50% chegirma
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="bg-white text-[#911D00] text-[24px] md:text-[32px] font-bold rounded-md py-2 px-4">
              399 000 so'm
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center text-center py-10 px-4 sm:px-10 md:px-20">
          <h3 className="text-2xl sm:text-3xl mb-6">18+</h3>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase leading-tight mb-2">
            Jinsiy Hayot qo‘llanmasi
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-thin mb-10 sm:mb-20">
            Jinsiy aloqada o‘zini qulay his etishni va undan zavq olishni
            istaganlar uchun kurs
          </p>

          <h4 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase leading-tight mb-6">
            Anketani to‘ldiring
          </h4>

          <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6 relative pb-0 sm:pb-16">
            <form
              onSubmit={(e) => requestMsg(e)}
              className="w-full md:w-[60%] flex flex-col gap-6"
            >
              <input
                type="text"
                name="name"
                placeholder="Ismingiz"
                className="p-3 rounded-md bg-[#0000003f] text-white border border-[#d4d4d461] focus:border-[#FF1100] focus:outline-none focus:ring-2 focus:ring-[#FF1100] transition-colors"
              />
              <input
                type="tel"
                name="phone"
                onChange={(e) => {
                  setPhoneField(formatUzPhone(e.target.value));
                }}
                value={phoneField}
                placeholder="Telefon raqamingiz"
                className="p-3 rounded-md bg-[#0000003f] text-white border border-[#d4d4d461] focus:border-[#FF1100] focus:outline-none focus:ring-2 focus:ring-[#FF1100] transition-colors"
              />
              <button
                type="submit"
                className="cursor-pointer bg-[#d3d3d35d] border border-white text-white py-3 rounded-md hover:bg-[#ffffff37] hover:border-[#ffffff53] transition-colors"
              >
                Yuborish
              </button>
            </form>

            <div className="mt-10 md:mt-0 md:absolute md:right-[-100px] lg:right-[-110px] md:top-[-50px] flex items-center justify-center">
              <div className="relative w-[250px] md:w-[250px] lg:w-[300px]">
                <Image
                  src="/uploads/heartTime.svg"
                  alt="Requests Timer"
                  layout="responsive"
                  width={300}
                  height={300}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <span className="text-[26px] sm:text-[24px] md:text-[32px] font-bold">
                    {formatTime()}
                  </span>
                  <span className="text-[14px] sm:text-[14px] md:text-[18px] font-thin text-center mt-1">
                    Chegirma tugashiga <br /> qoldi
                  </span>
                </div>
              </div>
            </div>

            <Image
              src="/uploads/18plus.svg"
              alt="Heart"
              className="mt-10 
              hidden sm:flex
              md:mt-0 md:absolute md:left-[-100px] lg:left-[-30px] md:top-[30px] items-center justify-center"
              width={180}
              height={180}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sms;
