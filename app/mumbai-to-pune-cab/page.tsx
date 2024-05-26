import Pune01 from "@/public/images/mumbai-pune/pune01.webp";
import Pune02 from "@/public/images/mumbai-pune/pune02.webp";
import Pune03 from "@/public/images/mumbai-pune/pune03.webp";
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
    question: "What is the Mumbai to Pune Cab Service?",
    answer:
      "The Mumbai to Pune Cab Service offers a convenient and reliable way to travel between these two major cities. Our cabs provide a comfortable and efficient journey, ensuring you reach your destination smoothly.",
  },
  {
    question: "How can I book a cab from Mumbai to Pune?",
    answer:
      "Booking a cab from Mumbai to Pune is easy. You can reserve your cab through our website, contact our customer service, or fill out an enquiry form for prompt assistance.",
  },
  {
    question: "What types of cars are available for the Mumbai to Pune route?",
    answer:
      "We offer a range of cars to meet your needs, including compact cars, sedans, SUVs, and luxury vehicles. You can select the car that best suits your requirements and travel style.",
  },
  {
    question: "Can I book a one-way cab from Mumbai to Pune?",
    answer:
      "Yes, we provide both one-way and round-trip cab services from Mumbai to Pune. Choose the option that fits your travel plans and enjoy a hassle-free journey.",
  },
  {
    question: "Are the drivers experienced for the Mumbai to Pune route?",
    answer:
      "Our drivers are highly experienced and familiar with the Mumbai to Pune route. They ensure a safe and comfortable journey, offering insights and assistance as needed.",
  },
  {
    question: "How long does the journey from Mumbai to Pune take?",
    answer:
      "The trip from Mumbai to Pune typically takes around 3 to 4 hours, depending on traffic and road conditions. Our drivers strive to provide a timely and pleasant travel experience.",
  },
];

const sections = [
  {
    title:
      "Mumbai to Pune Cab Service: Convenient and Reliable Transportation Option",
    content: [
      "Are you planning a trip from Mumbai to Pune and looking for a convenient and reliable transportation option? Look no further than CarHireMumbai's cab service! With our top-notch fleet of vehicles and experienced drivers, we provide a seamless travel experience for our customers. Read on to learn more about our Mumbai to Pune cab service and why we are the preferred choice for travelers in the region.",
      "CarHireMumbai has years of experience in providing cab services for various routes, including the popular Mumbai to Pune route. Our drivers are well-trained and familiar with the best routes to take, ensuring a smooth and safe journey for our customers. With our expertise, we can handle any travel-related challenges that may arise, giving you peace of mind during your trip.",
      "Why settle for ordinary cab services when you can experience the best that Mumbai has to offer with CarHireMumbai? Our transparent pricing, easy booking process, and commitment to customer satisfaction set us apart from the rest. Whether you're a solo traveler, a family on vacation, or a group of friends looking to explore the city together, CarHireMumbai has cab services tailored to your needs.",
    ],
  },
  {
    title:
      "City to City Comfort: Seamless and Stress-free Mumbai to Pune Cab Service",
    content: [
      "At CarHireMumbai, we understand the importance of a smooth and hassle-free travel experience. Our professional drivers are well-trained and experienced in navigating the Mumbai-Lonavala route, ensuring that you reach your destination safely and on time. Whether you are traveling for business or leisure, our fleet of modern and well-maintained vehicles will provide you with the comfort and luxury you deserve.",
      "When it comes to transportation services, authority and trust are key factors that customers look for. At CarHireMumbai, we take pride in being a reputable and trustworthy cab service provider. Our commitment to customer satisfaction and safety has earned us the trust of countless customers who rely on us for their travel needs. You can rest assured that when you choose CarHireMumbai for your Mumbai to Pune cab service, you are in good hands.",
    ],
  },
  {
    title: "Mumbai to Pune: Seamless Travel with Our Expert Cab Service",
    content: [
      "At CarHireMumbai, we take pride in our fleet of well-maintained vehicles that offer both comfort and safety. Whether you are traveling solo or with a group, we have the perfect vehicle to suit your needs. From sedans to SUVs, we have it all, ensuring a smooth and comfortable journey for you.",
      "Booking a cab with CarHireMumbai is quick and easy. Simply visit our website or give us a call, and our friendly customer service team will assist you in booking the perfect cab for your Mumbai to Pune trip. We offer transparent pricing with no hidden fees, so you can rest assured knowing that you are getting the best value for your money.",
      "When traveling from Mumbai to Pune, it is essential to choose the best route to avoid traffic and reach your destination efficiently. Here are some of the most popular routes that our expert drivers recommend:Via Mumbai-Pune Expressway: This is the fastest route, taking approximately 2-3 hours, depending on traffic conditions. The expressway offers a smooth and scenic drive, perfect for those looking to reach Pune quickly.Via NH48: This route is slightly longer but offers beautiful views of the Western Ghats. It is perfect for those who want to enjoy a more leisurely drive from Mumbai to Pune.Via Old Mumbai-Pune Highway: For those who prefer a more traditional route, the old Mumbai-Pune Highway is a great option. Although it may take longer due to traffic, it offers a glimpse into the rich history of the region.",
    ],
  },
];

const images = [
  { src: Pune03, alt: "Local Cab Services" },
  { src: Pune02, alt: "Hire For An Hour Services" },
  { src: Pune01, alt: "Luxury Car Rental" },
];

const MumbaiPune = () => {
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
            FAQ for Mumbai to Pune Cab Service
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

export default MumbaiPune;
