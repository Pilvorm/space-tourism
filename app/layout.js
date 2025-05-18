"use client";

import "./globals.css";
import "./style.css";
import { barlow, barlowCondensed, bellefair } from "./fonts";
import Navigation from "./components/navigation";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
 const pathname = usePathname();

 const bodyClass = `${pathname === "/" ? "home" : pathname.slice(1)}-page`; //home-page

  return (
    <html lang="en">
      <body className={`${bodyClass} ${barlow.variable} ${barlowCondensed.variable} ${bellefair.variable} antialiased`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
