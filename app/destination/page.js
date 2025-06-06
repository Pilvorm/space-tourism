"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import PageLabel from "../components/pageLabel";
import PageWrapper from "../components/pageWrapper";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const destinations = {
  moon: {
    name: "Moon",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    averageDistance: "384,400 km",
    travelTime: "3 Days",
  },
  mars: {
    name: "Mars",
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    averageDistance: "225 Mil. km",
    travelTime: "9 months",
  },
  europa: {
    name: "Europa",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    averageDistance: "628 Mil. km",
    travelTime: "3 years",
  },
  titan: {
    name: "Titan",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    averageDistance: "1.6 Bil. km",
    travelTime: "7 years",
  },
};

export default function Destination() {
  const [activeTab, setActiveTab] = useState("moon");

  const destinationName = useRef();

  useGSAP(() => {
    let split = SplitText.create(destinationName.current, {
      type: "chars",
    });

    gsap.from(split.chars, {
      y: 50,
      autoAlpha: 0,
      stagger: 0.05,
      ease: "back.out(1.6)",
      duration: 1,
      delay: 0.05,
    });
  }, [activeTab]);

  return (
    <PageWrapper>
      <div className="md:min-h-screen z-0">
        {/* HEADER */}
        <PageLabel pageNumber={1} label={"Pick Your Destination"} />

        <main className="flex flex-col items-center justify-center lg:grid lg:grid-cols-2 gap-8 p-6 md:p-10 lg:py-12 xl:px-32">
          {/* PLANET IMAGE */}
          <div className="flex items-center justify-center py-16 lg:py-32">
            <Image
              width={150}
              height={150}
              src={`/assets/destination/image-${activeTab}.png`}
              alt={`Photo of ${destinations[activeTab].name}`}
              quality={100}
              className="md:w-[300px] md:h-[300px] lg:w-[480px] lg:h-[480px]"
            />
          </div>

          {/* EXPLANATION */}
          <div className="flex flex-col items-center justify-center lg:items-start gap-6 md:w-[70%]">
            {/* TABS */}
            <div className="flex justify-evenly md:justify-center lg:justify-start md:gap-8 w-full">
              {Object.entries(destinations).map(([key, destination]) => {
                const isActive = key === activeTab;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`cursor-pointer barlow-condensed text-sm text-center uppercase tracking-[4px] pb-3 border-b-2 transition-all ${
                      isActive
                        ? "border-white text-white"
                        : "border-transparent hover:border-white"
                    }`}
                  >
                    {destination.name}
                  </button>
                );
              })}
            </div>

            <h1
              ref={destinationName}
              className="bellefair text-white text-[56px] md:text-[80px] lg:text-[96px] uppercase"
            >
              {destinations[activeTab].name}
            </h1>

            <p className="barlow font-light text-center lg:text-left lg:text-lg leading-[180%] lg:min-h-[140px]">
              {destinations[activeTab].description}
            </p>

            {/* SEPARATOR */}
            <div className="horizontal-line w-full"></div>

            {/* STATISTICS */}
            <div className="flex flex-col md:flex-row gap-6 uppercase w-full">
              <div className="flex flex-col gap-3 text-center lg:text-left w-full">
                <span className="barlow-condensed text-sm tracking-[2px]">
                  Avg. Distance
                </span>
                <p className="bellefair text-white text-[28px]">
                  {destinations[activeTab].averageDistance}
                </p>
              </div>
              <div className="flex flex-col gap-3 text-center lg:text-left w-full">
                <span className="barlow-condensed text-sm tracking-[2px]">
                  Est. Travel Time
                </span>
                <p className="bellefair text-white text-[28px]">
                  {destinations[activeTab].travelTime}
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </PageWrapper>
  );
}
