import Logo from "@/public/assets/shared/logo.svg";
import { barlow, barlowCondensed } from "../fonts";
import Image from "next/image";

const navLinks = [
  {
    href: "/",
    link: "Home",
  },
  {
    href: "/",
    link: "Destination",
  },
  {
    href: "/",
    link: "Crew",
  },
  {
    href: "/",
    link: "Technology",
  },
];

const Navigation = ({}) => {
  return (
    <nav className="pl-16 pt-10 flex items-center justify-between">
  <div className="flex items-center gap-16 relative">
    <Image src={Logo} width={48} height={48} alt="Space Tourism Logo" />
    <div className="horizontal-line z-[99] absolute left-[112px] bottom-[50%] w-[1500%] h-[1.5px]"></div>
  </div>
  <ul className="min-w-1/2 h-24 flex items-center justify-end gap-12 px-16 backdrop-blur-[80px] bg-white/5 relative">
    {navLinks.map((nav, idx) => (
      <li
        key={nav.link}
        className="cursor-pointer h-full flex items-center gap-3 text-white border-b-2 border-transparent transition-all hover:border-white"
      >
        <span className="barlow-condensed font-bold tracking-[2.7px]">
          {idx.toString().padStart(2, "0")}
        </span>
        <p className="barlow-condensed font-light uppercase tracking-[2px]">
          {nav.link}
        </p>
      </li>
    ))}
  </ul>
</nav>

  );
};

export default Navigation;
