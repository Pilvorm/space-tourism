"use client";

import "./globals.css";
import "./style.css";
import { barlow, barlowCondensed, bellefair } from "./fonts";
import Navigation from "./components/navigation";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { ReactLenis } from "lenis/react";
import ParticlesBackground from "./components/particles";
import { AnimatePresence, motion } from "framer-motion";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [bodyClass, setBodyClass] = useState("");

  useEffect(() => {
    const baseClass = pathname === "/" ? "home" : pathname.slice(1);
    setBodyClass(
      `${baseClass}-page ${barlow.variable} ${barlowCondensed.variable} ${bellefair.variable} antialiased`
    );
  }, [pathname]);

  return (
    <html lang="en">
      <body className={bodyClass}>
        <ReactLenis root />

        <Navigation />

        {children}

        <ParticlesBackground />
      </body>
    </html>
  );
}
