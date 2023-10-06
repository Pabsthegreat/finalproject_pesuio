import React from "react";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Header from "@/components/header";
import Link from "next/link";
// import { Poppins } from "next/font/google";

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
// });

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className="h-screen">
      <head>
        <title>Bargain</title>
        <link rel="icon" href="favicon.ico"/>
      </head>

      <body className="text-xs w-screen h-fit bg-transparent mix-blend-hue ">
        <Navbar />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
