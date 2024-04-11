"use client";
import Slider from "react-slick";
import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    time: string;
    heading: string;
    rate: string;
    imgSrc: string;
}

const postData: DataType[] = [
    {
        time: "4+1",
        heading: "Swift Dzire",
        rate: "13",
        imgSrc: "/images/articles/dzire.png",
    },
    {
        time: "6+1",
        heading: "Innova Crysta",
        rate: "22",
        imgSrc: "/images/articles/innova.png",
    },
    {
        time: "6+1",
        heading: "Ertiga",
        rate: "16",
        imgSrc: "/images/articles/ertiga.png",
    },
    {
        time: "6+1",
        heading: "Kia Carens",
        rate: "18",
        imgSrc: "/images/articles/carens.png",
    },
    {
        time: "13/17",
        heading: "Tempo Traveller",
        rate: "25+",
        imgSrc: "/images/articles/tempoTraveller.png",
    },

];

// CAROUSEL SETTINGS

export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 2,
            arrows: false,
            autoplay: false,
            speed: 500,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                    },
                },
            ],
        };

        return (
            <div className="bg-lightgrey py-20" id="blog-section">
                <div className="mx-auto max-w-7xl sm:py-4 lg:px-8 ">
                    <div className="text-center">
                        <h3 className="text-blue text-lg font-normal tracking-widest">
                            Fleets
                        </h3>
                        <h3 className="text-4xl sm:text-6xl font-bold">Our Fleets.</h3>
                    </div>

                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i}>
                                <div className="bg-white m-3 px-3 pt-3 pb-3  my-10 shadow-lg rounded-3xl relative">
                                    <div className=" w-[360px] h-[202px] ">
                                        <Image
                                            src={items.imgSrc}
                                            alt="gaby"
                                            width={360}
                                            height={202}
                                            className="w-[350px] object-contain overflow-hidden"
                                        />
                                    </div>

                                    <h4 className="text-2xl font-bold pt-6 text-black">
                                        {items.heading}{" "}({items.time} Seater)
                                    </h4>
                                    <div className="flex items-center w-full  justify-between gap-4 mt-4">

                                        <Link href="/" className="w-1/2" >
                                            <h3 className="bg-blue text-xl text-white hover:bg-black hover:shadow-xl py-3 px-6 rounded-2xl article-img text-center ">
                                                Book Now
                                            </h3>
                                        </Link>
                                        <h4 className="text-2xl  font-bold text-bluish mr-4">₹{items.rate}/km</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        );
    }
}
