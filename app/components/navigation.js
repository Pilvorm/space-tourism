"use client";

import { useState } from "react";
import Logo from "@/public/assets/shared/logo.svg";
import Menu from "@/public/assets/shared/icon-hamburger.svg";
import { barlow, barlowCondensed } from "../fonts";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Offcanvas from "./offcanvas";
import { TfiMenu } from "react-icons/tfi";
import { VscMenu } from "react-icons/vsc";
import { Fade as Hamburger } from "hamburger-react";

const navLinks = [
  {
    href: "/",
    link: "Home",
  },
  {
    href: "/destination",
    link: "Destination",
  },
  {
    href: "/crew",
    link: "Crew",
  },
  {
    href: "/technology",
    link: "Technology",
  },
];

const Navigation = ({}) => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`py-6 flex items-center justify-between ${isOpen ? "sticky top-0 z-[50] transition-all" : ""}`}>
      {/* LOGO */}
      <div className="flex items-center px-6 md:px-10 gap-16 relative">
        <Image
          src={Logo}
          className="w-10 h-10 md:w-12 md:h-12"
          alt="Space Tourism Logo"
        />
        <div className="horizontal-line hidden lg:block z-[99] absolute left-[112px] xl:left-[176px] bottom-[50%] w-[30vw] xl:w-[40vw] 2xl:w-[45vw] transition-all"></div>
      </div>

      {/* BURGER */}
      <button
        className={`px-6 md:hidden z-[10000]`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Hamburger toggled={isOpen} size={32} toggle={setIsOpen} direction="right"  />
      </button>

      <Offcanvas navLinks={navLinks} isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* MENU LIST */}
      <ul className="hidden md:flex items-center justify-end gap-12 px-6 md:px-10 lg:px-16 w-auto lg:min-w-1/2 h-24 backdrop-blur-[80px] bg-white/5 relative">
        {navLinks.map((nav, idx) => {
          const isActive = pathname === nav.href;
          return (
            <li
              key={nav.link}
              className={`cursor-pointer h-full text-white border-b-2 transition-all ${
                isActive
                  ? "border-white"
                  : "border-transparent hover:border-white"
              }`}
            >
              <Link
                href={nav.href}
                className="h-full flex items-center gap-3 text-white"
              >
                <span className="barlow-condensed font-bold tracking-[2.7px]">
                  {idx.toString().padStart(2, "0")}
                </span>
                <p className="barlow-condensed font-light uppercase tracking-[2px]">
                  {nav.link}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
