import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Join from "../components/Joinus";
import Insta from "../components/Insta";
import WhatsAppButton from "../components/WhatsappButton";
import CallNowButton from "../components/CallButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fleets | CarHireMumbai",
};

const fleetsData = [
  {
    time: "4+1",
    heading: "Swift Dzire",
    rate: "13",
    imgSrc: "/images/articles/dzire.png",
    msg: "Hello, I'm looking to hire a Swift Dzire, Please share the details.",
  },
  {
    time: "6+1",
    heading: "Innova Crysta",
    rate: "22",
    imgSrc: "/images/articles/innova.png",
    msg: "Hello, I'm looking to hire an Innova Crysta, Please share the details.",
  },
  {
    time: "6+1",
    heading: "Ertiga",
    rate: "16",
    imgSrc: "/images/articles/ertiga.png",
    msg: "Hello, I'm looking to hire an Ertiga, Please share the details.",
  },
  {
    time: "6+1",
    heading: "Kia Carens",
    rate: "18",
    imgSrc: "/images/articles/carens.png",
    msg: "Hello, I'm looking to hire a Kia Carens, Please share the details.",
  },
  {
    time: "13/17",
    heading: "Tempo Traveller",
    rate: "25+",
    imgSrc: "/images/articles/tempoTraveller.png",
    msg: "Hello, I'm looking to hire a Tempo Traveller, Please share the details.",
  },
];

const Fleets = () => {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 py-12 mb-10 md:my-16 lg:px-10 bg-lightgrey rounded-3xl relative">
        <Image
          src="/images/aboutus/dots.svg"
          width={100}
          height={100}
          alt="dots-image"
          className="absolute bottom-1 -left-20"
        />
        <h3 className="text-center text-blue mt-20 sm:mt-10 text-lg tracking-widest">
          Fleets
        </h3>
        <div className="text-center">
          <h3 className="text-4xl sm:text-6xl font-bold text-black my-2">
            Your journey, our diverse fleets.
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-2 gap-x-5 lg:gap-x-10">
          {fleetsData.map((item, i) => (
            <div
              key={i}
              className="bg-white m-3 px-3 pt-3 pb-3 md:my-10 shadow-lg rounded-3xl relative"
            >
              <div>
                <Image
                  src={item.imgSrc}
                  alt="gaby"
                  width={360}
                  height={202}
                  className="w-[360px] h-[202px] object-contain overflow-hidden"
                />
              </div>

              <h4 className="text-2xl font-bold pt-6 text-black">
                {item.heading} ({item.time} Seater)
              </h4>
              <div className="flex items-center w-full  justify-between gap-4 mt-4">
                <Link
                  href={`https://wa.me/917021754006?text=${item.msg}`}
                  className="w-1/2"
                >
                  <h3 className="bg-blue text-xl text-white hover:bg-black hover:shadow-xl py-3 px-6 rounded-2xl article-img text-center ">
                    Book Now
                  </h3>
                </Link>
                <h4 className="text-2xl  font-bold text-bluish mr-4">
                  ₹{item.rate}/km
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Join />
      <Insta />
      <WhatsAppButton textMessage="I'm interested in your car for sale" />
      <CallNowButton />
    </div>
  );
};

export default Fleets;
