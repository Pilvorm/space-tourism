"use client";

import Link from "next/link";
import PageWrapper from "./components/pageWrapper";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { animationFlags } from "./utils/animationFlags";

gsap.registerPlugin(SplitText);

export default function Home() {
  useGSAP(() => {
    if (animationFlags.hasRunSpaceIntro) return;

    document.fonts.ready.then(() => {
      let splitIntro = SplitText.create(".split-intro", { type: "words" });
      let splitHeading = SplitText.create(".split-heading");
      let splitDesc = SplitText.create(".split-description", {
        type: "lines",
        autoSplit: true,
        onSplit: (self) => {
          let tl = gsap.timeline();
          tl.from(splitIntro.words, {
            opacity: 0,
            duration: 1,
            ease: "sine.out",
            stagger: (i) => {
              if (i === 0) return 0; // Instant
              if (i === 1) return 1.2; // pause after first word
              return 1.2 + (i - 1) * 0.2; // continue with 0.2s stagger
            },
          }).from(splitHeading.chars, {
            duration: 1,
            opacity: 0,
            ease: "power1.inOut",
            stagger: { from: "center", each: 0.02 },
          });
          tl.from(self.lines, {
            opacity: 0,
            y: "10px",
            duration: 0.6,
            ease: "sine.inOut",
            stagger: 0.2,
            delay: 0.5,
          }).fromTo(
            ".explore-btn",
            { autoAlpha: 0, y: 50 },
            { autoAlpha: 1, y: 0, duration: 1.2, ease: "power2.out", delay: 0.5 },
          );
          return tl;
        },
      });
    });

    animationFlags.hasRunSpaceIntro = true;
  });

  return (
    <PageWrapper>
      <main className="md:min-h-screen flex flex-col lg:justify-end py-6 md:py-24 px-6 md:px-10 xl:px-32">
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-12 px-0 md:px-12 text-center lg:text-left">
          {/* TEXTS */}
          <div className="flex flex-col gap-6">
            <p className="split split-intro uppercase barlow-condensed text-base md:text-[28px] tracking-[4px]">
              So, You Want to Travel To
            </p>
            <h1 className="split split-heading intro-heading bellefair text-center lg:text-left text-white text-[80px] md:text-[144px] leading-none">
              SPACE
            </h1>
            <p className="split split-description max-w-xl barlow font-light text-base leading-[180%]">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>

          {/* BUTTON */}
          <div className="py-16 md:py-0 flex items-center justify-center">
            <Link
              href="/destination"
              className="explore-btn w-[144px] h-[144px] md:w-[272px] md:h-[272px] rounded-full bg-white flex items-center justify-center blue-main"
            >
              <h2 className="bellefair text-lg md:text-[32px]">EXPLORE</h2>
              <div className="inner-circle"></div>
            </Link>
          </div>
        </div>
      </main>
    </PageWrapper>
  );
}
