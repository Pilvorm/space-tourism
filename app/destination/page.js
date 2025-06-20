"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import PageLabel from "../components/pageLabel";
import PageWrapper from "../components/pageWrapper";
import { motion, AnimatePresence, useSpring } from "motion/react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import Draggable from "gsap/Draggable";
import InertiaPlugin from "gsap/InertiaPlugin";
import { DESTINATIONS } from "../data";

gsap.registerPlugin(SplitText, ScrambleTextPlugin, Draggable, InertiaPlugin);

export default function Destination() {
  const [activeTab, setActiveTab] = useState(Object.keys(DESTINATIONS)[0]);

  const textAnimation = {
    initial: ({ y = 20 } = {}) => ({
      opacity: 0,
      y: y,
    }),
    animate: ({ animateDelay = 0 } = {}) => ({
      opacity: 1,
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
      scale: 0.8,
    }),
    animate: () => ({
      opacity: 1,
      scale: 1,
      rotate: 360,
      transition: {
        opacity: {
          duration: 0.8,
          delay: 0.1,
          ease: [0.34, 1.56, 0.64, 1], // back.out(1.6)
        },
        scale: {
          duration: 0.8,
          delay: 0.1,
          ease: [0.34, 1.56, 0.64, 1],
        },
        rotate: {
          duration: 60,
          ease: "linear",
          repeat: Infinity,
        },
      },
    }),
    exit: () => ({
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.4,
        delay: 0.1,
        ease: [0.55, 0.085, 0.68, 0.53], // power2.in
      },
    }),
  };

  const constraintRef = useRef(null);
  const spring = { damping: 3, stiffness: 50, restDelta: 0.001 };
  const springX = useSpring(0, spring);
  const springY = useSpring(0, spring);

  const scrambleTextConfig = {
    chars: "0123456789KMBIL.",
    revealDelay: 0.2,
    tweenLength: false,
    speed: 1,
  };

  useGSAP(() => {
    Draggable.create(".destination-image", {
      type: "x,y",
      bounds: document.getElementById("destination-image"),
      inertia: true,
      throwResistance: 5,
      edgeResistance: 0.05,
      maxDuration: 30,
      minDuration: 1,
      overshootTolerance: 0.1,
      throwProps: {
        resistance: 5,
        ease: "power1.out",
      },
    });

    // function startAmbientSpin() {
    //   gsap.to(".destination-image", {
    //     rotation: "+=360",
    //     duration: 60,
    //     ease: "none",
    //     repeat: -1,
    //   });
    // }

    // startAmbientSpin();
  }, []);

  // useGSAP(() => {
  //   gsap.delayedCall(0.5, () => {
  //     gsap.to(".destination-distance", {
  //       scrambleText: {
  //         text: DESTINATIONS[activeTab].averageDistance,
  //         ...scrambleTextConfig,
  //       },
  //       ease: "back.out(1.6)",
  //       overwrite: "auto",
  //       duration: 2,
  //       delay: 0.8,
  //     });

  //     gsap.to(".destination-travel-time", {
  //       scrambleText: {
  //         text: DESTINATIONS[activeTab].travelTime,
  //         ...scrambleTextConfig,
  //       },
  //       ease: "back.out(1.6)",
  //       overwrite: "auto",
  //       duration: 2,
  //       delay: 0.8,
  //     });
  //   });
  // }, [activeTab]);

  return (
    <PageWrapper>
      <div className="md:min-h-screen z-0">
        {/* HEADER */}
        <PageLabel pageNumber={1} label={"Pick Your Destination"} />

        <motion.main
          ref={constraintRef}
          className="flex flex-col items-center justify-center lg:grid lg:grid-cols-2 gap-8 p-6 md:p-10 lg:py-12 xl:px-32"
        >
          {/* PLANET IMAGE */}
          <div
            id="destination-image"
            className="flex items-center justify-center py-16 lg:py-32 w-full"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={DESTINATIONS[activeTab].name}
                variants={imageAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                drag
                dragConstraints={constraintRef}
                dragElastic={0.05} // Similar to edgeResistance
                dragTransition={{
                  type: "inertia",
                  restDelta: 0.1,
                  duration: 2,
                  power: 0.5, // inertia intensity (closer to GSAP throwResistance)
                  timeConstant: 200, // affects duration of deceleration
                  modifyTarget: (target) => Math.round(target), // optional rounding
                }}
                src={`/assets/destination/image-${activeTab}.png`}
                alt={`Photo of ${DESTINATIONS[activeTab].name}`}
                className="destination-image z-50 md:w-[300px] md:h-[300px] lg:w-[480px] lg:h-[480px]"
              />
            </AnimatePresence>
          </div>

          {/* EXPLANATION */}
          <div className="flex flex-col items-center justify-center lg:items-start gap-6 md:w-[70%]">
            {/* TABS */}
            <div className="relative flex w-full justify-evenly md:justify-center md:gap-8 lg:justify-start">
              {Object.entries(DESTINATIONS).map(([key, destination]) => {
                const isActive = key === activeTab;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`relative cursor-pointer pb-3 text-center text-sm uppercase tracking-[4px] barlow-condensed transition-colors ${
                      isActive ? "text-white" : "blue-accent"
                    }`}
                  >
                    {destination.name}
                    {isActive && (
                      <motion.div
                        layoutId="underline"
                        className="absolute -bottom-1 left-0 h-[2px] w-full bg-white"
                        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.h1
                key={DESTINATIONS[activeTab].name}
                variants={textAnimation}
                custom={{ y: 30, animateDelay: 0.1, exitDelay: 0.1 }}
                initial="initial"
                animate="animate"
                exit="exit"
                className="destination-name bellefair text-white text-[56px] md:text-[80px] lg:text-[96px] uppercase"
              >
                {DESTINATIONS[activeTab].name}
              </motion.h1>

              <motion.p
                key={DESTINATIONS[activeTab].description}
                variants={textAnimation}
                custom={{ y: 30, animateDelay: 0.3, exitDelay: 0.3 }}
                initial="initial"
                animate="animate"
                exit="exit"
                className="destination-description barlow font-light text-center lg:text-left lg:text-lg leading-[180%] min-h-[150px] md:min-h-[120px] lg:min-h-[140px]"
              >
                {DESTINATIONS[activeTab].description}
              </motion.p>
            </AnimatePresence>

            {/* SEPARATOR */}
            <div className="horizontal-line w-full"></div>

            {/* STATISTICS */}
            <div className="flex flex-col md:flex-row gap-6 uppercase w-full min-h-[80px]">
              <div className="flex flex-col gap-3 text-center lg:text-left w-full">
                <div className="barlow-condensed text-sm tracking-[2px]">
                  Avg. Distance
                </div>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={DESTINATIONS[activeTab].averageDistance}
                    variants={textAnimation}
                    custom={{ y: 30, animateDelay: 0.5, exitDelay: 0.5 }}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="destination-stats destination-distance bellefair text-white text-[28px]"
                  >
                    {DESTINATIONS[activeTab].averageDistance}
                  </motion.p>
                </AnimatePresence>
              </div>
              <div className="flex flex-col gap-3 text-center lg:text-left w-full">
                <div className="barlow-condensed text-sm tracking-[2px]">
                  Est. Travel Time
                </div>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={DESTINATIONS[activeTab].travelTime}
                    variants={textAnimation}
                    custom={{ y: 30, animateDelay: 0.5, exitDelay: 0.5 }}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="destination-stats destination-travel-time bellefair text-white text-[28px]"
                  >
                    {DESTINATIONS[activeTab].travelTime}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.main>
      </div>
    </PageWrapper>
  );
}
