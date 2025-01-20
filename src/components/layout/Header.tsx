"use client";
import Image from "next/image";
import logoLarge from "../../../public/image/logo-large.png";
import logoSmall from "../../../public/image/logo-small.png";
import { redirect } from "next/navigation";

const Header = () => {
  function gotoHome() {
    redirect("/");
  }
  return (
    <>
      <header className="flex justify-center w-full bg-white">
        <div
          className="flex h-[60px] items-center justify-start
         sml:w-[75px] med:w-[744px] lar:w-[1200px] "
        >
          <Image
            src={logoLarge}
            alt="logo Large"
            width={151}
            height={40}
            className="hidden med:block"
            onClick={gotoHome}
          />
          <Image
            src={logoSmall}
            alt="logo Small"
            width={71}
            height={40}
            className="block med:hidden"
            onClick={gotoHome}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
