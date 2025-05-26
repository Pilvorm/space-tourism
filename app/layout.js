"use client";

import "./globals.css";
import "./style.css";
import { barlow, barlowCondensed, bellefair } from "./fonts";
import Navigation from "./components/navigation";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { ReactLenis, useLenis } from "lenis/react";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [bodyClass, setBodyClass] = useState("");

  useEffect(() => {
    const baseClass = pathname === "/" ? "home" : pathname.slice(1);
    setBodyClass(
      `${baseClass}-page ${barlow.variable} ${barlowCondensed.variable} ${bellefair.variable} antialiased`
    );
  }, [pathname]);

  const lenis = useLenis((lenis) => {
    // called every scroll
    console.log(lenis);
  });

  return (
    <html lang="en">
      <body className={bodyClass}>
        <ReactLenis root />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
