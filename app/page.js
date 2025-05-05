import Link from "next/link";
import { motion, useAnimation } from 'framer-motion';

export default function Home() {
  return (
    <main className="flex items-center justify-between px-32 pt-64 pb-32">
      <div>
        <p className="uppercase barlow-condensed text-[28px] tracking-[4px]">
          So, You Want to Travel To
        </p>
        <h1 className="bellefair text-white text-[144px]">SPACE</h1>
        <p className="max-w-xl barlow font-light text-lg">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <Link
        href="/"
        className="relative w-72 h-72 rounded-full bg-white flex items-center justify-center text-black"
      >
        <h2 className="bellefair text-[32px]">EXPLORE</h2>
      </Link>
    </main>
  );
}
