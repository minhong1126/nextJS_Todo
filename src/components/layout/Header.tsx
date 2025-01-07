"use client";
import Image from "next/image";
import logoLarge from "../../../public/image/logo-large.png";
import logoSmall from "../../../public/image/logo-small.png";

const Header = () => {
  return (
    <>
      <header className="h-[60px]">
        <Image src={logoLarge} alt="logo Large" className="hidden sm:block" />
        <Image src={logoSmall} alt="logo Small" className="block sm:hidden" />
      </header>
    </>
  );
};

export default Header;
