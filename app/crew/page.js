"use client";

import Image from "next/image";
import { useState } from "react";
import PageLabel from "../components/pageLabel";
import PageWrapper from "../components/pageWrapper";
import { motion, AnimatePresence } from "motion/react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { CREW } from "../data";

gsap.registerPlugin(SplitText, TextPlugin, ScrambleTextPlugin);

export default function Destination() {
  const [initialTab, setInitialTab] = useState(Object.keys(CREW)[0]);
  const [activeTab, setActiveTab] = useState(Object.keys(CREW)[0]);

  const scrambleTextConfig = {
    chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    revealDelay: 0.2,
    tweenLength: false,
    speed: 1,
  };

  const textAnimation = {
    initial: ({ y = 20 } = {}) => ({
      opacity: 0,
      y: y,
    }),
    animate: ({ animateDelay = 0, opacity = 1 } = {}) => ({
      opacity: opacity,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94], // power2.out
        delay: animateDelay,
      },
    }),
    exit: ({ y = 20, exitDelay = 0.05 } = {}) => ({
      opacity: 0,
      y: -y,
      transition: {
        duration: 0.3,
        ease: [0.55, 0.085, 0.68, 0.53], // power2.in
        delay: exitDelay,
      },
    }),
  };

  const imageAnimation = {
    initial: () => ({
      opacity: 0,
    }),
    animate: ({ animateDelay = 0 } = {}) => ({
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94], // power2.out
        delay: animateDelay,
      },
    }),
    exit: ({ exitDelay = 0.05 } = {}) => ({
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: [0.55, 0.085, 0.68, 0.53], // power2.in
        delay: exitDelay,
      },
    }),
  };

  return (
    <PageWrapper>
      <div className="min-h-screen">
        {/* HEADER */}
        <PageLabel pageNumber={2} label={"Meet Your Crew"} />

        <main className="flex flex-col items-center justify-center lg:grid lg:grid-cols-2 p-6 md:p-10 lg:py-12 xl:px-32">
          {/* CREW INFO */}
          <div className="text-center lg:text-left flex flex-col items-center justify-center lg:items-start gap-6 pt-10 lg:pt-0 md:w-[70%] lg:w-full lg:h-full">
            {/* NAME & POSITION */}
            <div className="bellefair lg:mt-auto uppercase">
              <AnimatePresence mode="wait">
                <motion.p
                  key={CREW[activeTab].rank}
                  variants={textAnimation}
                  custom={{
                    y: 30,
                    animateDelay: 0.35,
                    exitDelay: 0.1,
                    opacity: 0.5,
                  }}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="crew-rank text-lg lg:text-[32px] text-white opacity-50 bellefair"
                >
                  {CREW[activeTab].rank}
                </motion.p>

                <motion.h1
                  key={CREW[activeTab].name}
                  variants={textAnimation}
                  custom={{ y: 30, animateDelay: 0.45, exitDelay: 0.3 }}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="crew-name text-2xl md:text-[40px] lg:text-[56px] text-white mt-2"
                >
                  {CREW[activeTab].name}
                </motion.h1>
              </AnimatePresence>
            </div>

            <AnimatePresence mode="wait">
              <motion.p
                key={CREW[activeTab].description}
                variants={textAnimation}
                custom={{ y: 30, animateDelay: 0.55, exitDelay: 0.5 }}
                initial="initial"
                animate="animate"
                exit="exit"
                className="text-base leading-[180%] min-h-[180px] sm:min-h-[120px]"
              >
                {CREW[activeTab].description}
              </motion.p>
            </AnimatePresence>

            {/* TABS */}
            <div className="flex justify-center lg:justify-start gap-4 w-full lg:mt-auto">
              {Object.entries(CREW).map(([key, member]) => {
                const isActive = key === activeTab;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`cursor-pointer w-[10px] h-[10px] rounded-full transition-all bg-white ${
                      !isActive && "opacity-[18%] hover:opacity-100"
                    }`}
                  ></button>
                );
              })}
            </div>
          </div>

          {/* CREW IMAGE */}
          <div className="flex items-center justify-center mt-8 pb-8 md:p-0">
            <AnimatePresence mode="wait">
              <motion.img
                key={CREW[activeTab].imgUrl}
                variants={imageAnimation}
                custom={{ animateDelay: 0.35, exitDelay: 0.3 }}
                initial="initial"
                animate="animate"
                exit="exit"
                // width={272}
                // height={340}
                src={`/assets/crew/image-${CREW[activeTab].imgUrl}.png`}
                alt={`Photo of crew member ${CREW[activeTab].name}`}
                // quality={100}
                className="fade-bottom object-cover md:w-auto md:h-[560px] lg:h-[676px]"
              />
            </AnimatePresence>
          </div>
        </main>
      </div>
    </PageWrapper>
  );
}
