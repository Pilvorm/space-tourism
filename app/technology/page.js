"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import PageLabel from "../components/pageLabel";
import PageWrapper from "../components/pageWrapper";
import { motion, AnimatePresence } from "motion/react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { TECHNOLOGIES } from "../data";

gsap.registerPlugin(ScrambleTextPlugin);

export default function Destination() {
  const [activeTab, setActiveTab] = useState(Object.keys(TECHNOLOGIES)[0]);
  const techImgWrapperRef = useRef(null);

  const slidesArrayRef = useRef([]);
  const currentIndexRef = useRef(0);
  const isTweeningRef = useRef(false);

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

  useGSAP(() => {
    const sliders = gsap.utils.toArray(".tech-img-wrapper");
    slidesArrayRef.current = sliders.map((slider) =>
      gsap.utils.toArray(".tech-img", slider)
    );

    slidesArrayRef.current.forEach((slides) => {
      slides.forEach((slide, i) => {
        gsap.set(slide, { xPercent: i > 0 ? 100 : 0 });
      });
    });
  }, []);

  const goToSlide = (targetIndex) => {
    if (isTweeningRef.current) return;
    if (currentIndexRef.current === targetIndex) return;

    isTweeningRef.current = true;

    const currentIndex = currentIndexRef.current;
    const nextIndex = targetIndex;

    const currentSlides = slidesArrayRef.current.map(
      (slides) => slides[currentIndex]
    );
    const nextSlides = slidesArrayRef.current.map(
      (slides) => slides[nextIndex]
    );

    const direction = nextIndex > currentIndex ? 1 : -1;

    if (direction > 0) {
      gsap.set(nextSlides, { xPercent: 100 });
      gsap.to(currentSlides, {
        xPercent: -100,
        duration: 1,
        ease: "power2.out",
      });
    } else {
      gsap.set(nextSlides, { xPercent: -100 });
      gsap.to(currentSlides, {
        xPercent: 100,
        duration: 1,
        ease: "power2.out",
      });
    }

    gsap.to(nextSlides, {
      xPercent: 0,
      duration: 1,
      ease: "power2.out",
      onComplete: () => {
        currentIndexRef.current = nextIndex;
        isTweeningRef.current = false;
      },
    });
  };

  return (
    <PageWrapper>
      <div className="min-h-screen">
        {/* HEADER */}
        <PageLabel pageNumber={3} label={"Space Launch 101"} />

        <main className="flex flex-col items-center justify-center lg:justify-between lg:flex-row-reverse lg:gap-8 pt-22 xl:pl-32 xl:pb-12">
          {/* IMAGE */}
          <div
            ref={techImgWrapperRef}
            className="tech-img-wrapper relative overflow-hidden flex items-center justify-center w-full h-[258px] md:h-[357px] lg:h-[500px] lg:w-[500px] xl:h-[600px] xl:w-[600px]"
          >
            {Object.entries(TECHNOLOGIES).map(([key, tech], index) => {
              return (
                <Image
                  key={key}
                  fill
                  src={`/assets/technology/image-${tech.imgUrl}-portrait.jpg`}
                  alt={tech.name}
                  quality={100}
                  className="tech-img object-cover object-bottom"
                />
              );
            })}
          </div>

          {/* INFO */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 px-6 pt-8 pb-12 md:px-10 md:pb-10 xl:p-0 lg:w-1/2">
            {/* TABS */}
            <div className="flex lg:flex-col justify-center gap-4 lg:gap-8 w-full lg:w-fit">
              {Object.entries(TECHNOLOGIES).map(([key, tech], index) => {
                const isActive = key === activeTab;
                return (
                  <button
                    key={key}
                    onClick={() => {
                      goToSlide(index);
                      setActiveTab(key);
                    }}
                    className={`cursor-pointer bellefair text-lg md:text-2xl w-[40px] h-[40px] md:w-[56px] md:h-[56px] lg:w-[80px] lg:h-[80px] rounded-full transition-all ${
                      isActive
                        ? "bg-white blue-main"
                        : "bg-transparent border border-[rgba(255,255,255,0.25)] text-white hover:bg-white hover:text-[#0b0d17]"
                    }`}
                  >
                    {index + 1}
                  </button>
                );
              })}
            </div>

            {/* DESCRIPTION */}
            <div className="flex flex-col justify-start gap-10">
              <div className="bellefair text-center lg:text-left uppercase">
                <span className="lg:text-left text-lg md:text-2xl lg:text-[32px] text-white opacity-50">
                  THE TERMINOLOGY...
                </span>
                <AnimatePresence mode="wait">
                  <motion.h1
                    key={TECHNOLOGIES[activeTab].name}
                    variants={textAnimation}
                    custom={{
                      y: 30,
                      animateDelay: 0.35,
                      exitDelay: 0.1,
                    }}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="technology-name text-2xl md:text-[40px] lg:text-[56px] text-white"
                  >
                    {TECHNOLOGIES[activeTab].name}
                  </motion.h1>
                </AnimatePresence>
              </div>

              <AnimatePresence mode="wait">
                <motion.p
                  key={TECHNOLOGIES[activeTab].description}
                  variants={textAnimation}
                  custom={{ y: 30, animateDelay: 0.45, exitDelay: 0.3 }}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="text-center lg:text-left text-base lg:text-lg leading-[180%] md:w-[70%] lg:w-full md:self-center lg:self-start min-h-[165px]"
                >
                  {TECHNOLOGIES[activeTab].description}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </main>
      </div>
    </PageWrapper>
  );
}
