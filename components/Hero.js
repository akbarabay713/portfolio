import Link from "next/link";
import { useEffect, useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { urlFor } from "../sanity";
import Navbar from "./Navbar";
const Hero = ({ pageInfo, socials }) => {
  const [scrolled, setScroll] = useState(null);
  const [text] = useTypewriter({
    words: [`hi, my name is ${pageInfo.name}`, "<iReallyLikeCoding />"],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 100,
    deleteSpeed: 100,
  });

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const offset = window.scrollY;
      if (offset > 445) {
        setScroll(offset);
      } else {
        setScroll(null);
      }
    });
  });
  // console.log(scrolled);
  return (
    <>
      <Navbar isMoved={scrolled} socials={socials} />
      <div className="h-screen w-screen flex flex-col items-center justify-center gap-y-5  snap-center">
        <img
          alt="image"
          src={urlFor(pageInfo.profileImg).url()}
          className="md:w-48 md:h-48 w-36 h-36 shrink-0 rounded-full mx-auto object-cover"
        />

        <h2 className="uppercase tracking-[10px] text-xs md:text-sm text-center text-[#979697]">
          frontend web developer
        </h2>
        <h1 className="text-[#f9f9f9] font-semibold text-2xl md:text-5xl lg:text-5xl">
          <span>{text}</span>
          <Cursor cursorColor="green" />
        </h1>
        <nav className={`${scrolled > 450 ? "fixed top-5" : null} z-10`}>
          <ul className="flex gap-3 md:gap-7">
            <li className="uppercase text-[#979697] border-b-2 border-[transparent] hover:border-[#006b3bff] p-2 text-xs md:text-sm lg:text-sm md:tracking-widest hover:text-gray-50/40 transition-all cursor-pointer">
              <Link href="#about">about</Link>
            </li>

            <li className="uppercase text-[#979697] border-b-2 border-[transparent] hover:border-[#006b3bff] p-2 text-xs md:text-sm lg:text-sm md:tracking-widest hover:text-gray-50/40 transition-all cursor-pointer">
              <Link href="#skills">skills</Link>
            </li>
            <li className="uppercase text-[#979697] border-b-2 border-[transparent] hover:border-[#006b3bff] p-2 text-xs md:text-sm lg:text-sm md:tracking-widest hover:text-gray-50/40 transition-all cursor-pointer">
              <Link href="#projects">projects</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Hero;
