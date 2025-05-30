import Image from "next/image";
import HeaderBanner from "@/components/HeaderBanner"; 
import OurAdvantages from "@/components/OurAdvantages";
import CautionCards from "@/components/CautionCards";
import InfoCards from "@/components/InfoCards";
import Comments from "@/components/Comments";
import OnlaynDokon from "@/components/OnlaynDokon";
import BonusCards from "@/components/BonusCards";
import Requests from "@/components/Requests";
import PaymentIcons from "@/components/PaymentIcons";

export default function Home() {
  return (
    <>
      <HeaderBanner />
      <main>
        <OurAdvantages />
        <CautionCards />
        <InfoCards />
        <BonusCards />
        <OnlaynDokon />
        <Comments />
        <Requests />
        <PaymentIcons />
      </main>
    </>
  );
}
