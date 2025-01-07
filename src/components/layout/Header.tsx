"use client";
import Image from "next/image";
import logoLarge from "../../../public/image/logo-large.png";
import logoSmall from "../../../public/image/logo-small.png";

const Header = () => {
  return (
    <>
      <header className="w-full bg-white">
        <div className="flex h-[60px] w-full items-center justify-start">
          <Image
            src={logoLarge}
            alt="logo Large"
            width={151}
            height={40}
            className="hidden sm:block"
          />
          <Image
            src={logoSmall}
            alt="logo Small"
            width={71}
            height={40}
            className="block sm:hidden"
          />
        </div>
      </header>
    </>
  );
};

export default Header;
