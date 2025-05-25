"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

const destinations = {
  moon: {
    name: "Moon",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      averageDistance: "384,400 km",
      travelTime: "3 Days"
  },
  mars: {
    name: "Mars",
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      averageDistance: "225 Mil. km",
      travelTime: "9 months"
  },
  europa: {
    name: "Europa",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      averageDistance: "628 Mil. km",
      travelTime: "3 years"
  },
  titan: {
    name: "Titan",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      averageDistance: "1.6 Bil. km",
      travelTime: "7 years"
  },
};

export default function Destination() {
  const [activeTab, setActiveTab] = useState("moon");

  return (
    <main className="md:min-h-screen flex flex-col lg:grid lg:grid-cols-2 items-center justify-center gap-6 lg:gap-y-6 lg:gap-x-8 p-6 md:p-10 lg:py-12 xl:px-32">
      {/* HEADER */}
      <div className="barlow-condensed text-base md:text-[20px] lg:text-[28px] uppercase tracking-[4px] flex items-center justify-center md:self-start lg:col-span-2 lg:lg:place-self-start gap-6">
        <span className="text-[rgba(255,255,255,0.25)] font-bold">01</span>
        <p className="text-white">
          Pick Your Destination
        </p>
      </div>

      {/* PLANET IMAGE */}
      <div className="flex items-center justify-center py-16 lg:py-32">
        <Image
          width={150}
          height={150}
          src={`/assets/destination/image-${activeTab}.png`}
          alt={`Photo of ${destinations[activeTab].name}`}
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

        <h1 className="bellefair text-white text-[56px] md:text-[80px] lg:text-[96px] uppercase">
          {activeTab}
        </h1>

        <p className="barlow font-light text-center lg:text-left lg:text-lg leading-[180%] lg:min-h-[140px]">
          {destinations[activeTab].description}
        </p>

        {/* SEPARATOR */}
        <div className="horizontal-line w-full"></div>

        {/* STATISTICS */}
        <div className="flex flex-col md:flex-row gap-6 uppercase w-full">
          {/* DISTANCE */}
          <div className="flex flex-col gap-3 text-center lg:text-left w-full">
            <span className="barlow-condensed text-sm tracking-[2px]">
              Avg. Distance
            </span>
            <p className="bellefair text-white text-[28px]">{destinations[activeTab].averageDistance}</p>
          </div>

          {/* TRAVEL TIME */}
          <div className="flex flex-col gap-3 text-center lg:text-left w-full">
            <span className="barlow-condensed text-sm tracking-[2px]">
              Est. Travel Time
            </span>
            <p className="bellefair text-white text-[28px]">{destinations[activeTab].travelTime}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
