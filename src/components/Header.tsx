"use client";
import Image from "next/image";
import logoLarge from "../../public/image/logo-large.png";
import logoSmall from "../../public/image/logo-small.png";
import { useEffect, useState } from "react";

const Header = () => {
  const [size, setSize] = useState<number>(window.innerWidth);

  function sizeChange() {
    setSize(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", sizeChange);
    return () => window.removeEventListener("resize", sizeChange);
  }, []);

  return (
    <>
      <header className="h-[60px]">
        {size > 640 ? (
          <Image src={logoLarge} alt="logo Large" />
        ) : (
          <Image src={logoSmall} alt="logo Small" />
        )}
      </header>
    </>
  );
};

export default Header;
