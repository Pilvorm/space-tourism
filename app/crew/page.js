"use client";

import Image from "next/image";
import { useState } from "react";
import PageLabel from "../components/pageLabel";
import PageWrapper from "../components/pageWrapper";
import { motion, AnimatePresence } from "motion/react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
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

  // useGSAP(() => {
  //   let splitHeading = SplitText.create(".crew-name");

  //   document.fonts.ready.then(() => {
  //     gsap.fromTo(
  //       ".crew-rank",
  //       {
  //         // autoAlpha: 0,
  //         // y: 30,
  //       },
  //       {
  //         // autoAlpha: 0.5,
  //         // y: 0,
  //         scrambleText: {
  //           text: CREW[activeTab].rank,
  //           ...scrambleTextConfig,
  //         },
  //         ease: "back.out(1.6)",
  //         overwrite: "auto",
  //         duration: 2,
  //       }
  //     );

  //     gsap.from(splitHeading.chars, {
  //       duration: 1,
  //       autoAlpha: 0,
  //       ease: "power1.inOut",
  //       stagger: 0.02,
  //     });
  //   });
  // }, [activeTab]);

  return (
    <PageWrapper>
      <div className="md:min-h-screen">
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
                  ref={(el) => {
                    if (!el) return;
                    gsap.to(el, {
                      scrambleText: {
                        text: CREW[activeTab].rank,
                        ...scrambleTextConfig,
                      },
                      duration: 1.5,
                      ease: "power2.out",
                    });
                  }}
                  className="crew-rank text-lg lg:text-[32px] text-white opacity-50 bellefair"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 0.5,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      ease: [0.25, 0.46, 0.45, 0.94], // power2.out
                      delay: 0.4
                    },
                  }}
                  exit={{
                    opacity: 0,
                    y: -20,
                    transition: {
                      duration: 0.3,
                      ease: [0.55, 0.085, 0.68, 0.53], // power2.in
                      delay: 0.05,
                    },
                  }}
                >
                  {CREW[activeTab].rank}
                </motion.p>

                <motion.h1
                  key={CREW[activeTab].name}
                  className="crew-name text-2xl md:text-[40px] lg:text-[56px] text-white mt-2"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: {
                      duration: 0.6,
                      ease: [0.25, 0.46, 0.45, 0.94], // power2.out
                      delay: 0.05
                    },
                  }}
                  exit={{
                    opacity: 0,
                    transition: {
                      duration: 0.3,
                      ease: [0.55, 0.085, 0.68, 0.53], // power2.in
                      delay: 0.05,
                    },
                  }}
                >
                  {CREW[activeTab].name}
                </motion.h1>
              </AnimatePresence>
            </div>

            <p className="text-base leading-[180%] min-h-[180px] sm:min-h-[120px] transition-all">
              {CREW[activeTab].description}
            </p>

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
            <Image
              width={272}
              height={340}
              src={`/assets/crew/image-${CREW[activeTab].imgUrl}.png`}
              alt={`Photo of crew member ${CREW[activeTab].name}`}
              quality={100}
              className="fade-bottom object-cover md:w-auto md:h-[560px] lg:h-[676px]"
            />
          </div>
        </main>
      </div>
    </PageWrapper>
  );
}
