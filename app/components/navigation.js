"use client";

import Logo from "@/public/assets/shared/logo.svg";
import Menu from "@/public/assets/shared/icon-hamburger.svg";
import { barlow, barlowCondensed } from "../fonts";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  console.log(pathname);

  return (
    <nav className="py-6 flex items-center justify-between">
      <div className="flex items-center px-6 md:px-10 gap-16 relative">
        <Image
          src={Logo}
          className="w-10 h-10 md:w-12 md:h-12"
          alt="Space Tourism Logo"
        />
        <div className="horizontal-line hidden lg:block z-[99] absolute left-[112px] bottom-[50%] w-[15vw] xl:w-[40vw] 2xl:w-[45vw] h-[1.5px]"></div>
      </div>

      <button className="px-6 md:hidden">
        <Image src={Menu} width={24} height={21} alt="" />
      </button>

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
