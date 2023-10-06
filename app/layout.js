import React from "react";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Header from "@/components/header";
// import { Poppins } from "next/font/google";

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
// });

const RootLayout = ({ children }) => {
  return (
    <html>
      <body className="text-xs m-1 w-screen h-screen border-black border-2">
        <Navbar />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
