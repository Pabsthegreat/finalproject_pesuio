import React from "react";
import HeadlineCards from "@/app/main/page";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <div className="bg-black text-white p-6">
        <h1 className="text-3xl font-semibold">Home</h1>
        <HeadlineCards/>
      </div>
    </>
  );
};

export default Home;