import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="text-sm h-screen bg-black text-white w-screen">
        <h1 className="text-3xl font-semibold text-white">About</h1>
        <br></br>
        <div className="object-cover" >
          <Image src = "/logo.jpeg" width={200} height={200} alt="logo"/>
        </div>
        <p>
          Bargain is a customer-client prioritized website that allows users to check and view various sources of desired products all at the same location at the tip of their fingers. The website  connects the user and the seller at the ease of clicking a button and also gives an overview with all the desired products from the customer’s end.
          The website highlights the path to scaling investors being seasoned and earning potential is very wide. The aim is to connect a vast majority of people from different locations and regions and provide a platform to sell and buy products and goods.
          The technology drives customer focused innovation that makes high quality products accessible to the shoppers, besides making the online shopping experience convenient, intuitive and seamless. This expands and delivers more services and products in new markets to more customers and to outsource its shipping and fulfilment operations.
          The website strives to enable open ended connectivity and provides features which are both user and client friendly. The website also helps in building for the future with a deep understanding of the market and its system.
        </p>
      </div>
    </>
  );
};

export default About;
