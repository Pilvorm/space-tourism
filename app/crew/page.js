"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

const destinations = {
  moon: {
    name: "moon",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    averageDistance: "384,400 km",
    travelTime: "3 Days",
  },
  mars: {
    name: "mars",
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    averageDistance: "225 Mil. km",
    travelTime: "9 months",
  },
  europa: {
    name: "europa",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    averageDistance: "628 Mil. km",
    travelTime: "3 years",
  },
  titan: {
    name: "titan",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    averageDistance: "1.6 Bil. km",
    travelTime: "7 years",
  },
};

export default function Destination() {
  const [activeTab, setActiveTab] = useState("moon");

  return (
    <main className="md:min-h-screen flex flex-col lg:grid lg:grid-cols-2 items-center justify-center gap-6 lg:gap-y-6 lg:gap-x-8 p-6 md:p-10 lg:py-12 xl:px-32">
      {/* HEADER */}
      <div className="barlow-condensed text-base md:text-[20px] lg:text-[28px] uppercase tracking-[4px] flex items-center justify-center md:self-start lg:col-span-2 lg:lg:place-self-start gap-6">
        <span className="text-[rgba(255,255,255,0.25)] font-bold">02</span>
        <p className="text-white">MEET YOUR CREW</p>
      </div>

      {/* CREW INFO */}
      <div className="flex flex-col items-center justify-center gap-6 pt-10">
        {/* NAME & POSITION */}
        <div className="bellefair text-center">
          <span className="text-lg text-white opacity-50">COMMANDER</span>
          <h1 className="text-2xl text-white mt-2">DOUGLAS HURLEY</h1>
        </div>

        <p className="text-base text-center leading-[180%] min-h-[200px]">
          Douglas Gerald Hurley is an American engineer, former Marine Corps
          pilot and former NASA astronaut. He launched into space for the third
          time as commander of Crew Dragon Demo-2.
        </p>
      </div>

      {/* TABS */}
      <div className="flex justify-center gap-4 w-full">
        {Object.entries(destinations).map(([key, destination]) => {
          const isActive = key === activeTab;
          return (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`cursor-pointer w-[10px] h-[10px] rounded-full transition-all bg-white ${
                !isActive && "opacity-[18%]"
              }`}
            ></button>
          );
        })}
      </div>

      <div className="flex items-center justify-center pb-8">
        <Image
        width={272}
        height={340}
          src={`/assets/crew/image-douglas-hurley.png`}
          alt="PLANET"
          className="fade-bottom md:w-[300px] md:h-[300px] lg:w-[480px] lg:h-[480px]"
        />
      </div>
    </main>
  );
}
