import Link from "next/link";
import { motion, useAnimation } from "framer-motion";

export default function Home() {
  return (
    <main
      className="md:min-h-screen flex flex-col lg:justify-end py-6 md:py-24 px-6 md:px-10 xl:px-32"
    >
      <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-12 px-0 md:px-12 text-center lg:text-left">
        {/* TEXTS */}
        <div className="flex flex-col gap-6">
          <p className="uppercase barlow-condensed text-base md:text-[28px] tracking-[4px]">
            So, You Want to Travel To
          </p>
          <h1 className="bellefair text-white text-[80px] md:text-[144px] leading-none">
            SPACE
          </h1>
          <p className="max-w-xl barlow font-light text-base leading-[180%]">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        {/* BUTTON */}
        <div className="py-16 md:py-0 flex items-center justify-center">
          <Link
            href="/"
            className="w-[144px] h-[144px] md:w-[272px] md:h-[272px] rounded-full bg-white flex items-center justify-center text-black"
          >
            <h2 className="bellefair text-lg md:text-[32px]">EXPLORE</h2>
          </Link>
        </div>
      </div>
    </main>
  );
}
