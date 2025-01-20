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
      <header className="w-full max-w-[1200px] bg-white">
        <div className="flex h-[60px] sml:w-[75px] med:w-[744px] lar:w-[1200px] items-center justify-start">
          <Image
            src={logoLarge}
            alt="logo Large"
            width={151}
            height={40}
            className="hidden sml:block"
            onClick={gotoHome}
          />
          <Image
            src={logoSmall}
            alt="logo Small"
            width={71}
            height={40}
            className="block sml:hidden"
            onClick={gotoHome}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
