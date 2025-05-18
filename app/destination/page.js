"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

const destinations = [
  {
    name: "Moon",
  },
  {
    name: "Mars",
  },
  {
    name: "Europa",
  },
  {
    name: "Titan",
  },
];

export default function Destination() {
  const [activeTab, setActiveTab] = useState("Moon");

  return (
    <main className="md:min-h-screen flex flex-col gap-6 py-6 md:py-24 px-6 md:px-10 xl:px-32">
      {/* HEADER */}
      <div className="barlow-condensed uppercase tracking-[4px] flex items-center justify-center gap-6">
        <span className="text-[rgba(255,255,255,0.25)] font-bold">01</span>
        <p className="text-white text-base md:text-[28px]">
          Pick Your Destination
        </p>
      </div>

      {/* PLANET IMAGE */}
      <div className="flex items-center justify-center py-16">
        <Image
          width={150}
          height={150}
          src="/assets/destination/image-moon.png"
          alt="PLANET"
        />
      </div>

      {/* EXPLANATION */}
      <div className="flex flex-col items-center justify-center gap-6">
        {/* TABS */}
        <div className="flex gap-8">
          {destinations.map((destination, index) => {
            const isActive = destination.name === activeTab;
            return (
              <button
                key={destination.name}
                className={`barlow-condensed text-sm text-center uppercase tracking-[4px] pb-3 border-b-2 ${
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

        <h1 className="bellefair text-white text-[56px]">MOON</h1>

        <p className="barlow font-light text-center">
          See our planet as you've never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you're
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites.
        </p>

        {/* SEPARATOR */}
        <div className="horizontal-line w-full"></div>

        {/* STATISTICS */}
        <div className="flex flex-col gap-6 uppercase">
          {/* DISTANCE */}
          <div className="flex flex-col gap-3 text-center">
            <span className="barlow-condensed text-sm tracking-[2px]">
              Avg. Distance
            </span>
            <p className="bellefair text-white text-[28px]">384,400 km</p>
          </div>

          {/* TRAVEL TIME */}
          <div className="flex flex-col gap-3 text-center">
            <span className="barlow-condensed text-sm tracking-[2px]">
              Est. Travel Time
            </span>
            <p className="bellefair text-white text-[28px]">3 Days</p>
          </div>
        </div>
      </div>
    </main>
  );
}
