import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TfiClose } from "react-icons/tfi";

const Offcanvas = ({ navLinks, isOpen, setIsOpen }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className={`fixed top-0 left-0 flex flex-col items-center justify-center w-full h-full blue-main-bg shadow-lg z-[9999]`}
        >
          {/* <TfiClose
            size={24}
            className="absolute top-8 right-8"
            onClick={() => setIsOpen(!isOpen)}
          /> */}
          <ul className="flex flex-col gap-8 mx-auto mt-auto w-1/2">
            {navLinks.map((nav, idx) => {
              const isActive = pathname === nav.href;
              return (
                <li
                  key={nav.link}
                  className={`cursor-pointer text h-full transition-all`}
                >
                  <Link
                    href={nav.href}
                    className="h-full flex gap-6"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <span
                      className={`barlow-condensed font-bold tracking-[2.7px] ${
                        isActive ? "text-white" : "blue-accent"
                      }`}
                    >
                      {idx.toString().padStart(2, "0")}
                    </span>
                    <p
                      className={`text-center barlow-condensed font-light uppercase tracking-[2px] w-full pb-2 border-b-2 ${
                        isActive
                          ? "border-white text-white"
                          : "border-transparent hover:border-white"
                      }`}
                    >
                      {nav.link}
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
          <p className="bellefair text-sm blue-accent opacity-50 mt-auto pb-8">
            by{" "}
            <span className="tracking-[1px] ml-1">Daniel Emerald Sumarly</span>
          </p>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default Offcanvas;
