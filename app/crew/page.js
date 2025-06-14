"use client";

import Image from "next/image";
import { useState } from "react";
import PageLabel from "../components/pageLabel";
import PageWrapper from "../components/pageWrapper";
import { CREW } from "../data";

export default function Destination() {
  const [activeTab, setActiveTab] = useState("douglas");

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
              <span className="text-lg lg:text-[32px] text-white opacity-50">
                {CREW[activeTab].rank}
              </span>
              <h1 className="text-2xl lg:text-[56px] text-white mt-2">
                {CREW[activeTab].name}
              </h1>
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
