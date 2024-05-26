import lonavala01 from "@/public/images/services/lonavala.jpg";
import lonavala02 from "@/public/images/mumbai-lonavala/lonavala02.webp";
import lonavala03 from "@/public/images/mumbai-lonavala/lonavala03.jpg";
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
    "Mumbai to Lonavala Cab Service - Hassle-free rides at your convenience",
  description:
    "Looking for a reliable Mumbai to Lonavala cab service? Choose CarHireMumbai for comfortable and affordable rides between the two bustling cities. Book now for a stress-free journey!",
  keywords: [
    "mumbai to lonavala cab",
    "cab from mumbai to lonavala",
    "mumbai to lonavala taxi",
    "taxi mumbai to lonavala",
    "mumbai to lonavala by cab",
  ],
  openGraph: {
    type: "website",
    url: "https://carhiremumbai.com/mumbai-to-lonavala-cab",
    title:
      "Mumbai to Lonavala Cab Service - Hassle-free rides at your convenience",
    description:
      "Looking for a reliable Mumbai to Lonavala cab service? Choose CarHireMumbai for comfortable and affordable rides between the two bustling cities. Book now for a stress-free journey!",
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
    question: "What is the Mumbai to Lonavala Cab Service?",
    answer:
      "The Mumbai to Lonavala Cab Service provides a convenient and comfortable way to travel between these two popular destinations. Our cabs are equipped with all the amenities to ensure a pleasant journey.",
  },
  {
    question: "How can I book a cab from Mumbai to Lonavala?",
    answer:
      "Booking a cab from Mumbai to Lonavala is easy. You can make a reservation through our user-friendly website, contact our customer service team, or fill out an enquiry form for prompt assistance.",
  },
  {
    question:
      "What types of cars are available for the Mumbai to Lonavala route?",
    answer:
      "We offer a variety of cars to suit your needs, including compact cars, sedans, SUVs, and luxury vehicles. Choose the car that best fits your preferences for the journey.",
  },
  {
    question: "Can I book a one-way cab from Mumbai to Lonavala?",
    answer:
      "Yes, we provide both one-way and round-trip cab services from Mumbai to Lonavala. Select the option that best suits your travel plans.",
  },
  {
    question: "Are the drivers experienced for the Mumbai to Lonavala route?",
    answer:
      "Our drivers are highly experienced and familiar with the Mumbai to Lonavala route. They ensure a safe and comfortable journey, offering insights and assistance as needed.",
  },
  {
    question: "How long does the journey from Mumbai to Lonavala take?",
    answer:
      "The trip from Mumbai to Lonavala typically takes around 2 to 3 hours, depending on traffic and road conditions. Our drivers strive to provide a timely and enjoyable travel experience.",
  },
];

const sections = [
  {
    title:
      "Ride in Style: Your Ultimate Guide to Seamless Mumbai to Lonavala Cab Service",
    content: [
      "Are you planning a getaway from the hustle and bustle of Mumbai to the serene hills of Lonavala? Look no further than CarHireMumbai for a seamless and stylish cab service that will make your journey a breeze. With our expertise in providing top-notch transportation solutions, we guarantee a comfortable and enjoyable ride from Mumbai to Lonavala. Say goodbye to the stress of navigating through traffic and let us take care of all your transportation needs.",
      "When it comes to cab services in Mumbai, CarHireMumbai is the name you can trust. We have built a solid reputation for reliability, professionalism, and customer satisfaction. Our fleet of well-maintained cabs ensures that you travel in comfort and style, while our round-the-clock customer support team is always ready to assist you with any queries or concerns. With CarHireMumbai, you can rest assured that you are in safe hands.",
      "Why settle for ordinary cab services when you can experience the best that Mumbai has to offer with CarHireMumbai? Our transparent pricing, easy booking process, and commitment to customer satisfaction set us apart from the rest. Whether you're a solo traveler, a family on vacation, or a group of friends looking to explore the city together, CarHireMumbai has cab services tailored to your needs.",
    ],
  },
  {
    title: "Experience the Convenience of CarHireMumbai",
    content: [
      "At CarHireMumbai, we understand the importance of a smooth and hassle-free travel experience. Our professional drivers are well-trained and experienced in navigating the Mumbai-Lonavala route, ensuring that you reach your destination safely and on time. Whether you are traveling for business or leisure, our fleet of modern and well-maintained vehicles will provide you with the comfort and luxury you deserve.",
      "The Benefits of Choosing CarHireMumbai Comfort: Our vehicles are equipped with plush interiors and amenities to make your journey comfortable and enjoyable. Safety: Your safety is our top priority, and our drivers are fully licensed and trained to ensure a secure ride. Convenience: Booking a cab with CarHireMumbai is quick and easy, allowing you to relax and enjoy your trip without any worries. Affordability: We offer competitive rates and transparent pricing, so you can ride in style without breaking the bank.",
    ],
  },
  {
    title: "Expertise in Transportation Solutions",
    content: [
      "With years of experience in the transportation industry, CarHireMumbai has established itself as a leader in providing reliable and efficient cab services. Our commitment to customer satisfaction and attention to detail set us apart from the competition. Whether you need a ride to the airport, a day trip to Lonavala, or a sightseeing tour around Mumbai, we have you covered.",
      "At CarHireMumbai, we believe in going above and beyond to exceed our customers' expectations. From the moment you book your cab to the time you reach your destination, our team is dedicated to providing you with a seamless and stress-free experience. We are always available to answer any questions or address any concerns you may have, ensuring that your journey with us is nothing short of exceptional.",
    ],
  },
];

const images = [
  { src: lonavala03, alt: "Local Cab Services" },
  { src: lonavala02, alt: "Hire For An Hour Services" },
  { src: lonavala01, alt: "Luxury Car Rental" },
];

const MumbaiLonavala = () => {
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
            FAQ for Mumbai to Lonavala Cab Service
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

export default MumbaiLonavala;
