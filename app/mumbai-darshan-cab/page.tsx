import mumbai01 from "@/public/images/mumbai-darshan/mumbai01.jpg";
import mumbai02 from "@/public/images/mumbai-darshan/mumbai02.jpg";
import mumbai03 from "@/public/images/mumbai-darshan/mumbai03.jpg";
import Image from "next/image";
import FaqItem from "@/app/components/FaqItem";
import OurCabServices from "@/app/components/OurCabServices";
import CarsAvailable from "@/app/components/CarsAvailable";
import BookNowForm from "@/app/components/BookNowForm";
import Joinus from "@/app/components/Joinus";
import Insta from "@/app/components/Insta/index";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Mumbai Darshan Cab Services by CarHireMumbai for a Stress-Free Mumbai Exploration",
  description:
    "Experience the beauty of Mumbai effortlessly with Mumbai Darshan Cab services by CarHireMumbai. Reserve your cab today for an unforgettable city tour",
  keywords: [
    "mumbai darshan cab",
    "mumbai darshan",
    "cabs for mumbai darshan",
    "mumbai darshan car rental",
    "mumbai darshan package by car",
  ],
  openGraph: {
    type: "website",
    url: "https://carhiremumbai.com/mumbai-darshan-cab",
    title:
      "Mumbai Darshan Cab Services by CarHireMumbai for a Stress-Free Mumbai Exploration",
    description:
      "Experience the beauty of Mumbai effortlessly with Mumbai Darshan Cab services by CarHireMumbai. Reserve your cab today for an unforgettable city tour",
    images: [
      {
        url: "https://garvtravels.in/public/assets/mumbai-darshan/mumbai03.jpg",
        width: 800,
        height: 600,
        alt: "Mumbai Darshan Cover Image",
      },
    ],
  },
};

const faq = [
  {
    question: "What is Mumbai Darshan Cab Service?",
    answer:
      "Mumbai Darshan Cab Service provides an immersive journey through Mumbai's famed landmarks and attractions. These specially tailored cabs offer guided tours, showcasing iconic spots such as the Gateway of India, Marine Drive, and Elephanta Caves, ensuring a memorable exploration experience.",
  },
  {
    question: "How can I book a Mumbai Darshan Cab?",
    answer:
      "Booking a Mumbai Darshan Cab is hassle-free. You have the option to reserve your cab through their user-friendly official website or by reaching out to our dedicated customer service team or by filling an enquiry form.",
  },
  {
    question: "What kind of cars are available for rental services in Mumbai?",
    answer:
      "Mumbai's car rental services boast a diverse fleet catering to various preferences. Whether you seek compact cars, sedans, SUVs, or luxury vehicles, there's an option to suit every need and style.",
  },
  {
    question: "Can I hire a cab for a Mumbai city tour on an hourly basis?",
    answer:
      "Absolutely, our cab services in Mumbai offer flexible hourly rental options for city tours. This allows you to tailor your exploration duration, ensuring you can uncover Mumbai's charms at your own pace.",
  },
  {
    question: "Are the Mumbai city tour cabs accompanied by guides?",
    answer:
      "Yes, at certain places knowledgeable guides are available who enrich your experience with insights into Mumbai's history, culture, and attractions. Please note that guide charges are not included in the package",
  },
  {
    question:
      "What are the popular destinations covered in a Mumbai city tour?",
    answer:
      "Embark on a Mumbai city tour to discover its iconic landmarks, including the Gateway of India, Taj Mahal Palace Hotel, Marine Drive, Chhatrapati Shivaji Maharaj Terminus (Victoria Terminus), Haji Ali Dargah, Juhu Beach, Siddhivinayak Temple, and more, ensuring an enriching exploration of the city's treasures.",
  },
];

const sections = [
  {
    title:
      "Mumbai Unlocked: Explore the City on Your Terms with CarHireMumbai Cab Services",

    content: [
      "With years of experience in the industry, CarHireMumbai knows what it takes to provide top-notch cab services in Mumbai. Our drivers are well-versed in navigating the city's traffic and can take you to your destination safely and efficiently. Whether you're looking for a quick ride to the airport or a full-day tour of the city, our expert drivers will ensure that you have a memorable experience every time you ride with us.",
      "When it comes to cab services in Mumbai, CarHireMumbai is the name you can trust. We have built a solid reputation for reliability, professionalism, and customer satisfaction. Our fleet of well-maintained cabs ensures that you travel in comfort and style, while our round-the-clock customer support team is always ready to assist you with any queries or concerns. With CarHireMumbai, you can rest assured that you are in safe hands.",
      "Why settle for ordinary cab services when you can experience the best that Mumbai has to offer with CarHireMumbai? Our transparent pricing, easy booking process, and commitment to customer satisfaction set us apart from the rest. Whether you're a solo traveler, a family on vacation, or a group of friends looking to explore the city together, CarHireMumbai has cab services tailored to your needs.",
    ],
  },
  {
    title: "Experience Mumbai Like Never Before",
    content: [
      "Step into one of our luxurious cabs and let us take you on a journey through the heart of Mumbai. Our drivers are not just experts on the road, but also knowledgeable guides who can show you the best sights and sounds of the city. From iconic landmarks such as the Gateway of India and Marine Drive to hidden gems like Kala Ghoda and Bandra Fort, we ensure that you get a comprehensive Mumbai Darshan experience like never before.",
    ],
  },
  {
    title: "Expertise at Your Service",
    content: [
      "Are you ready to unlock the vibrant city of Mumbai and explore its rich culture, history, and architecture at your own pace? Look no further than CarHireMumbai, the premier cab service provider in Mumbai. With our top-notch services and experienced drivers, you can navigate the bustling streets of Mumbai with ease and comfort. Whether you're a local looking to discover hidden gems or a tourist wanting to experience all that Mumbai has to offer, CarHireMumbai has got you covered.",
    ],
  },
];

const images = [
  { src: mumbai03, alt: "Local Cab Services" },
  { src: mumbai02, alt: "Hire For An Hour Services" },
  { src: mumbai01, alt: "Luxury Car Rental" },
];

const MumbaiDarshan = () => {
  return (
    <>
      <div className="flex md:pt-48 pt-36 md:flex-row flex-col justify-center gap-4 md:gap-10 md:px-32 px-4 py-2 ">
        {/* Left Container */}
        <div className="md:w-[70%] space-y-4">
          {/* Image Container */}
          <div className="grid md:grid-cols-3 grid-cols-1 mb-6 md:h-[300px] gap-4 md:gap-8">
            {images.map((image, index) => (
              <div key={index} className="flex flex-col flex-1">
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="object-cover h-[300px] md:w-[300px] rounded-lg"
                />
              </div>
            ))}
          </div>
          {/* Section Container */}
          {sections.map((section, index) => (
            <div key={index} className="pb-6">
              <p className="text-3xl mb-6 text-center font-semibold">
                {section.title}
              </p>
              {section.content.map((paragraph, idx) => (
                <p key={idx} className="text-textSecondary mb-4 text-justify">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
          <p className="text-3xl pt-8 text-center font-semibold">
            FAQ for Mumbai Darshan Cab
          </p>
          <div className="divide-y divide-gray-100 rounded-lg border border-gray-100 bg-white">
            {faq.map((item) => (
              <FaqItem
                key={item.question}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>

        {/* Right Container */}
        <div className=" md:w-[30%]">
          {/* Book cab now */}
          <BookNowForm />
          {/* Our Cab Services */}
          <OurCabServices />
          {/* Cars Available */}
          <CarsAvailable />
        </div>
      </div>
      <Joinus />
      <Insta />
    </>
  );
};

export default MumbaiDarshan;
