import Image from "next/image";
import HeaderNavigation from "../../components/HeaderNavigation";
import Thankyou from "../../components/Thankyou";


export default function Home() {
  return (
    <>
      <HeaderNavigation />
      <main>
        <Thankyou />
      </main>
    </>
  );
}
