"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

const crew = {
  douglas: {
    name: "Douglas Hurley",
    rank: "Commander",
    description:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    imgUrl: "douglas-hurley",
  },
  mark: {
    name: "Mark Shuttleworth",
    rank: "Mission Specialist",
    description:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    imgUrl: "mark-shuttleworth",
  },
  victor: {
    name: "Victor Glover",
    rank: "Pilot",
    description:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
    imgUrl: "victor-glover",
  },
  anousheh: {
    name: "Anousheh Ansari",
    rank: "Flight Engineer",
    description:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
    imgUrl: "anousheh-ansari",
  },
};

export default function Destination() {
  const [activeTab, setActiveTab] = useState("douglas");

  return (
    <main className="md:min-h-screen flex flex-col lg:grid lg:grid-cols-2 items-center justify-center gap-6 lg:gap-y-6 lg:gap-x-8 p-6 md:p-10 md:pb-0 lg:py-12 xl:px-32">
      {/* HEADER */}
      <div className="barlow-condensed text-base md:text-[20px] lg:text-[28px] uppercase tracking-[4px] flex items-center justify-center md:self-start lg:col-span-2 lg:lg:place-self-start gap-6">
        <span className="text-[rgba(255,255,255,0.25)] font-bold">02</span>
        <p className="text-white">MEET YOUR CREW</p>
      </div>

      {/* CREW INFO */}
      <div className="text-center lg:text-left flex flex-col items-center justify-center lg:items-start gap-6 pt-10 lg:pt-0 md:w-[70%] lg:w-full lg:h-full">
        {/* NAME & POSITION */}
        <div className="bellefair lg:mt-auto uppercase">
          <span className="text-lg lg:text-[32px] text-white opacity-50">
            {crew[activeTab].rank}
          </span>
          <h1 className="text-2xl lg:text-[56px] text-white mt-2">
            {crew[activeTab].name}
          </h1>
        </div>

        <p className="text-base leading-[180%] min-h-[120px]">
          {crew[activeTab].description}
        </p>

        {/* TABS */}
        <div className="flex justify-center lg:justify-start gap-4 w-full lg:mt-auto">
          {Object.entries(crew).map(([key, member]) => {
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

      <div className="flex items-center justify-center pb-8 md:p-0">
        <Image
          width={272}
          height={340}
          src={`/assets/crew/image-${crew[activeTab].imgUrl}.png`}
          alt={`Photo of crew member ${crew[activeTab].name}`}
          className="fade-bottom object-cover md:w-auto md:h-[560px] lg:h-[676px]"
        />
      </div>
    </main>
  );
}
