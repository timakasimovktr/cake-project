import Image from "next/image";
import HeaderNavigation from "../components/HeaderNavigation";
import HeaderBanner from "../components/HeaderBanner";
import OurAdvantages from "../components/OurAdvantages";
import CautionCards from "../components/CautionCards";
import InfoCards from "../components/InfoCards";
import Comments from "../components/Comments";
import OnlaynDokon from "../components/OnlaynDokon";
import BonusCards from "../components/BonusCards";
import Requests from "../components/Requests";
import Sms from "../components/Sms";
import PaymentIcons from "../components/PaymentIcons";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <HeaderNavigation />
      <HeaderBanner />
      <main>
        <OurAdvantages />
        <Sms />
        <CautionCards />
        <InfoCards />
        <BonusCards />
        {/* <OnlaynDokon /> */}
        <Comments />
        <Requests />
        <PaymentIcons />
        <Footer />
      </main>
    </>
  );
}
