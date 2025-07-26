"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import PageLabel from "../components/pageLabel";
import PageWrapper from "../components/pageWrapper";
import { motion } from "motion/react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { TECHNOLOGIES } from "../data";

gsap.registerPlugin(ScrambleTextPlugin);

export default function Destination() {
  const [activeTab, setActiveTab] = useState(Object.keys(TECHNOLOGIES)[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const scrambleTextConfig = {
    chars: "0123456789KMBIL.",
    revealDelay: 0.2,
    tweenLength: false,
    speed: 1,
  };

  useGSAP(() => {
    // const sliders = gsap.utils.toArray(".tech-img-wrapper");
    // const slidesArray = sliders.map((slider) =>
    //   gsap.utils.toArray(".tech-img", slider)
    // );

    // slidesArray.forEach((slides) => {
    //   slides.forEach((slide, i) => {
    //     gsap.set(slide, {
    //       xPercent: i > 0 && 100,
    //     });
    //   });
    // });

    // const goToSlide = (value) => {
    //   if (isAnimating) return;
    //   setIsAnimating(true);

    //   const first = slidesArray[0];
    //   const currentSlides = [];
    //   const nextSlides = [];
    //   slidesArray.forEach((slides) => currentSlides.push(slides[currentIndex]));

    //   if (first[currentIndex + value]) currentIndex += value;
    //   else currentIndex = value > 0 ? 0 : first.length - 1;

    //   slidesArray.forEach((slides) => nextSlides.push(slides[currentIndex]));

    //   if (value > 0) {
    //     gsap.set(nextSlides, { xPercent: 100 });
    //     gsap.to(currentSlides, {
    //       xPercent: -100,
    //       onComplete: () => (isTweening = false),
    //     });
    //   } else {
    //     gsap.set(nextSlides, { xPercent: -100 });
    //     gsap.to(currentSlides, {
    //       xPercent: 100,
    //       onComplete: () => (isTweening = false),
    //     });
    //   }
    //   gsap.to(nextSlides, { xPercent: 0 });
    // };

    document.fonts.ready.then(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsAnimating(false);
        },
      });

      tl.to(".technology-name", {
        scrambleText: {
          text: TECHNOLOGIES[activeTab].name,
          ...scrambleTextConfig,
        },
        ease: "back.out(1.6)",
        overwrite: "auto",
        duration: 2,
      });
    });
  }, [activeTab]);

  return (
    <PageWrapper>
      <div className="min-h-screen">
        {/* HEADER */}
        <PageLabel pageNumber={3} label={"Space Launch 101"} />

        <main className="flex flex-col items-center justify-center lg:justify-between lg:flex-row-reverse lg:gap-8 pt-22 xl:pl-32 xl:pb-12">
          {/* IMAGE */}
          <div className="tech-img-wrapper relative flex items-center justify-center w-full h-[258px] md:h-[357px] lg:h-[500px] lg:w-[500px] xl:h-[600px] xl:w-[600px]">
            <Image
              fill
              src={`/assets/technology/image-${TECHNOLOGIES[activeTab].imgUrl}-portrait.jpg`}
              alt="PLANET"
              quality={100}
              className="tech-img object-cover object-bottom"
            />
            {/* {Object.entries(TECHNOLOGIES).map(([key, tech], index) => {
              return (
                <Image
                  key={key}
                  fill
                  src={`/assets/technology/image-${tech.imgUrl}-portrait.jpg`}
                  alt={tech.name}
                  quality={100}
                  className="tech-img absolute top-0 left-0 object-cover object-bottom"
                />
              );
            })} */}
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
                    onClick={() => setActiveTab(key)}
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
                <h1 className="technology-name text-2xl md:text-[40px] lg:text-[56px] text-white">
                  {TECHNOLOGIES[activeTab].name}
                </h1>
              </div>

              <p className="text-center lg:text-left text-base lg:text-lg leading-[180%] md:w-[70%] lg:w-full md:self-center lg:self-start">
                {TECHNOLOGIES[activeTab].description}
              </p>
            </div>
          </div>
        </main>
      </div>
    </PageWrapper>
  );
}
