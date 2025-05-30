import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Offcanvas = ({ navLinks, isOpen, setIsOpen }) => {
  const pathname = usePathname();

  return (
    <motion.aside
      initial={{ x: "-100%" }}
      animate={{ x: isOpen ? 0 : "-100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed top-0 left-0 w-64 h-full blue-main-bg shadow-lg z-50"
    >
      <ul className="mx-auto w-1/2">
        {navLinks.map((nav, idx) => {
          const isActive = pathname === nav.href;
          return (
            <li
              key={nav.link}
              className={`cursor-pointer h-full border-b-2 transition-all ${
                isActive
                  ? "border-white"
                  : "border-transparent hover:border-white"
              }`}
            >
              <Link
                href={nav.href}
                className="h-full flex gap-3"
              >
                <span className="barlow-condensed font-bold text-white tracking-[2.7px]">
                  {idx.toString().padStart(2, "0")}
                </span>
                <p className="barlow-condensed font-light blue-accent uppercase tracking-[2px]">
                  {nav.link}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </motion.aside>
  );
};

export default Offcanvas;
