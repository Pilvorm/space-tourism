"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

const technologies = {
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
};

export default function Destination() {
  const [activeTab, setActiveTab] = useState("douglas");

  return (
    <main className="md:min-h-screen lg:py-12">
      {/* HEADER */}
      <div className="barlow-condensed text-base md:text-[20px] lg:text-[28px] uppercase tracking-[4px] flex items-center justify-center md:justify-start gap-6 p-6 md:p-10 lg:py-0 xl:px-32">
        <span className="text-[rgba(255,255,255,0.25)] font-bold">03</span>
        <p className="text-white">SPACE LAUNCH 101</p>
      </div>

      <div className="lg:flex lg:flex-row-reverse items-center gap-8">

        {/* IMAGE */}
        <div className="flex items-center justify-center mt-16 pb-8 md:p-0 relative w-full h-[258px] md:h-[357px] lg:h-[600px] lg:w-1/2 tech-img">
          <Image
            fill
            src={`/assets/technology/image-launch-vehicle-portrait.jpg`}
            alt="PLANET"
            quality={100}
            className="object-cover object-bottom"
          />
        </div>

        {/* INFO */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 p-6 pt-8 pb-12 md:p-10 lg:py-0 lg:pl-10 lg:pr-0 xl:pl-32 lg:w-1/2">
          {/* TABS */}
          <div className="flex lg:flex-col justify-center gap-4 w-full lg:w-fit">
            {Object.entries(technologies).map(([key, tech], index) => {
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

          <div className="flex flex-col justify-center gap-10">
            <div className="bellefair text-center lg:text-left uppercase">
              <span className="lg:text-left text-lg md:text-2xl lg:text-[32px] text-white opacity-50">
                THE TERMINOLOGY...
              </span>
              <h1 className="text-2xl md:text-[40px] lg:text-[56px] text-white">
                LAUNCH VEHICLE
              </h1>
            </div>

            <p className="text-center lg:text-left text-base lg:text-lg leading-[180%] md:w-[70%] md:self-center lg:self-start">
              A launch vehicle or carrier rocket is a rocket-propelled vehicle
              used to carry a payload from Earth's surface to space, usually to
              Earth orbit or beyond. Our WEB-X carrier rocket is the most
              powerful in operation. Standing 150 metres tall, it's quite an
              awe-inspiring sight on the launch pad!
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}
